import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Lazy Developer",
      content: "I tried to write clean code, but the bugs wanted a messy home.",
    },
    {
      id: 2,
      title: "Coffee First",
      content:
        "My code doesn’t work without coffee, and honestly, neither do I.",
    },
    {
      id: 3,
      title: "Debug Life",
      content:
        "Life is like debugging, you fix one problem and create three more.",
    },
    {
      id: 4,
      title: "Frontend Magic",
      content: "It works on my machine, must be your browser’s problem.",
    },
    {
      id: 5,
      title: "Backend Truth",
      content: "Backend developers do it in the server, silently.",
    },
    {
      id: 6,
      title: "JavaScript Fun",
      content: "JavaScript: where null is an object and logic is optional.",
    },
    {
      id: 7,
      title: "Late Night Coding",
      content: "Best code is written at 2 AM, worst bugs found at 9 AM.",
    },
    {
      id: 8,
      title: "Stack Overflow",
      content: "If Stack Overflow is down, developers take a holiday.",
    },
    {
      id: 9,
      title: "CSS Struggle",
      content: "I spent 3 hours fixing CSS, turns out it was margin again.",
    },
    {
      id: 10,
      title: "AI Developer",
      content: "I don’t write code anymore, I just ask AI politely.",
    },
    {
      id: 11,
      title: "Git Commit",
      content: 'My commit message: "fixed stuff"—future me will understand.',
    },
    {
      id: 12,
      title: "Error 404",
      content: "Motivation not found. Please try again after some sleep.",
    },
    {
      id: 13,
      title: "Code Review",
      content: 'Code review is just a polite way of saying "what is this?"',
    },
  ];
  res.send(jokes)
});


// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
