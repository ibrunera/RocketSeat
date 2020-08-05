var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

function a(x) {
    for (let b of x) {
        console.log(`O ${b.nome} possui as habilidades: ${b.habilidades.join(', ')}.`) 
    }
    console.log(' ')
    
    x.forEach(b => {
        console.log(`O ${b.nome} possui as habilidades: ${b.habilidades.join(', ')}.`)
    });
}

a(usuarios)