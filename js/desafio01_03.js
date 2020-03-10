/* Percentual */
const submitPercentual = document.querySelector('[calcular-percentual]')

submitPercentual.onclick = e => {
	e.preventDefault();
	const eleitores = document.querySelector('[eleitores]').value
	const validos = document.querySelector('[validos]').value
	const brancos = document.querySelector('[branco]').value
	const nulos = document.querySelector('[nulos]').value

	let res = percentual(eleitores, validos, brancos, nulos)

	document.querySelector('[resultado-per]').innerHTML = `Votos válidos: ${res.votosValidos} <br/> Votos em Branco: ${res.votosBrancos} <br/> Votos Nulos: ${res.votosNulos}`
}

// função que recebe a quantidade de eleitores, votos válidos, votos em branco e nulos e retorna o percentual em relação a quantidade total de eleitores
const percentual = (eleitores, validos, brancos, nulos) => {
	let percentuais = {
		votosValidos: `${validos * 100 / eleitores}%`,
		votosBrancos: `${brancos * 100 / eleitores}%`,
		votosNulos: `${nulos * 100 / eleitores}%`
	}
	
	return percentuais
}


/* Fatorial */
const submitFatorial = document.querySelector('[calcular-fatorial]')

submitFatorial.onclick = e => {
	e.preventDefault()
	const x = document.querySelector('[numero]').value
	document.querySelector('[resultado-fat]').innerHTML = fatorial(x)
}

// função recebe N e calcula seu fatorial, caso seja negativo, o valor é infinito, senão ele faz o cálculo em um laço de for, onde a condição N tem que ser maior que 1
const fatorial = (n) => {
	total = 1;
	if (n < 0) {
		return "Infinito!"
	} else {
		for(let mult = n; mult > 1; mult-- ) {
			total = total * mult
		}
		return `Resultado de ${n}! = ${total}`
	}
}