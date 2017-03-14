<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");
	$Username=$_POST["username"];
	$Password=$_POST["password"]
	$connection= mysql_connect("bdm267037183.my3w.com", "bdm267037183", "qwe2632652");
	my_select_db("tamade");
	
	$sql = "SELECT * FROM tamade WHERE username='$Username' AND password='$Password'";
	// 发送 SQL 语句执行
	$result = mysql_query($sql, $connection);
	// 得到查询结果集中的行
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	if (!$row) {
		echo "用户名或密码错误";
	} else {
		echo "登录成功<br>";
		echo json_encode($row);
	}
		mysql_close($db);
	
?>