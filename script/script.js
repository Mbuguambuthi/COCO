const video = document.getElementById('video');
const overlay = document.querySelector('.overlay');
const playButton = document.getElementById('playButton');


        /* TOGGLEPLAY FUNCTION */
playButton.addEventListener('click', toggleplay)


function toggleplay(){
    if(video.paused){
        video.play();
    overlay.style.display = 'none';
   // playButton.style.display = "none";


    }

    else{
        video.pause();
    overlay.style.display = 'block';
   // playButton.style.display = "block";
}
} 

video.addEventListener('click', () =>{
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
})

/* FAQS */

/* const toggles = document.querySelectorAll("ol > li > span");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const listItem = toggle.parentElement.querySelector(".listitem");

    // Toggle 'open' class to animate max-height
    if(listItem){
    listItem.classList.toggle("open");
    }
  });
});
 */