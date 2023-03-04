require('dotenv').config();
const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const { Configuration, OpenAIApi } = require('openai');

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 4000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.post('/message', async ctx => {
  const { message } = ctx.request.body;
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: "Answer as if your are a chatbot named 'AISHA' that stands for 'Artificially Intelligent Super Helpful Assistant' and is designed to assist student and admission seeker of Arka Jain University by a group of students who named themselves AI Forge. The website for the university is 'arkajainuniversity.ac.in'",message,
    max_tokens: 100,
    temperature: 0.9
  });

  ctx.body = {
    message: response.data.choices[0].text
  };
  ctx.status = 200;
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
