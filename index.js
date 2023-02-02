const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



this.state = {
    counterGroup: {
        0 : 0,
        1 : 1000,
        2 : 2000,
        3 : 3000,
        4 : 4000,
    }
}





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/waitscreen', (req, res) => {
    res.sendFile(__dirname + '/waitscreen.html');
});

app.get('/counter', (req, res) => {
    res.sendFile(__dirname + '/counter.html');
});








io.on('connection', (socket) => {
    socket.on('chat message', (req) => {
        console.log("req");
        console.log(req);
        let no = this.state.counterGroup[req.group] += 1
        msg = {
            no : no,
            counter : req.counter
        }
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});