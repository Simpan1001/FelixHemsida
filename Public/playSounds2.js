Stina = document.getElementById("Stina");
Fem = document.getElementById("Fem");
Händerna = document.getElementById("Händerna");
HärKanManVa = document.getElementById("HärKanManVa");
InteKul = document.getElementById("InteKul");
IDontTinkSå = document.getElementById("IDontTinkSå");
Ragnar = document.getElementById("Ragnar");

ljudfil = 'none';

function playAudio(string) {
    
    switch (ljudfil) {
        case 'Stina':
            Stina.load();
            break;
        case 'Fem':
            Fem.load();
            break;
        case 'Händerna':
            Händerna.load();
            break;
        case 'HärKanManVa':
            HärKanManVa.load();
            break;
        case 'InteKul':
            InteKul.load();
            break;
        case 'IDontTinkSå':
            IDontTinkSå.load();
            break;
        case 'Ragnar':
            Ragnar.load();
            break;
    }

    ljudfil = string;

    switch (string) {
        case 'Stina':
            Stina.play();
            break;
        case 'Fem':
            Fem.play();
            break;
        case 'Händerna':
            Händerna.play();
            break;
        case 'HärKanManVa':
            HärKanManVa.play();
            break;
        case 'InteKul':
            InteKul.play();
            break;
         case 'IDontTinkSå':
            IDontTinkSå.play();
            break;
        case 'Ragnar':
            Ragnar.play();
            break;
    }
}

function pauseAudio(string) {

    switch (string) {
        case 'Stina':
            Stina.pause();
            break;
        case 'Fem':
            Fem.pause();
            break;
        case 'Händerna':
            Händerna.pause();
            break;
        case 'HärKanManVa':
            HärKanManVa.pause();
            break;
        case 'InteKul':
            InteKul.pause();
            break;
         case 'IDontTinkSå':
            IDontTinkSå.pause();
            break;
        case 'Ragnar':
            Ragnar.pause();
            break;      
    }
}