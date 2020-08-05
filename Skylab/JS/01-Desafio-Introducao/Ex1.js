var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

function x(a) {
    console.log(`O usuário mora em ${a.cidade} / ${a.uf}, no bairro ${a.bairro}, na rua "${a.rua}" com nº ${a.numero}`)
}

x(endereco)