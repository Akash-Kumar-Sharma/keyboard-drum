//Accessing each Button using their Id
var Abutton = document.getElementById('a');
var Bbutton = document.getElementById('BTNb');
var Sbutton = document.getElementById('BTNs');
var Dbutton = document.getElementById('BTNd');
var Fbutton = document.getElementById('BTNf');
var Gbutton = document.getElementById('BTNg');
var Hbutton = document.getElementById('BTNh');
var Jbutton = document.getElementById('BTNj');
var Kbutton = document.getElementById('BTNk');
var Lbutton = document.getElementById('BTNl');
// document.getElementById('Btn')
//Accessing the first button using their Class name and since getElementsByClassName is returning collection of object therefore using index [0] for first element.
// var allButton=document.getElementsByClassName('keyBTN')[0];

//Accessing each audio files using their id.
var Amusic = new Audio('./sound/boom.mp3');
var Bmusic = document.getElementById('Bsound');
var Smusic = document.getElementById('Ssound');
var Dmusic = document.getElementById('Dsound');
var Fmusic = document.getElementById('Fsound');
var Gmusic = document.getElementById('Gsound');
var Hmusic = document.getElementById('Hsound');
var Jmusic = document.getElementById('Jsound');
var Kmusic = document.getElementById('Ksound');
var Lmusic = document.getElementById('Lsound');

//var sound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

console.log(Abutton);
Abutton.addEventListener('click', () => {
    const Amusic = new Audio('./sound/boom.mp3');
    Amusic.play();
});

Bbutton.addEventListener('click', () => {
    const Bmusic = new Audio('./sound/clap.wav');
    Bmusic.play();
});

Sbutton.addEventListener('click', function () {
    const Smusic = new Audio('./sound/hihat.wav');
    Smusic.play();
});

Dbutton.addEventListener('click', function () {
    const Dmusic = new Audio('./sound/kick.wav')
    Dmusic.play();
});

Fbutton.addEventListener('click', function () {
    const Fmusic = new Audio('./sound/openhat.wav')
    Fmusic.play();

});



Gbutton.addEventListener('click', function () {
    const Gmusic = new Audio('./sound/ride.wav')
    Gmusic.play();

});

Hbutton.addEventListener('click', function () {
    const Hmusic = new Audio('./sound/snare.wav')
    Hmusic.play();
});

Jbutton.addEventListener('click', function () {
    const Jmusic = new Audio('./sound/tink.wav')
    Jmusic.play();
});

Kbutton.addEventListener('click', function () {
    const Kmusic = new Audio('./sound/tom.wav')
    Kmusic.play();
});

Lbutton.addEventListener('click', function () {
    const Lmusic = new Audio('./sound/hihat.wav')
    Lmusic.play();
});


// Abutton.accessKey="A";
//  const Amusic =new Audio('./sound/boom.mp3');
//  function playSound() {
//     Amusic.src='/sound/boom.mp3'
//     Amusic.play();
//  }
// adding event listener for only those keys which are shown on browser(since there was only 10 audio files so I added only 10 buttons) with functionality of audio and change background color to differentiate which button is being pressed.

document.body.addEventListener('keydown', function (e) {

    var keyCharacter = String.fromCharCode(e.keyCode);

    switch (keyCharacter) {
        case 'A':
            Amusic.play();
            Abutton.style.border = '2px solid blue';
            console.log(Abutton);
            break;
        case 'B': Bmusic.play();
            Bbutton.style.border = '2px solid blue';
            // Bmusic.autoplay='true';
            // Bmusic.autoplay;
            console.log(Bmusic);
            break;
        case 'S': Smusic.play();
            Sbutton.style.border = '2px solid blue';
            //s Smusic.autoplay='true';
            //Smusic.autoplay;
            console.log(Smusic);
            break;
        case 'D': Dmusic.play();
            Dbutton.style.border = '2px solid blue';
            console.log(Smusic);
            break;
        case 'F': Fmusic.play();
            Fbutton.style.border = '2px solid blue';
            break;
        case 'G': Gmusic.play();
            Gbutton.style.border = '2px solid blue';
            break;
        case 'H': Hmusic.play();
            Hbutton.style.border = '2px solid blue';
            break;
        case 'J': Jmusic.play();
            Jbutton.style.border = '2px solid blue';
            break;
        case 'K': Kmusic.play();
            Kbutton.style.border = '2px solid blue';
            break;
        case 'L': Lmusic.play();
            Lbutton.style.border = '2px solid blue';
            break;
        default:
    }

});

document.body.addEventListener('keyup', () => {
    Abutton.style.border = '2px solid lightcoral';
    Bbutton.style.border = '2px solid lightcoral';
    Sbutton.style.border = '2px solid lightcoral';
    Dbutton.style.border = '2px solid lightcoral';
    Fbutton.style.border = '2px solid lightcoral';
    Gbutton.style.border = '2px solid lightcoral';
    Hbutton.style.border = '2px solid lightcoral';
    Jbutton.style.border = '2px solid lightcoral';
    Kbutton.style.border = '2px solid lightcoral';
    Lbutton.style.border = '2px solid lightcoral';

})

//adding the event listener KeyUp so that the background colour gets reset.
    // document.body.addEventListener('keyup',
    // function(e){
    //     var keyCharacter=String.fromCharCode(e.keyCode);
    //     switch(keyCharacter){
    //         case 'A':Abutton.style.border='2px solid blue';
    //         break;
    //         case 'B':Abutton.style.border='';
    //         break;

    //         default:
    //         }
    // })