$('h3').on('click', function() {
    let id = parseInt($(this).attr('id'));
    if(id == 0) {
        $('.iframe').attr('src', `./pages/home.html`);
    }
    else if(id == 6) {
        $('.iframe').attr('src', `./pages/aboutme.html`);
    }
    else if(id == 7) {
        $('.iframe').attr('src', `./pages/final.html`);
    }
    else {
        $('.iframe').attr('src', `./pages/subjects.html`);
        document.getElementById('iframe').onload = () => {document.getElementById('iframe').contentWindow.postMessage(id, '*');}
    }
})