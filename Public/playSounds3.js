Wild = document.getElementById("Wild");
Danger = document.getElementById("Danger");
Hobbits = document.getElementById("Hobbits");
Farfar = document.getElementById("Farfar");
Månadsskifte = document.getElementById("Månadsskifte");
Skibidi = document.getElementById("Skibidi");
Psychosocial = document.getElementById("Psycho");
Hello = document.getElementById("Hello");

ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
        case 'Wild':
            Wild.load();
            break;
        case 'Danger':
            Danger.load();
            break;
        case 'Hobbits':
            Hobbits.load();
            break;
        case 'Farfar':
            Farfar.load();
            break;
        case 'Månadsskifte':
            Månadsskifte.load();
            break;
        case 'Skibidi':
            Skibidi.load();
            break;
        case 'Psycho':
            Psychosocial.load();
            break;
        case 'Hello':
            Hello.load();
            break;
    }

    ljudfil = string;

    switch (string) {
        case 'Wild':
            Wild.play();
            break;
        case 'Danger':
            Danger.play();
            break;
        case 'Hobbits':
            Hobbits.play();
            break;
        case 'Farfar':
            Farfar.play();
            break;
        case 'Månadsskifte':
            Månadsskifte.play();
            break;
        case 'Skibidi':
            Skibidi.play();
            break;
        case 'Psycho':
            Psychosocial.play();
            break;
        case 'Hello':
            Hello.play();
            break;
        
    }
}

function pauseAudio(string) {

    switch (string) {
        case 'Wild':
            Wild.pause();
            break;
        case 'Danger':
            Danger.pause();
            break;
        case 'Hobbits':
            Hobbits.pause();
            break;
        case 'Farfar':
            Farfar.pause();
            break;
        case 'Månadsskifte':
            Månadsskifte.pause();
            break;    
        case 'Skibidi':
            Skibidi.pause();
            break;  
        case 'Psycho':
            Psychosocial.pause();
            break;
        case 'Hello':
            Hello.pause();
            break;   
    }
}