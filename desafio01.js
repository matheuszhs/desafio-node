// função que recebe a quantidade de eleitores, votos válidos, votos em branco e nulos e retorna o percentual em relação a quantidade total de eleitores
const percentual = (eleitores, validos, brancos, nulos) => {
	let percentuais = {
		votosValidos: `${validos * 100 / eleitores}%`,
		votosBrancos: `${brancos * 100 / eleitores}%`,
		votosNulos: `${nulos * 100 / eleitores}%`
	}
	
	return percentuais
}

console.log(percentual(1000, 800, 150, 50))