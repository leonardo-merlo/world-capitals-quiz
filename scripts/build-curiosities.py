#!/usr/bin/env python3
"""Gera curiosities.js a partir dos arquivos curiosidades/*.md e valida tudo.

Uso: python3 scripts/build-curiosities.py
Cada pais precisa ter exatamente 3 itens: 1 "Você sabia?" seguido de 2 "Para fazer".
"""
import glob, json, os, re, sys

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = open(os.path.join(root, "data.js"), encoding="utf8").read()
expected = re.findall(r'code:\s*"([^"]+)"', data)

item_re = re.compile(
    r"\*\*(Você sabia\?|Para fazer)\*\* · (.+)\n(.+)\n<!-- fonte: (.*?) -->"
)
facts, flagged, errors = {}, [], []

for path in sorted(glob.glob(os.path.join(root, "curiosidades", "*.md"))):
    if os.path.basename(path) == "TODAS.md":
        continue
    text = open(path, encoding="utf8").read()
    for block in re.split(r"^## ", text, flags=re.M)[1:]:
        head, _, body = block.partition("\n")
        code = head.split("—")[0].strip()
        items = []
        for kind, title, txt, src in item_re.findall(body):
            items.append({"type": "know" if kind.startswith("Você") else "do",
                          "title": title.strip(), "text": txt.strip()})
            if "verificar" in src:
                flagged.append((code, title.strip(), src))
        if code in facts:
            errors.append(f"{code}: duplicado")
        if [i["type"] for i in items] != ["know", "do", "do"]:
            errors.append(f"{code}: esperado know/do/do, veio {[i['type'] for i in items]}")
        for i in items:
            if "|" in i["title"] + i["text"] or not i["title"] or not i["text"]:
                errors.append(f"{code}: item inválido {i['title']!r}")
        facts[code] = items

for code in expected:
    if code not in facts:
        errors.append(f"{code}: faltando")
for code in facts:
    if code not in expected:
        errors.append(f"{code}: código desconhecido")
titles = [i["title"] for v in facts.values() for i in v]
for t in set(titles):
    if titles.count(t) > 1:
        errors.append(f"título repetido: {t}")

if errors:
    print("\n".join(errors)); sys.exit(1)

out = ["// curiosities.js",
       "// 3 itens por pais (1 curiosidade + 2 coisas para fazer), chave = codigo ISO",
       "// GERADO por scripts/build-curiosities.py a partir de curiosidades/*.md. nao edite aqui.",
       "", "const COUNTRY_FACTS = " + json.dumps({c: facts[c] for c in expected}, ensure_ascii=False, indent=2) + ";", ""]
open(os.path.join(root, "curiosities.js"), "w", encoding="utf8").write("\n".join(out))
print(f"ok: {len(facts)} países, {sum(len(v) for v in facts.values())} itens; {len(flagged)} marcados para verificar")
for f in flagged: print("  ⚠️", f)
