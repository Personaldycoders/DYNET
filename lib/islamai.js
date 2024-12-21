const axios = require('axios');

async function islamai(question) {
    const url = 'https://vercel-server-psi-ten.vercel.app/chat';
    const data = {
        text: question,
        array: [
            {
                content: "Assalamualaikum",
                role: "user"
            },
            {
                content: "Waalaikumsalam",
                role: "assistant"
            }
        ]
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
                'Referer': 'https://islamandai.com/'
            }
        });
        return response.data; // Kembalikan data respons
    } catch (error) {
        console.error('Error sending request:', error);
        throw error; // Lempar error agar bisa ditangani di case
    }
}

module.exports = { islamai };
