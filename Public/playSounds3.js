Wild = document.getElementById("Wild");
Danger = document.getElementById("Danger");
Hobbits = document.getElementById("Hobbits");
Farfar = document.getElementById("Farfar");
Månadsskifte = document.getElementById("Månadsskifte");

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
    }
}