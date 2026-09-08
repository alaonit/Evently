import { events } from "../../data/data.js";
import fs from "fs/promises"

export function handleGet(res){
  res.statusCode= 200
  res.end(JSON.stringify(events))
}




export function handleGetEventById(req,res) {
  const id = Number(req.url.split("/").pop())

  const event = events.find((event) => {
    return event.id === id
  })

  if (event) {
    res.statusCode = 200
    res.end(JSON.stringify(event))
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ message: "Event not found" }))
  }
}
  
