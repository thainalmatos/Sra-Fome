const login = document.querySelector ("button.btn.login_btn");
const menu_login = document.querySelector(".user_card");
const logo_login = document.querySelector(".brand_logo_container");
const incorreto_login = document.querySelector(".text-light.text-center.bg-danger");
const info_box = document.querySelector(".info_box");
const comida1 = document.querySelector(".card-body.comida1");
const telaPicadinho = document.querySelector(".picadinho");
const comida2 = document.querySelector(".card-body.comida2");
const comida3 = document.querySelector(".card-body.comida3");
const comida4 = document.querySelector(".card-body.comida4");
const comida5 = document.querySelector(".card-body.comida5");
const voltar = document.querySelector("button.btn.btn-dark.text-light.voltar");
const exit = document.querySelector("button.btn.btn-dark.text-light.sair");
const continuar = document.querySelector("button.btn.btn-dark.text-light.continuar");
const voltar2 = document.querySelector("button.btn.btn-dark.text-light.voltar2");
const telaPagamento = document.querySelector(".pagamento");
const finalizar = document.querySelector("button.btn.btn-dark.text-light.finalizar");
const pedidos = document.querySelector(".info_pedido");
const exit2 = document.querySelector("button.btn.btn-dark.text-light.sair2");

login.addEventListener("click", function(e) {
    e.preventDefault();
    const nome_usuario = document.querySelector("#nome_usuario");
    const usuario = nome_usuario.value;
    console.log(usuario);

    e.preventDefault();
    const senha_usuario = document.querySelector("#senha_usuario");
    const senha = senha_usuario.value;
    console.log(senha);
 if((usuario == 'maria') && (senha == 12345)){
    info_box.classList.add("activeInfo");
    incorreto_login.classList.remove("activeIncorret");
    
 }else if((usuario == 'julia') && (senha == 12345)){
     pedidos.classList.add("activePedidos");
     incorreto_login.classList.remove("activeIncorret");
 }else{
    incorreto_login.classList.add("activeIncorret");
 }
});

comida1.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
   telaPicadinho.classList.add("activePicadinho");
   document.querySelector("#title").innerHTML ="Picadinho";
   
   document.querySelector("#resume").innerHTML ="Picadinho de Carne com legumes acompanhado de arroz, feijão e salada.";
   document.querySelector("#inputcodigo").innerHTML = "<option selection>125</option>"
});

comida2.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
   telaPicadinho.classList.add("activePicadinho");
   
   document.querySelector("#title").innerHTML = "Milanesa de Frango";
   document.querySelector("#resume").innerHTML ="Filé de Frango Milanesa acompanhado de arroz, feijão e salada."
   document.querySelector("#inputcodigo").innerHTML = "<option selection>126</option>"
});

comida3.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
   telaPicadinho.classList.add("activePicadinho");
   document.querySelector("#title").innerHTML ="Bife Parmegiana";
   document.querySelector("#resume").innerHTML = "Bife parmegiana acompanhado de arroz, feijão e salada.";
   document.querySelector("#inputcodigo").innerHTML = "<option selection>127</option>"
});

comida4.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
   telaPicadinho.classList.add("activePicadinho");
   document.querySelector("#title").innerHTML ="Omelete de Calabresa";
   document.querySelector("#resume").innerHTML = "Omelete de calabresa acompanhado de arroz, feijão e salada.";
   document.querySelector("#inputcodigo").innerHTML = "<option selection>128</option>"
});

comida5.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
   telaPicadinho.classList.add("activePicadinho");
   document.querySelector("#title").innerHTML ="Bife a Cavalo";
   document.querySelector("#resume").innerHTML = "Bife com ovo encima acompanhado de arroz, feijão, salada e batata frita.";
   document.querySelector("#inputcodigo").innerHTML = "<option selection>129</option>"
});

voltar.addEventListener("click", function(e) {
   telaPicadinho.classList.remove("activePicadinho");
   info_box.classList.add("activeInfo");
   
});

exit.addEventListener("click", function(e) {
   info_box.classList.remove("activeInfo");
});

