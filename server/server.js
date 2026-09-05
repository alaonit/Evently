import http, { createServer } from "http"
import {events} from "../data/data.js"


const PORT = 8000;
const server = createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  if(req.url === '/api/events' && req.method === 'GET'){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(events))
  }else{
    res.statusCode = 404
    res.end("Not found")
  }

  if(req.url === `/api/events/` && req.method === 'GET'){

    const id = Number(req.url.split("/").pop ())

    const filteredId = events.filter((event)=>{
      return id === event.id;
    })
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(filteredId))
  }
})

server.listen(
  PORT,
  ()=>{
    console.log(`This is from PORT: ${PORT}`)
  }
)