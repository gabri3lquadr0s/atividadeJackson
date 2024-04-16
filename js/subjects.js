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
                "atts": [{ "src": "", "description": "asd", "title": "React" }, { "src": "", "description": "", "title": "" },  { "src": "", "description": "", "title": "" }]
            },
            {
                "id": 2,
                "subject": "Matemática",
                "img": "../img/mat.jpg",
                "atts": [{ "src": `<iframe width="300" height="300"src="https://www.youtube.com/embed/SrCFrMm6D6A"></iframe>`, "description": "Esta atividade foi realizada como inicio do nosso aprendizado sobre trigonometria no 3º ano do Ensino Médio, focando na prática da Lei do Seno e Lei do Cosseno. Produzimos um vídeo detalhando o processo de construção da ferramenta e medição dos ângulos.", "title": "Construção do Teodolito" }, { "src": "", "description": "", "title": "" }, { "src": "", "description": "", "title": "" }]
            },
            {
                "id": 3,
                "subject": "Natureza",
                "img": "../img/nat.jpg",
                "atts": [{ "src": `<img width="300" height="350" src="https://drive.google.com/thumbnail?id=1JOClUXnH02i_etSe6PjqRCImZXDkylyP">`, "description": "Esta é uma lista de exercícios sobre química que fizemos em sala de aula para treinar nossos novos aprendizados sobre as cadeias carbônicas.", "title": "Lista de Exercícios" }, { "src": "", "description": "", "title": "" }, { "src": "", "description": "", "title": "" }]
            },
            {
                "id": 4,
                "subject": "Humanas",
                "img": "../img/hum.jpg",
                "atts": [{ "src": `<iframe width="300" height="300"src="https://docs.google.com/document/d/e/2PACX-1vR6jUi5FGTFGgD_eLWIZK_Z1KC0w_vIQpaT__P0L6rmDlMSynjjduf4dVAYtis-BiE5yN7pRq7Tq8-u/pub?embedded=true""></iframe>`, "description": "Nesta atividade a turma foi desafiada a simular (mais ou menos) o que seria um encontro da Organização das Nações Unidas. Cada trio recebeu um país e teve que representar fielmente a diplomacia da nação.", "title": "Assembleia da ONU" }, { "src": "", "description": "", "title": "" }, { "src": "", "description": "", "title": "" }]
            },
            {
                "id": 5,
                "subject": "Linguagens",
                "img": "../img/lin.jpg",
                "atts": [{ "src": `<iframe width="300" height="300" src="https://docs.google.com/document/d/e/2PACX-1vR79fE3bXxt7B7swf2UX-1jOI8LyIs-yQY1w22WFFV8IZ7BOkxHc12Y0-dyxeGUorLcHo2Zu6_4mTZT/pub?embedded=true"></iframe>`, "description": "Esta atividade foi desenvolvida como um treino de redação, para identificar os elementos do texto dissertativo argumentativo. O tema que escolhi foi a guerra entre Israel e o Hamas.", "title": "Plano de Texto" }, { "src": "", "description": "", "title": "" }, { "src": "", "description": "", "title": "" }]
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