exit2.addEventListener("click", function(e) {
   pedidos.classList.remove("activePedidos");
});

// habilita o botão com 3 ou mais caracteres digitados
document.body.querySelector("#name").addEventListener("input", function(){
   var botao_proximo = document.body.querySelector("#proximo");
   botao_proximo.disabled = this.value.length >= 3 ? false : true;
});



continuar.addEventListener("click", function(e) {
   telaPicadinho.classList.remove("activePicadinho");
   telaPagamento.classList.add("activePagamento");
   e.preventDefault();
   
   const nome = document.querySelector("#name");
   const nome_cliente = nome.value;
   document.querySelector("#pedido").innerHTML = "Pedido realizado pelo(a): " + nome_cliente;

   const extra = document.querySelector("#inputextra");
   const extra_cliente = extra.value;
   document.querySelector("#suco").innerHTML = extra_cliente;

   if(extra_cliente == 'Suco de Maracujá 300ml (7.00)' || extra_cliente == 'Suco de Morango 300ml (7.00)'){
      document.querySelector("#valor_acompanhamento").innerHTML = "07.00";
      var suco = 7.00;
   } else if (extra_cliente == 'Não quero.'){
      document.querySelector("#valor_acompanhamento").innerHTML = "00.00";
      var suco = 0.00;
   }else{
      document.querySelector("#valor_acompanhamento").innerHTML = "06.00";
      var suco = 6.00;
   }
   
  
   const codigo = document.querySelector("#inputcodigo");
   const codigo_prato = codigo.value;
   document.querySelector("#prato").innerHTML = codigo_prato;

   if( codigo_prato == '126'){
      document.querySelector("#prato").innerHTML = "Milanesa de Frango";
      document.querySelector("#valor_prato").innerHTML = "25.00"; 
      var sabor = 25.00;
   }else if ( codigo_prato == '125'){
      document.querySelector("#prato").innerHTML = "Picadinho";
      document.querySelector("#valor_prato").innerHTML = "28.00";
      var sabor = 28.00;
   }else if ( codigo_prato == '127'){
      document.querySelector("#prato").innerHTML = "Bife Parmegiana";
      document.querySelector("#valor_prato").innerHTML = "29.00";
      var sabor = 29.00;
   }else if ( codigo_prato == '128'){
      document.querySelector("#prato").innerHTML = "Omelete de Calabresa";
      document.querySelector("#valor_prato").innerHTML = "23.00";
      var sabor = 23.00;
   }else if( codigo_prato == '129'){
      document.querySelector("#prato").innerHTML = "Bife a Cavalo";
      document.querySelector("#valor_prato").innerHTML = "32.00";
      var sabor = 32.00;
   }

   
   var total1 = sabor + suco
   document.querySelector("#total").innerHTML = total1 + ".00";

   //troco
   const resultado = document.querySelector(".container.results");
   resultado.classList.add("activeResults");
   const result_final = resultado.querySelector(".calculo_troco");

   const valor_troco = document.querySelector("button.btn.btn-light.text-dark.simular");

   valor_troco.addEventListener("click", function(e) {
   e.preventDefault();
   //const result_final = document.querySelector(".calculo_troco");
   const calculo_troco = document.querySelector("#inputtroco");
   const troco = calculo_troco.value;
   var value_troco =  troco - total1;
   console.log(value_troco);
   let Result_final  = '<span class="result_sem_plano text text-dark" id="valor"> O troco a ser dado é R$ '+ value_troco +'.00</span>';
   result_final.innerHTML = Result_final;
   
});
   
});


voltar2.addEventListener("click", function(e) {
   telaPagamento.classList.remove("activePagamento");
   telaPicadinho.classList.add("activePicadinho");
});

finalizar.addEventListener("click", function(e) {
   prompt("Pedido realizado com sucesso!")
   telaPagamento.classList.remove("activePagamento");
});

const campoPesquisa = document.querySelector('#pesquisa');
const items = document.querySelectorAll('#lista li');
let regexCheck;
const resumo =document.querySelector("p.card-text");

