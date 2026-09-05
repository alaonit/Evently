import http, { createServer } from "http"
import {events} from "../data/data.js"


const PORT = 8000;
const server = createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  if(req.url === '/api/events' && req.method === 'GET'){
    res.setHeader('Content-Type','application/json');
    res.statusCode= 200
    res.end(JSON.stringify(events))

  }else if(req.url.startsWith('/api/events/') && req.method === 'GET'){
    const id = Number(req.url.split("/").pop())

    const filteredId = events.find((event)=>{
      return id === event.id;
    })
   
    if(filteredId){
      res.setHeader("Content-Type","application/json");
      res.statusCode= 200
      res.end(JSON.stringify(filteredId))
    }else{
      res.setHeader("Content-Type","application/json");
      res.statusCode= 404
      res.end(JSON.stringify({message:"Event not found"}))
    }

  }else{
    res.statusCode = 404
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({message:"Route not found"}))
  }
})

server.listen(
  PORT,
  ()=>{
    console.log(`This is from PORT: ${PORT}`)
  }
)