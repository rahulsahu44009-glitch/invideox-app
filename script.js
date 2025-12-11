async function generateVideo() {
    const story = document.getElementById('story').value;
    document.getElementById('status').innerText = "Video ban rahi hai... ruk jao...";

    try {
        const res = await fetch('https://invideox-backend.onrender.com/generate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: story })
        });

        const data = await res.json();

        if (data.video_url) {
            const video = document.getElementById("resultVideo");
            video.src = data.video_url;
            video.style.display = "block";
            document.getElementById("status").innerText = "Video ready hai!";
        } else {
            document.getElementById("status").innerText = "Video nahi bani!";
        }

    } catch (err) {
        document.getElementById("status").innerText = "Error: " + err.message;
    }
}
