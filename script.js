const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

/*prompt user to select a media stream, then pass to video element, lastly play videos*/
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {

    }
}

buttonElement.addEventListener('click', async () => {
    /*disable button*/
    buttonElement.disabled = true;
    /*start picture-in-picture*/
    await videoElement.requestPictureInPicture();
    /*reset button*/
    buttonElement.disabled = false;
});
/*on load*/
selectMediaStream();