const video = document.getElementById('video');
const overlay = document.querySelector('.overlay');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', play);
video.addEventListener('click', play);


function play(){
    if(video.play){
        video.play();
    overlay.style.display = 'none';
    playButton.style.display = "none";


    }

    else{
        video.paused();
    overlay.style.display = 'block';
    playButton.style.display = "block";


}
}
