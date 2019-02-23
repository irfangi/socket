var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	socket.on('pesanBaru', (pesan) => {
		io.emit('pesanBaru', pesan);
		console.log('pesan baru : ' + pesan);
	});
	socket.on('disconnect', (pesan) => {
		console.log('user disconnect');
	});
});
app.listen(port, () => console.log('runing at port ' + port));
