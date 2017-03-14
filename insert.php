<?php
	error_reporting(E_ALL);
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");
	// 以 POST 方式获取请求中的用户名与密码
	$Username = $_POST["username"];
	$Password = $_POST["password"];

	$connection = mysql_connect("bdm267037183.my3w.com", "bdm267037183", "qwe2632652");

	mysql_select_db("bdm267037183_db", $connection);

	$sql = "INSERT INTO tamade VALUES (NULL, '$Username', '$Password')";
	$result = mysql_query($sql);

	if (!$result)
		die ("error : " . mysql_error());

	echo "数据添加成功....";

	mysql_close($connection);
?>