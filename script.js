function submitForm() {

  var dateMail = document.getElementById("dataMail");
  var dateName = document.getElementById("dataName");
  var dateAge = document.getElementById("dataAge");
  var dateAnswer = document.getElementById("dataAnswer");


  if (dateMail.value != "" && dateName.value != "" && dateAge.value != "" && dateAnswer.value != "") {
      alert('Obrigado sr.(a) ' + dateName.value + ', os seus dados foram encaminhados com sucesso!');
  }else{
    alert('Atenção sr.(a), os campos marcados com asterísco (*) são obrigatórios!')
  };
 
  document.getElementById("dataMail").value = "";
  document.getElementById("dataName").value = "";
  document.getElementById("dataAge").value = "";
  document.getElementById("dataAnswer").value = "";
}