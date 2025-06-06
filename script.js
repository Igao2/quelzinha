const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    function nextImage() {
        currentIndex++;
        if (currentIndex >= carouselInner.children.length) {
            currentIndex = 0;
        }

        carouselInner.style.transform = `translateX(-${currentIndex * 100}%`;
    }

    setInterval(nextImage, 5000); // Mudar imagem a cada 5 segundos
function playmusic(path)
{
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    var alt = path;
    console.log(alt)
    audioSource.src = alt
    audioPlayer.load();
    audioPlayer.play();
}

document.addEventListener("DOMContentLoaded",() =>{
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.load();
    audioPlayer.play();
})

