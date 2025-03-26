const gifted = require("gifted-dls");
const express = require("express");

const app = express();
const port = 8000;

app.get("/ytmp3", async (req, res) => {
    let videoUrl = req.query.url;

    if (!videoUrl) {
        return res.json({ status: false, message: "Please provide a YouTube URL as ?url=" });
    }

    try {
        let data = await gifted.giftedytmp3(videoUrl);
        console.log("YTMP3 Response:", data); // Debugging ke liye

        res.json({
            status: true,
            creator: "Sarkar",
            title: data.title || "Unknown",
            thumbnail: data.result.thumbnail || "No Thumbnail",
            downloadUrl: data.result.url || "No Download URL"
        });
    } catch (error) {
        res.json({ status: false, message: "Error fetching MP3", error: error.message });
    }
});

app.get("/ytmp4", async (req, res) => {
    let videoUrl = req.query.url;

    if (!videoUrl) {
        return res.json({ status: false, message: "Please provide a YouTube URL as ?url=" });
    }

    try {
        let data = await gifted.giftedytmp4(videoUrl);
        console.log("YTMP4 Response:", data); // Debugging ke liye

        res.json({
            status: true,
            creator: "Sarkar",
            title: data.title || "Unknown",
            thumbnail: data.result.thumbnail || "No Thumbnail",
            downloadUrl: data.result.url || "No Download URL"
        });
    } catch (error) {
        res.json({ status: false, message: "Error fetching MP4", error: error.message });
    }
});

app.listen(port, () => {
    console.log("Your app is listening on", `http://localhost:${port}`);
});
