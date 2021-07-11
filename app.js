// Inicia com a pergunta "Deseja buscar um livro. Se a resposta for sim, mostra as categorias disponíveis e perguntar qual prefere.
// Se não, mostrar todos os  livros em ordem crescente pela quantidade de páginas.

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? Digite S ou N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Literatura brasileira', '/Literatura estrangeira', '/Arte', '/Poesia', '/Quadrinhos',
     '/Tecnologia', '/Humanidades')

    const entradaCategoria = readline.question('Qual categoria prefere?')
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}
