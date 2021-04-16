function Enviar() {

    var dados1 = document.getElementById("dados1");
    var dados2 = document.getElementById("dados2");
    var dados3 = document.getElementById("dados3");

  
    if (dados1.value != "" && dados2.value != "" && dados3.value != "") {
        alert('Obrigado sr.(a) ' + dados2.value + ', os seus dados foram encaminhados com sucesso!');
    }else{
      alert('Atenção sr.(a), os campos marcados com asterísco (*) são obrigatórios!')
    };
}