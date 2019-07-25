var router = require('./router');

var app = router(3000);

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

var contatos = [
	{nome: "Pedro Santana", data: new Date(), operadora: {nome:"Oi", codigo: 14, categoria:"Celular"}, telefone: "9999-8888"},
	{nome: "Ana da Silva", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, telefone: "9999-8877"},
	{nome: "Maria do Carmo", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, telefone: "9999-8866"},
	{nome: "Bruno Oliveira", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, telefone: "9999-2222"},
	{nome: "Sandra Pereira", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, telefone: "9999-3333"},
	{nome: "Mariana Dias", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, telefone: "9999-9999"}
];

app.interceptor(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});

/*app.interceptor(function(req, res, next){
	console.log('Executando interceptor 2');
	res.setHeader('Content-Type','application/json;charset=UTF-8');
	next();
});*/


app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.post('/contatos', function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.options('/contatos', function(req, res){
	res.end();
});

/*app.post('/contatos', function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});*/
