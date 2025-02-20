let gift = document.querySelector('.gift');
gift.addEventListener("click",function() {
    window.location.href = "present.html"; })

    // document.addEventListener("DOMContentLoaded", function () {
    //     const audio = document.getElementById("background-audio");
    //     // Unmute after a short delay to ensure autoplay works
    //     setTimeout(() => {
    //       audio.muted = false;
    //     }, 1000);
    //   });

// document.addEventListener("DOMContentLoaded", function () {
//     const audio = document.getElementById("background-audio");

//     setTimeout(() => {
//         audio.muted = false;
//         audio.play().catch(err => console.log("Playback error:", err));
//     }, 1000);
// });

document.addEventListener("DOMContentLoaded", function () {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = document.getElementById("background-audio");
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);

    setTimeout(() => {
        audioElement.play().catch(err => console.log("Playback error:", err));
    }, 1000);
});


