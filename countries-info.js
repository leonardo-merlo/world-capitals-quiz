// countries-info.js
// dados extras de cada pais (coordenadas, area, populacao, idiomas, moeda)
// gerado a partir de mledoze/countries (ODbL) e populacao do Banco Mundial (SP.POP.TOTL)
// chave = codigo ISO de 2 letras, o mesmo campo "code" do data.js

const COUNTRY_INFO = {
  "de": {
    "lat": 51,
    "lng": 9,
    "area": 357114,
    "population": 83491249,
    "populationYear": 2025,
    "languages": [
      "alemão"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "ad": {
    "lat": 42.5,
    "lng": 1.5,
    "area": 468,
    "population": 82904,
    "populationYear": 2025,
    "languages": [
      "catalão"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "at": {
    "lat": 47.33333333,
    "lng": 13.33333333,
    "area": 83871,
    "population": 9208163,
    "populationYear": 2025,
    "languages": [
      "Austro-Bavarian German"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Central"
  },
  "be": {
    "lat": 50.83333333,
    "lng": 4,
    "area": 30528,
    "population": 11941781,
    "populationYear": 2025,
    "languages": [
      "alemão",
      "francês",
      "holandês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "by": {
    "lat": 53,
    "lng": 28,
    "area": 207600,
    "population": 9085991,
    "populationYear": 2025,
    "languages": [
      "bielorrusso",
      "russo"
    ],
    "currencies": [
      "Rublo bielorrusso (Br)"
    ],
    "subregion": "Leste Europeu"
  },
  "ba": {
    "lat": 44,
    "lng": 18,
    "area": 51209,
    "population": 3140095,
    "populationYear": 2025,
    "languages": [
      "bósnio",
      "croata",
      "sérvio"
    ],
    "currencies": [
      "Marco conversível da Bósnia e Herzegovina (KM)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "bg": {
    "lat": 43,
    "lng": 25,
    "area": 110879,
    "population": 6433302,
    "populationYear": 2025,
    "languages": [
      "búlgaro"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "hr": {
    "lat": 45.16666666,
    "lng": 15.5,
    "area": 56594,
    "population": 3876200,
    "populationYear": 2025,
    "languages": [
      "croata"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "cy": {
    "lat": 35,
    "lng": 33,
    "area": 9251,
    "population": 1370754,
    "populationYear": 2025,
    "languages": [
      "grego",
      "turco"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "dk": {
    "lat": 56,
    "lng": 10,
    "area": 43094,
    "population": 6009169,
    "populationYear": 2025,
    "languages": [
      "dinamarquês"
    ],
    "currencies": [
      "Coroa dinamarquesa (kr)"
    ],
    "subregion": "Norte da Europa"
  },
  "sk": {
    "lat": 48.66666666,
    "lng": 19.5,
    "area": 49037,
    "population": 5413813,
    "populationYear": 2025,
    "languages": [
      "eslovaco"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Central"
  },
  "si": {
    "lat": 46.11666666,
    "lng": 14.81666666,
    "area": 20273,
    "population": 2130986,
    "populationYear": 2025,
    "languages": [
      "esloveno"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Central"
  },
  "es": {
    "lat": 40,
    "lng": -4,
    "area": 505992,
    "population": 49355143,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "ee": {
    "lat": 59,
    "lng": 26,
    "area": 45227,
    "population": 1366475,
    "populationYear": 2025,
    "languages": [
      "estoniano"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Norte da Europa"
  },
  "fi": {
    "lat": 64,
    "lng": 26,
    "area": 338424,
    "population": 5646436,
    "populationYear": 2025,
    "languages": [
      "finlandês",
      "sueco"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Norte da Europa"
  },
  "fr": {
    "lat": 46,
    "lng": 2,
    "area": 551695,
    "population": 68720337,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "gr": {
    "lat": 39,
    "lng": 22,
    "area": 131990,
    "population": 10413962,
    "populationYear": 2025,
    "languages": [
      "grego"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "hu": {
    "lat": 47,
    "lng": 20,
    "area": 93028,
    "population": 9514251,
    "populationYear": 2025,
    "languages": [
      "húngaro"
    ],
    "currencies": [
      "Florim húngaro (Ft)"
    ],
    "subregion": "Europa Central"
  },
  "ie": {
    "lat": 53,
    "lng": -8,
    "area": 70273,
    "population": 5484367,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "irlandês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Norte da Europa"
  },
  "is": {
    "lat": 65,
    "lng": -18,
    "area": 103000,
    "population": 392404,
    "populationYear": 2025,
    "languages": [
      "islandês"
    ],
    "currencies": [
      "Coroa islandesa (kr)"
    ],
    "subregion": "Norte da Europa"
  },
  "it": {
    "lat": 42.83333333,
    "lng": 12.83333333,
    "area": 301336,
    "population": 58915656,
    "populationYear": 2025,
    "languages": [
      "italiano"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "xk": {
    "lat": 42.666667,
    "lng": 21.166667,
    "area": 10908,
    "population": null,
    "populationYear": null,
    "languages": [
      "albanês",
      "sérvio"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "lv": {
    "lat": 57,
    "lng": 25,
    "area": 64559,
    "population": 1847785,
    "populationYear": 2025,
    "languages": [
      "letão"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Norte da Europa"
  },
  "li": {
    "lat": 47.26666666,
    "lng": 9.53333333,
    "area": 160,
    "population": 41024,
    "populationYear": 2025,
    "languages": [
      "alemão"
    ],
    "currencies": [
      "Franco suíço (Fr)"
    ],
    "subregion": "Europa Ocidental"
  },
  "lt": {
    "lat": 56,
    "lng": 24,
    "area": 65300,
    "population": 2888774,
    "populationYear": 2025,
    "languages": [
      "lituano"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Norte da Europa"
  },
  "lu": {
    "lat": 49.75,
    "lng": 6.16666666,
    "area": 2586,
    "population": 686970,
    "populationYear": 2025,
    "languages": [
      "alemão",
      "francês",
      "luxemburguês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "mt": {
    "lat": 35.83333333,
    "lng": 14.58333333,
    "area": 316,
    "population": 579704,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "maltês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "md": {
    "lat": 47,
    "lng": 29,
    "area": 33846,
    "population": 2360527,
    "populationYear": 2025,
    "languages": [
      "romeno"
    ],
    "currencies": [
      "Leu moldávio (L)"
    ],
    "subregion": "Leste Europeu"
  },
  "mc": {
    "lat": 43.73333333,
    "lng": 7.4,
    "area": 2.02,
    "population": 38341,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "me": {
    "lat": 42.5,
    "lng": 19.3,
    "area": 13812,
    "population": 623129,
    "populationYear": 2025,
    "languages": [
      "sérvio (Montenegro)"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "no": {
    "lat": 62,
    "lng": 10,
    "area": 323802,
    "population": 5610870,
    "populationYear": 2025,
    "languages": [
      "nynorsk norueguês",
      "bokmål norueguês",
      "Sami"
    ],
    "currencies": [
      "Coroa norueguesa (kr)"
    ],
    "subregion": "Norte da Europa"
  },
  "nl": {
    "lat": 52.5,
    "lng": 5.75,
    "area": 41850,
    "population": 18087633,
    "populationYear": 2025,
    "languages": [
      "holandês"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Europa Ocidental"
  },
  "pl": {
    "lat": 52,
    "lng": 20,
    "area": 312679,
    "population": 36435861,
    "populationYear": 2025,
    "languages": [
      "polonês"
    ],
    "currencies": [
      "Zloty polonês (zł)"
    ],
    "subregion": "Europa Central"
  },
  "pt": {
    "lat": 39.5,
    "lng": -8,
    "area": 92090,
    "population": 10804871,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "gb": {
    "lat": 54,
    "lng": -2,
    "area": 242900,
    "population": 69487000,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Libra esterlina (£)"
    ],
    "subregion": "Norte da Europa"
  },
  "cz": {
    "lat": 49.75,
    "lng": 15.5,
    "area": 78865,
    "population": 10886878,
    "populationYear": 2025,
    "languages": [
      "tcheco",
      "eslovaco"
    ],
    "currencies": [
      "Coroa tcheca (Kč)"
    ],
    "subregion": "Europa Central"
  },
  "ro": {
    "lat": 46,
    "lng": 25,
    "area": 238391,
    "population": 19020271,
    "populationYear": 2025,
    "languages": [
      "romeno"
    ],
    "currencies": [
      "Leu romeno (lei)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "ru": {
    "lat": 60,
    "lng": 100,
    "area": 17098242,
    "population": 143513328,
    "populationYear": 2025,
    "languages": [
      "russo"
    ],
    "currencies": [
      "Rublo russo (₽)"
    ],
    "subregion": "Leste Europeu"
  },
  "sm": {
    "lat": 43.76666666,
    "lng": 12.41666666,
    "area": 61,
    "population": 34109,
    "populationYear": 2025,
    "languages": [
      "italiano"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "rs": {
    "lat": 44,
    "lng": 21,
    "area": 88361,
    "population": 6549143,
    "populationYear": 2025,
    "languages": [
      "sérvio"
    ],
    "currencies": [
      "Dinar sérvio (дин.)"
    ],
    "subregion": "Sudeste da Europa"
  },
  "se": {
    "lat": 62,
    "lng": 15,
    "area": 450295,
    "population": 10596620,
    "populationYear": 2025,
    "languages": [
      "sueco"
    ],
    "currencies": [
      "Coroa sueca (kr)"
    ],
    "subregion": "Norte da Europa"
  },
  "ch": {
    "lat": 47,
    "lng": 8,
    "area": 41284,
    "population": 9092436,
    "populationYear": 2025,
    "languages": [
      "francês",
      "alemão (Suíça)",
      "italiano",
      "romanche"
    ],
    "currencies": [
      "Franco suíço (Fr.)"
    ],
    "subregion": "Europa Ocidental"
  },
  "ua": {
    "lat": 49,
    "lng": 32,
    "area": 603500,
    "population": 38980376,
    "populationYear": 2025,
    "languages": [
      "ucraniano"
    ],
    "currencies": [
      "Hryvnia ucraniano (₴)"
    ],
    "subregion": "Leste Europeu"
  },
  "va": {
    "lat": 41.9,
    "lng": 12.45,
    "area": 0.44,
    "population": null,
    "populationYear": null,
    "languages": [
      "italiano",
      "latim"
    ],
    "currencies": [
      "Euro (€)"
    ],
    "subregion": "Sul da Europa"
  },
  "af": {
    "lat": 33,
    "lng": 65,
    "area": 652230,
    "population": 43844111,
    "populationYear": 2025,
    "languages": [
      "dari",
      "pashto",
      "turcomeno"
    ],
    "currencies": [
      "Afegane afegão (؋)"
    ],
    "subregion": "Sul da Ásia"
  },
  "sa": {
    "lat": 25,
    "lng": 45,
    "area": 2149690,
    "population": 36973555,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Riyal saudita (ر.س)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "am": {
    "lat": 40,
    "lng": 45,
    "area": 29743,
    "population": 3086700,
    "populationYear": 2025,
    "languages": [
      "armênio"
    ],
    "currencies": [
      "Dram armênio (֏)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "az": {
    "lat": 40.5,
    "lng": 47.5,
    "area": 86600,
    "population": 10246996,
    "populationYear": 2025,
    "languages": [
      "azerbaijano",
      "russo"
    ],
    "currencies": [
      "Manat azeri (₼)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "bh": {
    "lat": 26,
    "lng": 50.55,
    "area": 765,
    "population": 1600366,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar bareinita (.د.ب)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "bd": {
    "lat": 24,
    "lng": 90,
    "area": 147570,
    "population": 175686899,
    "populationYear": 2025,
    "languages": [
      "bengali"
    ],
    "currencies": [
      "Taka bengali (৳)"
    ],
    "subregion": "Sul da Ásia"
  },
  "bn": {
    "lat": 4.5,
    "lng": 114.66666666,
    "area": 5765,
    "population": 466330,
    "populationYear": 2025,
    "languages": [
      "malaio"
    ],
    "currencies": [
      "Dólar bruneano ($)",
      "Dólar singapuriano ($)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "bt": {
    "lat": 27.5,
    "lng": 90.5,
    "area": 38394,
    "population": 796682,
    "populationYear": 2025,
    "languages": [
      "dzonga"
    ],
    "currencies": [
      "Ngultrum butanês (Nu.)",
      "Rupia indiana (₹)"
    ],
    "subregion": "Sul da Ásia"
  },
  "kh": {
    "lat": 13,
    "lng": 105,
    "area": 181035,
    "population": 17847982,
    "populationYear": 2025,
    "languages": [
      "khmer"
    ],
    "currencies": [
      "Riel cambojano (៛)",
      "Dólar americano ($)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "kz": {
    "lat": 48,
    "lng": 68,
    "area": 2724900,
    "population": 20843754,
    "populationYear": 2025,
    "languages": [
      "cazaque",
      "russo"
    ],
    "currencies": [
      "Tenge cazaque (₸)"
    ],
    "subregion": "Ásia Central"
  },
  "cn": {
    "lat": 35,
    "lng": 105,
    "area": 9706961,
    "population": 1406585000,
    "populationYear": 2025,
    "languages": [
      "chinês"
    ],
    "currencies": [
      "Yuan chinês (¥)"
    ],
    "subregion": "Leste Asiático"
  },
  "kp": {
    "lat": 40,
    "lng": 127,
    "area": 120538,
    "population": 26571036,
    "populationYear": 2025,
    "languages": [
      "coreano"
    ],
    "currencies": [
      "Won norte-coreano (₩)"
    ],
    "subregion": "Leste Asiático"
  },
  "kr": {
    "lat": 37,
    "lng": 127.5,
    "area": 100210,
    "population": 51684564,
    "populationYear": 2025,
    "languages": [
      "coreano"
    ],
    "currencies": [
      "Won sul-coreano (₩)"
    ],
    "subregion": "Leste Asiático"
  },
  "ae": {
    "lat": 24,
    "lng": 54,
    "area": 83600,
    "population": 11513149,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dirham dos Emirados Árabes Unidos (د.إ)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "ph": {
    "lat": 13,
    "lng": 122,
    "area": 342353,
    "population": 116786962,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "filipino"
    ],
    "currencies": [
      "Peso filipino (₱)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "ge": {
    "lat": 42,
    "lng": 43.5,
    "area": 69700,
    "population": 3935766,
    "populationYear": 2025,
    "languages": [
      "georgiano"
    ],
    "currencies": [
      "Lari georgiano (₾)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "in": {
    "lat": 20,
    "lng": 77,
    "area": 3287590,
    "population": 1463865525,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "híndi",
      "tâmil"
    ],
    "currencies": [
      "Rupia indiana (₹)"
    ],
    "subregion": "Sul da Ásia"
  },
  "id": {
    "lat": -5,
    "lng": 120,
    "area": 1904569,
    "population": 285721236,
    "populationYear": 2025,
    "languages": [
      "indonésio"
    ],
    "currencies": [
      "Rupia indonésia (Rp)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "ir": {
    "lat": 32,
    "lng": 53,
    "area": 1648195,
    "population": 92417681,
    "populationYear": 2025,
    "languages": [
      "persa"
    ],
    "currencies": [
      "Rial iraniano (﷼)"
    ],
    "subregion": "Sul da Ásia"
  },
  "iq": {
    "lat": 33,
    "lng": 44,
    "area": 438317,
    "population": 47020774,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "aramaico",
      "curdo central"
    ],
    "currencies": [
      "Dinar iraquiano (ع.د)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "il": {
    "lat": 31.47,
    "lng": 35.13,
    "area": 20770,
    "population": 10122800,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "hebraico"
    ],
    "currencies": [
      "Novo shekel israelense (₪)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "jp": {
    "lat": 36,
    "lng": 138,
    "area": 377930,
    "population": 123366734,
    "populationYear": 2025,
    "languages": [
      "japonês"
    ],
    "currencies": [
      "Iene japonês (¥)"
    ],
    "subregion": "Leste Asiático"
  },
  "jo": {
    "lat": 31,
    "lng": 36,
    "area": 89342,
    "population": 11520684,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar jordaniano (د.ا)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "kw": {
    "lat": 29.5,
    "lng": 45.75,
    "area": 17818,
    "population": 4865298,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar kuwaitiano (د.ك)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "la": {
    "lat": 18,
    "lng": 105,
    "area": 236800,
    "population": 7873046,
    "populationYear": 2025,
    "languages": [
      "laosiano"
    ],
    "currencies": [
      "Kip laosiano (₭)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "lb": {
    "lat": 33.83333333,
    "lng": 35.83333333,
    "area": 10452,
    "population": 5849421,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "francês"
    ],
    "currencies": [
      "Libra libanesa (ل.ل)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "my": {
    "lat": 2.5,
    "lng": 112.5,
    "area": 330803,
    "population": 35977838,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "malaio"
    ],
    "currencies": [
      "Ringgit malaio (RM)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "mv": {
    "lat": 3.25,
    "lng": 73,
    "area": 300,
    "population": 529676,
    "populationYear": 2025,
    "languages": [
      "divehi"
    ],
    "currencies": [
      "Rupia maldivana (.ރ)"
    ],
    "subregion": "Sul da Ásia"
  },
  "mm": {
    "lat": 22,
    "lng": 98,
    "area": 676578,
    "population": 54850648,
    "populationYear": 2025,
    "languages": [
      "birmanês"
    ],
    "currencies": [
      "Quiate mianmarense (Ks)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "mn": {
    "lat": 46,
    "lng": 105,
    "area": 1564110,
    "population": 3568978,
    "populationYear": 2025,
    "languages": [
      "mongol"
    ],
    "currencies": [
      "Tugrik mongol (₮)"
    ],
    "subregion": "Leste Asiático"
  },
  "np": {
    "lat": 28,
    "lng": 84,
    "area": 147181,
    "population": 29618118,
    "populationYear": 2025,
    "languages": [
      "nepalês"
    ],
    "currencies": [
      "Rupia nepalesa (₨)"
    ],
    "subregion": "Sul da Ásia"
  },
  "om": {
    "lat": 21,
    "lng": 57,
    "area": 309500,
    "population": 5494691,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Rial omanense (ر.ع.)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "pk": {
    "lat": 30,
    "lng": 70,
    "area": 881912,
    "population": 255219554,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "urdu"
    ],
    "currencies": [
      "Rupia paquistanesa (₨)"
    ],
    "subregion": "Sul da Ásia"
  },
  "qa": {
    "lat": 25.5,
    "lng": 51.25,
    "area": 11586,
    "population": 2972215,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Rial catariano (ر.ق)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "kg": {
    "lat": 41,
    "lng": 75,
    "area": 199951,
    "population": 7343064,
    "populationYear": 2025,
    "languages": [
      "quirguiz",
      "russo"
    ],
    "currencies": [
      "Som quirguiz (с)"
    ],
    "subregion": "Ásia Central"
  },
  "sy": {
    "lat": 35,
    "lng": 38,
    "area": 185180,
    "population": 25620427,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Libra síria (£)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "lk": {
    "lat": 7,
    "lng": 81,
    "area": 65610,
    "population": 21756000,
    "populationYear": 2025,
    "languages": [
      "cingalês",
      "tâmil"
    ],
    "currencies": [
      "Rupia cingalesa (Rs රු)"
    ],
    "subregion": "Sul da Ásia"
  },
  "th": {
    "lat": 15,
    "lng": 100,
    "area": 513120,
    "population": 71619863,
    "populationYear": 2025,
    "languages": [
      "tailandês"
    ],
    "currencies": [
      "Baht tailandês (฿)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "tj": {
    "lat": 39,
    "lng": 71,
    "area": 143100,
    "population": 10786734,
    "populationYear": 2025,
    "languages": [
      "russo",
      "tadjique"
    ],
    "currencies": [
      "Somoni tadjique (ЅМ)"
    ],
    "subregion": "Ásia Central"
  },
  "tl": {
    "lat": -8.83333333,
    "lng": 125.91666666,
    "area": 14874,
    "population": 1418517,
    "populationYear": 2025,
    "languages": [
      "português",
      "tétum"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "tm": {
    "lat": 40,
    "lng": 60,
    "area": 488100,
    "population": 7618847,
    "populationYear": 2025,
    "languages": [
      "russo",
      "turcomeno"
    ],
    "currencies": [
      "Manat turcomeno (m)"
    ],
    "subregion": "Ásia Central"
  },
  "tr": {
    "lat": 39,
    "lng": 35,
    "area": 783562,
    "population": 85878556,
    "populationYear": 2025,
    "languages": [
      "turco"
    ],
    "currencies": [
      "Lira turca (₺)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "uz": {
    "lat": 41,
    "lng": 64,
    "area": 447400,
    "population": 37053428,
    "populationYear": 2025,
    "languages": [
      "russo",
      "uzbeque"
    ],
    "currencies": [
      "Som uzbeque (so'm)"
    ],
    "subregion": "Ásia Central"
  },
  "vn": {
    "lat": 16.16666666,
    "lng": 107.83333333,
    "area": 331212,
    "population": 101598527,
    "populationYear": 2025,
    "languages": [
      "vietnamita"
    ],
    "currencies": [
      "Dong vietnamita (₫)"
    ],
    "subregion": "Sudeste Asiático"
  },
  "ye": {
    "lat": 15,
    "lng": 48,
    "area": 527968,
    "population": 41773878,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Rial iemenita (﷼)"
    ],
    "subregion": "Ásia Ocidental"
  },
  "za": {
    "lat": -29,
    "lng": 24,
    "area": 1221037,
    "population": 64747319,
    "populationYear": 2025,
    "languages": [
      "africâner",
      "inglês",
      "ndebele do sul",
      "soto setentrional",
      "soto do sul",
      "suázi",
      "tswana",
      "tsonga",
      "venda",
      "xhosa",
      "zulu"
    ],
    "currencies": [
      "Rand sul-africano (R)"
    ],
    "subregion": "África Austral"
  },
  "dz": {
    "lat": 28,
    "lng": 3,
    "area": 2381741,
    "population": 47435312,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar argelino (د.ج)"
    ],
    "subregion": "Norte da África"
  },
  "ao": {
    "lat": -12.5,
    "lng": 18.5,
    "area": 1246700,
    "population": 39040039,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Kwanza angolano (Kz)"
    ],
    "subregion": "África Central"
  },
  "bj": {
    "lat": 9.5,
    "lng": 2.25,
    "area": 112622,
    "population": 14814460,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "bw": {
    "lat": -22,
    "lng": 24,
    "area": 582000,
    "population": 2562122,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "tswana"
    ],
    "currencies": [
      "Pula botsuanesa (P)"
    ],
    "subregion": "África Austral"
  },
  "bf": {
    "lat": 13,
    "lng": -2,
    "area": 272967,
    "population": 24074580,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "bi": {
    "lat": -3.5,
    "lng": 30,
    "area": 27834,
    "population": 14390003,
    "populationYear": 2025,
    "languages": [
      "francês",
      "rundi"
    ],
    "currencies": [
      "Franco burundiano (Fr)"
    ],
    "subregion": "África Oriental"
  },
  "cv": {
    "lat": 16,
    "lng": -24,
    "area": 4033,
    "population": 527326,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Escudo cabo-verdiano (Esc)"
    ],
    "subregion": "África Ocidental"
  },
  "cm": {
    "lat": 6,
    "lng": 12,
    "area": 475442,
    "population": 29879337,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "francês"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "td": {
    "lat": 15,
    "lng": 19,
    "area": 1284000,
    "population": 21003705,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "francês"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "km": {
    "lat": -12.16666666,
    "lng": 44.25,
    "area": 1862,
    "population": 882847,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "francês",
      "Comorian"
    ],
    "currencies": [
      "Franco comoriano (Fr)"
    ],
    "subregion": "África Oriental"
  },
  "cg": {
    "lat": -1,
    "lng": 15,
    "area": 342000,
    "population": 6484437,
    "populationYear": 2025,
    "languages": [
      "francês",
      "congolês",
      "lingala"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "ci": {
    "lat": 8,
    "lng": -5,
    "area": 322463,
    "population": 32711547,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "dj": {
    "lat": 11.5,
    "lng": 43,
    "area": 23200,
    "population": 1184076,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "francês"
    ],
    "currencies": [
      "Franco djiboutiano (Fr)"
    ],
    "subregion": "África Oriental"
  },
  "eg": {
    "lat": 27,
    "lng": 30,
    "area": 1002450,
    "population": 118365995,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Libra egípcia (£)"
    ],
    "subregion": "Norte da África"
  },
  "er": {
    "lat": 15,
    "lng": 39,
    "area": 117600,
    "population": 3607003,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "inglês",
      "tigrínia"
    ],
    "currencies": [
      "Nakfa da Eritreia (Nfk)"
    ],
    "subregion": "África Oriental"
  },
  "sz": {
    "lat": -26.5,
    "lng": 31.5,
    "area": 17364,
    "population": 1256174,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "suázi"
    ],
    "currencies": [
      "Lilangeni suazi (L)",
      "Rand sul-africano (R)"
    ],
    "subregion": "África Austral"
  },
  "et": {
    "lat": 8,
    "lng": 38,
    "area": 1104300,
    "population": 135472051,
    "populationYear": 2025,
    "languages": [
      "amárico"
    ],
    "currencies": [
      "Birr etíope (Br)"
    ],
    "subregion": "África Oriental"
  },
  "ga": {
    "lat": -1,
    "lng": 11.75,
    "area": 267668,
    "population": 2593130,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "gm": {
    "lat": 13.46666666,
    "lng": -16.56666666,
    "area": 10689,
    "population": 2822093,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dalasi gambiano (D)"
    ],
    "subregion": "África Ocidental"
  },
  "gh": {
    "lat": 8,
    "lng": -2,
    "area": 238533,
    "population": 35064272,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Cedi ganês (₵)"
    ],
    "subregion": "África Ocidental"
  },
  "gn": {
    "lat": 11,
    "lng": -10,
    "area": 245857,
    "population": 15099727,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco guineano (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "gw": {
    "lat": 12,
    "lng": -15,
    "area": 36125,
    "population": 2249515,
    "populationYear": 2025,
    "languages": [
      "português",
      "Upper Guinea Creole"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "gq": {
    "lat": 2,
    "lng": 10,
    "area": 28051,
    "population": 1938431,
    "populationYear": 2025,
    "languages": [
      "francês",
      "português",
      "espanhol"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "ls": {
    "lat": -29.5,
    "lng": 28.5,
    "area": 30355,
    "population": 2363325,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "soto do sul"
    ],
    "currencies": [
      "Loti lesotiano (L)",
      "Rand sul-africano (R)"
    ],
    "subregion": "África Austral"
  },
  "lr": {
    "lat": 6.5,
    "lng": -9.5,
    "area": 111369,
    "population": 5731206,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar liberiano ($)"
    ],
    "subregion": "África Ocidental"
  },
  "ly": {
    "lat": 25,
    "lng": 17,
    "area": 1759540,
    "population": 7458555,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar líbio (ل.د)"
    ],
    "subregion": "Norte da África"
  },
  "mg": {
    "lat": -20,
    "lng": 47,
    "area": 587041,
    "population": 32740678,
    "populationYear": 2025,
    "languages": [
      "francês",
      "malgaxe"
    ],
    "currencies": [
      "Ariary malgaxe (Ar)"
    ],
    "subregion": "África Oriental"
  },
  "mw": {
    "lat": -13.5,
    "lng": 34,
    "area": 118484,
    "population": 22216120,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "nianja"
    ],
    "currencies": [
      "Kwacha malauiana (MK)"
    ],
    "subregion": "África Oriental"
  },
  "ml": {
    "lat": 17,
    "lng": -4,
    "area": 1240192,
    "population": 25198821,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "ma": {
    "lat": 32,
    "lng": -5,
    "area": 446550,
    "population": 38430770,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "Berber"
    ],
    "currencies": [
      "Dirham marroquino (د.م.)"
    ],
    "subregion": "Norte da África"
  },
  "mr": {
    "lat": 20,
    "lng": -12,
    "area": 1030700,
    "population": 5315065,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Ouguiya mauritana (UM)"
    ],
    "subregion": "África Ocidental"
  },
  "mu": {
    "lat": -20.28333333,
    "lng": 57.55,
    "area": 2040,
    "population": 1243741,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "francês",
      "morisyen"
    ],
    "currencies": [
      "Rupia mauriciana (₨)"
    ],
    "subregion": "África Oriental"
  },
  "mz": {
    "lat": -18.25,
    "lng": 35,
    "area": 801590,
    "population": 35631653,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Metical moçambicano (MT)"
    ],
    "subregion": "África Oriental"
  },
  "na": {
    "lat": -22,
    "lng": 17,
    "area": 825615,
    "population": 3092816,
    "populationYear": 2025,
    "languages": [
      "africâner",
      "alemão",
      "inglês",
      "herero",
      "Khoekhoe",
      "Kwangali",
      "lozi",
      "dongo",
      "tswana"
    ],
    "currencies": [
      "Dólar namibiano ($)",
      "Rand sul-africano (R)"
    ],
    "subregion": "África Austral"
  },
  "ne": {
    "lat": 16,
    "lng": 8,
    "area": 1267000,
    "population": 27917831,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "ng": {
    "lat": 10,
    "lng": 8,
    "area": 923768,
    "population": 237527782,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Naira nigeriana (₦)"
    ],
    "subregion": "África Ocidental"
  },
  "ke": {
    "lat": 1,
    "lng": 38,
    "area": 580367,
    "population": 57532493,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "suaíli"
    ],
    "currencies": [
      "Xelim queniano (Sh)"
    ],
    "subregion": "África Oriental"
  },
  "cf": {
    "lat": 7,
    "lng": 21,
    "area": 622984,
    "population": 5513282,
    "populationYear": 2025,
    "languages": [
      "francês",
      "sango"
    ],
    "currencies": [
      "Franco CFA de BEAC (Fr)"
    ],
    "subregion": "África Central"
  },
  "cd": {
    "lat": 0,
    "lng": 25,
    "area": 2344858,
    "population": 112832473,
    "populationYear": 2025,
    "languages": [
      "francês",
      "congolês",
      "lingala",
      "luba-lulua",
      "suaíli"
    ],
    "currencies": [
      "Franco congolês (FC)"
    ],
    "subregion": "África Central"
  },
  "rw": {
    "lat": -2,
    "lng": 30,
    "area": 26338,
    "population": 14569341,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "francês",
      "quiniaruanda"
    ],
    "currencies": [
      "Franco ruandês (Fr)"
    ],
    "subregion": "África Oriental"
  },
  "st": {
    "lat": 1,
    "lng": 7,
    "area": 964,
    "population": 240254,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Dobra de São Tomé e Príncipe (Db)"
    ],
    "subregion": "África Central"
  },
  "sn": {
    "lat": 14,
    "lng": -14,
    "area": 196722,
    "population": 18931966,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "sl": {
    "lat": 8.5,
    "lng": -11.5,
    "area": 71740,
    "population": 8819794,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Leone de Serra Leoa (Le)"
    ],
    "subregion": "África Ocidental"
  },
  "sc": {
    "lat": -4.58333333,
    "lng": 55.66666666,
    "area": 452,
    "population": 122730,
    "populationYear": 2025,
    "languages": [
      "crioulo francês seichelense",
      "inglês",
      "francês"
    ],
    "currencies": [
      "Rupia seichelense (₨)"
    ],
    "subregion": "África Oriental"
  },
  "so": {
    "lat": 10,
    "lng": 49,
    "area": 637657,
    "population": 19654739,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "somali"
    ],
    "currencies": [
      "Xelim somali (Sh)"
    ],
    "subregion": "África Oriental"
  },
  "sd": {
    "lat": 15,
    "lng": 30,
    "area": 1886068,
    "population": 51662147,
    "populationYear": 2025,
    "languages": [
      "árabe",
      "inglês"
    ],
    "currencies": [
      "Libra sudanesa (PT)"
    ],
    "subregion": "Norte da África"
  },
  "ss": {
    "lat": 7,
    "lng": 30,
    "area": 619745,
    "population": 12188788,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Libra sul-sudanesa (£)"
    ],
    "subregion": "África Central"
  },
  "tz": {
    "lat": -6,
    "lng": 35,
    "area": 945087,
    "population": 70545865,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "suaíli"
    ],
    "currencies": [
      "Xelim tanzaniano (Sh)"
    ],
    "subregion": "África Oriental"
  },
  "tg": {
    "lat": 8,
    "lng": 1.16666666,
    "area": 56785,
    "population": 8591626,
    "populationYear": 2025,
    "languages": [
      "francês"
    ],
    "currencies": [
      "Franco CFA de BCEAO (Fr)"
    ],
    "subregion": "África Ocidental"
  },
  "tn": {
    "lat": 34,
    "lng": 9,
    "area": 163610,
    "population": 12348573,
    "populationYear": 2025,
    "languages": [
      "árabe"
    ],
    "currencies": [
      "Dinar tunisiano (د.ت)"
    ],
    "subregion": "Norte da África"
  },
  "ug": {
    "lat": 1,
    "lng": 32,
    "area": 241550,
    "population": 51384894,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "suaíli"
    ],
    "currencies": [
      "Xelim ugandense (Sh)"
    ],
    "subregion": "África Oriental"
  },
  "zm": {
    "lat": -15,
    "lng": 30,
    "area": 752612,
    "population": 21913874,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Kwacha zambiano (ZK)"
    ],
    "subregion": "África Oriental"
  },
  "zw": {
    "lat": -20,
    "lng": 30,
    "area": 390757,
    "population": 16950795,
    "populationYear": 2025,
    "languages": [
      "Chibarwe",
      "inglês",
      "Kalanga",
      "Khoisan",
      "Ndau",
      "ndebele do norte",
      "nianja",
      "xona",
      "soto do sul",
      "Tonga",
      "tswana",
      "tsonga",
      "venda",
      "xhosa",
      "Zimbabwean Sign Language"
    ],
    "currencies": [
      "Pula botsuanesa (P)",
      "Yuan chinês (¥)",
      "Euro (€)",
      "Libra esterlina (£)",
      "Rupia indiana (₹)",
      "Iene japonês (¥)",
      "Dólar americano ($)",
      "Rand sul-africano (Rs)",
      "Zimbabwe Gold (ZiG)"
    ],
    "subregion": "África Oriental"
  },
  "ag": {
    "lat": 17.05,
    "lng": -61.8,
    "area": 442,
    "population": 94209,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "bs": {
    "lat": 24.25,
    "lng": -76,
    "area": 13943,
    "population": 403033,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar bahamense ($)",
      "Dólar americano ($)"
    ],
    "subregion": "Caribe"
  },
  "bb": {
    "lat": 13.16666666,
    "lng": -59.53333333,
    "area": 430,
    "population": 282623,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar barbadense ($)"
    ],
    "subregion": "Caribe"
  },
  "bz": {
    "lat": 17.25,
    "lng": -88.75,
    "area": 22966,
    "population": 422924,
    "populationYear": 2025,
    "languages": [
      "Belizean Creole",
      "inglês",
      "espanhol"
    ],
    "currencies": [
      "Dólar belizenho ($)"
    ],
    "subregion": "América Central"
  },
  "ca": {
    "lat": 60,
    "lng": -95,
    "area": 9984670,
    "population": 41651653,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "francês"
    ],
    "currencies": [
      "Dólar canadense ($)"
    ],
    "subregion": "América do Norte"
  },
  "cr": {
    "lat": 10,
    "lng": -84,
    "area": 51100,
    "population": 5152950,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Colón costarriquenho (₡)"
    ],
    "subregion": "América Central"
  },
  "cu": {
    "lat": 21.5,
    "lng": -80,
    "area": 109884,
    "population": 10937203,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso cubano ($)"
    ],
    "subregion": "Caribe"
  },
  "dm": {
    "lat": 15.41666666,
    "lng": -61.33333333,
    "area": 751,
    "population": 65871,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "sv": {
    "lat": 13.83333333,
    "lng": -88.91666666,
    "area": 21041,
    "population": 6365503,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "América Central"
  },
  "us": {
    "lat": 38,
    "lng": -97,
    "area": 9372610,
    "population": 341784857,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "América do Norte"
  },
  "gd": {
    "lat": 12.11666666,
    "lng": -61.66666666,
    "area": 344,
    "population": 117303,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "gt": {
    "lat": 15.5,
    "lng": -90.25,
    "area": 108889,
    "population": 18687881,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Quetzal guatemalteco (Q)"
    ],
    "subregion": "América Central"
  },
  "ht": {
    "lat": 19,
    "lng": -72.41666666,
    "area": 27750,
    "population": 11906095,
    "populationYear": 2025,
    "languages": [
      "francês",
      "haitiano"
    ],
    "currencies": [
      "Gourde haitiano (G)"
    ],
    "subregion": "Caribe"
  },
  "hn": {
    "lat": 15,
    "lng": -86.5,
    "area": 112492,
    "population": 11005850,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Lempira hondurenha (L)"
    ],
    "subregion": "América Central"
  },
  "jm": {
    "lat": 18.25,
    "lng": -77.5,
    "area": 10991,
    "population": 2837077,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "Jamaican Patois"
    ],
    "currencies": [
      "Dólar jamaicano ($)"
    ],
    "subregion": "Caribe"
  },
  "mx": {
    "lat": 23,
    "lng": -102,
    "area": 1964375,
    "population": 131946900,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso mexicano ($)"
    ],
    "subregion": "América do Norte"
  },
  "ni": {
    "lat": 13,
    "lng": -85,
    "area": 130373,
    "population": 7007502,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Córdoba nicaraguense (C$)"
    ],
    "subregion": "América Central"
  },
  "pa": {
    "lat": 9,
    "lng": -80,
    "area": 75417,
    "population": 4571189,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Balboa panamenho (B/.)",
      "Dólar americano ($)"
    ],
    "subregion": "América Central"
  },
  "do": {
    "lat": 19,
    "lng": -70.66666666,
    "area": 48671,
    "population": 11520487,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso dominicano ($)"
    ],
    "subregion": "Caribe"
  },
  "kn": {
    "lat": 17.33333333,
    "lng": -62.75,
    "area": 261,
    "population": 46922,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "lc": {
    "lat": 13.88333333,
    "lng": -60.96666666,
    "area": 616,
    "population": 180149,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "vc": {
    "lat": 13.25,
    "lng": -61.2,
    "area": 389,
    "population": 99924,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar do Caribe Oriental ($)"
    ],
    "subregion": "Caribe"
  },
  "tt": {
    "lat": 11,
    "lng": -61,
    "area": 5130,
    "population": 1367764,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar de Trinidad e Tobago ($)"
    ],
    "subregion": "Caribe"
  },
  "ar": {
    "lat": -34,
    "lng": -64,
    "area": 2780400,
    "population": 45851378,
    "populationYear": 2025,
    "languages": [
      "guarani",
      "espanhol"
    ],
    "currencies": [
      "Peso argentino ($)"
    ],
    "subregion": "América do Sul"
  },
  "bo": {
    "lat": -17,
    "lng": -65,
    "area": 1098581,
    "population": 12581843,
    "populationYear": 2025,
    "languages": [
      "aimará",
      "guarani",
      "quíchua",
      "espanhol"
    ],
    "currencies": [
      "Boliviano da Bolívia (Bs.)"
    ],
    "subregion": "América do Sul"
  },
  "br": {
    "lat": -10,
    "lng": -55,
    "area": 8515767,
    "population": 212812405,
    "populationYear": 2025,
    "languages": [
      "português"
    ],
    "currencies": [
      "Real brasileiro (R$)"
    ],
    "subregion": "América do Sul"
  },
  "cl": {
    "lat": -30,
    "lng": -71,
    "area": 756102,
    "population": 19859921,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso chileno ($)"
    ],
    "subregion": "América do Sul"
  },
  "co": {
    "lat": 4,
    "lng": -72,
    "area": 1141748,
    "population": 53425635,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso colombiano ($)"
    ],
    "subregion": "América do Sul"
  },
  "ec": {
    "lat": -2,
    "lng": -77.5,
    "area": 276841,
    "population": 18289896,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "América do Sul"
  },
  "gy": {
    "lat": 5,
    "lng": -59,
    "area": 214969,
    "population": 835986,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar guianense ($)"
    ],
    "subregion": "América do Sul"
  },
  "py": {
    "lat": -23,
    "lng": -58,
    "area": 406752,
    "population": 7013078,
    "populationYear": 2025,
    "languages": [
      "guarani",
      "espanhol"
    ],
    "currencies": [
      "Guarani paraguaio (₲)"
    ],
    "subregion": "América do Sul"
  },
  "pe": {
    "lat": -10,
    "lng": -76,
    "area": 1285216,
    "population": 34576665,
    "populationYear": 2025,
    "languages": [
      "aimará",
      "quíchua",
      "espanhol"
    ],
    "currencies": [
      "Novo sol peruano (S/.)"
    ],
    "subregion": "América do Sul"
  },
  "sr": {
    "lat": 4,
    "lng": -56,
    "area": 163820,
    "population": 639850,
    "populationYear": 2025,
    "languages": [
      "holandês"
    ],
    "currencies": [
      "Dólar surinamês ($)"
    ],
    "subregion": "América do Sul"
  },
  "uy": {
    "lat": -33,
    "lng": -56,
    "area": 181034,
    "population": 3384688,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Peso uruguaio ($)"
    ],
    "subregion": "América do Sul"
  },
  "ve": {
    "lat": 8,
    "lng": -66,
    "area": 916445,
    "population": 28516896,
    "populationYear": 2025,
    "languages": [
      "espanhol"
    ],
    "currencies": [
      "Bolívar venezuelano (Bs.S.)"
    ],
    "subregion": "América do Sul"
  },
  "au": {
    "lat": -27,
    "lng": 133,
    "area": 7692024,
    "population": 27614411,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar australiano ($)"
    ],
    "subregion": "Austrália e Nova Zelândia"
  },
  "fj": {
    "lat": -18,
    "lng": 175,
    "area": 18272,
    "population": 933154,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "fijiano",
      "Fiji Hindi"
    ],
    "currencies": [
      "Dólar fijiano ($)"
    ],
    "subregion": "Melanésia"
  },
  "mh": {
    "lat": 9,
    "lng": 168,
    "area": 181,
    "population": 36282,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "marshalês"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "Micronésia"
  },
  "sb": {
    "lat": -8,
    "lng": 159,
    "area": 28896,
    "population": 838645,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [
      "Dólar das Ilhas Salomão ($)"
    ],
    "subregion": "Melanésia"
  },
  "ki": {
    "lat": 1.41666666,
    "lng": 173,
    "area": 811,
    "population": 136488,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "gilbertês"
    ],
    "currencies": [
      "Dólar australiano ($)",
      "Kiribati dollar ($)"
    ],
    "subregion": "Micronésia"
  },
  "fm": {
    "lat": 6.91666666,
    "lng": 158.25,
    "area": 702,
    "population": 113683,
    "populationYear": 2025,
    "languages": [
      "inglês"
    ],
    "currencies": [],
    "subregion": "Micronésia"
  },
  "nr": {
    "lat": -0.53333333,
    "lng": 166.91666666,
    "area": 21,
    "population": 12025,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "nauruano"
    ],
    "currencies": [
      "Dólar australiano ($)"
    ],
    "subregion": "Micronésia"
  },
  "nz": {
    "lat": -41,
    "lng": 174,
    "area": 270467,
    "population": 5324700,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "maori",
      "New Zealand Sign Language"
    ],
    "currencies": [
      "Dólar neozelandês ($)"
    ],
    "subregion": "Austrália e Nova Zelândia"
  },
  "pw": {
    "lat": 7.5,
    "lng": 134.5,
    "area": 459,
    "population": 17663,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "palauano"
    ],
    "currencies": [
      "Dólar americano ($)"
    ],
    "subregion": "Micronésia"
  },
  "pg": {
    "lat": -6,
    "lng": 147,
    "area": 462840,
    "population": 10762817,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "hiri motu",
      "tok pisin"
    ],
    "currencies": [
      "Kina papuásia (K)"
    ],
    "subregion": "Melanésia"
  },
  "ws": {
    "lat": -13.58333333,
    "lng": -172.33333333,
    "area": 2842,
    "population": 219306,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "samoano"
    ],
    "currencies": [
      "Tala samoano (T)"
    ],
    "subregion": "Polinésia"
  },
  "to": {
    "lat": -20,
    "lng": -175,
    "area": 747,
    "population": 103742,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "tonganês"
    ],
    "currencies": [
      "Paʻanga tonganesa (T$)"
    ],
    "subregion": "Polinésia"
  },
  "tv": {
    "lat": -8,
    "lng": 178,
    "area": 26,
    "population": 9492,
    "populationYear": 2025,
    "languages": [
      "inglês",
      "tuvaluano"
    ],
    "currencies": [
      "Dólar australiano ($)",
      "Tuvaluan dollar ($)"
    ],
    "subregion": "Polinésia"
  },
  "vu": {
    "lat": -16,
    "lng": 167,
    "area": 12189,
    "population": 335169,
    "populationYear": 2025,
    "languages": [
      "bislamá",
      "inglês",
      "francês"
    ],
    "currencies": [
      "Vatu de Vanuatu (Vt)"
    ],
    "subregion": "Melanésia"
  }
};
