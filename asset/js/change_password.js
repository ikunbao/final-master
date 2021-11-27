function password_display1() {
				var x = document.getElementById("mypassword1");
				var image = document.getElementById('un_lock1');
				if (x.type == "password" &&  image.src.match("lock")) {
					x.type = "text";
					image.src = "asset/img/unlock.png";
				} else {
					x.type = "password";
					image.src = "asset/img/lock.png";
					}
				}
function password_display2() {
				var y = document.getElementById("mypassword2");
				var image = document.getElementById('un_lock2');
				if (y.type == "password" &&  image.src.match("lock")) {
					y.type = "text";
					image.src = "asset/img/unlock.png";
				} else {
					y.type = "password";
					image.src = "asset/img/lock.png";
					}
				}

function validateForm() {
  var x = document.forms["account"]["useraccount1"].value;
  var y = document.forms["account"]["useraccount2"].value;
  if (x == ""|| x == null||y == ""|| y == null) {
    alert("請輸入原始密碼及新密碼，這樣才能修改密碼歐₍₍◞( •௰• )◟₎₎");
    return false;	
  }
  	alert("修改成功⁽⁽◝( •௰• )◜⁾⁾");
}				