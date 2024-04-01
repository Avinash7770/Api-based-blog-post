import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence in Modern Industries",
    content:
      "Artificial Intelligence (AI) continues to revolutionize various industries, from healthcare to finance. With advancements in machine learning and neural networks, AI systems are becoming increasingly sophisticated, enabling businesses to automate tasks, gain insights from data, and enhance decision-making processes. However, concerns about AI replacing human jobs persist, sparking debates about the future of employment in an AI-driven world. As AI technologies mature, businesses are exploring new opportunities to leverage AI for innovation and competitive advantage.",
    author: "Avinash",
    date: "2024-02-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Evolution of Full Self-Driving Cars: Promises and Challenges",
    content:
      "Full self-driving cars represent a significant leap forward in automotive technology, promising safer roads, increased mobility, and reduced traffic congestion. Companies like Tesla, Waymo, and Uber are racing to develop fully autonomous vehicles, leveraging AI algorithms and sensor technology. However, challenges such as regulatory hurdles, ethical considerations, and technological limitations still need to be addressed before widespread adoption. Despite these challenges, the potential benefits of full self-driving cars are immense, reshaping transportation systems and urban planning.",
    author: "Avinash",
    date: "2024-02-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Automation: Transforming Industries and Shaping the Future of Work",
    content:
      "Automation is reshaping the labor market, with robots and AI systems taking over routine and repetitive tasks in manufacturing, logistics, and service industries. While automation boosts productivity and efficiency, it also raises concerns about job displacement and income inequality. To mitigate these challenges, policymakers and businesses must invest in retraining programs and foster a culture of lifelong learning to ensure a smooth transition to the automated economy. As automation technologies evolve, new opportunities emerge for humans to focus on creative and high-value tasks, driving innovation and economic growth.",
    author: "Avinash",
    date: "2024-02-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts",(req,res)=>{
  //console.log(posts);
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

//CHALLENGE 3: POST a new post

app.post("/posts", (req, res) => {
  const newId = lastId += 1;
  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  lastId = newId;
  posts.push(post);
  res.status(201).json(post);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter

app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

//CHALLENGE 5: DELETE a specific post by providing the post id.


app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
