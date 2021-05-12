
function submitForm() {

       var dateMail = document.getElementById("dataMail");
       var dateName = document.getElementById("dataName");
       var dateAge = document.getElementById("dataAge");
       var dateAnswer = document.getElementById("dataAnswer");
     
     
       if (dateMail.value != "" && dateName.value != "" && dateAge.value != "" && dateAnswer.value != "") {
           alert('Obrigado sr.(a) ' + dateName.value + ', os seus dados foram encaminhados com sucesso!'); 
       
           document.getElementById("dataMail").value = "";
           document.getElementById("dataName").value = "";
           document.getElementById("dataAge").value = "";
           document.getElementById("dataCEP").value = "";
           document.getElementById("dataAnswer").value = "";
           document.getElementById("stateUF").value = "";
           document.getElementById("city").value = "";
           document.getElementById("street").value = "";

       }else{
         alert('Atenção sr.(a), os campos marcados com asterísco (*) são obrigatórios!')
       };     
     };

function findCEP() {
       const stateUF = document.getElementById('stateUF')
       const city = document.getElementById('city')
       const street = document.getElementById('street')
   
       fetch(`https://viacep.com.br/ws/${stateUF.value}/${city.value}/${street.value}/json/`)
        .then((resolve) => resolve.json())
       .then((data) => document.getElementById('dataCEP').value = data[0].cep)
    }
