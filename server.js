var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	socket.on('pesanBaru', (pesan) => {
		console.log('ddd');
		
		io.emit('pesanBaru', pesan);
		console.log('pesan baru : ' + pesan);
	});
	socket.on('disconnect', (pesan) => {
		console.log('user disconnect');
	});
});

http.listen(port,()=>console.log('runing on port :'+port))
