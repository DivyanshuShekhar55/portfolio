import { Project } from '../types/project';
import ChatApp from "../assests/ChatApp.png"
import flappy from "../assests/flap-py.png"
import screen from "../assests/screen-ai.png"
import server from "../assests/server.png"
import tinder from "../assests/tinder.png"

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Chat App",
    description: "Made a Scalable Chat App backend with pub-sub architecture and load balancing.",
    image: ChatApp,
    category: "Golang • CassandraDB • Redis • HAProxy",
    href:"https://github.com/DivyanshuShekhar55/go-cassandra"
  },
  {
    id: 2,
    number: "02",
    title: "Tinder Search Algorithm",
    description: "Replicated a tiny version of Tinder's Location search algorithm ",
    image: tinder,
    category: "Elasticsearch • Golang • Postgres • React Native",
    href:"https://github.com/DivyanshuShekhar55/yellow-monkey"
  },
  {
    id: 3,
    number: "03",
    title: "Flappy Pushups",
    description: "Flappy Bird game ... But you play while doing pushups. ",
    image: flappy,
    category: "PyGame • Computer Vision",
    href:"https://github.com/DivyanshuShekhar55/flap-py"
  },
  {
    id: 4,
    number: "04",
    title: "Http Server",
    description: "Http Server created from scratch in Golang",
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