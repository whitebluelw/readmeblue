<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-type:text/html;charset-utf-8");
	// $db = mysql_connect("bdm266102300.my3w.com", "bdm266102300", "lamento89");
	$db = mysql_connect("bdm267037183.my3w.com", "bdm267037183", "qwe2632652");
	mysql_query("SET NAMES 'UTF8'");
	
	if($db){
		// mysql_select_db("bdm266102300_db",$db);
		mysql_select_db("bdm267037183_db",$db);
		// $sql = "SELECT * FROM skill";
		$sql = "SELECT * FROM usertalks";

		$result = mysql_query($sql);

		// $arr = array();
		// $row = mysql_fetch_row($result);  //no need
		// echo json_encode($row);
		$results = array();
		while ($row = mysql_fetch_assoc($result)) {
			$results[] = $row;
			// echo json_encode($row);
		}
		echo json_encode($results);
		mysql_close($db);
	}
?>