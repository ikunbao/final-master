function validateForm() {
  var x = document.forms["user"]["user1"].value;
  var y = document.forms["user"]["user2"].value;
  var z = document.forms["user"]["user3"].value;
  var w = document.forms["user"]["user4"].value;
  var q = document.forms["user"]["user5"].value;
  if (x == ""||y == ""||z == ""||w == ""||q == "") {
    alert("請填入個人資料₍₍◞( •௰• )◟₎₎");
    return false;	
  }
  	alert("修改成功⁽⁽◝( •௰• )◜⁾⁾");
}				