import { createApp } from "./app";

const api = createApp();
const port = process.env.PORT;

api.listen(port, ()=>{
    console.log(`🚀 Servidor On porta http://localhost:${port} ⚡️`);
});