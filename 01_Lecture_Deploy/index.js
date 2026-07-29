// this is the require module syntex in common js 
// I can use import module also using module
require('dotenv').config();
const express = require("express");

const app = express();


// port is which place where server is listen .

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 124,
  "public_gists": 6,
  "followers": 59422,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2026-07-22T18:31:24Z"
}

app.get('/github' , (req ,res)=>{
  res.json(githubData);
})
app.get('/twitter' , (req, res)=>{
  res.send("Pranshu.twitter.com");
});

app.get('/youtube' , (req ,res)=>{
  res.send("<h2>Code with Pranshu</h2>")
})
app.get('/login' , (req ,res)=>{
  res.send("<h1>Please login at Pranshu.com </h1>")
})
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port", process.env.PORT);
});
