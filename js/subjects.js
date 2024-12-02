window.addEventListener('message', function(e) {
    console.log(e.data);
    getJsonData(e.data);
})

var stuff = {
        "data": [
            {
                "id": 1,
                "subject": "Técnico",
                "img": "../img/tec.jpg",
                "atts": [
                    {
                        "src": '<img width="700" height="350" src="../img/compasio.png">',
                        "src2": '<img width="700" height="350" src="../img/compasio2.png">',
                        "description": "A Compasio foi nossa SA fullstack no curso de Desenvolvimento de Sistemas, consistindo em um webapp para proporcionar maior visibilidade às ONGs, com a possibilidade de divulgar seus trabalhos e criar campanhas de arrecadação, tanto para pessoas que são ou desejam ser voluntárias, quanto para aquelas que podem entrar em contato com a organização para ajudar ou doar diretamente. Com este trabalho, pude aprimorar minhas habilidades de desenvolvimento em back-end, área na qual almejo me especializar, desenvolvendo toda a API do site e o banco de dados. <a href='https://github.com/Compasio/backend' target='_blank'>Link do repositório.</a>",
                        "title": "Compasio - 3° Ano"
                    },
                    {
                        "src": '<iframe width="700" height="765" src="https://www.youtube.com/embed/6y9d3qNpjUk?si=GqQOytzeN_KjlG3P"></iframe>',
                        "description": "A Grooving foi meu projeto individual para a disciplina de Desenvolvimento de Aplicativos. Ela consiste em um app de música similar ao Spotify. Com este projeto, pude aprimorar meus conhecimentos em desenvolvimento ainda mais, aprendendo novas ferramentas para o back-end e para o front-end, além de desenvolver um pensamento crítico sobre a usabilidade em celulares. <a href='https://github.com/gabri3lquadr0s/grooving' target='_blank'>Link do Repositório.</a>",
                        "title": "Grooving - 3° Ano"
                    },
                    {
                        "src": '<iframe src="https://www.youtube.com/embed/XsIGDWfV9pc?si=Qh5zHISrnuThT6BC" width="700" height="770" allow="autoplay"></iframe>',
                        "description": "Como uma das últimas atividades do ano de Fundamentos de Redes, tivemos que formular uma paródia sobre algum tema de redes com uma música de nossa escolha, no caso nosso tema foi camadas de acesso de rede e a música usada foi Hypnotize, da banda System of a Down. Foi um trabalho divertido e bem diferente de se fazer.",
                        "title": "Paródia de redes - 2º Ano"
                    }
                    ]
            },
            {
                "id": 2,
                "subject": "Matemática",
                "img": "../img/mat.jpg",
                "atts": [
                    {
                        "src": `<img width="700" height="350" src="../img/quina.png">`,
                        "src2": '<iframe width="700" height="350"  src="https://www.canva.com/design/DAGVMUDRKyc/tc6xw0nwKcIhpuAlSZbBNg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">',
                        "description": "Estudando sobre probabilidade, um dos assuntos mais frequentes são as diversas loterias. Neste trabalho, fizemos uma apresentação de slides sobre a Quina, uma modalidade da loteria, e eu desenvolvi um mini software em Python para demonstrar como funciona o sorteio. Esta atividade contribuiu para a compreensão geral de probabilidades e chances pequenas, e como são realmente pequenas as chances de se ganhar nas apostas, além de estimular a criatividade para pensar em um pequeno software que simulava a Quina. <a href='https://github.com/gabri3lquadr0s/quina\' target='_blank'>Link do software.</a>",
                        "title": "Quina - 3° Ano"
                    },
                    {
                        "src": '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSjswTSVbxUBkjBvrutDBTU_P5WrKFp_NSjbWTNzbXml3BY_Sg1YB6gRcJIRZ7_TNXixiniiJ4mi8cv/pubhtml?widget=true&amp;headers=false" width="700" height="350"></iframe>',
                        "src2": '<iframe width="700" height="350" src="https://docs.google.com/document/d/e/2PACX-1vTkUE508n7iSTcJzM5ILIs4pELwY6qFdi7WARTQJ30FvLnaLTT0_cbQCyqXUjIERD93VlyK2tAsdOwA/pub?embedded=true"">',
                        "description": "Esta atividade foi proposta para ensinar sobre matrizes na prática, utilizando a criptografia como exemplo. Escrevemos algumas mensagens como se fossem entre soldados passando informações e criptografamos cada uma com um algoritmo, onde cada letra era representada por um número inteiro. Para esconder a mensagem, multiplicamos cada número por uma matriz-chave. Este trabalho ajudou no aprendizado sobre matrizes e a pensar em soluções rápidas para grandes problemas, já que nossa mensagem consistia em 152 caracteres.",
                        "title": "Mensagens da Segunda Guerra - 2° ano"
                    }
                    ]
            },
            {
                "id": 3,
                "subject": "Natureza",
                "img": "../img/nat.jpg",
                "atts": [
                    {
                        "src": `<iframe src="https://www.youtube.com/embed/zW-JSZltQiM?si=deOtWIrPFBpacwrb" width="700" height="350" allow="autoplay"></iframe>`,
                        "src2": '<iframe width="700" height="350"  src="https://www.canva.com/design/DAGM_AjaszI/Lrw6Y2yZp8mT2TKyYICMdw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">',
                        "description": "Estudando sobre ecologia, biomas e as interações entre os seres que habitam esses lugares, a área de Ciências da Natureza propôs que fizéssemos uma representação de um bioma escolhido no jogo Minecraft. O bioma que escolhemos para representar foi o mangue. Também foi produzido um vídeo mostrando o mapa trabalhado e explicando um pouco sobre as características do bioma. Com esta atividade, aprendemos ainda mais sobre as relações ecológicas e como elas afetam o planeta como um todo.",
                        "title": "Ecocraft - 3° Ano"
                    },
                    {
                        "src": `<iframe width="700" height="700" src="https://docs.google.com/document/d/e/2PACX-1vQpWLsueUZQpQeSXXgV0Qn719Kv5SNvwIUcUCHp6vQIvqKdxP0wRVSsmWUwE5CIVXJVm9ec-XfxTHCa/pub?embedded=true"></iframe>`,
                        "description": "NNesta tarefa prática, nosso objetivo foi demonstrar a existência de microrganismos e como eles contaminam um meio de cultura. Para isso, desenvolvemos uma solução contendo caldo de legumes, caldo de gelatina e um cotonete esfregado em alguma parte do corpo, e deixamos essa solução alguns dias no laboratório Maker. Após uma semana, voltamos ao laboratório e analisamos os compostos em um microscópio, onde percebemos a evolução dos microrganismos. Em seguida, redigimos um relatório sobre o experimento. Esta atividade serviu para demonstrar o quão fácil e rápido uma cultura pode ser contaminada, além de nos conscientizar sobre a importância de tomar mais cuidado com isso.",
                        "title": "Cultivando Bactérias - 2° Ano"
                    }
                    ]
            },
            {
                "id": 4,
                "subject": "Humanas",
                "img": "../img/hum.jpg",
                "atts": [
                    {
                        "src": '<img width="700" height="350" src="../img/feudo1.png">',
                        "src2": '<img width="700" height="350" src="../img/feudo2.png">',
                        "description": "Durante nossos estudos sobre a Idade Média, um dos principais focos foi os feudos e sua importância para a sociedade da época. E para entender melhor esses locais, a área de Humanas propôs que fizéssemos um modelo de feudo em um mapa de Minecraft, o que foi um dos melhores trabalhos da área. Fizemos diversas construções, desde castelos até plantações, granjas, uma igreja, moinho, etc. Além de servir como um bom processo de aprendizado sobre as estruturas da sociedade da época, este trabalho mostrou que até com jogos pode-se estudar algo a fundo de uma forma divertida.",
                        "title": "Feudo no Minecraft - 1° Ano"
                    },
                    {
                        "src": `<iframe width="700" height="760" src="https://www.youtube.com/embed/XENeQgCIPwU?si=Qlt7VL5La8Z9RppY"></iframe>`,
                        "description": "Este pequeno minigame foi feito para um trabalho autoral. Neste trimestre, estávamos aprendendo sobre Roma, mais especificamente sua fase como república. Tive a ideia deste clone de Space Invaders porque já tinha feito um curso sobre desenvolvimento de jogos antes; bastou apenas reaprender um pouco da ferramenta que utilizava, no caso, o Construct. Este trabalho foi uma forma criativa de juntar dois assuntos que amo: Roma e desenvolvimento de jogos.",
                        "title": "Carthage Invaders - 1° Ano"
                    }
                    ]
            },
            {
                "id": 5,
                "subject": "Linguagens",
                "img": "../img/lin.jpg",
                "atts": [
                    {
                        "src": `<iframe width="700" height="700" src="https://www.youtube.com/embed/RS5KdtdkGBc?si=MxLOVoDTrxdXk_p9"></iframe>`,
                        "description": "No nosso primeiro ano, foi realizada pela área de Linguagens uma \"Semana de Arte Moderna\", onde a turma foi dividida em grupos com temas diferentes, como cinema, música, desenho, poesia, etc. Este clipe foi uma colaboração entre os grupos de música e cinema. Passamos uma tarde correndo pela escola em um dia bem quente, com todos que passavam olhando para nós, e planejando as cenas no puro improviso. Mesmo com esses detalhes, foi um dos trabalhos mais divertidos que já fiz. Fiquei também com a parte da edição, que foi feita no Windows Movie Maker, e que tive que refazer duas vezes. Foi o trabalho mais aplaudido daquela semana. Esse trabalho me serviu como uma boa memória e um grande aprendizado de como fazer qualquer tipo de arte dá trabalho, mas é gratificante.",
                        "title": "I Want to Break Free - 1° Ano"
                    },
                    {
                        "src": '<iframe width="700" height="760" loading="lazy" src="https://www.canva.com/design/DAGDPv_Q5gw/EqHlv4l1uQE27M6BvuInxw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
                        "description": "Os vestibulares da UFSC/IFSC sempre incluem uma lista de livros que devem ser analisados pelos vestibulandos, e este ano não foi diferente. Para auxiliar nos estudos sobre essas obras, desenvolvemos uma revista literária ao longo do ano, na qual cada edição abordava um dos livros do vestibular. A revista trazia reflexões sobre as obras Torto Arado, Singradura, Velhos e Solitária. Este trabalho contribuiu para expandir o escopo da minha leitura, permitindo-me conhecer novos autores e histórias realistas.",
                        "title": "Revista Literária - 3° Ano"
                    }
                    ]
            }
        ]
    }

function getJsonData(id) {
    let data = stuff.data[id-1];
    $('.paralax').css('background-image', `url(${data.img})`);
    $('.paralax').find('h1').text(data.subject);
    $('.content').html('');
    for(let i = 0; i < data.atts.length; i++) {
        let element;
        if(data.atts[i].title == "") {
            element = `<div class='card'><h2>Não Adicionado</h2><div class="media"></div><h3>Esta atividade ainda não foi adicionada</h3></div>`;
        } else {
            element = `<div class='card'><h2>${data.atts[i].title}</h2><h3>${data.atts[i].description}</h3><div class="media">${data.atts[i].src}</div>${data.atts[i].src2 ? `<div class="media">${data.atts[i].src2}</div>` : ``}</div>`;
        }
        $('.content').append(element);
    }
}
