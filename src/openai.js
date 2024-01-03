const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: "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" });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    console.log(res.data.choices[0].text);
    return res.data.choices[0].text;
}