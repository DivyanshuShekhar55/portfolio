import { Project } from '../types/project';
import Sentimatrix from "../assests/Sentimatrix.jpg"
import flappy from "../assests/flap-py.png"
import screen from "../assests/screen-ai.png"
import server from "../assests/server.png"

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Flappy Pushups",
    description: "Flappy Bird game ... But you play while doing pushups. ",
    image: flappy,
    category: "PyGame • Computer Vision",
    href:"https://github.com/DivyanshuShekhar55/flap-py"
  },
  {
    id: 2,
    number: "02",
    title: "Sentimatrix",
    description: "Analyses customer reviews and generates a comprehensive summary for Product Teams. Segregates Negative Emails with a Sentiment Score. Developed with a team of talented guys.",
    image: Sentimatrix,
    category: "C# • Llama • MongoDB",
    href:"https://github.com/AdityaP700/Sentimatrix"
  },
  {
    id: 3,
    number: "03",
    title: "Smart Clipboard",
    description: "Stores a history of clipboard data, AI powered, and supports Multiple Screenshots. Currently in developmental phase.",
    image: screen,
    category: "Tauri • Rust • React ",
    href:"https://github.com/DivyanshuShekhar55/screen-write-AI"
  },
  {
    id: 4,
    number: "04",
    title: "Http Server",
    description: "Http Server created from SCRATCH in Golang",
    image: server,
    category: "Golang",
    href:"https://github.com/DivyanshuShekhar55/go-httpx"
  },
  {
    id: 5,
    number: "05",
    title: "Lets Go",
    description: "Repo with lots of examples and programs to master programming in Go. Also includes a bunch of great resources. ",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
    category: "Golang",
    href:"https://github.com/DivyanshuShekhar55/Lets-Go"
  }
];