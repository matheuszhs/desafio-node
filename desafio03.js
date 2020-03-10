// função recebe N e calcula seu fatorial, caso seja negativo, o valor é infinito, senão ele faz o cálculo em um laço de for, onde a condição N tem que ser maior que 1
const fatorial = (n) => {
	total = 1;
	if (n < 0) {
		console.log("Infinito!")
	} else {
		for(let mult = n; mult > 1; mult-- ) {
			total = total * mult
		}
		console.log(`Resultado de ${n}! = ${total}`)
	}
}
fatorial(-5)
fatorial(0)
fatorial(5)