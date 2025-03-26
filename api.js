const gifted = require("gifted-dls");
const express = require("express");

const app = express();
const port = 3200;

app.get("/ytmp3", async (req, res) => {
    let videoUrl = req.query.url;
                       
    if (!videoUrl) {
        return res.json({ status: false, message: "Please provide a YouTube URL as ?url=" });
    }

    try {
        let data = await gifted.giftedytmp3(videoUrl);
let resl= data.result;                                         
        res.json({ status: true, creator: "Sarkar", result: resl });
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
        res.json({ status: true, creator: "Sarkar", result: data });
    } catch (error) {
        res.json({ status: false, message: "Error fetching MP4", error: error.message });
    }
});

app.listen(port, () => {
    console.log("Your app is listening on", `http://localhost:${port}`);
});
