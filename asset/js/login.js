function password_display() {
				var x = document.getElementById("mypassword");
				var image = document.getElementById('un_lock');
				if (x.type == "password" &&  image.src.match("lock")) {
					x.type = "text";
					image.src = "asset/img/unlock.png";
				} else {
					x.type = "password";
					image.src = "asset/img/lock.png";
					}
				}
function validateForm() {
  var x = document.forms["account"]["useraccount1"].value;
  var y = document.forms["account"]["useraccount2"].value;
  if (x == ""|| x == null||y == ""|| y == null) {
     alert("請輸入帳號密碼₍₍◞( •௰• )◟₎₎");
    return false;
  }
  	alert("登入成功⁽⁽◝( •௰• )◜⁾⁾");
}				

