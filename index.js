
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

        if (!data || !data.result) {
            return res.json({ status: false, message: "Invalid response from API", error: "result is undefined" });
        }

        res.json({
            status: true,
            creator: "Sarkar",
            title: data.result.title || "Unknown",
            thumbnail: data.result.thumbnail || "No Thumbnail",
            downloadUrl: data.result.download_url || "No Download URL"
        });
    } catch (error) {
        res.json({ status: false, message: "Error fetching MP3", error: error.message });
    }
});

app.listen(port, () => {
    console.log("Your app is listening on", `http://localhost:${port}`);
});
