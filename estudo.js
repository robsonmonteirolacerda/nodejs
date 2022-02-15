var http = require('http');

var server = http.createServer( function (req, res) {
	res.end("<html><body>Teste de fluxo</body></html>");
});

server.listen(3000);