let desc = document.querySelectorAll(".bday-desc");
let img = document.querySelectorAll(".letter-img");

// document.addEventListener("DOMContentLoaded", function () {
//     const audio = document.getElementById("background-audio");
  
//     audio.play().catch(error => {
//       console.log("Autoplay blocked. Waiting for user interaction...");
      
//       // Play audio after user clicks anywhere
//       document.addEventListener("click", () => {
//         audio.play();
//       }, { once: true }); // Ensures it runs only once
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    // Unmute after a short delay to ensure autoplay works
    setTimeout(() => {
      audio.muted = false;
    }, 500);
  });
  
desc.forEach((p, i) => {
    let fullText = p.innerHTML; // Simulated 500 chars
    let shortText = fullText.substring(0, 250) + "...";
    let button = document.querySelectorAll(".see-more")[i];
    let img_gif = img[i].querySelector(".img-gif")
    p.innerHTML = shortText; 

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent page reload
        event.stopPropagation(); //
        let isShort = p.innerHTML === shortText;
        p.innerHTML = isShort ? fullText : shortText;

        img[i].style.marginTop=isShort?"50px":"0px";
        if(isShort) {
            img_gif.classList.remove("hidden");
            img_gif.style.marginTop="40px"
        }
            else img_gif.classList.add("hidden")
        button.innerHTML = isShort ? "Less" : "More";
    });
});