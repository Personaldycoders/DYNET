const axios = require('axios');
const fs = require('fs');

const venice = {
  chatbot: async (question, model) => {
    const modell = ["llama-3.3-70b", "llama-3.2-3b-akash"];
    const data = JSON.stringify({
      "requestId": "scrape-for-all",
      "modelId": model,
      "prompt": [
        {
          "content": question,
          "role": "user"
        }
      ],
      "systemPrompt": "",
      "conversationType": "text",
      "temperature": 0.8,
      "webEnabled": true,
      "topP": 0.9,
      "isCharacter": false,
      "clientProcessingTime": 2834
    });

    const config = {
      method: 'POST',
      url: 'https://venice.ai/api/inference/chat',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
        'Content-Type': 'application/json',
        'accept-language': 'id-ID',
        'referer': 'https://venice.ai/chat',
        'x-venice-version': '20241221.032412',
        'origin': 'https://venice.ai',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'priority': 'u=4',
        'te': 'trailers'
      },
      data: data
    };

    const res = await axios.request(config);
    const chunks = res.data.split('\n').filter(chunk => chunk).map(chunk => JSON.parse(chunk));
    const answer = chunks.map(chunk => chunk.content).join('');
    return answer;
  },
  txt2img: async (prompt) => {
    const data = JSON.stringify({
      "modelId": "fluently-xl-final-akash",
      "requestId": "INlNFRX",
      "prompt": prompt,
      "seed": 15391382,
      "negativePrompt": "",
      "cfgScale": 5,
      "aspectRatio": "1:1",
      "width": 1024,
      "height": 1024,
      "customSeed": "",
      "steps": 30,
      "isCustomSeed": false,
      "isHighRes": false,
      "safeVenice": true,
      "stylePreset": "",
      "hideWatermark": false,
      "favoriteImageStyles": [],
      "stylesTab": 0,
      "loraStrength": 75,
      "imageToImageStrength": 50,
      "clientProcessingTime": 3808
    });

    const config = {
      method: 'POST',
      url: 'https://venice.ai/api/inference/image',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
        'Content-Type': 'application/json',
        'accept-language': 'id-ID',
        'referer': 'https://venice.ai/chat',
        'x-venice-version': '20241221.032412',
        'origin': 'https://venice.ai',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'priority': 'u=4',
        'te': 'trailers',
      },
      responseType: 'arraybuffer',
      data: data
    };

    const res = await axios.request(config);
    fs.writeFileSync('./media/image.png', res.data);
    return 'Image saved successfully!';
  }
};

module.exports = { venice };