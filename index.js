const jsonServer = require('json-server');
const cors=require("cors")
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


const PORT = process.env.PORT || 3006;

server.options("",cors({
    origin:"http://locahost:5173",
    credentials:true,
    methods:["POST",]
}))
server.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["POST"]
}))
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
