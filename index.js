require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
  "login": "PranshuVerma96",
  "id": 223462469,
  "node_id": "U_kgDODVHERQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/223462469?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PranshuVerma96",
  "html_url": "https://github.com/PranshuVerma96",
  "followers_url": "https://api.github.com/users/PranshuVerma96/followers",
  "following_url": "https://api.github.com/users/PranshuVerma96/following{/other_user}",
  "gists_url": "https://api.github.com/users/PranshuVerma96/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PranshuVerma96/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PranshuVerma96/subscriptions",
  "organizations_url": "https://api.github.com/users/PranshuVerma96/orgs",
  "repos_url": "https://api.github.com/users/PranshuVerma96/repos",
  "events_url": "https://api.github.com/users/PranshuVerma96/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PranshuVerma96/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pranshu Verma",
  "company": null,
  "blog": "https://www.linkedin.com/feed/",
  "location": "lucknow",
  "email": null,
  "hireable": null,
  "bio": "👋 Hi! I'm a BCA student and aspiring Full Stack  Developer.\r\n\r\n💻 Tech Stack: React | MySQL | HTML | CSS | JavaScript  \r\n",
  "twitter_username": null,
  "public_repos": 32,
  "public_gists": 0,
  "followers": 4,
  "following": 9,
  "created_at": "2025-07-29T10:54:47Z",
  "updated_at": "2026-04-15T18:29:54Z"
}

app.get('/github' , (req ,res) => {
  res.json(githubData)
})

app.get('/' , (req ,res) =>{
  res.send("hello world")
})


app.get('/twitter' , (req ,res) => {
  res.send('pranshuverma')
})

app.get('/login' , (req , res) => {
  res.send('<h1>Please login at Pransh and code </h1>')
})

app.get('/youtube' , (req , res) => {
  res.send('<h2> Welcome to youtube </h2>')
})

app.listen(process.env.PORT , ()=>{
  console.log(`server is running on ${process.env.PORT}`);
  
})