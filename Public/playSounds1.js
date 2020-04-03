håkan = document.getElementById("håkan");
sofie = document.getElementById("sofie");
brott = document.getElementById("brott");
familj = document.getElementById("familj");
sillar = document.getElementById("sillar");
såga = document.getElementById("såga");
håkarnBråkarn = document.getElementById("håkarnBråkarn");
AAA = document.getElementById("AAA");
Yay = document.getElementById("Yay");
DJH = document.getElementById("DJH");
Rumpr = document.getElementById("Rumpr");
StämHåkan = document.getElementById("StämHåkan");
EnGraf = document.getElementById("EnGraf");
VaGöru = document.getElementById("VaGöru");
ThugLife = document.getElementById("ThugLife");

let Fredag = document.getElementById('FREDAG');

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
        case 'håkarnBråkarn':
            håkarnBråkarn.load();
            break;
        case 'AAA':
            AAA.load();
            break;
        case 'Yay':
            Yay.load();
            break;
        case 'DJH':
            DJH.load();
            break;
        case 'Rumpr':
            Rumpr.load();
            break;
        case 'StämHåkan':
            StämHåkan.load();
            break;
        case 'EnGraf':
            EnGraf.load();
            break;
        case 'VaGöru':
            VaGöru.load();
            break;
        case 'ThugLife':
            ThugLife.load();
            break;

        case 'Fredag':
            Fredag.load();
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
        case 'håkarnBråkarn':
            håkarnBråkarn.play();
            break;
        case 'AAA':
            AAA.play();
            break;
        case 'Yay':
            Yay.play();
            break;
        case 'DJH':
            DJH.play();
            break;
        case 'Rumpr':
            Rumpr.play();
            break;
        case 'StämHåkan':
            StämHåkan.play();
            break;
        case 'EnGraf':
            EnGraf.play();
            break;
        case 'VaGöru':
            VaGöru.play();
            break;
        case 'ThugLife':
            ThugLife.play();
            break;

        case 'Fredag':
            Fredag.play();
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
        case 'håkarnBråkarn':
            håkarnBråkarn.pause();
            break;
        case 'AAA':
            AAA.pause();
            break;
        case 'Yay':
            Yay.pause();
            break;
        case 'DJH':
            DJH.pause();
            break;
        case 'Rumpr':
            Rumpr.pause();
            break;
        case 'StämHåkan':
            StämHåkan.pause();
            break;
        case 'EnGraf':
            EnGraf.pause();
            break;
        case 'VaGöru':
            VaGöru.pause();
            break;
        case 'ThugLife':
            ThugLife.pause();
            break;
  
        case 'Fredag':
            Fredag.pause();
            break;      
    }
}

function chechForDay () {

    let day = new Date();
    let week = day.getDay();
    if (week != 5) { // Ska vara 4 eftersom låten ska spelas upp på Torsdagar
        document.getElementById('headerIMG1').src = "./media/bilder/FelixÖl.jpg";
        document.getElementById('headerIMG2').src = "./media/bilder/FelixÖl.jpg";
    }
    else {
        document.getElementById('headerIMG1').src = "./media/bilder/ImorgonEDetFredag.PNG";
        document.getElementById('headerIMG2').src = "./media/bilder/ImorgonEDetFredag.PNG";
        playAudio('Fredag');
    }
}