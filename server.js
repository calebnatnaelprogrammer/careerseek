const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Your OpenAI API Key (you will need to sign up and get one from OpenAI)
const OPENAI_API_KEY = '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';

// Endpoint to handle all user queries
app.post('/ask-ai', async (req, res) => {
    const userMessage = req.body.message;

    // The prompt guides the AI to handle job-related queries in the context of general conversation
    const prompt = `Respond to the following query in a conversational and informative manner: "${userMessage}". If the question is related to jobs or career, provide job-related advice, otherwise respond appropriately to the topic of the conversation.`;

    try {
        // Make a request to OpenAI's API (GPT-3/4)
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        const aiReply = response.data.choices[0].text.trim();
        res.json({ reply: aiReply });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error processing your request.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
