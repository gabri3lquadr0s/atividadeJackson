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
                "atts": [{ "src": '<img width="300" height="300" src="../img/repo1.jpg">', "description": 'Este aqui é meu repositório no Github para algumas atividades de React do curso. <a href="https://github.com/gabri3lquadr0s/react-tecnico" target=”_blank”>Link do repositório.</a>', "title": "Repositório React" }, { "src": '<iframe src="https://drive.google.com/file/d/1GTczlssivV2_W4y7MQJJbxOQiBA7b4Ow/preview" width="300" height="300" allow="autoplay"></iframe>', "description": "Nesta apresentação tivemos que formular um trabalho mostrando um plano para implementar um sistema de biblioteca, escolhendo qual plataforma cloud era a melhor para o caso e mostrando suas funções.", "title": "Implantação de Sistema" },  { "src": '<iframe width="300" height="300" src="https://docs.google.com/document/d/e/2PACX-1vQPD6m0wJ-FGtYHlbKWUJxFj1WjBOkD7mAKctxTjaimrIkq0gMbrnb_wQZGMxDT7s9Ovz9UAul6Vhd_/pub?embedded=true"></iframe>', "description": "Este documento é uma parte da S.A. final do curso, onde nosso grupo comparou nossa ideia com outros sistemas,e  definiu público alvo, a proposta de valor, e os tipos de usuário.", "title": "Levantamento de Requisitos" }]
            },
            {
                "id": 2,
                "subject": "Matemática",
                "img": "../img/mat.jpg",
                "atts": [{ "src": `<iframe width="300" height="300"src="https://www.youtube.com/embed/SrCFrMm6D6A"></iframe>`, "description": "Esta atividade foi realizada como inicio do nosso aprendizado sobre trigonometria no 3º ano do Ensino Médio, focando na prática da Lei do Seno e Lei do Cosseno. Produzimos um vídeo detalhando o processo de construção da ferramenta e medição dos ângulos.", "title": "Construção do Teodolito" }, { "src": '<iframe src="https://drive.google.com/file/d/1t-JM3prXIGVm-SzywnaIM4L88eDTIoaN/preview" width="300" height="300" allow="autoplay"></iframe>', "description": "Esta atividade consistiu em sair pela escola para tirar fotos de ojetos, com um aplicativo chamado AR Ruler Aapp. Depois com as medidas cálculamos os senos e cossenos dos triangulos.", "title": "Medição de Objetos" }, { "src": '<iframe src="https://drive.google.com/file/d/1ZW2VskTscgmrNPWNVKaJDxMaz8S-LR5H/preview" width="300" height="300" allow="autoplay"></iframe>', "description": "Esta atividade foi prática. Trouxemos os materiais para confeccionar um círculo trigonométrico, e depois o usamos para medir o seno, cosseno, e tangente de alguns ângulos.", "title": "Círculo Trigonométrico" }]
            },
            {
                "id": 3,
                "subject": "Natureza",
                "img": "../img/nat.jpg",
                "atts": [{ "src": `<iframe src="https://docs.google.com/document/d/e/2PACX-1vTeeomS17VSpxw1lFDuhx3pd3PpcNMWVLHvn5Hycz-UYwfT_RX_AthIab55h40sNUFLKrfEB3yORGpN/pub?embedded=true" width="300" height="300"></iframe>`, "description": "Esta atividade foi uma lista de exercícios sobre energia eletroestática e suas propriedades.", "title": "Lista de Eletroestática" }, { "src": `<iframe width="300" height="300" src="https://drive.google.com/file/d/1tjCNrXCCUUrcUA2OWFuZ4LwnrypkFH1h/preview" allow="autoplay"></iframe>`, "description": "Esta atividade foi uma lista de exercícios sobre química orgânica e suas propriedades.", "title": "Lista de Química" }, { "src": `<iframe src="https://drive.google.com/file/d/1raWupaHA9skFf2PEjHnpLbOvhd8OmoM7/preview" width="300" height="300" allow="autoplay"></iframe>`, "description": "Esta foi nossa prova, contendo conteúdos de eletroestática e química orgânica.", "title": "Prova 1º Trimestre" }]
            },
            {
                "id": 4,
                "subject": "Humanas",
                "img": "../img/hum.jpg",
                "atts": [{ "src": '<iframe width="300" height="300" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF9n_vhkwE&#x2F;SS933A47BPnlaWI8SjfVPg&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>', "description": "Nesta atividade, nos inspiramos no jogo Black Stories para fazer uma coleção de cartas inspiradas em história", "title": "Black Stories" }, { "src": `<iframe width="300" height="300"src="https://docs.google.com/document/d/e/2PACX-1vR6jUi5FGTFGgD_eLWIZK_Z1KC0w_vIQpaT__P0L6rmDlMSynjjduf4dVAYtis-BiE5yN7pRq7Tq8-u/pub?embedded=true""></iframe>`, "description": "Nesta atividade a turma foi desafiada a simular (mais ou menos) o que seria um encontro da Organização das Nações Unidas. Cada trio recebeu um país e teve que representar fielmente a diplomacia da nação.", "title": "Assembleia da ONU" },  { "src": '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSd49_P9uJxiE_VZT8wwJF8uV-T8Yo6yWleldOxs8mtb1fXGkhvoZYezgLtEHIc_UwAoQrFjaFHRPZa/embed?start=true&loop=false&delayms=60000" frameborder="0" width="300" height="300" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>', "description": "Nesta atividade, foram distribuidos temas sobre o Imperialismo no século XIX, nos então se juntamos em grupos para fazer este banner informativo sobre o tema. no caso, o nosso foi sobre apropriação cultural.", "title": "Imperialismo no século XIX" }]
            },
            {
                "id": 5,
                "subject": "Linguagens",
                "img": "../img/lin.jpg",
                "atts": [{ "src": `<iframe width="300" height="300" src="https://docs.google.com/document/d/e/2PACX-1vR79fE3bXxt7B7swf2UX-1jOI8LyIs-yQY1w22WFFV8IZ7BOkxHc12Y0-dyxeGUorLcHo2Zu6_4mTZT/pub?embedded=true"></iframe>`, "description": "Esta atividade foi desenvolvida como um treino de redação, para identificar os elementos do texto dissertativo argumentativo. O tema que escolhi foi a guerra entre Israel e o Hamas.", "title": "Plano de Texto" }, { "src": '<iframe loading="lazy" width="300" height="300" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-umlXwrk&#x2F;hjhaD0SWqCB1Mb8rm8ZEoA&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>', "description": "Esta apresentação foi feita para uma atividade focada no conceito de pré modernismo, um período da literatura  brasileira. O tema da nossa em específico foi o livro Cemitério dos Vivoc, de Lima Barreto.", "title": "Pré Mordernismo" }, { "src": '<img width="300" height="300" src="../img/ingles.jpg">', "description": "Esta foi a atividade de inglês do trimestre, onde, usando os elementos do past simple, tivemos que confeccionar um post de internet.", "title": "Postagem em Inglês" }]
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
            element = `<div class='card'><h2>${data.atts[i].title}</h2><div class="media">${data.atts[i].src}</div><h3>${data.atts[i].description}</h3></div>`;
        }
        $('.content').append(element);
    }
}