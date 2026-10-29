import Fastify from "fastify";

export function buildApp(){
const app = Fastify({logger:true});


app.get("/health",async()=>{
    return {status:"OK",service:"Khotwa-api"}
});

return app;
}

