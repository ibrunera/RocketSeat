function experiencia(anos) {
    let xp = ''
    
    if(anos<=1)
        xp = 'Iniciante'
    else if(anos<=3)
        xp = 'Intermediário'
    else if(anos<=6)
        xp = 'Avançado'   
    else
        xp = 'Jedi Master'

    console.log(xp)
         
}
var anosEstudo = 1;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
