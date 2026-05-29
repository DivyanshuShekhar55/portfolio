import { Project } from "../types/project";
import ChatApp from "../assests/ChatApp.png";
import flappy from "../assests/flap-py.png";
import server from "../assests/server.png";
import tinder from "../assests/tinder.png";
import catfish from "../assests/catfish.png";
import stocks from "../assests/stocks.png";

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Catfish",
    description:
      "A Postgres connection pooler, based on Figma's PGKeeper paper. Multi-threaded, Load Management, Observability",
    image: catfish,
    category: "Golang • Postgres •  DockerHub",
    href: "https://github.com/DivyanshuShekhar55/catfish",
  },
  {
    id: 2,
    number: "02",
    title: "Tinder Search Algorithm",
    description:
      "Replicated a tiny version of Tinder's Location search algorithm ",
    image: tinder,
    category: "Elasticsearch • Golang • Postgres • React Native",
    href: "https://github.com/DivyanshuShekhar55/yellow-monkey",
  },
  {
    id: 3,
    number: "03",
    title: "rn-cute-stocks",
    description:
      "A npm package for ReactNative apps. Provides high speed and elegant charts using  Skia and D3.js",
    image: stocks,
    category: "React Native • Animation •  npm",
    href: "https://github.com/DivyanshuShekhar55/rn-cute-stocks",
  },
  {
    id: 4,
    number: "04",
    title: "Chat App",
    description:
      "Made a Scalable Chat App backend with pub-sub architecture and load balancing.",
    image: ChatApp,
    category: "Golang • CassandraDB • Redis • HAProxy",
    href: "https://github.com/DivyanshuShekhar55/go-cassandra",
  },
  {
    id: 5,
    number: "05",
    title: "Flappy Pushups",
    description: "Flappy Bird game ... But you play while doing pushups. ",
    image: flappy,
    category: "PyGame • Computer Vision",
    href: "https://github.com/DivyanshuShekhar55/flap-py",
  },
  {
    id: 6,
    number: "06",
    title: "Http Server",
    description: "Http Server created from scratch in Golang",
    image: server,
    category: "Golang",
    href: "https://github.com/DivyanshuShekhar55/go-httpx",
  },
];
