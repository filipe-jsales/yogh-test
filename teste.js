class Cliente{
  constructor(nome, email, cpf, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo
    this.depositar = function(valor){
      this.saldo += valor;
    };
  }
  depositar(valor){
    this.saldo +=this.saldo;
  }
  exibirSaldo(){
    console.log(this.saldo);
  }
}
let cliente1 = new Cliente("pedro", "pedro@gmail.com", "0191919924", 800)


cliente1.exibirSaldo();
