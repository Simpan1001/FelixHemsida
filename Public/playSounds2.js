håkarnBråkarn = document.getElementById("håkarnBråkarn");
AAA = document.getElementById("AAA");
Yay = document.getElementById("Yay");
DJH = document.getElementById("DJH");
Rumpr = document.getElementById("Rumpr");
StämHåkan = document.getElementById("StämHåkan");
EnGraf = document.getElementById("EnGraf");
VaGöru = document.getElementById("VaGöru");
ThugLife = document.getElementById("ThugLife");

function playAudio(string) {
    
    switch (string) {
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

    }
}

function loadAudio(string) {

    switch (string) {
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
    }
}