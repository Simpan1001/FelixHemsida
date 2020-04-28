let ljudfilSpela = 'none';
let ljudfilStopp = 'none';

function playAudio (string) {
    pauseAudio(ljudfilSpela);
    ljudfilSpela = string;
    let a = document.getElementById(ljudfilSpela);
    a.play();
}

function pauseAudio (string) {
    if (ljudfilSpela != 'none') {
        ljudfilStopp = string;
        let b = document.getElementById(ljudfilStopp);
        b.load();
    }
}

function WhatDayIsIt (weekday) {
    let day = new Date();
    let week = day.getDay();
    if (week == weekday) {
        if (weekday == 4) { // Ska vara 4 eftersom låten ska spelas upp på Torsdagar
            document.getElementById('headerIMG1').src = "../media/bilder/ImorgonEDetFredag.PNG";
            document.getElementById('headerIMG2').src = "../media/bilder/ImorgonEDetFredag.PNG";
            document.getElementById('headerLOL').className = "container-fluid headerText discoBG bodyFormat";
            document.getElementById('homeBG').className = "discoBGGif bodyFormat";
            playAudio('FREDAG');
        }
        else if (weekday == 7) {
            playAudio('LillebrorH');
        }
    }
    else { // Om det inte är någon speciell dag
        document.getElementById('headerIMG1').src = "../media/bilder/FelixBeer.jpg";
        document.getElementById('headerIMG2').src = "../media/bilder/FelixBeer.jpg";
    }
}

let PsychosocialLyrics = "Rrrrargh!! I did my time, and I want outSo effusive, fade It doesn't cut The soul is not so vibrant The reckoning, the sickening Packaging subversion Pseudo sacrosanct perversion Go drill your deserts Go dig your graves Then fill your mouth With all the money you will save Sinking in, getting smaller again Undone, it has begun I'm not the only one And the rain will kill us all Throw ourselves against the wall But no one else can see The preservation of the martyr in me Psychosocial (x6) Oh, there are cracks, in the road we lay But where the temple fell The secrets have gone mad This is nothing new But when we killed it all The hate was all we had Who needs another mess? We could start over Just look me in the eyes And say I'm wrong Now there's only emptiness Venomous, insipid I think we're done I'm not the only oneAnd the rain will kill us all Throw ourselves against the wall But no one else can see The preservation of the martyr in me Psychosocial (x6) The limits of the dead (x4) Fake anti-fascist lie (psychosocial) I tried to tell you, but (psychosocial) Your purple hearts are giving out (psychosocial) Can't stop a killing idea (psychosocial) If it's hunting season (psychosocial) Is this what you want? (psychosocial) I'm not the only one And the rain will kill us all Throw ourselves against the wall But no one else can see The preservation of the martyr in me (x2) The limits of the dead (x2)";
let CallMeTheBreezeLyrics = "Call me the breeze I keep blowin' down the road Well now, they call me the breeze I keep blowin' down the road I ain't got me nobody I don't carry me no load Ain't no change in the weather Ain't no changes in me Well, there ain't no change in the weather Ain't no changes in me And I ain't hidin' from nobody Nobody's hidin' from me Oh, that's the way its supposed to be Well, I got that green light, baby I got to keep movin' on Well, I got that green light, baby I got to keep movin' on Well, I might go out to California Might go down to Georgia, I don't know Well, I dig you Georgia peaches Makes me feel right at home Well now, I dig you Georgia peaches Makes me feel right at home But I don't love me no one woman So I can't stay in Georgia long Well now, they call me the breeze I keep blowin' down the road Well now, they call me the breeze I keep blowin' down the road I ain't got me nobody I don't carry me no load Ooh, Mr. Breeze";

function showLyrics (phrase, id) {
    let block = document.getElementById(id+'_block');

    if (block.style.display != "block") {
        block.style.display = "block";
    }
    else {
        block.style.display = "none";
    }
    let result;

    switch (phrase) {
        case "Psycho":
            result = PsychosocialLyrics;
            previous = phrase;
            break;
        case "CallMeTheBreeze":
            result = CallMeTheBreezeLyrics;
            previous = phrase;
            break;
    }
    document.getElementById(id+'_text').innerHTML = result;
}