const video = document.getElementById('video');
const overlay = document.querySelector('.overlay');
const playButton = document.getElementById('playButton');
/* 
playButton.addEventListener('click', () =>{
    video.play();
});

 video.addEventListener('click', () =>{
    if(video.paused){
        video.paused();
    }
 }); 

 video.addEventListener('play', () =>{
        overlay.style.display = 'none';
    
 })

 video.addEventListener('paused', () =>{
        overlay.style.display = 'block';

 }) */


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