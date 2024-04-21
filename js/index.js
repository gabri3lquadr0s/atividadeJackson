$('h3').on('click', function() {
    let id = parseInt($(this).attr('id'));
    if(id == 0) {
        $('.iframe').attr('src', `./pages/home.html`);
    } else {
        $('.iframe').attr('src', `./pages/subjects.html`);
        document.getElementById('iframe').onload = () => {document.getElementById('iframe').contentWindow.postMessage(id, '*');}
    }
})