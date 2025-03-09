async function startWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.querySelector("#webcam");
        videoElement.srcObject = stream;
    } catch (error) {
        console.error("Erreur d'accès à la webcam :", error);
    }
}

startWebcam();
