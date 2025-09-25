import express from 'express';
const app = express()

const alunos = [
    {id: 1, nome: 'Renan Aprigio',idade: 17, cidade: 'São Lourenço da Mata'},
    {id: 2, nome: 'Matheus Luciano',idade: 16, cidade: 'Recife'},
    {id:3, nome: 'João da Paz', idade: 16, cidade: 'Jaboatão'},
    {id:4, nome: 'João Guilherme', idade: 17, cidade: 'Jaboatão'},
    {id:5, nome: 'Luana da Silva', idade:18, cidade:'Malvinas'},
    {id:6, nome: 'Juan Rojas', idade: 17, cidade:'São Paulo'}
];

app.get('/', (req,res) =>{
    res.send('entrada: aluno/id')
});

app.get('/aluno/:id', (req,res) =>{
    let id= req.params.id;
    let aluno = alunos[id - 1];
    if (aluno) {
        res.send('Nome: ' + aluno.nome + '<br>' + 'Idade: ' + aluno.idade + '<br>' + 'Cidade: ' + aluno.cidade) ;   
    }else {
        res.send('Não foi encontrado o estudante com o ID: ' +id)
    }
    
})

app.listen(3000, () => {
    console.log ("Servidor em execução...")
})