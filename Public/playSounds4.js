Monody = document.getElementById("Monody");
Unity = document.getElementById("Unity");
Jackpot = document.getElementById("Jackpot");
Calling = document.getElementById("Calling");

ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
        case 'Monody':
            Monody.load();
            break;
        case 'Unity':
            Unity.load();
            break;
        case 'Jackpot':
            Jackpot.load();
            break;
        case 'Calling':
            Calling.load();
            break;
    }

    ljudfil = string;

    switch (string) {
        case 'Monody':
            Monody.play();
            break;
        case 'Unity':
            Unity.play();
            break;
        case 'Jackpot':
            Jackpot.play();
            break;
        case 'Calling':
            Calling.play();
            break;
    }
}

function pauseAudio(string) {

    switch (string) {
        case 'Monody':
            Monody.pause();
            break;
        case 'Unity':
            Unity.pause();
            break;
        case 'Jackpot':
            Jackpot.pause();
            break;
        case 'Calling':
            Calling.pause();
            break;
    }
}