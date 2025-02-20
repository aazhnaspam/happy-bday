let gift = document.querySelector('.gift');
gift.addEventListener("click",function() {
    window.location.href = "present.html"; })

    document.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("background-audio");
        // Unmute after a short delay to ensure autoplay works
        setTimeout(() => {
          audio.muted = false;
        }, 1000);
      });
