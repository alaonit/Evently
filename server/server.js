import { createServer } from "node:http"
import {handleGet,handleGetEventById} from "./handlers/eventHandlers.js"


const PORT = 8000;
const server = createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader('Content-Type','application/json');

  if(req.url === '/api/events' && req.method === 'GET'){
    handleGet(res)

  }else if(req.url.startsWith('/api/events/') && req.method === 'GET'){
    handleGetEventById(req,res)
    
  }else if(req.url === '/api/events' && req.method === 'POST'){

  }
  
  else{
    res.statusCode = 404
    res.end(JSON.stringify({message:"Route not found"}))
  }
})

server.listen(
  PORT,
  ()=>{
    console.log(`This is from PORT: ${PORT}`)
  }
)