const dotenv = require("dotenv");
dotenv.config();

const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0,
    });

    if (data.choices[0].text) {
      return res.status(200).json(data.choices[0].text);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    let data = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Write a detailed paragraph about \n${text}`,
      max_tokens: 512,
      temperature: 0,
    });

    if (data.choices[0].text) {
      return res.status(200).json(data.choices[0].text);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: ` Answer question similar to how yoda from star war world
      Me:'What is your name?'
      yoda:'Yoda is my name'
      Me: ${text}`,
      max_tokens: 300,
      temperature: 0,
    });

    if (data.choices[0].text) {
      return res.status(200).json(data.choices[0].text);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.jsConvertorController = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: ` /*  Convert these instructions into javaScript Code \n${text}`,
      max_tokens: 400,
      temperature: 0,
    });

    if (data.choices[0].text) {
      return res.status(200).json(data.choices[0].text);
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
