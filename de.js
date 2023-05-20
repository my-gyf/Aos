
function check(thisform) {
 
	var name=document.getElementById("name").value;  //读取表单数据，创建变量
	var pass=document.getElementById("pass").value;
 
	if (name=="刘溢采" && pass=="123456" || name=="Caumtcs" && pass=="111111" || name=="陈佳慧" && pass=="123456") {  
        //验证变量。此处设置账号、密码（可设置多组，用||隔开）
		alert("登录成功！");
		window.document.f.action="start.html";  //此处设置登录后跳转页面
		window.document.f.submit();
	}
	else{
		alert("用户名或密码错误！");
	}
 
}
