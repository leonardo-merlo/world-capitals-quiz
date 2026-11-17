// curiosities.js
// 3 itens por pais (1 curiosidade + 2 coisas para fazer), chave = codigo ISO
// GERADO por scripts/build-curiosities.py a partir de curiosidades/*.md. nao edite aqui.

const COUNTRY_FACTS = {
  "de": [
    {
      "type": "know",
      "title": "A prensa de tipos móveis que mudou a Europa nasceu na Alemanha!",
      "text": "Por volta de 1450, Johannes Gutenberg desenvolveu em Mainz o sistema de impressão com tipos móveis de metal, que tornou os livros muito mais baratos e acelerou a circulação de ideias na Europa."
    },
    {
      "type": "do",
      "title": "Visitar o castelo de conto de fadas de Neuschwanstein!",
      "text": "Construído no século XIX pelo rei Luís II da Baviera, o castelo se ergue sobre um penhasco nos Alpes e inspirou o castelo de contos de fadas dos parques Disney."
    },
    {
      "type": "do",
      "title": "Passear pela Ilha dos Museus, em Berlim",
      "text": "A Museumsinsel, Patrimônio Mundial da UNESCO, reúne cinco grandes museus numa ilha do rio Spree, entre eles o Pergamon, que abriga o Portão de Ishtar e o Altar de Pérgamo."
    }
  ],
  "ad": [
    {
      "type": "know",
      "title": "Andorra tem o catalão como única língua oficial!",
      "text": "O pequeno principado dos Pireneus é o único país do mundo que adota apenas o catalão como idioma oficial, e é governado por dois copríncipes: o bispo de Urgell e o presidente da França."
    },
    {
      "type": "do",
      "title": "Caminhar pelo vale glacial de Madriu-Perafita-Claror",
      "text": "Patrimônio Mundial da UNESCO, o vale preserva pastos de altitude, cabanas de pedra e trilhas usadas há séculos por pastores nos Pireneus andorranos."
    },
    {
      "type": "do",
      "title": "Relaxar nas águas termais do complexo Caldea",
      "text": "Em Escaldes-Engordany, o centro termal Caldea aproveita as águas quentes naturais do vale, que já eram usadas para banho e lavagem de lã desde tempos antigos."
    }
  ],
  "at": [
    {
      "type": "know",
      "title": "\"Noite Feliz\" foi cantada pela primeira vez numa vila austríaca!",
      "text": "A canção natalina Stille Nacht foi apresentada em 1818 na igreja de Oberndorf, perto de Salzburgo, com letra do padre Joseph Mohr e música do organista Franz Xaver Gruber."
    },
    {
      "type": "do",
      "title": "Entrar na Eisriesenwelt, a gigantesca caverna de gelo",
      "text": "Perto de Werfen, nos Alpes, esta é uma das maiores cavernas de gelo do mundo. A visita guiada percorre galerias de formações geladas à luz de lamparinas."
    },
    {
      "type": "do",
      "title": "Tomar café numa tradicional Kaffeehaus de Viena",
      "text": "A cultura dos cafés vienenses é Patrimônio Cultural Imaterial da UNESCO. Sentar horas com um Melange e um pedaço de Sachertorte é um ritual da cidade."
    }
  ],
  "be": [
    {
      "type": "know",
      "title": "O saxofone foi inventado por um belga!",
      "text": "Adolphe Sax, nascido em Dinant, patenteou o instrumento na década de 1840. Ele queria um instrumento que unisse a potência dos metais à agilidade das madeiras."
    },
    {
      "type": "do",
      "title": "Admirar a Grand-Place de Bruxelas à noite",
      "text": "A praça central, cercada por casas de guildas e pela prefeitura gótica, é Patrimônio Mundial da UNESCO e uma das mais ornamentadas da Europa."
    },
    {
      "type": "do",
      "title": "Atravessar os canais do centro histórico de Bruges",
      "text": "A cidade medieval, Patrimônio Mundial da UNESCO, preserva ruas de paralelepípedos, pontes e canais que podem ser vistos em passeios de barco."
    }
  ],
  "by": [
    {
      "type": "know",
      "title": "A Bielorrússia guarda uma das últimas florestas primárias da Europa!",
      "text": "A floresta de Belovezhskaya Pushcha, dividida com a Polônia e Patrimônio Mundial da UNESCO, abriga o bisão-europeu, o maior mamífero terrestre do continente."
    },
    {
      "type": "do",
      "title": "Conhecer o Castelo de Mir, do século XVI",
      "text": "Patrimônio Mundial da UNESCO, o complexo combina elementos góticos, renascentistas e barrocos, cercado por um lago e um parque."
    },
    {
      "type": "do",
      "title": "Observar a natureza do Parque Nacional de Belovezhskaya Pushcha",
      "text": "A floresta primária abriga bisões, cervos e carvalhos centenários, e há centros que mostram a fauna local. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "ba": [
    {
      "type": "know",
      "title": "A ponte de Mostar foi reconstruída com a técnica original!",
      "text": "A Stari Most, construída pelos otomanos em 1566, foi destruída na guerra de 1993. Foi refeita com pedra extraída da mesma região e métodos tradicionais, e reaberta em 2004."
    },
    {
      "type": "do",
      "title": "Perder-se no bazar Baščaršija, em Sarajevo",
      "text": "O bairro otomano do século XV tem oficinas de cobre, casas de chá e lojinhas, e é o lugar ideal para provar ćevapi e café bósnio tradicional."
    },
    {
      "type": "do",
      "title": "Nadar sob as cachoeiras de Kravice",
      "text": "Num rio de águas cristalinas, uma cortina de quedas em formato de anfiteatro forma um lago natural onde é possível nadar no verão."
    }
  ],
  "bg": [
    {
      "type": "know",
      "title": "O alfabeto cirílico se desenvolveu na Bulgária!",
      "text": "No fim do século IX, estudiosos da escola literária de Preslav, discípulos de Cirilo e Metódio, criaram o alfabeto cirílico, hoje usado por centenas de milhões de pessoas."
    },
    {
      "type": "do",
      "title": "Visitar o Mosteiro de Rila, nas montanhas",
      "text": "Fundado no século X e Patrimônio Mundial da UNESCO, o mosteiro tem afrescos coloridos e arcadas listradas de preto e branco num vale arborizado."
    },
    {
      "type": "do",
      "title": "Assistir a um espetáculo no teatro romano de Plovdiv",
      "text": "Plovdiv é uma das cidades habitadas mais antigas da Europa. Seu teatro romano, do século II, ainda recebe concertos e espetáculos."
    }
  ],
  "hr": [
    {
      "type": "know",
      "title": "A gravata tem origem em soldados croatas!",
      "text": "A palavra francesa cravate vem de \"croate\". No século XVII, mercenários croatas usavam lenços atados ao pescoço, que impressionaram a corte francesa e viraram moda."
    },
    {
      "type": "do",
      "title": "Caminhar entre os lagos e cascatas de Plitvice",
      "text": "O parque nacional tem lagos de cor turquesa ligados por cascatas e passarelas de madeira, e é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Percorrer as muralhas medievais de Dubrovnik",
      "text": "O circuito sobre as muralhas permite ver os telhados de terracota da cidade velha e o mar Adriático de cima."
    }
  ],
  "cy": [
    {
      "type": "know",
      "title": "Chipre é, segundo o mito, o berço da deusa Afrodite!",
      "text": "Na costa de Pafos, a formação rochosa Petra tou Romiou é o lugar onde a lenda grega diz que Afrodite emergiu da espuma do mar."
    },
    {
      "type": "do",
      "title": "Descobrir as igrejas pintadas das montanhas Troodos",
      "text": "Dez pequenas igrejas e mosteiros bizantinos, Patrimônio Mundial da UNESCO, guardam afrescos que vão do século XI ao XVI."
    },
    {
      "type": "do",
      "title": "Assistir a uma peça no teatro greco-romano de Kourion",
      "text": "Sobre uma falésia junto ao mar, o sítio arqueológico tem mosaicos e um teatro restaurado que ainda recebe apresentações."
    }
  ],
  "dk": [
    {
      "type": "know",
      "title": "O nome LEGO vem de uma expressão dinamarquesa!",
      "text": "Criada em Billund em 1934, a marca vem de \"leg godt\", que significa \"brinque bem\" em dinamarquês. Só mais tarde a empresa passou a fabricar os tijolinhos de plástico."
    },
    {
      "type": "do",
      "title": "Passear pelo parque de diversões Tivoli, em Copenhague",
      "text": "Aberto em 1843, o Tivoli é um dos parques de diversões mais antigos do mundo, com jardins, montanhas-russas de madeira e iluminação à noite."
    },
    {
      "type": "do",
      "title": "Visitar o castelo de Kronborg, o cenário de Hamlet",
      "text": "Em Helsingør, o castelo renascentista, Patrimônio Mundial da UNESCO, é o Elsinore da peça de Shakespeare e controlava a entrada do estreito de Øresund."
    }
  ],
  "sk": [
    {
      "type": "know",
      "title": "Reis húngaros eram coroados na atual Bratislava!",
      "text": "De 1563 a 1830, a catedral de São Martinho, em Bratislava, foi palco das coroações dos reis da Hungria, quando Buda estava sob domínio otomano."
    },
    {
      "type": "do",
      "title": "Explorar o Castelo de Spiš, um dos maiores da Europa Central",
      "text": "Patrimônio Mundial da UNESCO, a fortaleza em ruínas domina uma colina e permite ver o campo ao redor a partir de suas torres."
    },
    {
      "type": "do",
      "title": "Fazer trilhas nos Altos Tatras",
      "text": "A cordilheira alpina tem picos rochosos, lagos glaciais e trilhas bem sinalizadas, como a que leva ao lago Popradské Pleso."
    }
  ],
  "si": [
    {
      "type": "know",
      "title": "Os cavalos lipizzanos têm origem num haras esloveno!",
      "text": "O nome vem de Lipica, onde um haras foi fundado em 1580 pelos Habsburgos. Esses cavalos brancos tornaram-se famosos na Escola Espanhola de Equitação de Viena."
    },
    {
      "type": "do",
      "title": "Remar até a ilhota da igreja no Lago Bled",
      "text": "Uma pequena ilha com igreja no meio do lago alpino é alcançada em barcos tradicionais chamados pletna, com os Alpes Julianos ao fundo."
    },
    {
      "type": "do",
      "title": "Descer às Cavernas de Škocjan",
      "text": "Patrimônio Mundial da UNESCO, o sistema de cavernas tem um cânion subterrâneo com um rio que corre muitos metros abaixo da superfície."
    }
  ],
  "es": [
    {
      "type": "know",
      "title": "O basco não tem parentesco comprovado com nenhuma outra língua!",
      "text": "O euskera, falado no País Basco, é considerado um isolado linguístico: sobreviveu à chegada do latim e não se liga a nenhuma família conhecida."
    },
    {
      "type": "do",
      "title": "Visitar o palácio da Alhambra, em Granada",
      "text": "A cidadela de palácios nasrídas, com pátios, fontes e inscrições entalhadas, é uma das maiores joias da arquitetura islâmica na Europa."
    },
    {
      "type": "do",
      "title": "Caminhar um trecho do Caminho de Santiago",
      "text": "A rota de peregrinação medieval até Santiago de Compostela é percorrida a pé por pessoas do mundo todo, com albergues e igrejas românicas pelo caminho."
    }
  ],
  "ee": [
    {
      "type": "know",
      "title": "A Estônia conquistou a independência cantando!",
      "text": "Entre 1987 e 1991, grandes encontros populares com canções patrióticas, conhecidos como Revolução Cantada, ajudaram a restaurar a independência sem violência."
    },
    {
      "type": "do",
      "title": "Caminhar pelas muralhas medievais de Tallinn",
      "text": "A cidade velha, Patrimônio Mundial da UNESCO, tem ruas de pedra, torres e igrejas góticas bem preservadas."
    },
    {
      "type": "do",
      "title": "Andar sobre um pântano com sapatos de raquete em Soomaa",
      "text": "No Parque Nacional de Soomaa, passeios guiados usam \"raba\", sapatos largos que permitem caminhar sobre a turfa e ver a fauna dos brejos."
    }
  ],
  "fi": [
    {
      "type": "know",
      "title": "A cultura da sauna é Patrimônio Imaterial da UNESCO!",
      "text": "Na Finlândia, a sauna é um espaço social e de bem-estar presente na vida cotidiana, e a tradição foi inscrita pela UNESCO em 2020."
    },
    {
      "type": "do",
      "title": "Visitar a fortaleza marítima de Suomenlinna",
      "text": "Em ilhas diante de Helsinque, a fortaleza do século XVIII, Patrimônio Mundial da UNESCO, é acessível por balsa e tem túneis, canhões e cafés."
    },
    {
      "type": "do",
      "title": "Procurar a aurora boreal na Lapônia",
      "text": "Na região ao norte do Círculo Polar Ártico, é possível observar o fenômeno nas noites escuras de inverno, perto de Saariselkä."
    }
  ],
  "fr": [
    {
      "type": "know",
      "title": "O sistema métrico nasceu na França!",
      "text": "Criado na época da Revolução Francesa, o sistema se baseou no metro, definido como uma fração do meridiano terrestre, e depois se espalhou pelo mundo."
    },
    {
      "type": "do",
      "title": "Visitar a abadia do Mont-Saint-Michel na maré alta",
      "text": "A abadia fica numa ilha rochosa da Normandia, cercada pela água quando as marés são fortes, que figuram entre as maiores da Europa."
    },
    {
      "type": "do",
      "title": "Ver os campos de lavanda da Provença",
      "text": "Em julho, as colinas perto de Valensole ficam roxas e perfumadas, num dos cenários mais fotografados do sul da França."
    }
  ],
  "gr": [
    {
      "type": "know",
      "title": "A democracia nasceu em Atenas!",
      "text": "Por volta de 508 a.C., as reformas de Clístenes criaram em Atenas um sistema em que os cidadãos votavam diretamente nas leis, origem da palavra \"democracia\"."
    },
    {
      "type": "do",
      "title": "Subir à Acrópole e ver o Partenon",
      "text": "O templo do século V a.C. domina a cidade do alto de uma colina, e o Museu da Acrópole, ao pé dela, mostra esculturas originais."
    },
    {
      "type": "do",
      "title": "Visitar os mosteiros de Meteora",
      "text": "Construídos sobre pilares de rocha na Tessália, os mosteiros ortodoxos, Patrimônio Mundial da UNESCO, parecem suspensos no ar."
    }
  ],
  "hu": [
    {
      "type": "know",
      "title": "O cubo mágico foi inventado na Hungria!",
      "text": "Em 1974, o arquiteto e professor Ernő Rubik, em Budapeste, criou o cubo como ferramenta para explicar geometria a seus alunos."
    },
    {
      "type": "do",
      "title": "Mergulhar nos banhos termais Széchenyi, em Budapeste",
      "text": "O complexo neobarroco do início do século XX tem piscinas de água termal ao ar livre, usadas o ano todo."
    },
    {
      "type": "do",
      "title": "Cavalgar na planície de Hortobágy",
      "text": "Patrimônio Mundial da UNESCO, a grande estepe húngara, a puszta, tem pastores, cavalos e rebanhos de gado cinzento húngaro."
    }
  ],
  "ie": [
    {
      "type": "know",
      "title": "O Halloween tem origem num festival celta irlandês!",
      "text": "A festa vem do Samhain, celebração celta que marcava o fim da colheita e o começo do inverno e foi levada aos Estados Unidos por imigrantes irlandeses."
    },
    {
      "type": "do",
      "title": "Contemplar os penhascos de Moher",
      "text": "Na costa oeste, as falésias sobre o oceano Atlântico se erguem por quilômetros, com trilhas ao longo da borda."
    },
    {
      "type": "do",
      "title": "Ver o Livro de Kells no Trinity College, em Dublin",
      "text": "O manuscrito ilustrado dos evangelhos, do século IX, fica exposto na biblioteca da universidade, ao lado da impressionante Long Room."
    }
  ],
  "is": [
    {
      "type": "know",
      "title": "A Islândia tem um dos parlamentos mais antigos do mundo!",
      "text": "O Althing foi fundado em 930 em Þingvellir, onde chefes se reuniam ao ar livre para fazer leis, entre duas placas tectônicas."
    },
    {
      "type": "do",
      "title": "Ver icebergs flutuando na lagoa glacial de Jökulsárlón",
      "text": "Blocos de gelo que se desprendem de uma geleira navegam devagar pela lagoa até o mar, ao lado da famosa praia de areia preta."
    },
    {
      "type": "do",
      "title": "Banhar-se no rio termal de Reykjadalur",
      "text": "Uma caminhada pela montanha leva a um rio de água morna, onde é possível relaxar em meio ao vapor."
    }
  ],
  "it": [
    {
      "type": "know",
      "title": "A cúpula do Panteão de Roma continua sendo um recorde!",
      "text": "Construída há quase 2.000 anos, é ainda a maior cúpula do mundo feita de concreto não armado, com uma abertura no centro, o óculo."
    },
    {
      "type": "do",
      "title": "Caminhar pelas ruas de Pompeia",
      "text": "A cidade romana soterrada pela erupção do Vesúvio em 79 d.C. preserva casas, afrescos e ruas com marcas de rodas de carroças."
    },
    {
      "type": "do",
      "title": "Fazer trilhas nas Dolomitas",
      "text": "Nos Alpes italianos, picos de rocha clara, como os do vale de Alpe di Siusi, contrastam com campos verdes e refúgios de montanha."
    }
  ],
  "xk": [
    {
      "type": "know",
      "title": "O monumento \"Newborn\" é repintado todo ano!",
      "text": "Inaugurado em Pristina em 17 de fevereiro de 2008, no dia da declaração de independência, o letreiro é repintado a cada aniversário com um novo tema."
    },
    {
      "type": "do",
      "title": "Passear pela cidade velha de Prizren",
      "text": "Ao pé de montanhas, a cidade otomana tem uma ponte de pedra, mesquitas históricas e a fortaleza que domina a vista."
    },
    {
      "type": "do",
      "title": "Explorar o desfiladeiro de Rugova",
      "text": "Perto de Peć, paredões de rocha de centenas de metros e trilhas nas Montanhas Amaldiçoadas atraem caminhantes no verão."
    }
  ],
  "lv": [
    {
      "type": "know",
      "title": "Na Letônia, milhares de pessoas cantam juntas em festivais!",
      "text": "O Festival da Canção e da Dança, realizado desde 1873, reúne coros enormes e é Patrimônio Imaterial da UNESCO, junto aos de outros países bálticos."
    },
    {
      "type": "do",
      "title": "Ver os prédios art nouveau de Riga",
      "text": "Na rua Alberta iela e arredores, fachadas decoradas com máscaras, esfinges e figuras mostram um dos mais ricos conjuntos de art nouveau da Europa."
    },
    {
      "type": "do",
      "title": "Visitar o castelo de Turaida, no Parque Nacional de Gauja",
      "text": "Um castelo medieval de tijolos vermelhos domina o vale do rio Gauja, cercado por trilhas e florestas."
    }
  ],
  "li": [
    {
      "type": "know",
      "title": "Liechtenstein leva o nome da família que o comprou!",
      "text": "No início do século XVIII, a família princípica dos Liechtenstein adquiriu as terras e elas foram elevadas a principado. É um dos poucos países nomeados em homenagem a uma dinastia."
    },
    {
      "type": "do",
      "title": "Percorrer a trilha Fürstensteig, nos Alpes",
      "text": "O caminho em encosta, com trechos protegidos por cabos, oferece vistas do vale do Reno e dos picos vizinhos."
    },
    {
      "type": "do",
      "title": "Visitar o Museu de Selos Postais de Vaduz",
      "text": "O pequeno país ficou conhecido pelos seus selos, e o museu mostra a história postal do principado."
    }
  ],
  "lt": [
    {
      "type": "know",
      "title": "A Lituânia foi o último país pagão da Europa!",
      "text": "O grão-ducado só se converteu ao cristianismo oficialmente em 1387, séculos depois dos vizinhos, e manteve tradições pré-cristãs por muito tempo."
    },
    {
      "type": "do",
      "title": "Visitar a Colina das Cruzes, perto de Šiauliai",
      "text": "Uma colina coberta por milhares de cruzes e crucifixos, deixados por peregrinos desde o século XIX, virou símbolo de fé e resistência."
    },
    {
      "type": "do",
      "title": "Subir as dunas do Istmo da Curlândia, em Nida",
      "text": "A faixa de areia entre o mar Báltico e uma lagoa, Patrimônio Mundial da UNESCO, tem dunas altas, florestas e vilas de pescadores."
    }
  ],
  "lu": [
    {
      "type": "know",
      "title": "Luxemburgo é o único grão-ducado soberano do mundo!",
      "text": "O país é governado por um grão-duque, o que o torna o único Estado do tipo ainda existente, e fica entre França, Alemanha e Bélgica."
    },
    {
      "type": "do",
      "title": "Percorrer as casamatas do Bock",
      "text": "Túneis escavados na rocha ao longo de séculos formam uma rede subterrânea de defesa, com vista para a cidade velha, Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Fazer a Mullerthal Trail, na \"Pequena Suíça\" luxemburguesa",
      "text": "A trilha passa por formações de arenito, desfiladeiros e florestas de faias."
    }
  ],
  "mt": [
    {
      "type": "know",
      "title": "Os templos de Malta são mais antigos que as pirâmides do Egito!",
      "text": "Os templos megalíticos, como Ġgantija, em Gozo, foram erguidos por volta de 3600 a.C., antes de Stonehenge e das pirâmides de Gizé."
    },
    {
      "type": "do",
      "title": "Ver uma obra de Caravaggio na Co-Catedral de São João",
      "text": "Em Valletta, o oratório da catedral guarda \"A Decapitação de São João Batista\", única tela assinada por Caravaggio."
    },
    {
      "type": "do",
      "title": "Passear de barco pela Gruta Azul",
      "text": "Na costa sul da ilha, barcos entram em cavernas marinhas onde a luz do sol faz a água brilhar em tons de azul."
    }
  ],
  "md": [
    {
      "type": "know",
      "title": "Na Moldávia há uma cidade subterrânea de vinhos!",
      "text": "Em Cricova, antigas minas de calcário viraram adegas com túneis em forma de ruas, onde mantêm milhões de garrafas na temperatura constante."
    },
    {
      "type": "do",
      "title": "Visitar o mosteiro rupestre de Orheiul Vechi",
      "text": "Um mosteiro escavado numa falésia sobre o rio Răut, num complexo arqueológico com vestígios de várias épocas."
    },
    {
      "type": "do",
      "title": "Conhecer a fortaleza medieval de Soroca",
      "text": "Construída em pedra no século XVI, às margens do rio Dniester, é uma das fortificações mais bem conservadas do país."
    }
  ],
  "mc": [
    {
      "type": "know",
      "title": "O Grande Prêmio de Mônaco é disputado nas ruas desde 1929!",
      "text": "O circuito usa as ruas do principado, com um túnel e curvas apertadas, e é um dos mais tradicionais do automobilismo."
    },
    {
      "type": "do",
      "title": "Visitar o Museu Oceanográfico de Mônaco",
      "text": "Inaugurado em 1910 pelo príncipe Albert I, o museu fica sobre um penhasco e tem aquários e exposições sobre ciência marinha."
    },
    {
      "type": "do",
      "title": "Passear pelo Jardim Exótico",
      "text": "Plantas de regiões áridas, como cactos gigantes, crescem em terraços na encosta, com vista para o porto."
    }
  ],
  "me": [
    {
      "type": "know",
      "title": "O nome do país significa \"Montanha Negra\"!",
      "text": "Montenegro vem do veneziano e traduz Crna Gora, em montenegrino, nome ligado às florestas escuras do monte Lovćen."
    },
    {
      "type": "do",
      "title": "Passear pela cidade velha de Kotor",
      "text": "Cercada por muralhas junto a uma baía profunda, a cidade medieval, Patrimônio Mundial da UNESCO, tem becos de pedra e igrejas antigas."
    },
    {
      "type": "do",
      "title": "Descer o rio Tara de rafting",
      "text": "O cânion do Tara, um dos mais profundos da Europa, tem corredeiras e paredões de rocha dentro do Parque Nacional de Durmitor."
    }
  ],
  "no": [
    {
      "type": "know",
      "title": "O Nobel da Paz é entregue em Oslo, e não em Estocolmo!",
      "text": "Segundo o testamento de Alfred Nobel, os outros prêmios são entregues na Suécia, mas o da Paz é concedido por um comitê escolhido pelo parlamento norueguês."
    },
    {
      "type": "do",
      "title": "Navegar pelo fiorde de Geiranger",
      "text": "Entre paredões de montanhas e cachoeiras, o fiorde, Patrimônio Mundial da UNESCO, pode ser visto de barco."
    },
    {
      "type": "do",
      "title": "Dormir numa rorbu nas ilhas Lofoten",
      "text": "Antigas cabanas de pescadores foram transformadas em hospedagens, em meio a picos íngremes e mar."
    }
  ],
  "nl": [
    {
      "type": "know",
      "title": "A primeira empresa de capital aberto surgiu nos Países Baixos!",
      "text": "A Companhia Holandesa das Índias Orientais, a VOC, fundada em 1602, é considerada a primeira a emitir ações negociadas publicamente."
    },
    {
      "type": "do",
      "title": "Ver os moinhos de Kinderdijk",
      "text": "Patrimônio Mundial da UNESCO, o conjunto de moinhos do século XVIII mostra como os holandeses controlam a água."
    },
    {
      "type": "do",
      "title": "Passear pelos campos de tulipas de Keukenhof",
      "text": "Na primavera, o parque de flores perto de Lisse reúne milhões de bulbos florescendo em canteiros coloridos."
    }
  ],
  "pl": [
    {
      "type": "know",
      "title": "Copérnico, que colocou o Sol no centro, nasceu na Polônia!",
      "text": "Nicolau Copérnico, nascido em Toruń em 1473, propôs o modelo heliocêntrico no livro \"De revolutionibus orbium coelestium\", publicado em 1543."
    },
    {
      "type": "do",
      "title": "Descer às minas de sal de Wieliczka",
      "text": "Patrimônio Mundial da UNESCO, a mina tem galerias, lagos subterrâneos e uma capela inteira esculpida em sal."
    },
    {
      "type": "do",
      "title": "Caminhar até o lago Morskie Oko, nos Tatras",
      "text": "Uma trilha a partir de Zakopane leva a um lago glacial cercado por picos de granito."
    }
  ],
  "pt": [
    {
      "type": "know",
      "title": "Portugal tem a aliança diplomática mais antiga ainda em vigor!",
      "text": "O Tratado de Windsor, de 1386, ligou Portugal à Inglaterra, e a aliança é considerada a mais antiga do mundo ainda ativa."
    },
    {
      "type": "do",
      "title": "Visitar o Palácio da Pena, em Sintra",
      "text": "O palácio do século XIX tem torres coloridas no topo de uma colina e é cercado por um parque romântico, Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Provar vinho do Porto no Vale do Douro",
      "text": "Patrimônio Mundial da UNESCO, a região tem vinhedos em terraços e quintas que oferecem degustações."
    }
  ],
  "gb": [
    {
      "type": "know",
      "title": "Big Ben é o nome do sino, e não da torre!",
      "text": "O nome se refere ao grande sino dentro da torre do relógio do Palácio de Westminster, que hoje se chama Torre Elizabeth."
    },
    {
      "type": "do",
      "title": "Ver o círculo de pedras de Stonehenge",
      "text": "O monumento pré-histórico em Wiltshire, Patrimônio Mundial da UNESCO, foi erguido há milhares de anos e seu propósito ainda é debatido."
    },
    {
      "type": "do",
      "title": "Caminhar pela Calçada dos Gigantes, na Irlanda do Norte",
      "text": "Milhares de colunas de basalto hexagonais formam degraus na costa, e a lenda diz que foram feitas por um gigante."
    }
  ],
  "cz": [
    {
      "type": "know",
      "title": "A palavra \"robô\" nasceu numa peça de teatro tcheca!",
      "text": "O termo apareceu na peça \"R.U.R.\", de Karel Čapek, de 1920, e veio de \"robota\", que significa trabalho forçado. A autoria da palavra é atribuída a seu irmão Josef."
    },
    {
      "type": "do",
      "title": "Passear pela cidade velha de Český Krumlov",
      "text": "Patrimônio Mundial da UNESCO, a cidade tem um castelo sobre uma curva do rio Vltava e ruas medievais."
    },
    {
      "type": "do",
      "title": "Visitar a cervejaria Pilsner Urquell, em Plzeň",
      "text": "Na cidade onde nasceu a cerveja pilsner em 1842, a visita termina nas adegas subterrâneas com uma degustação."
    }
  ],
  "ro": [
    {
      "type": "know",
      "title": "Na Romênia existe um \"Cemitério Alegre\"!",
      "text": "Em Săpânța, cruzes de madeira pintadas em cores vivas trazem versos bem-humorados sobre a vida de quem está enterrado."
    },
    {
      "type": "do",
      "title": "Visitar os mosteiros pintados da Bucovina",
      "text": "Igrejas do século XVI têm paredes externas cobertas de afrescos coloridos com cenas bíblicas, e fazem parte do patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Atravessar de carro a estrada Transfăgărășan",
      "text": "Uma das estradas de montanha mais espetaculares da Europa serpenteia pelos Cárpatos, e fica aberta apenas durante o verão."
    }
  ],
  "ru": [
    {
      "type": "know",
      "title": "O lago Baikal é o mais profundo do planeta!",
      "text": "Na Sibéria, o lago passa de 1.600 metros de profundidade, tem milhões de anos e abriga espécies que só existem lá, como a foca-do-Baikal."
    },
    {
      "type": "do",
      "title": "Visitar o Museu Hermitage, em São Petersburgo",
      "text": "O museu ocupa o antigo Palácio de Inverno dos czares e reúne uma coleção enorme de arte europeia."
    },
    {
      "type": "do",
      "title": "Descobrir as estações do metrô de Moscou",
      "text": "Muitas estações foram decoradas como palácios, com mosaicos, estátuas e lustres, como Komsomolskaya e Mayakovskaya. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "sm": [
    {
      "type": "know",
      "title": "San Marino se considera a república mais antiga do mundo!",
      "text": "Segundo a tradição, foi fundada no ano 301 pelo pedreiro Marino, e mantém suas instituições há séculos, dentro do monte Titano."
    },
    {
      "type": "do",
      "title": "Percorrer as três torres do monte Titano",
      "text": "Guaita, Cesta e Montale são ligadas por um caminho com vista para a Itália e o mar Adriático, num centro histórico da UNESCO."
    },
    {
      "type": "do",
      "title": "Visitar a Basílica de San Marino",
      "text": "A igreja neoclássica do século XIX fica no centro histórico e guarda relíquias do santo fundador."
    }
  ],
  "rs": [
    {
      "type": "know",
      "title": "O imperador Constantino, o Grande, nasceu em território sérvio!",
      "text": "Constantino nasceu em Naissus, hoje Niš, por volta de 272, e depois legalizou o cristianismo no Império Romano pelo Édito de Milão."
    },
    {
      "type": "do",
      "title": "Passear pela fortaleza de Kalemegdan, em Belgrado",
      "text": "No encontro dos rios Sava e Danúbio, a fortaleza tem muralhas romanas e otomanas e um parque com vista para a cidade."
    },
    {
      "type": "do",
      "title": "Ver as torres de pedra de Đavolja Varoš",
      "text": "Formações rochosas pontiagudas, que parecem uma cidade do diabo, surgem numa área protegida no sul do país."
    }
  ],
  "se": [
    {
      "type": "know",
      "title": "Um navio de guerra afundou na viagem inaugural e foi içado após 333 anos!",
      "text": "O Vasa, lançado em Estocolmo em 1628, afundou depois de navegar cerca de 1 km. Foi recuperado em 1961 e está bem conservado."
    },
    {
      "type": "do",
      "title": "Dormir num hotel de gelo em Jukkasjärvi",
      "text": "O Icehotel é refeito todo inverno com gelo do rio Torne, com quartos e esculturas de gelo na Lapônia sueca."
    },
    {
      "type": "do",
      "title": "Fazer uma pausa para fika em Gamla Stan",
      "text": "Na cidade velha de Estocolmo, a tradição sueca do café com um doce, a fika, é um ritual social em cafés históricos."
    }
  ],
  "ch": [
    {
      "type": "know",
      "title": "O código CH da Suíça vem do nome em latim!",
      "text": "O país se chama oficialmente Confoederatio Helvetica, e o latim é usado em moedas e selos para evitar privilegiar uma das quatro línguas nacionais."
    },
    {
      "type": "do",
      "title": "Ver o Matterhorn em Zermatt",
      "text": "A montanha em forma de pirâmide, com mais de 4.400 metros, domina a pequena vila de Zermatt, onde não circulam carros a gasolina."
    },
    {
      "type": "do",
      "title": "Viajar no Glacier Express",
      "text": "O trem panorâmico cruza pontes e túneis pelos Alpes, entre Zermatt e St. Moritz, com janelas amplas."
    }
  ],
  "ua": [
    {
      "type": "know",
      "title": "Em Kiev fica uma das estações de metrô mais profundas do mundo!",
      "text": "A estação Arsenalna fica a cerca de 105 metros de profundidade, e a escada rolante leva vários minutos para chegar à plataforma."
    },
    {
      "type": "do",
      "title": "Visitar a Catedral de Santa Sofia, em Kiev",
      "text": "A catedral do século XI, Patrimônio Mundial da UNESCO, guarda mosaicos e afrescos bizantinos originais."
    },
    {
      "type": "do",
      "title": "Passear pelo centro histórico de Lviv",
      "text": "A cidade, Patrimônio Mundial da UNESCO, tem praças, igrejas barrocas e cafés tradicionais. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "va": [
    {
      "type": "know",
      "title": "A Guarda Suíça protege o papa desde 1506!",
      "text": "O corpo de soldados com uniformes coloridos é um dos exércitos mais antigos ainda em atividade, e seus integrantes vêm da Suíça."
    },
    {
      "type": "do",
      "title": "Ver o teto da Capela Sistina",
      "text": "Pintado por Michelangelo no início do século XVI, o teto mostra cenas do Gênesis e é uma das obras mais famosas da arte ocidental."
    },
    {
      "type": "do",
      "title": "Subir à cúpula da Basílica de São Pedro",
      "text": "Os degraus levam ao topo da cúpula projetada por Michelangelo, de onde se vê a Praça de São Pedro e Roma."
    }
  ],
  "af": [
    {
      "type": "know",
      "title": "Uma torre de tijolos de 800 anos resiste isolada num vale remoto!",
      "text": "O Minarete de Jam, construído no século XII, tem cerca de 65 metros de altura e é coberto por inscrições em tijolo e turquesa. Fica num vale profundo, cercado por montanhas, e é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Veja lagos azul-turquesa separados por muros naturais de pedra",
      "text": "Band-e Amir, primeiro parque nacional do país, reúne uma série de lagos de cor intensa represados por barragens naturais de travertino, formadas por depósitos minerais da própria água."
    },
    {
      "type": "do",
      "title": "Conheça o vale de Bamiyan e os nichos dos gigantescos Budas",
      "text": "Bamiyan é um conjunto cultural da UNESCO com mosteiros e grutas budistas escavados nas falésias, e os imensos nichos onde ficavam os Budas. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "sa": [
    {
      "type": "know",
      "title": "Um dos maiores países do mundo não tem um único rio permanente!",
      "text": "Apesar de seu enorme território, a Arábia Saudita não possui rios perenes. A água vem de aquíferos subterrâneos, de chuvas esparsas em wadis e, hoje, em grande parte da dessalinização da água do mar."
    },
    {
      "type": "do",
      "title": "Explore tumbas nabateias esculpidas na rocha em Hegra",
      "text": "Hegra, também chamada Madain Salih, foi o primeiro sítio da Arábia Saudita inscrito na UNESCO. Tem mais de uma centena de tumbas monumentais talhadas em afloramentos de arenito pelos nabateus, o mesmo povo de Petra."
    },
    {
      "type": "do",
      "title": "Caminhe até a Borda do Mundo, uma falésia gigantesca no deserto",
      "text": "Perto de Riade, a escarpa de Jebel Fihrayn despenca em penhascos de centenas de metros sobre uma planície infinita. Faz parte da escarpa de Tuwaiq e é um dos passeios de aventura mais conhecidos do país."
    }
  ],
  "am": [
    {
      "type": "know",
      "title": "A Armênia foi o primeiro país a adotar o cristianismo como religião oficial!",
      "text": "Segundo a tradição, em 301 d.C. o rei Tiridates III proclamou o cristianismo religião do Estado, convertido por São Gregório, o Iluminador. Isso aconteceu antes do Império Romano fazer o mesmo."
    },
    {
      "type": "do",
      "title": "Visite o mosteiro de Geghard, em parte escavado dentro da montanha",
      "text": "Geghard, Patrimônio da UNESCO, tem capelas e câmaras talhadas diretamente na rocha, com acústica impressionante. O nome significa \"lança\" e remete a uma relíquia que teria sido guardada ali."
    },
    {
      "type": "do",
      "title": "Aprenda a assar lavash, o pão fino armênio tradicional",
      "text": "O lavash é cozido nas paredes de um forno de barro enterrado, o tonir. A tradição de preparar e compartilhar esse pão foi reconhecida pela UNESCO como Patrimônio Cultural Imaterial."
    }
  ],
  "az": [
    {
      "type": "know",
      "title": "Perto de Baku foi perfurado um dos primeiros poços de petróleo do mundo!",
      "text": "Em 1846, na região de Bibi-Heybat, na península de Absheron, foi perfurado um poço de petróleo em escala industrial, mais de uma década antes do famoso poço de Drake, nos Estados Unidos."
    },
    {
      "type": "do",
      "title": "Veja a Yanar Dag, uma encosta que queima sem parar",
      "text": "Na península de Absheron, o gás natural sai do solo e alimenta chamas na encosta de uma colina, que ardem continuamente. Ao anoitecer o espetáculo fica ainda mais impressionante."
    },
    {
      "type": "do",
      "title": "Procure milhares de petróglifos pré-históricos em Gobustão",
      "text": "O Parque Nacional de Gobustão, Patrimônio da UNESCO, guarda mais de seis mil gravuras rupestres feitas ao longo de milhares de anos, com figuras de caçadores, barcos e animais."
    }
  ],
  "bh": [
    {
      "type": "know",
      "title": "Bahrein tem uma das maiores necrópoles da Antiguidade, com dezenas de milhares de túmulos!",
      "text": "Os montes funerários da civilização Dilmun espalham-se pela ilha principal, formando um dos maiores cemitérios antigos do mundo, com túmulos de milhares de anos."
    },
    {
      "type": "do",
      "title": "Siga a Trilha das Pérolas pelas ruas históricas de Muharraq",
      "text": "O percurso da UNESCO liga casas de mercadores, lojas e edifícios ligados à antiga economia do mergulho de pérolas, que dominou a região antes do petróleo e foi referência mundial em qualidade."
    },
    {
      "type": "do",
      "title": "Visite a Árvore da Vida, que sobrevive sozinha no deserto",
      "text": "Um mesquite solitário, com séculos de idade, cresce em plena areia, longe de qualquer fonte de água visível. Como consegue sobreviver ali é um mistério que atrai curiosos até hoje."
    }
  ],
  "bd": [
    {
      "type": "know",
      "title": "O Dia Internacional da Língua Materna nasceu de uma luta em Daca!",
      "text": "Em 21 de fevereiro de 1952, estudantes foram mortos em Daca ao protestar pelo reconhecimento do bengali. A UNESCO escolheu a data como Dia Internacional da Língua Materna, por proposta de Bangladesh."
    },
    {
      "type": "do",
      "title": "Navegue pelos Sundarbans, a maior floresta de manguezal contínua do mundo",
      "text": "Compartilhado com a Índia, esse labirinto de canais e ilhas é o lar do tigre-de-bengala. Passeios de barco permitem ver aves, macacos e crocodilos entre as raízes aéreas."
    },
    {
      "type": "do",
      "title": "Visite a Mesquita das Sessenta Cúpulas, em Bagerhat",
      "text": "Construída no século XV, é uma das maiores mesquitas históricas do país, feita de tijolo, com dezenas de cúpulas. Faz parte da cidade histórica de Bagerhat, Patrimônio Mundial da UNESCO."
    }
  ],
  "bn": [
    {
      "type": "know",
      "title": "Brunei é dividido em duas partes separadas por outro país!",
      "text": "O território do sultanato está cortado em dois pedaços pelo distrito malaio de Limbang, que pertence à Malásia. Para ir de uma parte à outra por terra, é preciso passar por outro país."
    },
    {
      "type": "do",
      "title": "Passeie de barco por Kampong Ayer, a aldeia sobre palafitas",
      "text": "Dezenas de bairros de casas sobre estacas, ligados por passarelas, ocupam o rio Brunei desde séculos atrás. Táxis aquáticos levam os visitantes por entre as moradias, escolas e mesquitas flutuantes."
    },
    {
      "type": "do",
      "title": "Caminhe pelas copas das árvores no Parque Nacional Ulu Temburong",
      "text": "Uma passarela suspensa leva os visitantes acima do dossel da floresta tropical de Bornéu, com vista para a mata intacta. O acesso ao parque é feito por barco longo pelo rio."
    }
  ],
  "bt": [
    {
      "type": "know",
      "title": "O Butão mede o progresso do país pela felicidade, não só pela riqueza!",
      "text": "O conceito de Felicidade Interna Bruta foi formulado nos anos 1970 pelo quarto rei, Jigme Singye Wangchuck, e orienta políticas públicas do país, ao lado de pilares como cultura, meio ambiente e boa governança."
    },
    {
      "type": "do",
      "title": "Suba até o Ninho do Tigre, o mosteiro pendurado num penhasco",
      "text": "Paro Taktsang, ou Ninho do Tigre, fica a cerca de 900 metros acima do vale de Paro. A trilha leva algumas horas e termina em um mosteiro colado à rocha vertical."
    },
    {
      "type": "do",
      "title": "Conheça o Dzong de Punakha, na junção de dois rios",
      "text": "Essa fortaleza-mosteiro do século XVII fica na confluência dos rios Pho Chhu e Mo Chhu. É conhecida por seus pátios, madeiras entalhadas e pela ponte suspensa de acesso."
    }
  ],
  "kh": [
    {
      "type": "know",
      "title": "A bandeira do Camboja é a única do mundo com um edifício desenhado!",
      "text": "Ao centro da bandeira nacional aparece o templo de Angkor Wat, símbolo máximo do país, construído no século XII pelo rei Suryavarman II e dedicado originalmente ao deus hindu Vishnu."
    },
    {
      "type": "do",
      "title": "Veja o nascer do sol sobre Angkor Wat",
      "text": "Na maior estrutura religiosa do mundo, o amanhecer ilumina as cinco torres em forma de botão de lótus, refletidas nos lagos. Perto dali ficam Ta Prohm, tomado por raízes de árvores, e Angkor Thom."
    },
    {
      "type": "do",
      "title": "Visite as vilas flutuantes do lago Tonlé Sap",
      "text": "O rio Tonlé Sap inverte seu fluxo todo ano na estação das chuvas, expandindo o lago enormemente. Comunidades inteiras vivem em casas flutuantes e palafitas que acompanham a subida e descida das águas."
    }
  ],
  "kz": [
    {
      "type": "know",
      "title": "Os foguetes que levam astronautas ao espaço decolam do Cazaquistão!",
      "text": "O Cosmódromo de Baikonur, no Cazaquistão, é o mais antigo do mundo. De lá saíram o Sputnik, em 1957, e Yuri Gagarin, em 1961. O local é arrendado pela Rússia."
    },
    {
      "type": "do",
      "title": "Caminhe pelo Cânion Charyn, o primo cazaque do Grand Canyon",
      "text": "Esculpido há milhões de anos pelo rio Charyn, o cânion exibe formações avermelhadas, entre elas o Vale dos Castelos. Uma trilha desce até o rio, onde há bosques raros de freixos antigos."
    },
    {
      "type": "do",
      "title": "Veja o lago Kaindy, onde árvores brotam de dentro da água azul",
      "text": "Formado por um deslizamento de terra após um terremoto no início do século XX, o lago afogou um bosque de abetos. Os troncos continuam em pé sob a água turquesa gelada, atraindo mergulhadores."
    }
  ],
  "cn": [
    {
      "type": "know",
      "title": "Camponeses abrindo um poço descobriram um exército de milhares de soldados de barro!",
      "text": "Em 1974, agricultores de Xi'an acharam o Exército de Terracota, que guarda o mausoléu do primeiro imperador, Qin Shi Huang. Cada guerreiro tem feições diferentes, e muitos ainda estão sob a terra."
    },
    {
      "type": "do",
      "title": "Caminhe pela Grande Muralha em Mutianyu",
      "text": "O trecho de Mutianyu, restaurado e cercado de florestas, fica a cerca de uma hora de Pequim. Dá para subir de teleférico, caminhar entre as torres de vigia e descer de tobogã."
    },
    {
      "type": "do",
      "title": "Visite pandas-gigantes na base de pesquisa de Chengdu",
      "text": "O centro de criação e pesquisa de Chengdu ajuda a conservar pandas-gigantes, ameaçados de extinção. Os melhores horários para vê-los comendo bambu e brincando são as primeiras horas da manhã."
    }
  ],
  "kp": [
    {
      "type": "know",
      "title": "Há 1.000 anos, um vulcão sagrado da Coreia do Norte teve uma erupção colossal!",
      "text": "Por volta do ano 946, o Monte Paektu, na fronteira com a China, entrou em erupção e formou a caldeira que hoje abriga o lago Cheonji. Foi uma das maiores erupções do último milênio."
    },
    {
      "type": "do",
      "title": "Conheça as tumbas do reino de Koguryo, com pinturas de 1.500 anos",
      "text": "Os túmulos de Koguryo, Patrimônio da UNESCO, guardam murais de cores vivas com cenas de caça, dança e vida cotidiana do antigo reino, que dominou a região entre os séculos I a.C. e VII d.C."
    },
    {
      "type": "do",
      "title": "Explore as montanhas Myohyang e seu templo budista milenar",
      "text": "Cobertas de florestas e cachoeiras, as montanhas abrigam o templo Pohyon, fundado no século XI, com pagodes e pavilhões de madeira. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "kr": [
    {
      "type": "know",
      "title": "O alfabeto coreano foi criado por um rei, e se sabe exatamente quando!",
      "text": "O hangul foi desenvolvido por ordem do rei Sejong, o Grande, e promulgado em 1446 para que o povo comum aprendesse a ler com facilidade. A data é celebrada todo ano no Dia do Hangul."
    },
    {
      "type": "do",
      "title": "Assista à troca da guarda no palácio Gyeongbokgung, em Seul",
      "text": "Construído em 1395, é o maior dos cinco grandes palácios da dinastia Joseon. A cerimônia reproduz a troca de guardas reais, com trajes tradicionais e tambores."
    },
    {
      "type": "do",
      "title": "Conheça as mergulhadoras haenyeo na ilha de Jeju",
      "text": "As haenyeo, mulheres do mar, mergulham sem cilindro de oxigênio para colher frutos do mar. Sua tradição é Patrimônio Imaterial da UNESCO, e dá para provar o resultado em restaurantes locais."
    }
  ],
  "ae": [
    {
      "type": "know",
      "title": "Abu Dhabi tem um hospital só para falcões!",
      "text": "A falcoaria é uma tradição ancestral dos beduínos, reconhecida pela UNESCO. O Hospital de Falcões de Abu Dhabi trata centenas de aves por ano e tem visitas guiadas para o público."
    },
    {
      "type": "do",
      "title": "Visite a Grande Mesquita Sheikh Zayed",
      "text": "Uma das maiores mesquitas do mundo, com 82 cúpulas brancas, colunas de mármore e um dos maiores tapetes feitos à mão. Visitas guiadas são abertas a não muçulmanos."
    },
    {
      "type": "do",
      "title": "Faça um safári nas dunas do deserto de Liwa",
      "text": "O Liwa abriga dunas gigantes, entre elas a Moreeb, uma das mais altas do país. Passeios de 4x4 e acampamentos noturnos mostram o deserto de areia vermelha sob o céu estrelado."
    }
  ],
  "ph": [
    {
      "type": "know",
      "title": "O navegador Fernão de Magalhães morreu nas Filipinas, antes de completar a volta ao mundo!",
      "text": "Em 1521, ele foi morto na batalha de Mactan pelas forças do líder local Lapulapu. Seus companheiros, comandados por Elcano, seguiram viagem e concluíram a primeira circum-navegação do planeta."
    },
    {
      "type": "do",
      "title": "Navegue em um rio subterrâneo em Puerto Princesa, na ilha de Palawan",
      "text": "Esse rio corre por uma caverna de calcário e deságua direto no mar. É Patrimônio da UNESCO, foi eleito uma das Novas Sete Maravilhas da Natureza e é percorrido em canoas pequenas."
    },
    {
      "type": "do",
      "title": "Contemple os terraços de arroz de Batad, esculpidos nas montanhas",
      "text": "Os terraços de arroz de Ifugao foram construídos pelas mãos de povos indígenas há centenas de anos. Em Batad, eles formam um anfiteatro verde que se vê em caminhadas pelo vale."
    }
  ],
  "ge": [
    {
      "type": "know",
      "title": "A Geórgia tem um alfabeto único, com formas inconfundíveis!",
      "text": "Os georgianos usam um sistema de escrita próprio, com letras arredondadas que não se parecem com nenhum outro. O mkhedruli é usado hoje, e a escrita faz parte do patrimônio cultural do país."
    },
    {
      "type": "do",
      "title": "Prove vinho feito em qvevri, as ânforas enterradas, em Kakheti",
      "text": "A Geórgia é um dos berços do vinho, com vestígios arqueológicos de cerca de 8 mil anos. O método tradicional de fermentar em jarras de barro enterradas é Patrimônio Imaterial da UNESCO."
    },
    {
      "type": "do",
      "title": "Visite as torres medievais de pedra de Svaneti",
      "text": "Na região montanhosa de Svaneti, vilas como Ushguli guardam torres defensivas de pedra construídas na Idade Média. O conjunto é Patrimônio Mundial e fica aos pés das altas montanhas do Cáucaso."
    }
  ],
  "in": [
    {
      "type": "know",
      "title": "O xadrez nasceu na Índia, com outro nome!",
      "text": "O jogo surgiu no norte da Índia por volta do século VI como chaturanga, que representava os quatro corpos do exército: infantaria, cavalaria, elefantes e carros. Dali viajou para a Pérsia e a Europa."
    },
    {
      "type": "do",
      "title": "Veja o Taj Mahal ao amanhecer, em Agra",
      "text": "Construído no século XVII pelo imperador Shah Jahan em homenagem à esposa Mumtaz Mahal, o mausoléu de mármore branco muda de tom conforme a luz do dia."
    },
    {
      "type": "do",
      "title": "Navegue pelos canais de Kerala em uma casa-barco",
      "text": "Nos backwaters de Kerala, antigos barcos de carga de arroz foram adaptados como hospedagem. O passeio passa por vilas, coqueirais e campos de arroz, com refeições típicas servidas a bordo."
    }
  ],
  "id": [
    {
      "type": "know",
      "title": "Uma erupção na Indonésia causou o \"ano sem verão\" no mundo todo!",
      "text": "Em 1815, o vulcão Tambora explodiu e lançou tanto material na atmosfera que 1816 teve temperaturas baixas e colheitas arruinadas na Europa e na América do Norte. Foi uma das maiores erupções da história."
    },
    {
      "type": "do",
      "title": "Visite o templo de Borobudur ao nascer do sol, em Java",
      "text": "Construído por volta do século IX, é o maior templo budista do mundo. Seus terraços de pedra têm mais de 2.600 painéis esculpidos e centenas de estátuas de Buda."
    },
    {
      "type": "do",
      "title": "Veja os dragões-de-komodo em seu habitat, no Parque Nacional de Komodo",
      "text": "Os maiores lagartos do mundo vivem em poucas ilhas indonésias. Caminhadas com guardas do parque permitem observá-los, e os mergulhos na região mostram recifes de coral de rara riqueza."
    }
  ],
  "ir": [
    {
      "type": "know",
      "title": "Há milhares de anos, o Irã construía túneis para levar água por quilômetros no deserto!",
      "text": "Os qanats são galerias subterrâneas inclinadas que captam água do subsolo e a conduzem à superfície sem bombas. Os qanats persas são Patrimônio da UNESCO e alguns ainda funcionam."
    },
    {
      "type": "do",
      "title": "Passeie entre as colunas de Persépolis, capital cerimonial do Império Persa",
      "text": "Fundada por Dario I por volta de 518 a.C., Persépolis tem escadarias, salões de colunas e baixos-relevos de delegações de todo o império. É Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Admire a praça Naqsh-e Jahan, em Isfahan, cercada de mesquitas e palácios",
      "text": "Um dos maiores espaços públicos do mundo, concluído no século XVII, tem cúpulas azulejadas, arcadas e bazares. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "iq": [
    {
      "type": "know",
      "title": "A escrita foi inventada onde hoje fica o Iraque!",
      "text": "Na antiga Suméria, por volta de 3300 a.C., a cidade de Uruk viu surgir os primeiros registros em tabletes de argila, que evoluíram para a escrita cuneiforme. Ela foi usada por milênios."
    },
    {
      "type": "do",
      "title": "Visite o zigurate de Ur, templo de mais de 4 mil anos",
      "text": "Construído por volta de 2100 a.C., na cidade de Ur, o zigurate era dedicado ao deus lunar Nanna. Seus degraus de tijolos são um dos monumentos mais bem preservados da Mesopotâmia."
    },
    {
      "type": "do",
      "title": "Conheça os pântanos de Ahwar, onde vivem comunidades em casas de junco",
      "text": "No sul do país, os pântanos mesopotâmicos são Patrimônio da UNESCO. Moradores constroem casas de junco e viajam em barcos tradicionais, numa tradição que vem de milênios. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "il": [
    {
      "type": "know",
      "title": "O hebraico foi uma língua quase só de livros e voltou a ser falada!",
      "text": "No fim do século XIX, Eliezer Ben-Yehuda liderou o movimento para ressuscitar o hebraico como língua do dia a dia. Hoje é a língua oficial de Israel, falada por milhões de pessoas."
    },
    {
      "type": "do",
      "title": "Flutue nas águas do Mar Morto",
      "text": "A concentração de sal é tão alta que o corpo boia sem esforço. A região fica no ponto mais baixo da superfície terrestre emersa, e a lama local é famosa por seus usos em tratamentos de beleza."
    },
    {
      "type": "do",
      "title": "Caminhe pela Cidade Velha de Jerusalém, sagrada para três religiões",
      "text": "Em poucos quarteirões estão o Muro das Lamentações, a Basílica do Santo Sepulcro e a Cúpula da Rocha, Patrimônio da UNESCO. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "jp": [
    {
      "type": "know",
      "title": "A Nintendo foi fundada em 1889 para fabricar baralhos!",
      "text": "A empresa começou produzindo cartas hanafuda, o jogo tradicional japonês, em Kyoto. Só décadas depois entrou no mercado de brinquedos e, mais tarde, de videogames."
    },
    {
      "type": "do",
      "title": "Atravesse os milhares de portais vermelhos do santuário Fushimi Inari, em Kyoto",
      "text": "Uma trilha sobe a montanha sob túneis de torii laranja-avermelhados, doados por empresas e pessoas. O santuário é dedicado a Inari, kami do arroz e da prosperidade."
    },
    {
      "type": "do",
      "title": "Visite a ilha de Naoshima, uma ilha-museu de arte contemporânea",
      "text": "No Mar Interior, a ilha reúne museus projetados por Tadao Ando e esculturas ao ar livre, como a famosa abóbora amarela de Yayoi Kusama à beira-mar."
    }
  ],
  "jo": [
    {
      "type": "know",
      "title": "Na Jordânia fica o local onde Jesus teria sido batizado!",
      "text": "Betânia além do Jordão, junto ao rio Jordão, é reconhecida pela tradição cristã e pela arqueologia como o lugar do batismo de Jesus. O sítio, com ruínas de igrejas antigas, é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Entre pelo desfiladeiro e descubra o Tesouro de Petra",
      "text": "A cidade nabateia esculpida em arenito rosado é acessada por um corredor estreito chamado Siq. Ao final surge a fachada do Al-Khazneh, o Tesouro, com cerca de 40 metros de altura."
    },
    {
      "type": "do",
      "title": "Durma em um acampamento sob as estrelas no deserto de Wadi Rum",
      "text": "O Vale da Lua tem paredões de arenito e dunas avermelhadas. Passeios de jipe e camelo levam a arcos de pedra, e o céu noturno é tão limpo que se enxerga a Via Láctea."
    }
  ],
  "kw": [
    {
      "type": "know",
      "title": "O símbolo mais famoso do Kuwait é, na verdade, uma caixa-d'água gigante!",
      "text": "As Torres do Kuwait, inauguradas em 1979, guardam água em suas esferas. A maior delas também abriga um restaurante e um mirante giratório com vista para o Golfo Pérsico."
    },
    {
      "type": "do",
      "title": "Visite a Grande Mesquita do Kuwait",
      "text": "A maior mesquita do país tem uma grande cúpula dourada decorada, e abre para visitas guiadas a visitantes de outras religiões. A decoração mistura arabescos e caligrafia."
    },
    {
      "type": "do",
      "title": "Explore a ilha de Failaka e suas ruínas gregas",
      "text": "No Golfo, a ilha conserva ruínas de um assentamento do período helenístico, ligado ao reinado de Alexandre, o Grande, e sucessores. O local era conhecido como Ikaros."
    }
  ],
  "la": [
    {
      "type": "know",
      "title": "No Laos há milhares de jarras gigantes de pedra espalhadas por planaltos!",
      "text": "Na Planície das Jarras, mais de duas mil jarras megalíticas, algumas com mais de 2 metros, foram esculpidas há cerca de 2 mil anos. Ninguém sabe ao certo seu uso, talvez funerário. O sítio é da UNESCO."
    },
    {
      "type": "do",
      "title": "Acompanhe a oferenda de alimentos aos monges em Luang Prabang",
      "text": "Ao amanhecer, centenas de monges de túnicas alaranjadas percorrem as ruas recebendo arroz dos moradores. É uma tradição budista de respeito, e a cidade é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Banhe-se nas piscinas azul-turquesa da cachoeira Kuang Si",
      "text": "A água cai em degraus de calcário e forma piscinas de tom azul-leitoso nas quais é permitido nadar. O parque também abriga um centro de resgate de ursos-negros-asiáticos."
    }
  ],
  "lb": [
    {
      "type": "know",
      "title": "A palavra \"Bíblia\" vem do nome de uma cidade libanesa!",
      "text": "Biblos, uma das cidades habitadas continuamente há mais tempo no mundo, exportava papiro aos gregos, que chamavam o papiro e o livro de byblos. Dali vem a palavra \"bíblia\", ou \"livros\"."
    },
    {
      "type": "do",
      "title": "Veja os templos romanos gigantes de Baalbek",
      "text": "Baalbek tem os restos do Templo de Júpiter, com colunas de cerca de 20 metros de altura, entre as maiores do mundo antigo. O sítio é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Caminhe pelo vale de Qadisha, ao lado do que restou dos cedros milenares",
      "text": "O vale santo guarda mosteiros esculpidos nas encostas e o bosque dos Cedros de Deus, cujas árvores simbolizam o país e aparecem na bandeira. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "my": [
    {
      "type": "know",
      "title": "As Torres Petronas foram os prédios mais altos do mundo!",
      "text": "De 1998 a 2004, as torres gêmeas de Kuala Lumpur, com 452 metros, ocuparam o posto de edifícios mais altos do planeta. Ainda hoje são as torres gêmeas mais altas do mundo."
    },
    {
      "type": "do",
      "title": "Suba os 272 degraus coloridos das Cavernas Batu",
      "text": "Perto de Kuala Lumpur, uma escadaria arco-íris leva a uma gigantesca caverna de calcário usada como templo hindu, guardada por uma estátua dourada de Murugan com 42 metros."
    },
    {
      "type": "do",
      "title": "Caminhe sobre as copas das árvores no Parque Nacional Taman Negara",
      "text": "Uma das florestas tropicais mais antigas do mundo tem uma longa passarela suspensa entre as árvores. Trilhas e passeios de barco mostram a vida selvagem no interior da Península Malaia."
    }
  ],
  "mv": [
    {
      "type": "know",
      "title": "As Maldivas são o país mais plano e baixo do planeta!",
      "text": "O país tem cerca de mil ilhas de coral espalhadas em atóis, e seu ponto mais alto fica a poucos metros do nível do mar. Por isso o futuro dessas ilhas está ligado ao clima."
    },
    {
      "type": "do",
      "title": "Mergulhe com mantas gigantes na baía de Hanifaru, no atol de Baa",
      "text": "A baía, reserva da biosfera da UNESCO, reúne dezenas de arraias-mantas e tubarões-baleia atraídos pela concentração de plâncton. Há regras para proteger os animais."
    },
    {
      "type": "do",
      "title": "Visite a Mesquita Hukuru Miskiy, em Malé",
      "text": "Construída em 1656 com blocos de coral esculpidos e madeira laqueada, é a mais antiga mesquita da capital, famosa pelos entalhes decorativos."
    }
  ],
  "mm": [
    {
      "type": "know",
      "title": "Os pescadores do lago Inle remam com uma perna!",
      "text": "Em pé na ponta do barco, enrolam a perna em volta do remo para manter as mãos livres para pescar com redes cônicas. É um estilo de remada único, característico dos pescadores locais."
    },
    {
      "type": "do",
      "title": "Veja os milhares de templos de tijolos da planície de Bagan",
      "text": "Entre os séculos XI e XIII, Bagan foi capital de um reino que ergueu milhares de templos e pagodes, e muitos ainda estão de pé na planície. É Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Conheça o pagode Shwedagon, em Yangon, coberto de folhas de ouro",
      "text": "Com uma estupa dourada de cerca de 100 metros, é o templo mais sagrado do país. Ao entardecer, o complexo brilha, e os fiéis rezam em torno dele. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "mn": [
    {
      "type": "know",
      "title": "O túmulo de Gengis Khan nunca foi encontrado!",
      "text": "O fundador do Império Mongol morreu em 1227. Segundo a tradição, foi enterrado em local secreto, e até hoje arqueólogos não localizaram sua sepultura, que seria numa região remota do país."
    },
    {
      "type": "do",
      "title": "Assista ao Naadam, o festival de luta, arco e flecha e corrida de cavalos",
      "text": "Realizado todo verão, o Naadam reúne os \"três jogos de homens\" da tradição mongol e é Patrimônio Imaterial da UNESCO. Em Ulan Bator, a cerimônia de abertura é grandiosa."
    },
    {
      "type": "do",
      "title": "Visite os Penhascos Flamejantes, onde foram achados ovos de dinossauro",
      "text": "No deserto de Gobi, as rochas avermelhadas de Bayanzag foram palco, em 1923, de descobertas de ovos de dinossauro por uma expedição liderada por Roy Chapman Andrews."
    }
  ],
  "np": [
    {
      "type": "know",
      "title": "A bandeira do Nepal é a única nacional que não é retangular!",
      "text": "Formada por dois triângulos sobrepostos, representa as montanhas do Himalaia e as duas grandes religiões do país, o hinduísmo e o budismo."
    },
    {
      "type": "do",
      "title": "Faça a trilha até o acampamento base do Everest",
      "text": "Partindo de Lukla, a caminhada de cerca de duas semanas passa por vilas sherpas, mosteiros e pontes suspensas, até aos pés da montanha mais alta do mundo."
    },
    {
      "type": "do",
      "title": "Faça um safári no Parque Nacional de Chitwan",
      "text": "Nas planícies do sul, é possível observar rinocerontes-indianos, crocodilos-gaviais e, com sorte, tigres-de-bengala, em passeios de jipe ou canoas. O parque é Patrimônio da UNESCO."
    }
  ],
  "om": [
    {
      "type": "know",
      "title": "Omã é a terra do olíbano, a resina perfumada que enriqueceu reis!",
      "text": "A região de Dhofar produz o incenso mais valorizado da Antiguidade, vendido em rotas comerciais até Roma e Egito. A Terra do Olíbano é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Visite a Grande Mesquita do Sultão Qaboos, em Mascate",
      "text": "Inaugurada em 2001, tem salão de oração coberto por um dos maiores tapetes persas de uma só peça e um lustre de cristal Swarovski gigante."
    },
    {
      "type": "do",
      "title": "Nade e caminhe pelo desfiladeiro de Wadi Shab",
      "text": "Uma trilha pelo leito do wadi leva a piscinas verde-esmeralda, e dali se nada até uma caverna com cachoeira escondida. É um dos passeios mais conhecidos do país."
    }
  ],
  "pk": [
    {
      "type": "know",
      "title": "Há 4.500 anos, o Paquistão já tinha cidades planejadas, com esgoto!",
      "text": "Mohenjo-daro, da civilização do Vale do Indo, tinha ruas em grade, casas de tijolo padronizado e sistema de drenagem. Hoje é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Visite o Forte de Lahore, palácio dos imperadores mogóis",
      "text": "Com séculos de história, o forte guarda pátios, o Salão dos Espelhos (Sheesh Mahal) e o Portão Alamgiri. Faz parte, com os Jardins de Shalimar, de um sítio da UNESCO."
    },
    {
      "type": "do",
      "title": "Viaje pelo vale de Hunza, ao pé das gigantes montanhas do Karakoram",
      "text": "Conhecido pelos pomares de damasco e pelos fortes de Baltit e Altit, o vale oferece vistas de picos como Rakaposhi. A estrada Karakoram é uma das mais altas do mundo."
    }
  ],
  "qa": [
    {
      "type": "know",
      "title": "No Qatar, as corridas de camelo são conduzidas por jóqueis-robôs!",
      "text": "Para proteger crianças que antes montavam os animais, os camelos agora levam pequenos robôs controlados por rádio, com a direção dada pelos donos que acompanham a corrida de carro."
    },
    {
      "type": "do",
      "title": "Visite o Museu de Arte Islâmica de Doha, projeto de I. M. Pei",
      "text": "Construído em uma ilha artificial, o edifício geométrico guarda séculos de arte islâmica, de cerâmicas a manuscritos, com vista para a baía de Doha."
    },
    {
      "type": "do",
      "title": "Veja o Mar Interior, onde as dunas encontram o mar",
      "text": "Em Khor Al Adaid, uma baía de água salgada cercada por dunas altas forma uma paisagem rara, onde o deserto encontra o golfo. Os passeios de 4x4 pelas dunas são o programa clássico."
    }
  ],
  "kg": [
    {
      "type": "know",
      "title": "A bandeira do Quirguistão exibe o teto de uma yurt!",
      "text": "No centro do sol dourado há o tunduk, o aro que fica no topo das yurts, as tendas nômades, símbolo do lar e da vida tradicional quirguiz."
    },
    {
      "type": "do",
      "title": "Banhe-se no lago Issyk-Kul, um dos maiores lagos de montanha do mundo",
      "text": "Cercado por picos nevados, o lago nunca congela, apesar de ficar a mais de 1.600 metros de altitude, porque sua água é levemente salgada e profunda."
    },
    {
      "type": "do",
      "title": "Passe a noite em uma yurt no lago Song-Kol",
      "text": "No verão, pastores levam rebanhos para pastos de altitude e recebem visitantes em yurts, com cavalgadas pelos campos verdes e leite de égua fermentado."
    }
  ],
  "sy": [
    {
      "type": "know",
      "title": "Um dos primeiros alfabetos do mundo foi encontrado na Síria!",
      "text": "Em Ugarit, cidade da Idade do Bronze, foram achados tabletes de argila com um alfabeto cuneiforme de 30 sinais, usado por volta de 1400 a.C., um dos mais antigos conhecidos."
    },
    {
      "type": "do",
      "title": "Conheça o Krak dos Cavaleiros, uma das mais bem preservadas fortalezas cruzadas",
      "text": "Ocupado pelos Cavaleiros Hospitalários a partir de 1142, o castelo tem muralhas duplas e salões abobadados, e é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Descubra a Cidade Antiga de Damasco, uma das mais antigas habitadas do mundo",
      "text": "Com mesquitas, bazares e casas de pátio, a cidade conserva séculos de história, e a Mesquita dos Omíadas é uma das mais importantes do islã. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "lk": [
    {
      "type": "know",
      "title": "No Sri Lanka vive a árvore plantada mais antiga, com data conhecida!",
      "text": "A figueira sagrada Jaya Sri Maha Bodhi, em Anuradhapura, foi plantada em 288 a.C. e é considerada a árvore de data de plantio documentada mais antiga do mundo."
    },
    {
      "type": "do",
      "title": "Suba a Rocha do Leão, em Sigiriya",
      "text": "Essa fortaleza do século V ergue-se 200 metros acima da selva. No caminho há afrescos, um muro espelhado e jardins, e a vista do topo é imperdível."
    },
    {
      "type": "do",
      "title": "Faça de trem a viagem de Kandy até Ella entre plantações de chá",
      "text": "A viagem de trem passa por montanhas cobertas de chá, cachoeiras e túneis, e é uma das mais belas ferrovias do mundo."
    }
  ],
  "th": [
    {
      "type": "know",
      "title": "A Tailândia foi o único país do Sudeste Asiático que nunca foi colônia europeia!",
      "text": "Entre os séculos XIX e XX, o reino de Sião manteve a independência com diplomacia, equilibrando a pressão da Grã-Bretanha e da França. Seu nome significa \"terra dos livres\"."
    },
    {
      "type": "do",
      "title": "Veja o Buda Reclinado de ouro no templo Wat Pho, em Bangkok",
      "text": "A estátua tem 46 metros de comprimento, e o templo é também a origem da massagem tailandesa tradicional, ainda ensinada e oferecida no local."
    },
    {
      "type": "do",
      "title": "Passeie de barco no lago Cheow Lan, no Parque Nacional de Khao Sok",
      "text": "Entre paredões de calcário cobertos de floresta, bangalôs flutuantes e passeios de canoa levam a cavernas e a áreas de selva tropical muito antiga."
    }
  ],
  "tj": [
    {
      "type": "know",
      "title": "O Tajiquistão tem uma das maiores geleiras de montanha do planeta!",
      "text": "A geleira Fedchenko, nas montanhas Pamir, tem cerca de 77 km de comprimento, a maior geleira fora das regiões polares."
    },
    {
      "type": "do",
      "title": "Percorra a Estrada do Pamir, uma das mais altas do planeta",
      "text": "A rodovia atravessa passos a mais de 4.000 metros, vilas remotas e vales de montanha, num dos roteiros de aventura mais famosos da Ásia Central."
    },
    {
      "type": "do",
      "title": "Nade nos Sete Lagos das montanhas Fan",
      "text": "Cada lago tem uma tonalidade diferente de azul e verde, em um vale de altitude com trilhas leves e pequenas vilas. É uma das paisagens mais fotografadas do país."
    }
  ],
  "tl": [
    {
      "type": "know",
      "title": "Timor-Leste é o único país de língua portuguesa da Ásia!",
      "text": "O português é língua oficial, ao lado do tétum, herança de séculos de colonização portuguesa e da independência em 2002. A maioria da população é católica."
    },
    {
      "type": "do",
      "title": "Suba ao Cristo Rei de Díli, no alto de uma colina com vista para a baía",
      "text": "Uma estátua de 27 metros ergue-se sobre um globo. Os degraus passam por estações da via-sacra, e do topo se vê a cidade e o mar."
    },
    {
      "type": "do",
      "title": "Mergulhe nos recifes da ilha de Atauro, no Triângulo de Corais",
      "text": "A ilha, a curta travessia de barco de Díli, tem uma das maiores diversidades de peixes de recife já registradas em uma única área."
    }
  ],
  "tm": [
    {
      "type": "know",
      "title": "No deserto do Turcomenistão há uma cratera que arde há décadas, a Porta do Inferno!",
      "text": "Darvaza é uma cratera de cerca de 70 metros de diâmetro, onde o gás natural queima continuamente depois de um colapso do terreno durante prospecção de gás na era soviética."
    },
    {
      "type": "do",
      "title": "Veja a Porta do Inferno à noite no deserto de Karakum",
      "text": "Ao anoitecer, a cratera de fogo ilumina o deserto em volta, e é comum acampar por perto para ver as chamas contra o céu estrelado."
    },
    {
      "type": "do",
      "title": "Explore as ruínas da antiga Nisa, fortaleza dos reis partas",
      "text": "Perto de Asgabate, Nisa foi um dos primeiros centros do Império Parta, há mais de 2 mil anos. O sítio é Patrimônio da UNESCO."
    }
  ],
  "tr": [
    {
      "type": "know",
      "title": "O templo mais antigo conhecido foi erguido na Turquia, antes mesmo de existir a agricultura!",
      "text": "Göbekli Tepe, com cerca de 11 mil anos, tem pilares de pedra em T esculpidos com animais, e é anterior a Stonehenge em milhares de anos."
    },
    {
      "type": "do",
      "title": "Sobrevoe a Capadócia de balão ao amanhecer",
      "text": "Entre as chaminés de fadas, formadas pela erosão de rocha vulcânica, centenas de balões sobem ao nascer do sol sobre vales e igrejas rupestres."
    },
    {
      "type": "do",
      "title": "Visite a Hagia Sophia, em Istambul",
      "text": "Construída no século VI como catedral bizantina, depois mesquita e hoje de novo mesquita, tem uma cúpula enorme que parece flutuar."
    }
  ],
  "uz": [
    {
      "type": "know",
      "title": "O Uzbequistão é um dos dois únicos países do mundo duplamente sem litoral!",
      "text": "Para chegar ao mar, é preciso cruzar dois países. O outro país nessa condição é Liechtenstein, na Europa."
    },
    {
      "type": "do",
      "title": "Veja a praça Registan, em Samarcanda",
      "text": "Três madrassas cobertas de azulejos azuis e dourados cercam a praça, que foi o centro da cidade na época de Tamerlão e seus sucessores."
    },
    {
      "type": "do",
      "title": "Perca-se na cidade histórica de Bukhara, na antiga Rota da Seda",
      "text": "Cúpulas, minaretes e mercados cobertos formam um centro histórico com mais de mil anos, Patrimônio da UNESCO."
    }
  ],
  "vn": [
    {
      "type": "know",
      "title": "No Vietnã está uma das maiores cavernas do mundo, tão grande que tem floresta e rio dentro!",
      "text": "A Hang Son Doong, descoberta em 1991 e explorada a fundo a partir de 2009, tem câmaras enormes com árvores crescendo sob claraboias."
    },
    {
      "type": "do",
      "title": "Faça um cruzeiro na baía de Ha Long, entre ilhas de calcário",
      "text": "Cerca de 2 mil ilhas e ilhotas verdes surgem da água esmeralda, e há passeios de caiaque até grutas e vilas flutuantes. É Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Passeie à noite entre lanternas coloridas na cidade velha de Hoi An",
      "text": "O centro histórico guarda casas de comerciantes e uma ponte japonesa, e as lanternas de seda iluminam as ruas à noite."
    }
  ],
  "ye": [
    {
      "type": "know",
      "title": "No Iêmen existe uma cidade de arranha-céus de barro chamada Manhattan do deserto!",
      "text": "Shibam, com prédios de tijolo de barro de até 7 ou 8 andares, foi construída principalmente no século XVI e é Patrimônio da UNESCO."
    },
    {
      "type": "do",
      "title": "Descubra a ilha de Socotra e suas árvores-sangue-de-dragão",
      "text": "Isolada no oceano Índico, tem plantas com forma de guarda-chuva que existem só ali. A ilha é Patrimônio Natural da UNESCO."
    },
    {
      "type": "do",
      "title": "Conheça a Cidade Velha de Sanaa, com casas de tijolo e gesso decoradas",
      "text": "Habitada há mais de 2 mil anos, abriga casas de vários andares decoradas com janelas de vitrais. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "za": [
    {
      "type": "know",
      "title": "Um país com três capitais, cada uma para um poder do Estado!",
      "text": "Pretória abriga o governo, a Cidade do Cabo abriga o Parlamento e Bloemfontein abriga a corte suprema de apelação. É uma divisão herdada da união das antigas colônias, em 1910."
    },
    {
      "type": "do",
      "title": "Faça um safári no Parque Nacional Kruger, casa dos \"Big Five\"!",
      "text": "Leões, leopardos, elefantes, rinocerontes e búfalos podem ser vistos em uma das maiores reservas de fauna da África, em passeios guiados ao amanhecer."
    },
    {
      "type": "do",
      "title": "Suba a Table Mountain, a montanha de topo plano sobre a Cidade do Cabo!",
      "text": "Dá para subir de teleférico ou a pé e ver a cidade, o oceano e a Ilha Robben, onde Nelson Mandela esteve preso, de cima de um dos cartões-postais mais famosos do continente."
    }
  ],
  "dz": [
    {
      "type": "know",
      "title": "O maior país da África em área fica no extremo norte do continente!",
      "text": "Desde a divisão do Sudão, em 2011, a Argélia é o país mais extenso da África, e a maior parte do seu território é coberta pelo deserto do Saara."
    },
    {
      "type": "do",
      "title": "Veja arte rupestre de milhares de anos no Tassili n'Ajjer!",
      "text": "Esse parque nacional no Saara, Patrimônio Mundial da UNESCO, tem paisagens de rochas esculpidas pelo vento e milhares de pinturas que mostram animais e pessoas de uma época em que a região era mais verde."
    },
    {
      "type": "do",
      "title": "Caminhe pelas ruelas da Casbah de Argel!",
      "text": "A cidade antiga, tombada pela UNESCO, sobe a colina em direção ao Mediterrâneo com casas de pátio interno, escadarias estreitas e mesquitas históricas."
    }
  ],
  "ao": [
    {
      "type": "know",
      "title": "Uma rainha angolana enfrentou os portugueses por décadas!",
      "text": "No século XVII, Nzinga Mbande, soberana de Ndongo e Matamba, combinou guerra e diplomacia para resistir ao avanço colonial português e hoje é símbolo nacional de resistência."
    },
    {
      "type": "do",
      "title": "Veja a queda d'água de Kalandula, em Malanje!",
      "text": "Um dos maiores conjuntos de cachoeiras da África cai do rio Lucala em uma parede larga de água e neblina, cercado de savana e fácil de fotografar do alto."
    },
    {
      "type": "do",
      "title": "Contemple o pôr do sol no Miradouro da Lua!",
      "text": "Ao sul de Luanda, falésias de argila e arenito erodidas pela chuva criam um cenário lunar à beira do Atlântico, muito procurado para fotos ao entardecer."
    }
  ],
  "bj": [
    {
      "type": "know",
      "title": "Um reino africano tinha um exército de mulheres guerreiras!",
      "text": "No antigo Reino do Daomé, onde hoje é o Benin, as Agojie formavam um corpo militar feminino temido por seus rivais e respeitado pelos europeus que as encontraram."
    },
    {
      "type": "do",
      "title": "Visite Ganvié, uma vila inteira construída sobre palafitas!",
      "text": "No lago Nokoué, casas, escolas e mercados flutuam sobre a água, e o deslocamento é feito de canoa. É conhecida como a \"Veneza da África\"."
    },
    {
      "type": "do",
      "title": "Conheça os Palácios Reais de Abomey!",
      "text": "Patrimônio Mundial da UNESCO, o complexo guarda baixos-relevos de argila que contam as vitórias e as lendas dos reis do Daomé."
    }
  ],
  "bw": [
    {
      "type": "know",
      "title": "Um rio que se perde no deserto em vez de chegar ao mar!",
      "text": "O rio Okavango corre por Angola e Namíbia e se espalha pelo Kalahari, formando um delta interior enorme, rico em vida selvagem, que nunca alcança o oceano."
    },
    {
      "type": "do",
      "title": "Deslize de mokoro pelos canais do Delta do Okavango!",
      "text": "O mokoro é uma canoa tradicional conduzida com uma vara. Em silêncio, é possível ver hipopótamos, elefantes e centenas de espécies de aves entre os papiros."
    },
    {
      "type": "do",
      "title": "Faça um safári fluvial no Parque Nacional Chobe!",
      "text": "O rio Chobe atrai manadas de elefantes que descem para beber e se banhar, e os passeios de barco permitem observá-los muito de perto."
    }
  ],
  "bf": [
    {
      "type": "know",
      "title": "O nome do país significa \"terra dos homens íntegros\"!",
      "text": "Até 1984 o país se chamava Alto Volta. O presidente Thomas Sankara trocou o nome por uma combinação de palavras de línguas locais, mooré e dioula, para romper com o passado colonial."
    },
    {
      "type": "do",
      "title": "Conheça as ruínas de Loropéni, Patrimônio da UNESCO!",
      "text": "São as muralhas de pedra mais bem conservadas de uma rede de fortificações ligada ao comércio de ouro na África Ocidental, com séculos de história."
    },
    {
      "type": "do",
      "title": "Admire as formações rochosas dos Picos de Sindou!",
      "text": "No sudoeste do país, torres e agulhas de arenito moldadas pela erosão surgem acima da savana, em uma paisagem muito diferente do Sahel. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "bi": [
    {
      "type": "know",
      "title": "Tambores sagrados do Burundi são tradição reconhecida pela UNESCO!",
      "text": "Grupos de tamborileiros executam rituais em que dezenas de tambores batem em ritmo coordenado, com danças e saltos, em uma tradição ligada aos antigos reis do país."
    },
    {
      "type": "do",
      "title": "Assista aos tamborileiros no Santuário de Gishora!",
      "text": "Perto de Gitega, o santuário mantém viva a tradição dos tambores reais e recebe apresentações que mostram a força cerimonial desse som."
    },
    {
      "type": "do",
      "title": "Relaxe nas praias do Lago Tanganica!",
      "text": "Um dos lagos mais profundos do mundo banha Bujumbura, com areia, pores do sol e peixes coloridos para observar. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "cv": [
    {
      "type": "know",
      "title": "As ilhas de Cabo Verde eram desabitadas quando foram encontradas!",
      "text": "Os navegadores portugueses chegaram no século XV e não encontraram população nativa. O povo cabo-verdiano nasceu da mistura de europeus e africanos trazidos para as ilhas."
    },
    {
      "type": "do",
      "title": "Suba o vulcão Pico do Fogo, na ilha do Fogo!",
      "text": "A trilha parte de Chã das Caldeiras, uma vila dentro da cratera, e leva ao ponto mais alto do país, com vista para um campo de lava e para o oceano."
    },
    {
      "type": "do",
      "title": "Ouça morna ao vivo em Mindelo, na ilha de São Vicente!",
      "text": "A cidade é a terra de Cesária Évora, a \"diva dos pés descalços\", e seus bares mantêm viva a música que tornou Cabo Verde conhecido no mundo."
    }
  ],
  "cm": [
    {
      "type": "know",
      "title": "O nome do país vem de... camarões!",
      "text": "Navegadores portugueses do século XV acharam tantos camarões no rio Wouri que o chamaram de Rio dos Camarões, e o nome acabou designando todo o país."
    },
    {
      "type": "do",
      "title": "Veja cachoeiras que caem direto no mar em Kribi!",
      "text": "As quedas de Lobé despencam sobre as rochas e se juntam ao Atlântico, uma paisagem rara que combina floresta, praia e água corrente."
    },
    {
      "type": "do",
      "title": "Explore a Reserva de Fauna de Dja, Patrimônio da UNESCO!",
      "text": "Uma das florestas tropicais mais preservadas da África abriga gorilas, chimpanzés e elefantes-da-floresta, e é cercada por um rio em quase todo o seu perímetro."
    }
  ],
  "td": [
    {
      "type": "know",
      "title": "O ponto mais alto do Saara fica no Chade!",
      "text": "O vulcão Emi Koussi, no maciço de Tibesti, tem mais de 3.400 metros e domina o deserto com uma enorme cratera no topo."
    },
    {
      "type": "do",
      "title": "Veja os Lagos de Ounianga, oásis de água no meio do Saara!",
      "text": "Patrimônio Mundial da UNESCO, esse conjunto de lagos de cores distintas contrasta com as dunas ao redor e sobrevive graças a águas subterrâneas."
    },
    {
      "type": "do",
      "title": "Conheça o Planalto de Ennedi, com arcos de pedra e arte rupestre!",
      "text": "Patrimônio da UNESCO, a região tem formações de arenito esculpidas pelo vento e desenhos pré-históricos em abrigos naturais. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "km": [
    {
      "type": "know",
      "title": "Um peixe considerado extinto foi encontrado vivo nas Comores!",
      "text": "Os celacantos, que se achava terem desaparecido há milhões de anos, são vistos nas águas do arquipélago, onde pescadores locais já os conheciam muito antes da ciência."
    },
    {
      "type": "do",
      "title": "Suba o vulcão Karthala, na Grande Comore!",
      "text": "É um dos maiores vulcões ativos do mundo, com uma caldeira imensa no topo. A trilha atravessa floresta e campos de lava."
    },
    {
      "type": "do",
      "title": "Veja tartarugas-verdes no Parque Marinho de Mohéli!",
      "text": "Nessa ilha, a menor do arquipélago, tartarugas sobem às praias para desovar, e os recifes ao redor são ótimos para mergulho de snorkel."
    }
  ],
  "cg": [
    {
      "type": "know",
      "title": "Duas capitais ficam frente a frente, separadas só por um rio!",
      "text": "Brazzaville, no Congo, e Kinshasa, na República Democrática do Congo, se olham de margens opostas do rio Congo, em uma situação muito rara no mundo."
    },
    {
      "type": "do",
      "title": "Veja gorilas no Parque Nacional de Odzala-Kokoua!",
      "text": "Essa floresta tropical protege gorilas-das-planícies, elefantes e clareiras minerais onde os animais se reúnem, observadas com guias locais."
    },
    {
      "type": "do",
      "title": "Visite a Basílica Sainte-Anne-du-Congo, em Brazzaville!",
      "text": "Seu telhado de telhas verdes e a arquitetura moderna dos anos 1940 a tornam um dos edifícios mais marcantes da capital."
    }
  ],
  "ci": [
    {
      "type": "know",
      "title": "Uma enorme basílica foi construída em um vilarejo na savana!",
      "text": "A Basílica de Nossa Senhora da Paz, em Yamussucro, foi inspirada na de São Pedro, em Roma, e é uma das maiores igrejas do mundo. Foi consagrada pelo papa em 1990."
    },
    {
      "type": "do",
      "title": "Procure chimpanzés no Parque Nacional de Taï!",
      "text": "Uma das últimas grandes florestas tropicais primárias da África Ocidental, Patrimônio da UNESCO, abriga chimpanzés que usam pedras para quebrar nozes."
    },
    {
      "type": "do",
      "title": "Passeie pela cidade histórica de Grand-Bassam!",
      "text": "Patrimônio da UNESCO, a antiga capital colonial mantém casas de madeira e prédios administrativos do início do século XX junto ao mar."
    }
  ],
  "dj": [
    {
      "type": "know",
      "title": "O ponto mais baixo da África fica no Djibuti!",
      "text": "O Lago Assal está a cerca de 150 metros abaixo do nível do mar e é tão salgado que suas margens brilham com cristais de sal."
    },
    {
      "type": "do",
      "title": "Nade com tubarões-baleia no Golfo de Tadjoura!",
      "text": "Com guias autorizados, é possível nadar ao lado desses gigantes pacíficos, que se alimentam de plâncton nas águas calmas do golfo."
    },
    {
      "type": "do",
      "title": "Visite o Lago Abbe e suas chaminés de calcário!",
      "text": "Torres de pedra soltam vapor no meio de uma paisagem árida e surreal, que já serviu de cenário para filmes de ficção científica."
    }
  ],
  "eg": [
    {
      "type": "know",
      "title": "A Grande Pirâmide foi o edifício mais alto do mundo por milhares de anos!",
      "text": "Construída há cerca de 4.500 anos para o faraó Quéops, ela manteve esse título por aproximadamente 3.800 anos, até a construção de catedrais medievais."
    },
    {
      "type": "do",
      "title": "Entre nas tumbas do Vale dos Reis, em Luxor!",
      "text": "Faraós do Novo Império foram sepultados em tumbas decoradas com hieróglifos coloridos, entre elas a de Tutancâmon."
    },
    {
      "type": "do",
      "title": "Mergulhe no Parque Nacional Ras Mohammed, no Mar Vermelho!",
      "text": "Na ponta do Sinai, recifes de coral e paredões submarinos abrigam tartarugas, tubarões e milhares de peixes coloridos."
    }
  ],
  "er": [
    {
      "type": "know",
      "title": "O nome do país vem do grego e significa \"vermelho\"!",
      "text": "Eritreia deriva do nome grego antigo do Mar Vermelho, Erythra Thalassa, que banha toda a sua longa costa."
    },
    {
      "type": "do",
      "title": "Caminhe por Asmara, a cidade modernista!",
      "text": "Patrimônio da UNESCO, a capital tem cafés, cinemas e prédios art déco e futuristas do período italiano, como o posto Fiat Tagliero, em forma de avião."
    },
    {
      "type": "do",
      "title": "Mergulhe no Arquipélago de Dahlak, no Mar Vermelho!",
      "text": "Ilhas e recifes de águas claras e pouco explorados atraem mergulhadores e observadores de aves marinhas. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "sz": [
    {
      "type": "know",
      "title": "Um rei mudou o nome do país no aniversário da independência!",
      "text": "Em 2018, Mswati III trocou o nome de Suazilândia para Essuatíni, que na língua local significa \"terra dos suázis\", nos 50 anos da independência."
    },
    {
      "type": "do",
      "title": "Pedale entre zebras no Santuário de Mlilwane!",
      "text": "A reserva permite passeios de bicicleta, a pé ou a cavalo entre zebras, girafas e antílopes, sem predadores de grande porte."
    },
    {
      "type": "do",
      "title": "Assista a danças tradicionais na Vila Cultural de Mantenga!",
      "text": "A vila reconstrói a vida suázi de séculos atrás, com casas de capim, música e danças, perto das cachoeiras de Mantenga."
    }
  ],
  "et": [
    {
      "type": "know",
      "title": "Na Etiópia o ano tem 13 meses e está alguns anos atrás do resto do mundo!",
      "text": "O calendário etíope tem 12 meses de 30 dias e um 13º mês curto, o Pagume. Ele difere do gregoriano em cerca de sete a oito anos."
    },
    {
      "type": "do",
      "title": "Visite as igrejas escavadas na rocha de Lalibela!",
      "text": "Do século XII ou XIII, são 11 igrejas esculpidas em blocos de pedra vulcânica, ainda hoje centro de peregrinação cristã ortodoxa."
    },
    {
      "type": "do",
      "title": "Participe de uma cerimônia do café em Adis Abeba!",
      "text": "A Etiópia é considerada a terra de origem do café. No ritual, os grãos são torrados na hora e servidos em três rodadas, com incenso no ar."
    }
  ],
  "ga": [
    {
      "type": "know",
      "title": "O Gabão abriga reatores nucleares naturais de dois bilhões de anos!",
      "text": "Em Oklo, urânio natural entrou em fissão sozinho, algo descoberto em 1972 e considerado único no mundo."
    },
    {
      "type": "do",
      "title": "Veja hipopótamos e elefantes na praia no Parque Nacional de Loango!",
      "text": "Entre floresta, savana e oceano, a vida selvagem circula pela costa, em uma das paisagens mais incomuns da África."
    },
    {
      "type": "do",
      "title": "Explore o Parque Nacional de Lopé, Patrimônio da UNESCO!",
      "text": "Savana e floresta se encontram ali, com mandris, antigos sítios de arte rupestre e trilhas guiadas."
    }
  ],
  "gm": [
    {
      "type": "know",
      "title": "A Gâmbia é o menor país da África continental!",
      "text": "Tem o formato de uma faixa estreita ao longo do rio Gâmbia e é cercada pelo Senegal por todos os lados, exceto no litoral atlântico."
    },
    {
      "type": "do",
      "title": "Visite a Ilha Kunta Kinteh, Patrimônio da UNESCO!",
      "text": "No rio Gâmbia, as ruínas de um forte lembram o comércio transatlântico de pessoas escravizadas e a história que inspirou o livro Raízes."
    },
    {
      "type": "do",
      "title": "Observe aves e macacos na Reserva Natural de Abuko!",
      "text": "Perto da capital, trilhas de floresta mostram crocodilos, macacos e dezenas de espécies de aves."
    }
  ],
  "gh": [
    {
      "type": "know",
      "title": "Em Gana, é possível ser enterrado em um caixão em forma de peixe ou avião!",
      "text": "Artesãos do povo Ga fazem \"caixões de fantasia\" que representam a profissão ou a paixão da pessoa, como peixes, aviões ou garrafas."
    },
    {
      "type": "do",
      "title": "Conheça o Castelo de Cape Coast!",
      "text": "Patrimônio da UNESCO, a fortaleza costeira conta a história do comércio de pessoas escravizadas no litoral de Gana."
    },
    {
      "type": "do",
      "title": "Caminhe sobre as copas das árvores no Parque Nacional de Kakum!",
      "text": "Uma passarela suspensa leva a visitantes a dezenas de metros de altura sobre a floresta tropical."
    }
  ],
  "gn": [
    {
      "type": "know",
      "title": "O rio Níger nasce na Guiné, perto do oceano, mas corre para o interior!",
      "text": "Em vez de seguir para o Atlântico, que está próximo, ele percorre milhares de quilômetros pelo Sahel antes de voltar ao mar, no Golfo da Guiné."
    },
    {
      "type": "do",
      "title": "Veja cachoeiras no planalto do Fouta Djalon!",
      "text": "Esse maciço, de onde descem vários rios da África Ocidental, tem vales verdes, quedas d'água e vilas tradicionais fula."
    },
    {
      "type": "do",
      "title": "Pegue um barco para as Ilhas de Los, em frente a Conacri!",
      "text": "O pequeno arquipélago tem praias tranquilas e vilas de pescadores, a poucos minutos de barco da capital."
    }
  ],
  "gw": [
    {
      "type": "know",
      "title": "A independência foi declarada em uma floresta, antes de ser reconhecida!",
      "text": "Em 1973, o PAIGC de Amílcar Cabral proclamou a independência em Madina do Boé, em território controlado pela guerrilha. Portugal só a reconheceu em 1974."
    },
    {
      "type": "do",
      "title": "Conheça o Arquipélago dos Bijagós, Reserva da Biosfera!",
      "text": "Dezenas de ilhas com florestas, manguezais e praias intocadas, onde vivem hipopótamos de água salgada e tartarugas marinhas."
    },
    {
      "type": "do",
      "title": "Viva o Carnaval de Bissau!",
      "text": "A festa tem desfiles com máscaras e fantasias, tambores e danças que misturam tradições locais e heranças portuguesas."
    }
  ],
  "gq": [
    {
      "type": "know",
      "title": "É o único país da África onde o espanhol é língua oficial!",
      "text": "A Guiné Equatorial foi colônia da Espanha, e o idioma permanece como oficial, junto com o francês e o português."
    },
    {
      "type": "do",
      "title": "Veja tartarugas desovando na praia de Arena Blanca, na ilha de Bioko!",
      "text": "No sul da ilha, praias isoladas recebem tartarugas marinhas na época de desova, com acompanhamento de guias locais."
    },
    {
      "type": "do",
      "title": "Explore o Parque Nacional de Monte Alén!",
      "text": "Na parte continental, a floresta densa abriga gorilas, chimpanzés e elefantes, com trilhas guiadas."
    }
  ],
  "ls": [
    {
      "type": "know",
      "title": "Todo o território do Lesoto fica a mais de 1.400 metros de altitude!",
      "text": "É o país cujo ponto mais baixo é o mais alto do mundo entre todos os países. Fica totalmente cercado pela África do Sul."
    },
    {
      "type": "do",
      "title": "Faça uma trilha a cavalo em pôneis basotho!",
      "text": "Os pôneis locais atravessam vales e vilarejos de montanha, em passeios de um dia ou de vários dias."
    },
    {
      "type": "do",
      "title": "Visite Thaba Bosiu, a montanha-fortaleza do rei Moshoeshoe!",
      "text": "O platô, usado como fortaleza no século XIX, é um símbolo da formação da nação basotho e permite uma caminhada com vista para a região."
    }
  ],
  "lr": [
    {
      "type": "know",
      "title": "A Libéria foi fundada por afro-americanos libertos!",
      "text": "A partir de 1822, ex-escravizados dos Estados Unidos fundaram a colônia. Em 1847 ela se declarou independente, e a capital Monróvia homenageia o presidente americano James Monroe."
    },
    {
      "type": "do",
      "title": "Explore o Parque Nacional de Sapo!",
      "text": "Uma das maiores florestas tropicais da África Ocidental protege elefantes-da-floresta, hipopótamos-pigmeus e chimpanzés."
    },
    {
      "type": "do",
      "title": "Surfe nas ondas de Robertsport!",
      "text": "A cidade tem ondas consistentes e uma pequena comunidade de surfistas, com praias tranquilas."
    }
  ],
  "ly": [
    {
      "type": "know",
      "title": "Um imperador romano nasceu em uma cidade que hoje fica na Líbia!",
      "text": "Septímio Severo, que governou Roma entre 193 e 211, nasceu em Leptis Magna, e fez dela uma das cidades mais ricas do Império."
    },
    {
      "type": "do",
      "title": "Visite as ruínas gregas de Cirene!",
      "text": "Patrimônio da UNESCO, a antiga colônia grega do século VII a.C. tem templos, ginásio e vistas para o Mediterrâneo."
    },
    {
      "type": "do",
      "title": "Conheça a cidade velha de Gadamés, no Saara!",
      "text": "Patrimônio da UNESCO, a \"pérola do deserto\" tem casas de barro brancas, passagens cobertas contra o calor e terraços femininos nos telhados. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "mg": [
    {
      "type": "know",
      "title": "Seis das oito espécies de baobá do mundo existem só em Madagáscar!",
      "text": "Seis espécies de baobá são nativas exclusivamente da ilha, que se isolou do continente há milhões de anos. As outras duas crescem na África continental e na Austrália."
    },
    {
      "type": "do",
      "title": "Passear pela Avenida dos Baobás, perto de Morondava",
      "text": "Uma estrada de terra ladeada por baobás gigantes, alguns com séculos de vida, forma um dos cenários mais fotografados da ilha, especialmente ao pôr do sol."
    },
    {
      "type": "do",
      "title": "Caminhar entre as agulhas de pedra dos Tsingy de Bemaraha",
      "text": "Esta Reserva Natural Integral, Patrimônio Mundial da UNESCO, tem uma floresta de pináculos calcários afiados, que se visita por pontes suspensas e trilhas com cabos de segurança."
    }
  ],
  "mw": [
    {
      "type": "know",
      "title": "Um lago africano que abriga mais espécies de peixes que qualquer outro!",
      "text": "O Lago Malauí é famoso pela enorme diversidade de ciclídeos, peixes coloridos que evoluíram em centenas de espécies, quase todas encontradas somente ali."
    },
    {
      "type": "do",
      "title": "Mergulhar com snorkel entre ciclídeos em Cape Maclear",
      "text": "No Parque Nacional do Lago Malauí, Patrimônio Mundial da UNESCO, é possível nadar em águas transparentes cercado por peixes coloridos, ao redor de ilhas rochosas."
    },
    {
      "type": "do",
      "title": "Subir o Maciço de Mulanje até o pico Sapitwa",
      "text": "Um paredão de granito que se ergue da planície de chá, com trilhas, cabanas de montanha e piscinas naturais, culmina no Sapitwa, o ponto mais alto do Malauí."
    }
  ],
  "ml": [
    {
      "type": "know",
      "title": "Um imperador do Mali desvalorizou o ouro do Cairo só com sua generosidade!",
      "text": "Em 1324, Mansa Musa viajou a Meca com uma comitiva enorme e distribuiu tanto ouro pelo caminho que, segundo cronistas, o preço do metal caiu no Cairo por anos."
    },
    {
      "type": "do",
      "title": "Ver a maior construção de barro do mundo em Djenné",
      "text": "A Grande Mesquita de Djenné, feita de tijolos de adobe, é refeita a cada ano pela comunidade num festival de reboco. A cidade antiga é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Conhecer as aldeias dogon nas Falésias de Bandiagara",
      "text": "Casas de barro e celeiros pontiagudos se agarram ao paredão de arenito, onde o povo dogon preserva máscaras, danças e uma cosmologia própria. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "ma": [
    {
      "type": "know",
      "title": "Em Fez fica uma universidade fundada por uma mulher no ano 859!",
      "text": "A Universidade al-Qarawiyyin foi criada por Fatima al-Fihri e é reconhecida pelo Guinness como a instituição de ensino mais antiga do mundo em funcionamento contínuo."
    },
    {
      "type": "do",
      "title": "Dormir entre as dunas do Erg Chebbi, em Merzouga",
      "text": "Passeios de dromedário ao entardecer levam a acampamentos no Saara, onde se vê o nascer do sol sobre dunas que chegam a dezenas de metros de altura."
    },
    {
      "type": "do",
      "title": "Perder-se nas ruas azuis da medina de Chefchaouen",
      "text": "Nesta cidade das montanhas do Rife, casas e escadarias pintadas em tons de azul formam um labirinto fotogênico cheio de lojinhas de artesanato e tapetes."
    }
  ],
  "mr": [
    {
      "type": "know",
      "title": "Um trem de mais de 2 km de comprimento cruza o Saara carregando minério!",
      "text": "A ferrovia entre Zouérat e Nouadhibou transporta minério de ferro por cerca de 700 km de deserto, em composições que estão entre as mais longas do mundo."
    },
    {
      "type": "do",
      "title": "Visitar as bibliotecas de manuscritos de Chinguetti",
      "text": "Esta cidade-oásis foi um centro de estudo e ponto de partida de caravanas para Meca. Hoje guarda manuscritos antigos em bibliotecas familiares, e integra o Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Observar aves migratórias no Parque Nacional do Banc d'Arguin",
      "text": "Onde o deserto encontra o Atlântico, bancos de areia e águas rasas recebem milhões de aves migratórias vindas da Europa e da Sibéria. O parque é Patrimônio Mundial da UNESCO."
    }
  ],
  "mu": [
    {
      "type": "know",
      "title": "O dodô, ave que não voava, só existia na ilha de Maurício!",
      "text": "Esta ave gigante evoluiu sem predadores e desapareceu no século XVII, pouco depois da chegada de marinheiros europeus e de animais trazidos por eles. Virou símbolo do país."
    },
    {
      "type": "do",
      "title": "Ver a Terra das Sete Cores, em Chamarel",
      "text": "Dunas de areia vulcânica com faixas vermelhas, marrons, roxas e verdes formam uma paisagem única, perto de uma alta cachoeira no meio da floresta."
    },
    {
      "type": "do",
      "title": "Escalar o Le Morne Brabant, monte ligado à memória da escravidão",
      "text": "Esta montanha de basalto à beira-mar serviu de refúgio a escravizados fugitivos. A trilha até o topo oferece vistas da lagoa e é Patrimônio Mundial da UNESCO."
    }
  ],
  "mz": [
    {
      "type": "know",
      "title": "A bandeira de Moçambique tem um fuzil AK-47, algo raríssimo no mundo!",
      "text": "O emblema nacional traz um fuzil AK-47 cruzado com uma enxada, sobre um livro aberto, simbolizando defesa, agricultura e educação. É uma das raras bandeiras com uma arma moderna."
    },
    {
      "type": "do",
      "title": "Passear pela Ilha de Moçambique, antiga capital colonial",
      "text": "Fortaleza de São Sebastião, igrejas e casas de pedra e coral dão forma a uma ilha minúscula, ligada ao continente por uma ponte. É Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Mergulhar no Arquipélago de Bazaruto",
      "text": "Ilhas de dunas e águas turquesa abrigam recifes de coral, tartarugas e dugongos, mamíferos marinhos raros, num parque nacional marinho."
    }
  ],
  "na": [
    {
      "type": "know",
      "title": "O deserto do Namibe é um dos mais antigos do planeta!",
      "text": "O Namibe existe há milhões de anos e vai até o Atlântico, onde a névoa do mar sustenta plantas e insetos que vivem só ali, como a estranha Welwitschia."
    },
    {
      "type": "do",
      "title": "Subir as dunas vermelhas de Sossusvlei e ver Deadvlei",
      "text": "Dunas de areia alaranjada cercam um lago seco de argila branca, onde troncos de árvores mortas há séculos se destacam contra o céu azul."
    },
    {
      "type": "do",
      "title": "Observar animais em poços d'água no Parque Nacional de Etosha",
      "text": "Ao lado de uma imensa planície de sal visível do espaço, elefantes, leões e rinocerontes se reúnem em poços onde se pode observá-los do carro."
    }
  ],
  "ne": [
    {
      "type": "know",
      "title": "A árvore mais solitária do mundo foi derrubada por um caminhão!",
      "text": "A Árvore de Ténéré era uma acácia que crescia sozinha no deserto, sem outra por centenas de quilômetros. Em 1973, um motorista a atingiu. O tronco foi levado a um museu em Niamei."
    },
    {
      "type": "do",
      "title": "Visitar o Museu Nacional Boubou Hama, em Niamei",
      "text": "O museu reúne arqueologia, fósseis de dinossauros, artesanato e réplicas de casas tradicionais de vários povos do país, num parque com jardim zoológico."
    },
    {
      "type": "do",
      "title": "Conhecer a Grande Mesquita e o centro histórico de Agadez",
      "text": "A cidade tuaregue, antigo ponto de caravanas do Saara, tem um centro de adobe Patrimônio Mundial da UNESCO e um minarete de barro que se destaca no horizonte. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "ng": [
    {
      "type": "know",
      "title": "Na Nigéria existem tambores que imitam a fala humana!",
      "text": "O talking drum iorubá, o dundun, reproduz o tom e o ritmo da língua, que é tonal. Tocadores experientes transmitem frases, provérbios e elogios por meio da percussão."
    },
    {
      "type": "do",
      "title": "Visitar o Bosque Sagrado de Osun-Oshogbo",
      "text": "Esta floresta, Patrimônio Mundial da UNESCO, é dedicada à deusa iorubá Osun e abriga esculturas e santuários entre árvores e um rio, além de um festival anual."
    },
    {
      "type": "do",
      "title": "Fazer safári e banhar-se na fonte Wikki do Parque Yankari",
      "text": "Elefantes, babuínos e hipopótamos vivem nesta reserva do nordeste, que tem uma nascente de água morna e cristalina onde se pode nadar."
    }
  ],
  "ke": [
    {
      "type": "know",
      "title": "Perto do Lago Turkana foi achado o esqueleto de um menino de 1,5 milhão de anos!",
      "text": "O \"Menino de Turkana\", fóssil de Homo erectus, é um dos esqueletos de hominídeo mais completos já descobertos. A região é chamada de berço da humanidade."
    },
    {
      "type": "do",
      "title": "Fazer um safári no Maasai Mara",
      "text": "Savanas com leões, elefantes e girafas, ao lado de aldeias maasai, formam o cenário da migração de gnus, que cruzam o rio Mara em grandes manadas, em determinada época do ano."
    },
    {
      "type": "do",
      "title": "Caminhar pelas vielas da cidade velha de Lamu",
      "text": "Casas de coral, portas entalhadas e burros como transporte, já que quase não há carros, mostram a cultura suaíli. É Patrimônio Mundial da UNESCO."
    }
  ],
  "cf": [
    {
      "type": "know",
      "title": "O país já teve um imperador que se coroou numa cerimônia luxuosa!",
      "text": "Em 1976, Jean-Bédel Bokassa proclamou o Império Centro-Africano e se coroou imperador, em cerimônia inspirada em Napoleão. O regime acabou em 1979."
    },
    {
      "type": "do",
      "title": "Ver elefantes-da-floresta na clareira de Dzanga Bai",
      "text": "Na Reserva de Dzanga-Sangha, parte de um sítio da UNESCO, elefantes e outros animais se reúnem numa clareira para obter minerais, vistos de uma plataforma."
    },
    {
      "type": "do",
      "title": "Admirar as cachoeiras de Boali",
      "text": "Perto de Bangui, o rio Mbali despenca em quedas largas e barulhentas, cercadas de vegetação. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "cd": [
    {
      "type": "know",
      "title": "O rio Congo cruza a Linha do Equador duas vezes!",
      "text": "Por causa do traçado em arco do rio, ele passa pelo Equador em dois pontos distintos. Também é considerado o rio mais profundo do mundo."
    },
    {
      "type": "do",
      "title": "Conhecer os bonobos no santuário Lola ya Bonobo, em Kinshasa",
      "text": "O santuário acolhe bonobos órfãos, primatas aparentados dos chimpanzés que só existem na RDC, em um trecho de floresta perto da capital."
    },
    {
      "type": "do",
      "title": "Conhecer a natureza do Parque Nacional de Virunga",
      "text": "Primeiro parque nacional da África, Patrimônio Mundial da UNESCO, abriga gorilas-de-montanha e vulcões ativos, como o Nyiragongo. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "rw": [
    {
      "type": "know",
      "title": "Sob um lago de Ruanda há gás metano dissolvido na água!",
      "text": "O Lago Kivu, que fica na fronteira com a RDC, é um dos poucos lagos do mundo com grandes quantidades de gás dissolvido. O metano é usado para gerar energia."
    },
    {
      "type": "do",
      "title": "Ver gorilas-de-montanha no Parque Nacional dos Vulcões",
      "text": "Caminhadas guiadas pela floresta de bambu levam a famílias de gorilas, que se observa a poucos metros, com guias e rastreadores locais."
    },
    {
      "type": "do",
      "title": "Visitar o Memorial do Genocídio de Kigali",
      "text": "O memorial preserva a memória das vítimas de 1994 com exposições e jardins, e ajuda a entender a história do país e seu processo de reconciliação."
    }
  ],
  "st": [
    {
      "type": "know",
      "title": "Um ilhéu de São Tomé está exatamente sobre a Linha do Equador!",
      "text": "O Ilhéu das Rolas, ao sul da ilha de São Tomé, é cortado pela linha imaginária e tem um marco que indica o ponto onde se pisa nos dois hemisférios."
    },
    {
      "type": "do",
      "title": "Conhecer as roças de cacau e café, como a Monte Café",
      "text": "Antigas plantações coloniais, hoje em parte transformadas em museu e pousadas, permitem ver como o cacau e o café são cultivados e processados."
    },
    {
      "type": "do",
      "title": "Fazer trilhas na floresta tropical do Parque Obô",
      "text": "Cobre grande parte da ilha, com cachoeiras, aves raras e a escalada do Pico Cão Grande, uma agulha vulcânica de rocha que se ergue da mata."
    }
  ],
  "sn": [
    {
      "type": "know",
      "title": "No Senegal existe um lago de cor rosa!",
      "text": "O Lago Retba, perto de Dacar, tem tons rosados por causa de microrganismos na água muito salgada. Moradores extraem sal manualmente de suas margens."
    },
    {
      "type": "do",
      "title": "Visitar a Ilha de Gorée, em frente a Dacar",
      "text": "Esta pequena ilha de casas coloridas guarda a Casa dos Escravos, memorial ao tráfico atlântico, e é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Observar pelicanos no Parque Nacional das Aves de Djoudj",
      "text": "No delta do rio Senegal, Patrimônio Mundial da UNESCO, milhares de aves migratórias, entre elas pelicanos-brancos, descansam em lagoas e canais."
    }
  ],
  "sl": [
    {
      "type": "know",
      "title": "O nome do país vem do português e significa \"serra do leão\"!",
      "text": "O explorador Pedro de Sintra chegou à região por volta de 1462 e chamou as montanhas de \"Serra Lyoa\", talvez pelo som de trovões ou pelo formato dos montes."
    },
    {
      "type": "do",
      "title": "Visitar o Santuário de Chimpanzés de Tacugama",
      "text": "Perto de Freetown, na floresta, o santuário cuida de chimpanzés resgatados, com trilhas e visitas guiadas que explicam sua conservação."
    },
    {
      "type": "do",
      "title": "Relaxar na praia de River Number Two",
      "text": "Areia clara, mar azul e um rio que desemboca no oceano, entre colinas verdes, formam uma das praias mais bonitas da costa próxima à capital."
    }
  ],
  "sc": [
    {
      "type": "know",
      "title": "Nas Seychelles cresce a maior semente do mundo!",
      "text": "O coco-do-mar, ou coco de mer, nativo de Praslin e Curieuse, produz uma semente que pode pesar vários quilos e tem um formato peculiar."
    },
    {
      "type": "do",
      "title": "Nadar na Anse Source d'Argent, em La Digue",
      "text": "Rochas de granito arredondadas emolduram uma praia de águas calmas e areia clara, uma das mais fotografadas do mundo, e que se chega de bicicleta."
    },
    {
      "type": "do",
      "title": "Fazer a trilha de Copolia no Parque Morne Seychellois",
      "text": "Um caminho pela floresta tropical, com plantas carnívoras e uma vista panorâmica sobre a costa de Mahé a partir de um domo de granito."
    }
  ],
  "so": [
    {
      "type": "know",
      "title": "A Somália tem a mais longa costa do continente africano!",
      "text": "O litoral, no Oceano Índico e no Golfo de Aden, é o mais extenso entre os países continentais da África. O país também é conhecido por sua forte tradição de poesia oral."
    },
    {
      "type": "do",
      "title": "Ver pinturas rupestres de milhares de anos em Laas Geel",
      "text": "Perto de Hargeisa, no Somaliland, abrigos de rocha têm pinturas de vacas e figuras humanas em cores vivas, entre as mais bem conservadas da região."
    },
    {
      "type": "do",
      "title": "Conhecer a história portuária de Zeila",
      "text": "Cidade antiga no Golfo de Aden, com mesquitas históricas e construções de coral que lembram séculos de comércio no golfo de Áden. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "sd": [
    {
      "type": "know",
      "title": "O Sudão tem mais pirâmides do que o Egito!",
      "text": "Os reis de Kush, em Meroé e arredores, ergueram centenas de pirâmides menores e mais íngremes que as egípcias, entre cerca de 2.700 e 1.700 anos atrás."
    },
    {
      "type": "do",
      "title": "Visitar as pirâmides reais de Meroé",
      "text": "Perto do deserto, dezenas de pirâmides de arenito, com capelas decoradas, erguem-se sobre as dunas. O sítio é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Ver o encontro dos Nilos Azul e Branco em Cartum",
      "text": "Na confluência, perto da cidade, as águas dos dois rios se encontram, e se pode notar a diferença de cor entre elas. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "ss": [
    {
      "type": "know",
      "title": "O Sudd, no Sudão do Sul, é um dos maiores pântanos do mundo!",
      "text": "Formado pelo Nilo Branco, é uma imensa área alagada de vegetação flutuante, que abriga milhares de aves e muda de tamanho de acordo com as cheias."
    },
    {
      "type": "do",
      "title": "Ver a migração de antílopes na região de Boma",
      "text": "Uma das maiores migrações de mamíferos terrestres do planeta percorre as planícies de Boma e Jonglei, com rebanhos de cobos-de-orelha-branca."
    },
    {
      "type": "do",
      "title": "Observar a natureza no Parque Nacional de Nimule",
      "text": "Na margem do Nilo, perto da fronteira com Uganda, há savana, hipopótamos e corredeiras. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "tz": [
    {
      "type": "know",
      "title": "O Kilimanjaro é a maior montanha do mundo que se ergue isolada!",
      "text": "Sem fazer parte de uma cordilheira, este vulcão inativo tem cume coberto de gelo no meio dos trópicos e é o ponto mais alto da África."
    },
    {
      "type": "do",
      "title": "Ver a savana do Serengeti",
      "text": "Planícies imensas, com leões, elefantes e a migração de gnus e zebras, atraem viajantes para safáris de carro ou até de balão."
    },
    {
      "type": "do",
      "title": "Passear por Stone Town, em Zanzibar",
      "text": "Becos estreitos, portas de madeira esculpidas e mercados de especiarias mostram a mistura de culturas africana, árabe e indiana. É Patrimônio Mundial da UNESCO."
    }
  ],
  "tg": [
    {
      "type": "know",
      "title": "Lomé é uma capital colada na fronteira com outro país!",
      "text": "A cidade fica na costa do Golfo da Guiné e a poucos quilômetros de Gana, de modo que se pode ir a pé de um país ao outro."
    },
    {
      "type": "do",
      "title": "Ver as casas-torre de barro de Koutammakou",
      "text": "O povo batammariba constrói casas fortificadas de dois andares, chamadas takienta, em paisagem rural que é Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Conhecer o Mercado de Akodessewa, em Lomé",
      "text": "Um dos maiores mercados de objetos ligados ao vodu da região, com amuletos, ervas e crânios de animais usados em rituais tradicionais."
    }
  ],
  "tn": [
    {
      "type": "know",
      "title": "A casa de Luke Skywalker em Star Wars foi filmada na Tunísia!",
      "text": "As cenas de Tatooine usaram locais do sul do país, como casas subterrâneas de Matmata. O nome do planeta foi inspirado na cidade de Tataouine."
    },
    {
      "type": "do",
      "title": "Explorar as ruínas de Cartago",
      "text": "A antiga rival de Roma, hoje nos arredores de Túnis, deixou termas, portos e um sítio arqueológico à beira-mar, Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Visitar o anfiteatro romano de El Jem",
      "text": "Uma das maiores arenas do Império Romano fora de Roma, muito bem conservada, onde ainda se realizam concertos. É Patrimônio Mundial da UNESCO."
    }
  ],
  "ug": [
    {
      "type": "know",
      "title": "Em Uganda ficam as \"Montanhas da Lua\" citadas por Ptolomeu!",
      "text": "A cordilheira Ruwenzori, na fronteira com a RDC, tem picos nevados bem na linha do Equador, e muitos estudiosos a ligam às montanhas descritas na Antiguidade."
    },
    {
      "type": "do",
      "title": "Ver gorilas-de-montanha na Floresta Impenetrável de Bwindi",
      "text": "Caminhadas guiadas levam a famílias de gorilas em uma floresta densa e antiga, Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Ver as Cataratas Murchison, no Nilo",
      "text": "O Nilo se espreme por uma fenda de poucos metros de largura e despenca com força, num parque onde se veem hipopótamos, elefantes e crocodilos."
    }
  ],
  "zm": [
    {
      "type": "know",
      "title": "O nome africano das Cataratas Vitória significa \"a fumaça que troveja\"!",
      "text": "Mosi-oa-Tunya, como são chamadas na Zâmbia, descrevem a nuvem de vapor visível a quilômetros de distância e o rugido do rio Zambeze ao cair."
    },
    {
      "type": "do",
      "title": "Nadar na Piscina do Diabo, na beira das Cataratas Vitória",
      "text": "Na estação seca, uma poça natural formada na borda da queda deixa nadar a poucos centímetros do precipício, com guias locais."
    },
    {
      "type": "do",
      "title": "Fazer um safári a pé no Parque Nacional de South Luangwa",
      "text": "Este vale é considerado o berço do safári a pé, onde guias levam grupos pequenos para ver hipopótamos, elefantes e leopardos de perto."
    }
  ],
  "zw": [
    {
      "type": "know",
      "title": "O pássaro de pedra da bandeira do Zimbábue vem de ruínas medievais!",
      "text": "Esculturas de aves em pedra-sabão foram achadas em Grande Zimbábue e se tornaram símbolo nacional. O nome do país vem de \"casas de pedra\"."
    },
    {
      "type": "do",
      "title": "Explorar as ruínas de Grande Zimbábue",
      "text": "Muralhas de pedra sem argamassa, algumas com vários metros de altura, restam da capital de um reino que prosperou na Idade Média. É Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Remar de canoa no Parque Nacional Mana Pools",
      "text": "No vale do Zambeze, é possível observar elefantes, hipopótamos e leões pelo rio e a pé, em um parque Patrimônio Mundial da UNESCO."
    }
  ],
  "ag": [
    {
      "type": "know",
      "title": "Em Barbuda, ninguém pode ser dono de um terreno por conta própria!",
      "text": "A terra de Barbuda pertence coletivamente a todos os barbudanos, por tradição que remonta ao período colonial. Os moradores podem usar e construir, mas a propriedade individual do solo não existe."
    },
    {
      "type": "do",
      "title": "Visitar um estaleiro naval britânico do século XVIII, hoje Patrimônio Mundial",
      "text": "O Nelson's Dockyard, em English Harbour, foi base da marinha britânica e hoje funciona como marina. Dali, siga até o mirante de Shirley Heights para ver o pôr do sol sobre o porto."
    },
    {
      "type": "do",
      "title": "Ver milhares de fragatas nidificando em uma lagoa de mangue",
      "text": "Em Barbuda, o Santuário de Aves Fragata, na Lagoa Codrington, abriga uma das maiores colônias de fragatas-magníficas do mundo. Os barcos chegam bem perto dos ninhos entre os mangues."
    }
  ],
  "bs": [
    {
      "type": "know",
      "title": "A primeira terra das Américas que Colombo pisou fica nas Bahamas!",
      "text": "Em 1492, Cristóvão Colombo desembarcou numa ilha do arquipélago que os nativos lucaios chamavam Guanahani. Qual ilha foi exatamente ainda é debatido por historiadores."
    },
    {
      "type": "do",
      "title": "Nadar com porquinhos em uma praia deserta",
      "text": "Em Big Major Cay, nas Exumas, porcos vivem soltos na praia e entram na água de águas turquesa para receber visitantes de barco. O passeio costuma partir de Nassau ou de Staniel Cay."
    },
    {
      "type": "do",
      "title": "Mergulhar num buraco azul de mais de 200 metros de profundidade",
      "text": "O Dean's Blue Hole, em Long Island, é um abismo circular de água azul escura cercado de areia branca. Ele é famoso entre os apneístas e sedia competições internacionais de mergulho livre."
    }
  ],
  "bb": [
    {
      "type": "know",
      "title": "A única viagem ao exterior de George Washington foi para Barbados!",
      "text": "Em 1751, aos 19 anos, Washington acompanhou o irmão doente à ilha. Foi a única vez que ele saiu do território que viria a ser os Estados Unidos, e a casa onde ficou hoje é museu."
    },
    {
      "type": "do",
      "title": "Descer a uma caverna com riacho subterrâneo e estalactites",
      "text": "A Harrison's Cave, no interior da ilha, é percorrida em bondinho elétrico por salões de cristais calcários, cachoeiras e lagoas cristalinas."
    },
    {
      "type": "do",
      "title": "Visitar uma destilaria de rum que cita uma escritura de 1703",
      "text": "A Mount Gay, perto de Bridgetown, reivindica uma escritura de 1703 como prova de sua origem. A visita inclui degustação de rum envelhecido e explica a produção a partir da cana-de-açúcar."
    }
  ],
  "bz": [
    {
      "type": "know",
      "title": "O único país da América Central onde o inglês é a língua oficial!",
      "text": "Belize se chamava Honduras Britânica até 1973 e só se tornou independente do Reino Unido em 1981. Hoje, o inglês convive com o espanhol e o crioulo belizenho."
    },
    {
      "type": "do",
      "title": "Mergulhar no Great Blue Hole, um sumidouro marinho gigante",
      "text": "Dentro do atol Lighthouse Reef, este buraco circular de mais de 300 metros de diâmetro revela estalactites submersas e tubarões de recife."
    },
    {
      "type": "do",
      "title": "Subir numa pirâmide maia no meio da selva",
      "text": "Em Caracol, a pirâmide Caana é a maior construção maia de Belize. Perto da fronteira, Xunantunich também permite subir ao topo do templo El Castillo e ver a selva."
    }
  ],
  "ca": [
    {
      "type": "know",
      "title": "No Canadá, a maré chega a subir mais de dez metros em poucas horas!",
      "text": "A Baía de Fundy tem as maiores marés do mundo. Em Burntcoat Head, a diferença entre maré baixa e alta passa de 15 metros, expondo e depois inundando o fundo do mar duas vezes por dia."
    },
    {
      "type": "do",
      "title": "Remar numa canoa em um lago de cor turquesa cercado de montanhas",
      "text": "O Lago Moraine e o Lago Louise, no Parque Nacional de Banff, nas Rochosas, têm água glacial cuja cor vem do pó de rocha. Alugar uma canoa é um programa clássico de verão."
    },
    {
      "type": "do",
      "title": "Caminhar pela cidade murada de Quebec",
      "text": "O centro histórico de Quebec, com ruas de pedra, casario francês e o castelo Château Frontenac, é Patrimônio Mundial e conserva as muralhas e portões de seu passado colonial."
    }
  ],
  "cr": [
    {
      "type": "know",
      "title": "A Costa Rica aboliu o exército por decreto em 1948!",
      "text": "Depois de uma guerra civil, o presidente José Figueres Ferrer anunciou o fim das forças armadas, e a medida foi incluída na Constituição de 1949. O orçamento foi direcionado a educação e saúde."
    },
    {
      "type": "do",
      "title": "Atravessar pontes suspensas dentro de uma floresta de nuvens",
      "text": "A Reserva de Monteverde tem trilhas e pontes sobre as copas das árvores, envoltas em neblina, onde vivem quetzais, preguiças e centenas de espécies de orquídeas."
    },
    {
      "type": "do",
      "title": "Ver tartarugas-verdes desovando numa praia de canais",
      "text": "O Parque Nacional Tortuguero, no Caribe, só é acessível por barco ou avião. Durante a temporada de desova, guias credenciados levam grupos à praia à noite."
    }
  ],
  "cu": [
    {
      "type": "know",
      "title": "Em Cuba vive o menor pássaro do mundo, do tamanho de um polegar!",
      "text": "O zunzuncito, ou beija-flor-abelha, mede cerca de seis centímetros e é nativo de Cuba. Os machos reluzem em tons de azul e rosa durante o período reprodutivo."
    },
    {
      "type": "do",
      "title": "Passear pela Havana Velha entre praças coloniais e carros dos anos 1950",
      "text": "A Habana Vieja é Patrimônio Mundial e reúne a Plaza Vieja, a Catedral e fortalezas espanholas. Ao anoitecer, o calçadão do Malecón vira ponto de encontro à beira-mar."
    },
    {
      "type": "do",
      "title": "Ver colinas de calcário gigantes no Vale de Viñales",
      "text": "Os mogotes, formações arredondadas que se erguem do vale, cercam plantações de tabaco. Visitar uma casa de secagem de folhas mostra como nascem os charutos cubanos."
    }
  ],
  "dm": [
    {
      "type": "know",
      "title": "Dominica tem uma das poucas bandeiras do mundo com a cor roxa!",
      "text": "O roxo aparece na plumagem do papagaio sisserou, ave nacional e espécie ameaçada que vive só em Dominica. A bandeira mostra o pássaro cercado de dez estrelas verdes."
    },
    {
      "type": "do",
      "title": "Caminhar até um lago de água fervente no meio da floresta",
      "text": "A trilha ao Boiling Lake, no Parque Nacional Morne Trois Pitons (Patrimônio Mundial), atravessa vales vulcânicos e fontes de enxofre antes de chegar a uma lagoa em ebulição."
    },
    {
      "type": "do",
      "title": "Mergulhar de snorkel em meio a bolhas vulcânicas",
      "text": "No Champagne Reef, gás quente que sai do fundo do mar sobe em fileiras de bolhas, dando a sensação de nadar dentro de uma taça de champanhe."
    }
  ],
  "sv": [
    {
      "type": "know",
      "title": "El Salvador é o único país da América Central sem costa no Caribe!",
      "text": "Todo o litoral salvadorenho fica no Pacífico, e o país é o menor da América Central continental. Isso o torna uma exceção entre seus vizinhos centro-americanos."
    },
    {
      "type": "do",
      "title": "Visitar uma aldeia maia soterrada por cinzas vulcânicas",
      "text": "Joya de Cerén, Patrimônio Mundial, é chamada de Pompeia das Américas. Casas, utensílios e plantações de cerca do ano 600 foram preservados sob camadas de cinza."
    },
    {
      "type": "do",
      "title": "Pegar onda numa das melhores costas de surfe da região",
      "text": "Em La Libertad, praias como Punta Roca e El Tunco têm ondas consistentes para surfistas experientes. Quem está começando encontra escolas de surfe nas praias próximas."
    }
  ],
  "us": [
    {
      "type": "know",
      "title": "Duas ilhas do Alasca ficam separadas pela fronteira entre ontem e hoje!",
      "text": "Little Diomede (EUA) e Big Diomede (Rússia) distam cerca de quatro quilômetros, e a Linha Internacional de Data passa entre elas. As duas estão em dias diferentes do calendário."
    },
    {
      "type": "do",
      "title": "Ver um gêiser jorrar com hora marcada em Yellowstone",
      "text": "O Old Faithful é o gêiser mais famoso do parque, que também tem fontes termais coloridas e vida selvagem como bisões e lobos."
    },
    {
      "type": "do",
      "title": "Ouvir jazz ao vivo e comer gumbo no Bairro Francês de Nova Orleans",
      "text": "A cidade é o berço do jazz. Casas como o Preservation Hall mantêm a tradição, enquanto restaurantes servem gumbo e beignets da cozinha crioula e cajun."
    }
  ],
  "gd": [
    {
      "type": "know",
      "title": "A bandeira de Granada traz uma noz-moscada, símbolo do país das especiarias!",
      "text": "A ilha é chamada de Ilha das Especiarias por produzir noz-moscada, canela, cravo e gengibre. A noz-moscada aparece na bandeira, num dos triângulos laterais."
    },
    {
      "type": "do",
      "title": "Visitar um parque de esculturas submerso",
      "text": "No Molinere Bay, o escultor Jason deCaires Taylor instalou, em 2006, figuras de concreto no fundo do mar. Hoje, com os corais, viraram recife artificial visitado por mergulhadores."
    },
    {
      "type": "do",
      "title": "Ver como se processa a noz-moscada em uma estação tradicional",
      "text": "Em Gouyave, a Gouyave Nutmeg Processing Station permite acompanhar a seleção, a secagem e o embalamento das sementes, e conhecer a especiaria que moldou a economia da ilha."
    }
  ],
  "gt": [
    {
      "type": "know",
      "title": "O quetzal é ao mesmo tempo ave sagrada dos maias e nome da moeda da Guatemala!",
      "text": "Para os povos maias, o quetzal simbolizava liberdade, e suas longas penas verdes eram reservadas à nobreza. A ave dá nome ao dinheiro do país e aparece em seu brasão."
    },
    {
      "type": "do",
      "title": "Ver o nascer do sol sobre as pirâmides de Tikal",
      "text": "O Parque Nacional Tikal, Patrimônio Mundial, tem templos maias que emergem acima da copa da floresta, onde se ouvem os bugios ao amanhecer."
    },
    {
      "type": "do",
      "title": "Cruzar de barco um lago cercado por vulcões",
      "text": "O Lago de Atitlán tem vilarejos maias em suas margens, como San Juan La Laguna e Santiago Atitlán, onde se conhecem teares tradicionais e mercados."
    }
  ],
  "ht": [
    {
      "type": "know",
      "title": "O Haiti foi o primeiro país governado por ex-escravizados!",
      "text": "Após a Revolução Haitiana, liderada por Toussaint Louverture e Jean-Jacques Dessalines, o Haiti declarou independência em 1804, tornando-se a primeira república negra e o primeiro país independente da América Latina e do Caribe."
    },
    {
      "type": "do",
      "title": "Visitar uma fortaleza gigante no topo de uma montanha",
      "text": "A Cidadela Laferrière, erguida após a independência para resistir a uma invasão, e as ruínas do Palácio Sans-Souci formam um Patrimônio Mundial perto de Milot."
    },
    {
      "type": "do",
      "title": "Conhecer cachoeiras de água azul perto de Jacmel",
      "text": "O Bassin-Bleu reúne poços de água turquesa ligados por quedas de água em meio à vegetação, um dos atrativos naturais mais conhecidos do sul do país. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "hn": [
    {
      "type": "know",
      "title": "A expressão república das bananas nasceu inspirada em Honduras!",
      "text": "O escritor O. Henry, que passou temporada no país, usou o termo no livro Repolhos e Reis, de 1904, ambientado numa nação fictícia baseada em Honduras e dominada por empresas bananeiras."
    },
    {
      "type": "do",
      "title": "Ler uma escada de hieróglifos maias em Copán",
      "text": "As ruínas de Copán, Patrimônio Mundial, abrigam a Escadaria dos Hieróglifos, que traz a mais longa inscrição conhecida da civilização maia, com milhares de glifos esculpidos."
    },
    {
      "type": "do",
      "title": "Mergulhar no recife de coral das Ilhas da Baía",
      "text": "Em Roatán e Utila, o mergulho ocorre sobre o Recife Mesoamericano, e quem prefere apenas snorkel encontra corais e peixes tropicais perto da praia."
    }
  ],
  "jm": [
    {
      "type": "know",
      "title": "Uma cidade pirata da Jamaica afundou de repente num terremoto!",
      "text": "Port Royal, no século XVII um dos portos mais agitados e temidos do Caribe, teve boa parte de seu território engolida pelo mar em 1692, e ruínas ainda estão no fundo da baía."
    },
    {
      "type": "do",
      "title": "Visitar a casa onde Bob Marley viveu e gravou",
      "text": "O Museu Bob Marley, em Kingston, fica na antiga residência do cantor e reúne fotos, discos e o estúdio onde ele trabalhou, contando a história do reggae."
    },
    {
      "type": "do",
      "title": "Subir as Montanhas Azuis ao amanhecer e provar café local",
      "text": "A trilha até o Blue Mountain Peak sai de madrugada para ver o nascer do sol, em uma região onde se cultiva um dos cafés mais valorizados do mundo."
    }
  ],
  "mx": [
    {
      "type": "know",
      "title": "Um vulcão nasceu no meio de uma plantação de milho, em 1943!",
      "text": "O Paricutín surgiu de uma fissura num campo do lavrador Dionisio Pulido, em Michoacán. Em poucos meses já era um cone de centenas de metros e soterrou a vila de San Juan Parangaricutiro."
    },
    {
      "type": "do",
      "title": "Subir a Pirâmide do Sol em Teotihuacán",
      "text": "A antiga cidade, Patrimônio Mundial, foi uma das maiores do mundo pré-colombiano, e a Avenida dos Mortos leva às pirâmides do Sol e da Lua."
    },
    {
      "type": "do",
      "title": "Nadar em cenotes de água cristalina na Península de Yucatán",
      "text": "Os cenotes são poços de calcário que se abrem para rios subterrâneos. Os maias os consideravam portais sagrados, e hoje é possível nadar em muitos deles."
    }
  ],
  "ni": [
    {
      "type": "know",
      "title": "Um lago de água doce da Nicarágua tem tubarões!",
      "text": "O Lago Nicarágua abriga tubarões-cabeça-chata, que sobem o Rio San Juan desde o Caribe. Eles pertencem à mesma espécie dos tubarões marinhos e toleram água doce."
    },
    {
      "type": "do",
      "title": "Descer um vulcão ativo numa prancha",
      "text": "Em Cerro Negro, perto de León, o vulcanoboarding consiste em deslizar sentado ou em pé pela encosta de cinzas negras, depois de subir a pé até a cratera."
    },
    {
      "type": "do",
      "title": "Navegar entre ilhotas vulcânicas no Lago Nicarágua",
      "text": "Saindo da cidade colonial de Granada, as Isletas de Granada são centenas de ilhas formadas por uma antiga erupção do vulcão Mombacho, com aves e casas de veraneio."
    }
  ],
  "pa": [
    {
      "type": "know",
      "title": "No Canal do Panamá, os navios sobem cerca de 26 metros para atravessar o continente!",
      "text": "O canal, inaugurado em 1914, usa eclusas para elevar as embarcações até o Lago Gatún, e depois as baixa até o outro oceano. A travessia é feita sem túneis."
    },
    {
      "type": "do",
      "title": "Ver navios gigantes passando pelas eclusas de Miraflores",
      "text": "O centro de visitantes de Miraflores tem terraços de observação e museu, para ver de perto a passagem das embarcações."
    },
    {
      "type": "do",
      "title": "Visitar ilhas de coral administradas pelo povo indígena Guna",
      "text": "Em Guna Yala, comarca indígena autônoma, ilhas minúsculas com palmeiras e águas cristalinas são visitadas de barco, e é possível conhecer a cultura guna e suas molas, tecidos bordados."
    }
  ],
  "do": [
    {
      "type": "know",
      "title": "O merengue dominicano é Patrimônio Cultural Imaterial da Humanidade!",
      "text": "A UNESCO reconheceu o merengue em 2016. O ritmo, dançado em pares com música de acordeão, tambora e güira, é um dos símbolos nacionais da República Dominicana."
    },
    {
      "type": "do",
      "title": "Caminhar pela cidade europeia mais antiga das Américas",
      "text": "A Zona Colonial de Santo Domingo, fundada em 1496 e Patrimônio Mundial, tem a primeira catedral das Américas, o Alcázar de Colón e ruas de pedra."
    },
    {
      "type": "do",
      "title": "Navegar entre mangues e cavernas com arte taína",
      "text": "O Parque Nacional Los Haitises tem ilhotas de calcário cobertas de vegetação, manguezais e grutas com pinturas e petróglifos do povo taíno, visitados de barco saindo de Samaná."
    }
  ],
  "kn": [
    {
      "type": "know",
      "title": "Um dos pais fundadores dos Estados Unidos nasceu na ilha de Nevis!",
      "text": "Alexander Hamilton nasceu em Charlestown, capital de Nevis, e foi para a América do Norte ainda jovem. A casa onde nasceu abriga hoje um museu."
    },
    {
      "type": "do",
      "title": "Explorar a fortaleza chamada de Gibraltar do Caribe",
      "text": "A Fortaleza de Brimstone Hill, Patrimônio Mundial, foi construída pelos britânicos em uma colina vulcânica e tem vista para ilhas vizinhas."
    },
    {
      "type": "do",
      "title": "Subir até a cratera de um vulcão coberto de floresta",
      "text": "A trilha do Monte Liamuiga, em São Cristóvão, atravessa floresta tropical até a borda da cratera, com vista do Caribe e de Nevis."
    }
  ],
  "lc": [
    {
      "type": "know",
      "title": "Dois ganhadores do Nobel nasceram nesta pequena ilha do Caribe!",
      "text": "O economista Arthur Lewis (Nobel de Economia, 1979) e o poeta Derek Walcott (Nobel de Literatura, 1992) nasceram em Santa Lúcia, país com tamanho de uma cidade média."
    },
    {
      "type": "do",
      "title": "Subir o Gros Piton, uma das torres vulcânicas gêmeas",
      "text": "Os Pitons, Patrimônio Mundial, ladeiam a baía de Soufrière. A trilha do Gros Piton, com guia obrigatório, leva a um mirante sobre o mar."
    },
    {
      "type": "do",
      "title": "Tomar banho de lama quente em uma cratera vulcânica",
      "text": "Em Sulphur Springs, perto de Soufrière, fumarolas de enxofre brotam do solo, e há piscinas de lama e água termal para o banho."
    }
  ],
  "vc": [
    {
      "type": "know",
      "title": "Piratas do Caribe foi filmado em uma baía de São Vicente!",
      "text": "Cenas do primeiro filme da série foram gravadas na baía de Wallilabou, onde ainda existem cenários usados nas filmagens, hoje transformados em atração turística."
    },
    {
      "type": "do",
      "title": "Mergulhar de snorkel com tartarugas-marinhas em um atol protegido",
      "text": "O Parque Marinho Tobago Cays reúne cinco ilhotas desertas rodeadas por recife, onde tartarugas-verdes nadam em águas rasas."
    },
    {
      "type": "do",
      "title": "Passear por um dos jardins botânicos mais antigos das Américas",
      "text": "O Jardim Botânico de Kingstown, fundado no século XVIII, recebeu mudas de fruta-pão trazidas pelo capitão Bligh, e hoje mostra palmeiras, orquídeas e o papagaio nacional."
    }
  ],
  "tt": [
    {
      "type": "know",
      "title": "O steelpan, instrumento feito de barril de petróleo, nasceu em Trinidad!",
      "text": "Inventado no século XX por músicos de bairros pobres de Port of Spain, que batiam em barris e latas para criar notas, virou o símbolo musical do país."
    },
    {
      "type": "do",
      "title": "Ver um lago natural de asfalto",
      "text": "O Pitch Lake, em La Brea, é um dos maiores depósitos naturais de asfalto do planeta, e dá para caminhar sobre sua superfície sólida com guia."
    },
    {
      "type": "do",
      "title": "Dançar nas ruas durante o Carnaval de Port of Spain",
      "text": "O Carnaval acontece antes da Quaresma, com bandas de fantasias, música de calipso e soca, e competições de steelbands."
    }
  ],
  "ar": [
    {
      "type": "know",
      "title": "A montanha mais alta fora da Ásia fica na Argentina!",
      "text": "O Aconcagua, na cordilheira dos Andes, em Mendoza, tem cerca de 6.960 metros e é o pico mais alto das Américas, do Hemisfério Sul e de todo o planeta fora da Ásia."
    },
    {
      "type": "do",
      "title": "Dançar tango numa milonga tradicional de Buenos Aires",
      "text": "Em casas de bairros como San Telmo e Almagro, dançarinos de todas as idades se reúnem em milongas, e muitas oferecem aula para iniciantes antes do baile."
    },
    {
      "type": "do",
      "title": "Caminhar sobre o gelo do glaciar Perito Moreno",
      "text": "Em El Calafate, na Patagônia, é possível fazer trekking com crampons sobre o glaciar ou ver suas paredes de gelo desabando no lago, de passarelas panorâmicas."
    }
  ],
  "bo": [
    {
      "type": "know",
      "title": "A Bolívia não tem mar desde 1884, mas tem marinha!",
      "text": "O país perdeu o litoral na Guerra do Pacífico, contra o Chile, mas manteve uma força naval que patrulha o Lago Titicaca e os rios da bacia amazônica e do Prata."
    },
    {
      "type": "do",
      "title": "Ver milhares de pegadas de dinossauros numa parede quase vertical",
      "text": "No Parque Cretácico de Cal Orck'o, perto de Sucre, uma parede de calcário de cerca de cem metros guarda milhares de pegadas de dinossauros de 68 milhões de anos."
    },
    {
      "type": "do",
      "title": "Visitar a ilha onde os incas acreditavam que o Sol nasceu",
      "text": "A Isla del Sol, no Lago Titicaca, tem trilhas entre ruínas incas e vilarejos, com vistas do lago e das montanhas nevadas da Cordilheira Real. O acesso é de barco desde Copacabana."
    }
  ],
  "br": [
    {
      "type": "know",
      "title": "O Rio de Janeiro já foi capital de um império europeu!",
      "text": "Em 1808, fugindo de Napoleão, a corte portuguesa se mudou para o Rio, que se tornou sede do Reino de Portugal, e em 1815 do Reino Unido de Portugal, Brasil e Algarves."
    },
    {
      "type": "do",
      "title": "Nadar em lagoas de água doce no meio de dunas brancas",
      "text": "Nos Lençóis Maranhenses, as chuvas formam lagoas azuis e verdes entre dunas de areia, que alcançam o auge entre junho e setembro. O acesso é por Barreirinhas."
    },
    {
      "type": "do",
      "title": "Passear pelo Pelourinho ao som de percussão",
      "text": "O centro histórico de Salvador, Patrimônio Mundial, reúne igrejas barrocas e casarões coloridos, onde se prova acarajé e se ouvem blocos afro como o Olodum."
    }
  ],
  "cl": [
    {
      "type": "know",
      "title": "No deserto do Atacama há lugares onde a chuva pode ficar anos sem cair!",
      "text": "É o deserto não polar mais árido do planeta, e algumas estações meteorológicas passaram vários anos seguidos sem registrar precipitação. Mesmo assim, flores brotam em anos de chuva."
    },
    {
      "type": "do",
      "title": "Subir de ascensor pelos cerros coloridos de Valparaíso",
      "text": "O centro histórico da cidade-porto, Patrimônio Mundial, tem escadarias, murais, casas coloridas penduradas nas colinas e antigos ascensores."
    },
    {
      "type": "do",
      "title": "Caminhar sob as torres de granito do Parque Nacional Torres del Paine",
      "text": "Na Patagônia chilena, o circuito W passa por lagos de cor azul-leitosa, glaciares e picos de granito."
    }
  ],
  "co": [
    {
      "type": "know",
      "title": "A Colômbia é o único país do mundo que leva o nome de Cristóvão Colombo!",
      "text": "O nome homenageia o navegador, e foi adotado na independência pelos libertadores, para a Grande Colômbia, de Simón Bolívar. O país atual herdou o nome depois da dissolução da federação."
    },
    {
      "type": "do",
      "title": "Caminhar pelas muralhas de Cartagena das Índias",
      "text": "A cidade amuralhada, Patrimônio Mundial, tem fortalezas do período colonial espanhol, praças e casarões coloridos com varandas floridas."
    },
    {
      "type": "do",
      "title": "Passear entre as palmeiras mais altas do mundo no Vale de Cocora",
      "text": "Perto de Salento, as palmeiras-de-cera-de-Quindío, árvore nacional do país, passam de 50 metros e se erguem em campos verdes cobertos de neblina."
    }
  ],
  "ec": [
    {
      "type": "know",
      "title": "O ponto mais distante do centro da Terra não é o Everest, e fica no Equador!",
      "text": "Por causa do achatamento do planeta, o cume do Chimborazo, vulcão extinto nos Andes, é o lugar da superfície mais afastado do centro terrestre, apesar de ser mais baixo que o Everest."
    },
    {
      "type": "do",
      "title": "Ver iguanas-marinhas e tartarugas gigantes nas Ilhas Galápagos",
      "text": "O arquipélago, que inspirou Charles Darwin, tem animais sem medo de humanos. As visitas seguem regras rígidas e, em muitas ilhas, exigem guia credenciado."
    },
    {
      "type": "do",
      "title": "Passear pelo centro histórico de Quito, Patrimônio Mundial",
      "text": "Casarões coloniais, igrejas barrocas como La Compañía e a Plaza Grande fazem um dos maiores centros históricos preservados da América Latina."
    }
  ],
  "gy": [
    {
      "type": "know",
      "title": "A Guiana é o único país da América do Sul com o inglês como língua oficial!",
      "text": "O território foi colônia holandesa e depois britânica, até a independência em 1966. Por isso o inglês é a língua oficial, ao lado de crioulos e línguas indígenas."
    },
    {
      "type": "do",
      "title": "Ver uma queda d'água de 226 metros no meio da floresta",
      "text": "O Kaieteur Falls, no Parque Nacional Kaieteur, é uma das maiores quedas de salto único do mundo. O acesso mais comum é de avião pequeno desde Georgetown."
    },
    {
      "type": "do",
      "title": "Caminhar numa ponte suspensa na copa da floresta amazônica",
      "text": "A Reserva Iwokrama tem passarela suspensa a cerca de 30 metros de altura, para observar aves e macacos. Há ainda passeios para ver o arapaima, peixe gigante de água doce."
    }
  ],
  "py": [
    {
      "type": "know",
      "title": "O guarani, língua indígena, é oficial no Paraguai e falado também por não indígenas!",
      "text": "O Paraguai é um dos poucos países das Américas onde uma língua originária é oficial ao lado do espanhol e usada no dia a dia por grande parte da população."
    },
    {
      "type": "do",
      "title": "Visitar as ruínas de missões jesuíticas guaranis",
      "text": "Trinidad e Jesús de Tavarangüé, Patrimônio Mundial, são conjuntos de igrejas de pedra do século XVII, onde jesuítas e guaranis viveram."
    },
    {
      "type": "do",
      "title": "Ver cachoeiras no rio Monday, perto de Ciudad del Este",
      "text": "Os Saltos del Monday formam uma queda larga de águas ocre numa área verde, com trilhas curtas e mirantes."
    }
  ],
  "pe": [
    {
      "type": "know",
      "title": "A batata foi domesticada nos Andes peruanos, e o país tem milhares de variedades!",
      "text": "Povos andinos cultivam a batata há milhares de anos, e hoje o Peru guarda variedades de muitas cores e formatos, que ainda aparecem nos mercados."
    },
    {
      "type": "do",
      "title": "Subir às ruínas incas de Machu Picchu",
      "text": "A cidadela, Patrimônio Mundial, fica no alto de uma montanha. O acesso é por trem ou pela trilha inca, e há ingressos com horário."
    },
    {
      "type": "do",
      "title": "Provar ceviche numa cevichería de Lima",
      "text": "O prato de peixe cru marinado em limão, com cebola roxa e milho, é patrimônio cultural do país, e é servido fresco nos restaurantes de Lima."
    }
  ],
  "sr": [
    {
      "type": "know",
      "title": "A Holanda trocou Nova York pelo Suriname!",
      "text": "No Tratado de Breda, em 1667, os ingleses ficaram com Nova Amsterdã, que virou Nova York, e os holandeses mantiveram o Suriname, rico em açúcar. Por isso o holandês é a língua oficial até hoje."
    },
    {
      "type": "do",
      "title": "Ver uma mesquita e uma sinagoga lado a lado em Paramaribo",
      "text": "O centro histórico, Patrimônio Mundial, tem casas de madeira coloniais, e na rua Keizerstraat uma mesquita e uma sinagoga dividem a mesma parede."
    },
    {
      "type": "do",
      "title": "Ouvir macacos-bugios na Reserva de Brownsberg",
      "text": "No alto de um platô com vista para o lago Brokopondo, trilhas atravessam a floresta úmida até quedas d'água e mirantes."
    }
  ],
  "uy": [
    {
      "type": "know",
      "title": "O Uruguai sediou e venceu a primeira Copa do Mundo, em 1930!",
      "text": "O torneio inaugural foi disputado em Montevidéu, no Estádio Centenário, e a seleção da casa derrotou a Argentina na final por 4 a 2."
    },
    {
      "type": "do",
      "title": "Passear pelas ruas de pedra de Colonia del Sacramento",
      "text": "A cidade, fundada pelos portugueses em 1680 e Patrimônio Mundial, tem casas baixas, farol e vista para o Rio da Prata, e é vizinha de Buenos Aires."
    },
    {
      "type": "do",
      "title": "Ver lobos-marinhos e dunas em Cabo Polonio",
      "text": "Acessível apenas por caminhões 4x4 através de dunas, essa vila de pescadores tem farol e uma colônia de lobos-marinhos nas pedras."
    }
  ],
  "ve": [
    {
      "type": "know",
      "title": "Na Venezuela há um lugar onde relâmpagos iluminam o céu em muitas noites do ano!",
      "text": "O Relâmpago do Catatumbo, na foz do rio Catatumbo, no Lago Maracaibo, ocorre por horas seguidas em muitas noites do ano, e já foi usado como referência por navegadores."
    },
    {
      "type": "do",
      "title": "Contemplar a maior queda d'água ininterrupta do mundo",
      "text": "O Salto Angel, no Parque Nacional Canaima, Patrimônio Mundial, tem 979 metros de queda e despenca de um tepui, as montanhas de topo plano."
    },
    {
      "type": "do",
      "title": "Nadar em águas rasas de cor turquesa no arquipélago de Los Roques",
      "text": "O Parque Nacional Archipiélago Los Roques tem recifes, bancos de areia e ilhotas ideais para snorkel e observação de aves marinhas. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "au": [
    {
      "type": "know",
      "title": "Uma cerca de milhares de quilômetros cruza o país para barrar cães selvagens",
      "text": "Conhecida como Dingo Fence, essa cerca foi construída para proteger os rebanhos de ovelhas do sudeste e tem cerca de 5.600 km, sendo uma das estruturas mais longas já erguidas pelo ser humano."
    },
    {
      "type": "do",
      "title": "Faça a caminhada guiada ao redor de Uluru ao nascer do sol",
      "text": "No Parque Nacional Uluru-Kata Tjuta, o monólito sagrado dos povos Anangu muda de cor ao amanhecer. Guias aborígenes explicam histórias da criação e o significado dos locais ao longo da trilha de base."
    },
    {
      "type": "do",
      "title": "Dirija pela Great Ocean Road até os Doze Apóstolos",
      "text": "A estrada costeira de Victoria passa por florestas, praias de surfe e termina em grandes pilares de calcário que emergem do mar, ótimos ao entardecer."
    }
  ],
  "fj": [
    {
      "type": "know",
      "title": "Em Fiji, pessoas caminham descalças sobre pedras em brasa como tradição",
      "text": "Na ilha de Beqa, o clã Sawau pratica a cerimônia ancestral do vilavilairevo, na qual homens atravessam um poço de pedras aquecidas por horas, sem se queimar, segundo a tradição ligada a uma lenda local."
    },
    {
      "type": "do",
      "title": "Participe de uma cerimônia do kava em uma vila fijiana",
      "text": "Em um sevusevu, visitantes oferecem raízes de kava ao chefe e bebem juntos a bebida preparada em uma tigela de madeira, gesto central da hospitalidade e da vida social do país."
    },
    {
      "type": "do",
      "title": "Passeie pelo Jardim do Gigante Adormecido, perto de Nadi",
      "text": "Essa coleção de orquídeas e plantas tropicais, aos pés de uma colina que lembra um gigante deitado, abriga grande variedade de ninfeias e orquídeas em trilhas tranquilas."
    }
  ],
  "mh": [
    {
      "type": "know",
      "title": "Os navegadores marshaleses liam as ondas com mapas feitos de varetas",
      "text": "Os mapas de varetas, ou stick charts, usavam gravetos e conchas para representar como as ondulações do oceano se curvam ao redor das ilhas, permitindo navegar longas distâncias sem instrumentos modernos."
    },
    {
      "type": "do",
      "title": "Visite o Museu Alele para conhecer a cultura e a história marshalesa",
      "text": "Em Majuro, o museu e biblioteca nacional reúne artefatos, fotografias e exemplares de mapas de navegação tradicionais, sendo uma boa introdução à história das ilhas."
    },
    {
      "type": "do",
      "title": "Relaxe e nade na praia de Laura, no extremo oeste do atol de Majuro",
      "text": "Areias brancas, coqueiros e águas calmas de laguna fazem do lugar um dos recantos mais agradáveis do atol, com piqueniques comuns nos fins de semana locais."
    }
  ],
  "sb": [
    {
      "type": "know",
      "title": "Numa ilha do país está o maior lago do Pacífico insular",
      "text": "Rennell Leste, Patrimônio Mundial da UNESCO, abriga o lago Tegano, descrito como o maior lago do Pacífico insular, cercado por floresta e com várias espécies de aves que só existem ali."
    },
    {
      "type": "do",
      "title": "Mergulhe ou navegue na Lagoa de Marovo",
      "text": "Uma das maiores lagunas de dupla barreira de coral do mundo, com ilhotas de floresta, vilas sobre palafitas e recifes cheios de vida, ideal para canoa e mergulho com snorkel."
    },
    {
      "type": "do",
      "title": "Explore os vestígios da Segunda Guerra em Guadalcanal",
      "text": "Perto de Honiara, o Memorial Americano e os campos de batalha lembram a campanha de 1942 e 1943, e as águas do Iron Bottom Sound guardam dezenas de navios afundados."
    }
  ],
  "ki": [
    {
      "type": "know",
      "title": "Um país que existe nos quatro hemisférios do planeta!",
      "text": "Kiribati é o único país do mundo cujo território está ao mesmo tempo nos hemisférios Norte, Sul, Oriental e Ocidental, porque suas 33 ilhas se espalham pelo Pacífico e atravessam a Linha do Equador e o meridiano de 180°."
    },
    {
      "type": "do",
      "title": "Pesque bonefish em águas rasas de Kiritimati",
      "text": "Kiritimati, um dos maiores atóis de coral do mundo em área terrestre, é destino lendário de pesca esportiva com mosca nas planícies de maré, em meio a aves marinhas."
    },
    {
      "type": "do",
      "title": "Visite os vestígios da Batalha de Tarawa em Betio",
      "text": "Canhões, bunkers e destroços japoneses ainda aparecem na ilha de Betio, palco de uma das batalhas mais intensas do Pacífico em 1943, mantidos como memória da guerra."
    }
  ],
  "fm": [
    {
      "type": "know",
      "title": "Na ilha de Yap, o dinheiro era feito de pedras gigantes",
      "text": "As pedras rai são discos de calcário, alguns com mais de três metros de diâmetro, usados como moeda. A posse mudava de dono por acordo, mesmo sem que a pedra saísse do lugar."
    },
    {
      "type": "do",
      "title": "Explore as ruínas de Nan Madol, a cidade sobre o mar em Pohnpei",
      "text": "Centenas de ilhotas artificiais de basalto e coral formam um conjunto de templos e túmulos de uma antiga dinastia, tombado como Patrimônio Mundial da UNESCO."
    },
    {
      "type": "do",
      "title": "Mergulhe entre navios de guerra naufragados na Lagoa de Chuuk",
      "text": "Em 1944, a Operação Hailstone afundou dezenas de navios japoneses na lagoa. Hoje os cascos cobertos de coral formam um dos maiores cemitérios de navios do mundo para mergulho."
    }
  ],
  "nr": [
    {
      "type": "know",
      "title": "Nauru é a menor república do mundo e, oficialmente, não tem capital",
      "text": "A pequena ilha tem cerca de 21 km2. Yaren funciona como sede de governo na prática, mas a Constituição não declara nenhuma cidade como capital."
    },
    {
      "type": "do",
      "title": "Desça até o lago subterrâneo das Moqua Caves",
      "text": "Cavernas de calcário com estalactites escondem um lago de água cristalina, onde moradores e visitantes se refrescam em um ambiente fresco e quase secreto."
    },
    {
      "type": "do",
      "title": "Suba ao Command Ridge e veja o bunker japonês da Segunda Guerra",
      "text": "No ponto mais alto da ilha ficam canhões e o abrigo de comando dos japoneses, com vista para a costa e o recife que cercam toda a ilha."
    }
  ],
  "nz": [
    {
      "type": "know",
      "title": "A Nova Zelândia foi o primeiro país a dar voto às mulheres em eleições nacionais",
      "text": "Em 1893, mulheres neozelandesas conquistaram o direito de votar, após uma grande campanha liderada por Kate Sheppard, retratada ainda hoje na nota de dez dólares do país."
    },
    {
      "type": "do",
      "title": "Navegue em um barco pelas cavernas de vagalumes de Waitomo",
      "text": "Na caverna, você desliza em silêncio num barco sob um teto salpicado por milhares de larvas luminosas que lembram um céu estrelado."
    },
    {
      "type": "do",
      "title": "Prove um hangi e conheça a cultura maori em Rotorua",
      "text": "Em Te Puia e outros centros, há apresentações de canto e haka, vilas termais e a comida cozida em fornos subterrâneos aquecidos pelo vapor da terra."
    }
  ],
  "pw": [
    {
      "type": "know",
      "title": "Ao entrar em Palau, o visitante assina uma promessa ecológica no passaporte",
      "text": "Desde 2017, o carimbo de entrada traz o Palau Pledge, em que o viajante se compromete a agir de forma responsável com a ilha, a natureza e a cultura local."
    },
    {
      "type": "do",
      "title": "Nade com águas-vivas inofensivas no Lago das Medusas",
      "text": "No lago marinho de Eil Malk, nas Rock Islands, as águas-vivas desenvolveram ferrões quase inofensivos e migram diariamente seguindo o sol. O acesso depende da situação da população, então confirme antes."
    },
    {
      "type": "do",
      "title": "Mergulhe no Blue Corner, um dos pontos mais famosos de mergulho do mundo",
      "text": "Correntes fortes trazem tubarões, barracudas e cardumes enormes ao recife de coral na costa de Palau."
    }
  ],
  "pg": [
    {
      "type": "know",
      "title": "Papua Nova Guiné é o país com maior diversidade de línguas do planeta",
      "text": "Cerca de 840 línguas são faladas em um território relativamente pequeno, favorecidas por montanhas, selvas e vales isolados que mantiveram as comunidades separadas por milênios."
    },
    {
      "type": "do",
      "title": "Veja as danças e trajes do Festival Goroka Show",
      "text": "Todo ano, no Planalto Oriental, dezenas de grupos de diferentes regiões se apresentam com pinturas corporais, plumas de aves-do-paraíso e danças sing-sing."
    },
    {
      "type": "do",
      "title": "Percorra a Trilha Kokoda, que atravessa a cordilheira Owen Stanley",
      "text": "A travessia de floresta e montanhas, com vários dias, segue o cenário de uma campanha da Segunda Guerra e é guiada por moradores locais. Atenção: consulte alertas oficiais de viagem antes de planejar."
    }
  ],
  "ws": [
    {
      "type": "know",
      "title": "Samoa pulou um dia inteiro do calendário em 2011",
      "text": "Para alinhar o fuso com Austrália e Nova Zelândia, seus principais parceiros comerciais, o país passou da quinta-feira 29 de dezembro direto para sábado, 31 de dezembro, sem sexta-feira."
    },
    {
      "type": "do",
      "title": "Nade no To Sua Ocean Trench, uma piscina natural dentro de um buraco gigante",
      "text": "Uma escada de madeira desce até uma cratera cheia de água turquesa, cercada de vegetação, conectada ao oceano por um túnel de lava."
    },
    {
      "type": "do",
      "title": "Visite o Museu Robert Louis Stevenson em Vailima",
      "text": "Na casa onde o escritor escocês viveu seus últimos anos, uma trilha sobe até o seu túmulo no monte Vaea, com vista para Apia e o oceano."
    }
  ],
  "to": [
    {
      "type": "know",
      "title": "Tonga tem um portal de pedra com mais de 700 anos",
      "text": "O Ha'amonga 'a Maui é um trilito de coral erguido no século XIII, atribuído ao rei Tu'itatui, e alguns estudiosos defendem que servia de marco astronômico para solstícios."
    },
    {
      "type": "do",
      "title": "Nade com baleias-jubarte em Vava'u",
      "text": "Entre julho e outubro, as jubartes chegam às águas calmas para reprodução, e operadores licenciados levam visitantes para nadar junto a elas."
    },
    {
      "type": "do",
      "title": "Veja os gêiseres do mar nos Mapu'a 'a Vaea Blowholes, em Tongatapu",
      "text": "Ao longo da costa, o mar força jatos de água pelas fendas da rocha de coral, que sobem muitos metros de altura."
    }
  ],
  "tv": [
    {
      "type": "know",
      "title": "O código .tv de Tuvalu virou uma fonte de receita para o país",
      "text": "A terminação .tv, atribuída ao país entre os domínios de internet, é licenciada comercialmente e usada por serviços de vídeo no mundo todo, trazendo recursos relevantes ao pequeno atol."
    },
    {
      "type": "do",
      "title": "Faça snorkel na Área de Conservação de Funafuti",
      "text": "A reserva marinha protege recifes, tartarugas e aves nas ilhotas do lado oeste da laguna do atol, acessíveis de barco."
    },
    {
      "type": "do",
      "title": "Assista a uma fatele, a dança e canto tradicional das ilhas",
      "text": "Nas noites da comunidade, grupos cantam e dançam ao ritmo de tambores e palmas, tradição central da cultura polinésia de Tuvalu."
    }
  ],
  "vu": [
    {
      "type": "know",
      "title": "O bungee jump moderno foi inspirado em um ritual de Vanuatu",
      "text": "Em Pentecostes, homens do ritual Naghol se atiram de torres de madeira com cipós amarrados aos tornozelos, e esse costume inspirou os primeiros saltos modernos de bungee, nos anos 1970."
    },
    {
      "type": "do",
      "title": "Suba à borda do vulcão Yasur, na ilha de Tanna",
      "text": "Um dos vulcões mais acessíveis do mundo, ele entra em erupção quase continuamente, e quem visita vê explosões de lava ao anoitecer, sempre respeitando as regras de segurança do nível de alerta."
    },
    {
      "type": "do",
      "title": "Mergulhe no naufrágio do SS President Coolidge em Espiritu Santo",
      "text": "O luxuoso navio transformado em transporte de tropas afundou em 1942 e é considerado um dos maiores naufrágios acessíveis para mergulho recreativo do planeta."
    }
  ]
};
