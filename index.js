class Estudante{
    constructor(nome, email, RA, curso, disciplinas){
        this.nome = nome;
        this.email = email;
        this.RA = RA;
        this.curso = curso;
        this.disciplinas = disciplinas
    }

    primeiraDisciplina(){
        console.log(this.disciplinas[0])
    }
    
    ultimaDisciplina(){
        console.log(this.disciplinas[this.disciplinas.length - 1])
    }
}

const estudante1 = new Estudante("Otavio", "otavio.scarpellini@gmail.com", 1050482323015, "ADS", ["Calculo", "LP", "SI", "Comunicação", "EngSoft"])
const estudante2 = new Estudante("Bianca", "bianca.lorenzine@gmail.com", 1050482424019, "ADS", ["LabHard", "AOM", "MatDisc", "Algoritmos", "Adm"])

estudante1.primeiraDisciplina()
estudante1.ultimaDisciplina()
console.log("-------------------------------")
estudante2.primeiraDisciplina()
estudante2.ultimaDisciplina()
