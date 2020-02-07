// Find out which keyCode is with which key: http://keycode.info/

document.addEventListener("keydown", function (e) {
    let keyCode = e.keyCode;
    let audio = document.querySelector("audio[id='" + keyCode + "']");
    console.log(audio);
    audio.play();
    audio.currentTime = 0;
})