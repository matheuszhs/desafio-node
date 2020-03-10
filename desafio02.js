// a função bubble recebe um vetor, que irá ser percorrido por 2 maps, o primeiro map irá passar o primeiro valor para o v2, onde v2 irá percorrer por todo array verificando se ele é maior que os outros elementos do vetor, após a verificação vi irá passar outro valor para v2, que irá fazer o mesmo processo até todos elementos ficarem em sua posição correta
const bubble = (vetor) => {
	vetor.map(v1 => {
		vetor.map((v2, i) => {
			if (vetor[i] > vetor[i + 1]) {
				vetor[i] = vetor[i + 1];
				vetor[i + 1] = v2;
			}
		}
		)
	})


	return vetor
}

console.log(bubble([5, 3, 2, 4, 7, 1, 0, 6]))