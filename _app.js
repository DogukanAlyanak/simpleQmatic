const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



this.state = {
    counterGroupRange: {
        "0": {
            "min": 0,
            "max": 999,
        },
        "1": {
            "min": 1000,
            "max": 1999,
        },
        "2": {
            "min": 2000,
            "max": 2999,
        },
    },
    waitingNumbers: [],
    lastNumbers: {
        "0": 0,
        "1": 1000,
        "2": 2000
    }
}





app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

app.get('/waitscreen', (req, res) => {
    res.sendFile(__dirname + '/view/waitscreen.html');
});

app.get('/counter', (req, res) => {
    res.sendFile(__dirname + '/view/counter.html');
});

app.get('/get_number', (req, res) => {
    res.sendFile(__dirname + '/view/get_number.html');
});









io.on('connection', (socket) => {


    socket.on('add_number', (event) => {
        console.log(event);

        let gNo = parseInt(event.group).toString(); // Group No
        let min = this.state.counterGroupRange[gNo]["min"]
        let max = this.state.counterGroupRange[gNo]["max"]

        let no = ++this.state.lastNumbers[gNo];
        if (no > max) {
            no = min;
        }
        this.state.waitingNumbers.push(no)
        console.log([no, this.state.waitingNumbers]);
    });


    socket.on('call_number', (event) => {


        let status = true;
        let gNo = parseInt(event.group).toString(); // Group No
        let min = this.state.counterGroupRange[gNo]["min"]
        let max = this.state.counterGroupRange[gNo]["max"]
        let waitings = this.state.waitingNumbers
        let number = min

        do {
            ++number
            status = (number > max) ? false : true
        } while (waitings.includes(number) == false && status);

        let item = {}
        if (status) {
            this.state.waitingNumbers.remove(number);
            
            item = {
                no: number,
                counter: parseInt(event.counter)
            }

            io.emit('called_numbers', item);
        }
        console.log([event, this.state.waitingNumbers, item]);
    });


});







server.listen(3000, () => {
    console.log('listening on *:3000');
});









// fruits.remove('banana');
Array.prototype.remove = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}