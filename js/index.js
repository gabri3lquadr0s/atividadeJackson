$('h3').on('click', function() {
    let area = $(this).text().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let iframe = $('.iframe').attr('src').split('/')[2].split('.')[0].toLowerCase();
    let id = parseInt($(this).attr('id'));
    if(id == 0) {
        $('.iframe').attr('src', `./pages/home.html`);
    } else {
        $('.iframe').attr('src', `./pages/subjects.html`);
        document.getElementById('iframe').onload = () => {document.getElementById('iframe').contentWindow.postMessage(id, '*');}
    }
})