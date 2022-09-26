const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    } 
  ]
    for (let c=0; c<Object.keys(clientes).length; c++){
      
      const listaDependentes = [...clientes[c].dependentes]
      console.table(listaDependentes)
}
  