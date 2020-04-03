Wild = document.getElementById("Wild");
Danger = document.getElementById("Danger");
Hobbits = document.getElementById("Hobbits");
Farfar = document.getElementById("Farfar");
Månadsskifte = document.getElementById("Månadsskifte");
Skibidi = document.getElementById("Skibidi");
Psychosocial = document.getElementById("Psycho");
CallMeTheBreeze = document.getElementById("CallMeTheBreeze");
PokaMig = document.getElementById("PokaMig");
EdwardBlom = document.getElementById("EdwardBlom");
TheCoin = document.getElementById("TheCoin");
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
        case 'CallMeTheBreeze':
            CallMeTheBreeze.load();
            break;
        case 'PokaMig':
            PokaMig.load();
            break;
        case 'EdwardBlom':
            EdwardBlom.load();
            break;
        case 'TheCoin':
            TheCoin.load();
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
        case 'CallMeTheBreeze':
            CallMeTheBreeze.play();
            break;
        case 'PokaMig':
            PokaMig.play();
            break;
        case 'EdwardBlom':
            EdwardBlom.play();
            break;
        case 'TheCoin':
            TheCoin.play();
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
        case 'CallMeTheBreeze':
            CallMeTheBreeze.pause();
            break;  
        case 'PokaMig':
            PokaMig.pause();
            break;  
        case 'EdwardBlom':
            EdwardBlom.pause();
            break;  
        case 'TheCoin':
            TheCoin.pause();
            break;  
        case 'Hello':
            Hello.pause();
            break;   
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