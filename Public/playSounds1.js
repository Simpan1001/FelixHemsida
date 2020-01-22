håkan = document.getElementById("håkan");
sofie = document.getElementById("sofie");
brott = document.getElementById("brott");
familj = document.getElementById("familj");
sillar = document.getElementById("sillar");
såga = document.getElementById("såga");

function playAudio(string) {
    
    switch (string) {
        case 'håkan':
            håkan.play();
            break;
        case 'sofie':
            sofie.play();
            break;
        case 'brott':
            brott.play();
            break;
        case 'familj':
            familj.play();
            break;
        case 'sillar':
            sillar.play();
            break;
        case 'såga':
            såga.play();
            break;
        
    }
}

function loadAudio(string) {

    switch (string) {
        case 'håkan':
            håkan.load();
            break;
        case 'sofie':
            sofie.load();
            break;
        case 'brott':
            brott.load();
            break;
        case 'familj':
            familj.load();
            break;
        case 'sillar':
            sillar.load();
            break;
        case 'såga':
            såga.load();
            break;            
    }
}