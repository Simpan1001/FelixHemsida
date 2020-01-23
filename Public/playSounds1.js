håkan = document.getElementById("håkan");
sofie = document.getElementById("sofie");
brott = document.getElementById("brott");
familj = document.getElementById("familj");
sillar = document.getElementById("sillar");
såga = document.getElementById("såga");

let ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
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

    ljudfil = string;

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

function pauseAudio(string) {

    switch (string) {
        case 'håkan':
            håkan.pause();
            break;
        case 'sofie':
            sofie.pause();
            break;
        case 'brott':
            brott.pause();
            break;
        case 'familj':
            familj.pause();
            break;
        case 'sillar':
            sillar.pause();
            break;
        case 'såga':
            såga.pause();
            break;            
    }
}