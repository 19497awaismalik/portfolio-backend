const jsonServer = require('json-server');
const cors=require("cors")
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


const PORT = process.env.PORT || 3006;

server.options("",cors({
    origin:"https://portfolio-frontend-three-steel.vercel.app",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))
server.use(cors({
    origin:"https://portfolio-frontend-three-steel.vercel.app",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}))
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
