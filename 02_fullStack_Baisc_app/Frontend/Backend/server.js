import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));
// get a list of 5 jokes
app.get('/api/jokes' , (req , res)=>{
   const jokes = [
  {
    id: 1,
    title: 'A programmer joke',
    content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
  },
  {
    id: 2,
    title: 'A Java joke',
    content: 'Why did the Java developer wear glasses? Because they could not C#.'
  },
  {
    id: 3,
    title: 'A debugging joke',
    content: 'Debugging is like being a detective in a crime movie where you are also the criminal.'
  },
  {
    id: 4,
    title: 'A coffee joke',
    content: 'Why do programmers love coffee? Because it turns code into solutions.'
  },
  {
    id: 5,
    title: 'A Git joke',
    content: 'I told Git I made a mistake. It said, "Don’t worry, just commit to it."'
  }
];
res.send(jokes);
});



// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
