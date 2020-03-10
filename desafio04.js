//função recebe um número limite, que será verificado no laço for o número que é múltiplo de 3 ou 5 somando com o total
const multiplos = (x) => {
	let total = 0
	for (let y = x - 1; y > 0; y--){
		if(y % 3 == 0 || y % 5 == 0) {
			total += y
		}
	}
	return total // retorno da soma dos múltiplos
}	

console.log(multiplos(10))