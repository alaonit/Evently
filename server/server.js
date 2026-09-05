import http, { createServer } from "http"
import {events} from "../data/data.js"


const PORT = 8000;
const server = createServer((req,res)=>{
  if(req.url === '/api/events' && req.method === 'GET'){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(events))
  }
})

server.listen(
  PORT,
  ()=>{
    console.log(`This is from PORT: ${PORT}`)
  }
)