function chechForDay () {

    let day = new Date();
    let week = day.getDay();
    if (week != 4) { // Ska vara 4 eftersom låten ska spelas upp på Torsdagar
        document.getElementById('headerIMG1').src = "./media/bilder/FelixÖl.jpg";
        document.getElementById('headerIMG2').src = "./media/bilder/FelixÖl.jpg";
    }
    else {
        document.getElementById('headerIMG1').src = "./media/bilder/ImorgonEDetFredag.PNG";
        document.getElementById('headerIMG2').src = "./media/bilder/ImorgonEDetFredag.PNG";
        playAudio('Fredag');
    }
}

let Fredag = document.getElementById('FREDAG');

let ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
        case 'Fredag':
            Fredag.load();
            break;
    }

    ljudfil = string;

    switch (string) {
        case 'Fredag':
            Fredag.play();
            break;
    }
}

function pauseAudio(string) {

    switch (string) {
        case 'Fredag':
            Fredag.pause();
            break;      
    }
}