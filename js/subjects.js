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
                        "description": "A Compasio foi nossa SA fullstack do curso de desenvolvimento de sistemas, consistindo em um webapp para prover maior visibilidade para ONGs, com a possibilidade de divulgar seus trabalhos e criar campanhas de arrecação, quanto para pessoas que são ou desejam ser voluntárias, podendo entrar em contado com a organização para ajudarem ou doar diretamente. Com este trabalho pude aprimorar minhas habilidades de desenvolvimento em Back-end, a área que almejo ser especialista, desenvolvendo todas a API do site e banco de dados. <a href='https://github.com/Compasio/backend' target='_blank'>Link do repositório.</a>",
                        "title": "Compasio - 3° Ano"
                    },
                    {
                        "src": '<img src="../img/grooving.png" width="300" height="300">',
                        "description": "A Grooving foi meu projeto individual para a disciplina de Desenvolvimento de Aplicativos, ela consiste em um app de música similar ao Spotify. Com este projeto pude aprimorar meus conhecimentos em desenvolvimento ainda mais, como novas ferramentas para Back-end e para Front-end, além de desenvolver um pensamneto crítico sobre a usabilidade em celulares. <a href='https://github.com/gabri3lquadr0s/grooving' target='_blank'>Link do Repositório.</a>",
                        "title": "Grooving - 3° Ano"
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
                        "description": "Estudando sobre probabilidade, um dos assunstos mais frequentes são as diversas loterias. Neste trabalha fizemos uma apresentação de slides sobre a Quina, uma modalidade da lotérica, e eu desenvolvi um mini software em python para demonstrar como funciona o sorteio. Esta atividade contribuiu para a compreensão em geral de probabilidades e chances pequenas, e como são realmente pequenas as chances de se ganhar apostas, além da criatividade para pensar em um pequeno software que simulava a quina. <a href='https://github.com/gabri3lquadr0s/quina\' target='_blank'>Link do software.</a>",
                        "title": "Quina - 3° Ano"
                    },
                    {
                        "src": '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSjswTSVbxUBkjBvrutDBTU_P5WrKFp_NSjbWTNzbXml3BY_Sg1YB6gRcJIRZ7_TNXixiniiJ4mi8cv/pubhtml?widget=true&amp;headers=false" width="700" height="350"></iframe>',
                        "src2": '<iframe width="700" height="350" src="https://docs.google.com/document/d/e/2PACX-1vTkUE508n7iSTcJzM5ILIs4pELwY6qFdi7WARTQJ30FvLnaLTT0_cbQCyqXUjIERD93VlyK2tAsdOwA/pub?embedded=true"">',
                        "description": "Esta atividade foi proposta para ensinar sobre matrizes na prática, utilizando da criptografia como um exemplo. Escrevemos algumas mensagens como se fossem entre soldados passando informações, e criptografamos cada uma com um algoritmo onde cada letra era representada por um número inteiro, e para esconder a mensagem multiplicamos cada um por uma matriz chave. Este trabalho ajudou no aprendizado sobre matrizes e a pensar em soluções rápidas para grandes problemas, já que nossa mensagem consistia em 152 caracteres.",
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
                        "description": "Estudando sobre ecologia, biomas, e as ligações entre os seres que habitam estes lugares, a área de ciências da natureza propos que fizessemos uma representação de um bioma escolhido no jogo Minecraft. O nosso aqui representado foi o mangue. Foi também produzido um vídeo mostrando o mapa trabalhado e explicando um pouco sobre as características do bioma. Com esta atividade aprendemos ainda mais sobre relações ecológicas e como elas afetam o planeta como um todo.",
                        "title": "Ecocraft - 3° Ano"
                    },
                    { "src": `<iframe width="700" height="350" src="https://docs.google.com/document/d/e/2PACX-1vQpWLsueUZQpQeSXXgV0Qn719Kv5SNvwIUcUCHp6vQIvqKdxP0wRVSsmWUwE5CIVXJVm9ec-XfxTHCa/pub?embedded=true"></iframe>`,
                        "description": "Para esta tarefa, fomos ao Maker em grupos ",
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
                        "src": '<iframe width="300" height="300" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF9n_vhkwE&#x2F;SS933A47BPnlaWI8SjfVPg&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
                        "description": "Nesta atividade, nos inspiramos no jogo Black Stories para fazer uma coleção de cartas inspiradas em história",
                        "title": "Black Stories"
                    },
                    {
                        "src": `<iframe width="300" height="300"src="https://docs.google.com/document/d/e/2PACX-1vR6jUi5FGTFGgD_eLWIZK_Z1KC0w_vIQpaT__P0L6rmDlMSynjjduf4dVAYtis-BiE5yN7pRq7Tq8-u/pub?embedded=true""></iframe>`,
                        "description": "Nesta atividade a turma foi desafiada a simular (mais ou menos) o que seria um encontro da Organização das Nações Unidas. Cada trio recebeu um país e teve que representar fielmente a diplomacia da nação.",
                        "title": "Assembleia da ONU"
                    }
                    ]
            },
            {
                "id": 5,
                "subject": "Linguagens",
                "img": "../img/lin.jpg",
                "atts": [
                    {
                        "src": `<iframe width="300" height="300" src="https://docs.google.com/document/d/e/2PACX-1vR79fE3bXxt7B7swf2UX-1jOI8LyIs-yQY1w22WFFV8IZ7BOkxHc12Y0-dyxeGUorLcHo2Zu6_4mTZT/pub?embedded=true"></iframe>`,
                        "description": "Esta atividade foi desenvolvida como um treino de redação, para identificar os elementos do texto dissertativo argumentativo. O tema que escolhi foi a guerra entre Israel e o Hamas.",
                        "title": "Plano de Texto"
                    },
                    {
                        "src": '<iframe loading="lazy" width="300" height="300" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-umlXwrk&#x2F;hjhaD0SWqCB1Mb8rm8ZEoA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
                        "description": "Esta apresentação foi feita para uma atividade focada no conceito de pré modernismo, um período da literatura  brasileira. O tema da nossa em específico foi o livro Cemitério dos Vivoc, de Lima Barreto.",
                        "title": "Pré Mordernismo"
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