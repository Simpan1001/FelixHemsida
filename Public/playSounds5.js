World = document.getElementById("World");
HBFS = document.getElementById("HBFS");
Technologic = document.getElementById("Technologic");
Lucky = document.getElementById("Lucky");

ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
        case 'World':
            World.load();
            break;
        case 'HBFS':
            HBFS.load();
            break;
        case 'Technologic':
            Technologic.load();
            break;
        case 'Lucky':
            Lucky.load();
            break;
    }

    ljudfil = string;

    switch (string) {
        case 'World':
            World.play();
            break;
        case 'HBFS':
            HBFS.play();
            break;
        case 'Technologic':
            Technologic.play();
            break;
        case 'Lucky':
            Lucky.play();
            break;
    }
}

function pauseAudio(string) {

    switch (string) {
        case 'World':
            World.pause();
            break;
        case 'HBFS':
            HBFS.pause();
            break;
        case 'Technologic':
            Technologic.pause();
            break;
        case 'Lucky':
            Lucky.pause();
            break;
    }
}