//Linguagem JavaScript - Autor: Evandro Madeira
//Algoritmo para retornar a diferença entre a data atual e a data de nascimento de uma pessoa, em anos, meses e dias.

var dataNasc = new Date("1989-12-15T00:00:00"); // Formato Ano / Mês / Dia
var dataAtual = new Date(); // Maior que data de nascimento
//var dataAtual = new Date("2018-01-14T00:00:00"); //Linha para testes

// 'en-US' >>> Formato americano Mês / Dia / Ano
console.log("Data Nasc.: " + dataNasc.toLocaleDateString('en-US'));
console.log("Data Atual: " + dataAtual.toLocaleDateString('en-US'));

var ano = dataAtual.getFullYear() - dataNasc.getFullYear();
var mes = (dataAtual.getMonth() + 1) - (dataNasc.getMonth() + 1);
var dia = dataAtual.getDate() - dataNasc.getDate();

while (mes < 0 || dia < 0) {
// Ao subtrair 1 do mês ou do dia, os mesmos podem se tornar negativos, então o laço é repetido até que sejam positivos
	if (mes < 0) {
		ano--;
		mes += 12;
	} // Se o mês for negativo, subtrai 1 do ano e adiciona 12 no mês

	if (dia < 0) {
		var diasDoMesAnt = new Date(Date.parse(new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1)) - 86400000).getDate();
		// Retorna a quantidade de dias do mês anterior ao mês da data atual - 86400000 Milisegundos = 1 dia

		mes--;
		dia += diasDoMesAnt;
	} // Se o dia for negativo, subtrai 1 do mês e adiciona os dias do mês anterior a data atual
}

console.log("\n" + ano + " anos, " + mes + " mes(es) e " + dia + " dia(s).");