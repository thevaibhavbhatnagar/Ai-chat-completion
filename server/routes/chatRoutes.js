import express  from "express";
import * as dotenv from 'dotenv';
import {Configuration, OpenAIApi } from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// create instance
const openai = new OpenAIApi(configuration);


router.route('/').get((req, res)=>{
    // res.send('Hello from DALL-E!');
    res.status(200).json({message: 'Hello from ai chat completion!'});
});
router.route('/').post(async(req, res)=>{

    try{ 
    // this we get from frontend side
    const { prompt } = req.body;
    // const aiResponse = await openai.createImage({
    //     prompt,
    //     n:1,
    //     size: '1024x1024',
    //     response_format: 'b64_json',
    // });

    // const image = aiResponse.data.data[0].b64_json;
    const maxTokens = 2000; // vaibhav bhatnagar 16/07/2023
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { "role": "system", "content": "You are a helpful assistant." },
          { "role": "user", "content": prompt }
        ],
        max_tokens: maxTokens // add by vaibhav bhatnagar 16/07/2023
      });
     
      const chat = completion.data.choices[0].message;
      // console.log(chat);

    res.status(200).json({photo: chat});
    } catch (error) {
       console.log(error);
       res.status(500).send(error?.response.data.error.message)
        
    }
});

export default router;