const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/(?:v|e(?:mbed)?)\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/;
const axios = require('axios');
const ytSearch = require('yt-search');
const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const execPromise = promisify(exec);

async function converter(inputBuffer, inputFormat, outputFormat) {
    // Validate input types
    if (!Buffer.isBuffer(inputBuffer)) {
        throw new Error('Input must be a Buffer');
    }
    if (typeof inputFormat !== 'string' || typeof outputFormat !== 'string') {
        throw new Error('Input and output formats must be strings');
    }

    const inputFilePath = path.resolve(`./tmp/temp_input.${inputFormat}`);
    const outputFilePath = path.resolve(`./tmp/temp_output.${outputFormat}`);

    try {
        await fs.promises.writeFile(inputFilePath, inputBuffer);
        console.log('Input file written successfully.');

        console.log('Starting conversion...');
        await execPromise(`ffmpeg -i ${inputFilePath} ${outputFilePath}`);
        console.log('Conversion completed successfully.');

        const outputBuffer = await fs.promises.readFile(outputFilePath);
        return outputBuffer;
    } catch (error) {
        console.error('Error while converting file:', error);
        throw error; // Re-throw error for higher-level handling
    } finally {
        // Cleanup temporary files
        try {
            if (fs.existsSync(inputFilePath)) await fs.promises.unlink(inputFilePath);
            if (fs.existsSync(outputFilePath)) await fs.promises.unlink(outputFilePath);
        } catch (cleanupError) {
            console.error('Error while cleaning up temp files:', cleanupError);
        }
    }
}

class Youtube {
   mp3 = async function ytmp3(url) {
        const match = url.match(youtubeRegex);
        const videoId = match ? match[1] || match[2] : null;
        if (!videoId) {
            throw new Error('Invalid YouTube URL');
        }
       const { videos } = await ytSearch(videoId);
        if (videos.length === 0) {
            throw new Error('Video not found');
        }
        const videoDetails = videos.find(a => a.videoId === videoId);
        let reso = [128];
        let result = {};

        while (true) {
            for (let i of reso) {
                const response = await axios.post('https://cobalt-api.kwiatekmiki.com', {
                    url: url,
                    downloadMode: "audio"
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).catch(e => e.response);
                 console.log(response.data);
                const data = response.data.url;
                if (data) {
                   let buffer = await fetch(data).then(async(a) => Buffer.from(await a.arrayBuffer()))
                    result = buffer
                }
            }
            break;
        }
        return {
            metadata: {
                title: videoDetails.title,
                seconds: videoDetails.seconds,
                thumbnail: videoDetails.thumbnail,
                views: videoDetails.views.toLocaleString(),
                publish: videoDetails.ago,
                author: videoDetails.author,                
                url: videoDetails.url,
                description: videoDetails.description
            },
            download: result
      };
}

 mp4 = async function ytmp4(url) {
        const match = url.match(youtubeRegex);
        const videoId = match ? match[1] || match[2] : null;
        if (!videoId) {
            throw new Error('Invalid YouTube URL');
        }
       const { videos } = await ytSearch(videoId);
        if (videos.length === 0) {
            throw new Error('Video not found');
        }
        const videoDetails = videos.find(a => a.videoId === videoId);
        let reso = [128];
        let result = {};

        while (true) {
            for (let i of reso) {
                const response = await axios.post('https://cobalt-api.kwiatekmiki.com', {
                    url
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).catch(e => e.response);
                 console.log(response.data);
                const data = response.data.url;
                if (data) {
                    let buffer = await fetch(data).then(async(a) => Buffer.from(await a.arrayBuffer()))
                    result = await converter(buffer, "webm", "mp4");
                }
            }
            break;
        }

        return {
            metadata: {
                title: videoDetails.title,
                seconds: videoDetails.seconds,
                thumbnail: videoDetails.thumbnail,
                views: videoDetails.views.toLocaleString(),
                publish: videoDetails.ago,
                author: videoDetails.author,                
                url: videoDetails.url,
                description: videoDetails.description
            },
            download: result
        };
}
  playlist = async (url) => {
      let response = await axios.post(
        "https://solyptube.com/findchannelvideo",
        `url=${url}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "application/json, text/javascript, */*; q=0.01",
            "X-Requested-With": "XMLHttpRequest",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36",
            Referer:
              "https://solyptube.com/youtube-playlist-downloader#searchrResult",
          },
        },
      ).catch(e => e.response)
      let info = response.data;
      if (!info.data.title) return info
     return {
        metadata: {
          title: info.data.title,
          total: info.data.estimatedItemCount + " Videos",
          views: info.data.views,
          thumbnail: info.data.thumbnails[0].url,
          update: info.data.lastUpdated,
          author: info.data.author.name,
        },
        items: info.data.items.map((a) => ({
          title: a.title,
          duration: a.duration,
          url: a.shortUrl,
          thumbnail: a.thumbnails[0].url,
          author: a.author.name,
        })),
      }
   }
}

module.exports = new Youtube()