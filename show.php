<?php
  echo "account=".$_REQUEST['account'];
  echo "AAAphoto01=".$_POST['photo01'];
  // Connecting, selecting database
  $dbconn = pg_connect("host=localhost dbname=postgres user=postgres password=negjktd")
  or die('Could not connect: ' . pg_last_error());

//  pg_query("set character_set_client='UTF8'");
//  pg_query("set character_set_results='UTF8'");
//  pg_query("set collation_connection='UTF8_general_ci'");

	
 $photo01 = pg_escape_string($_REQUEST['photo01']);
 $photo02 = pg_escape_string($_REQUEST['photo02']);
 $photo03 = pg_escape_string($_REQUEST['photo03']);
 $photo04 = pg_escape_string($_REQUEST['photo04']);
 $photo05 = pg_escape_string($_REQUEST['photo05']);
 $photo06 = pg_escape_string($_REQUEST['photo06']);
 $photo07 = pg_escape_string($_REQUEST['photo07']);
 $photo08 = pg_escape_string($_REQUEST['photo08']);
 $photo09 = pg_escape_string($_REQUEST['photo09']);
 $photo10 = pg_escape_string($_REQUEST['photo10']);
 
 /*
 $data = pg_escape_string($_POST['photo01']);
 
  $ver = pg_query($dbconn,
				"INSERT INTO xdetect.installations(photo01) VALUES ('{$data}')" 
	*/
	
/*	$ver = pg_prepare( $dbconn, '', 'insert into xdetect.installations (photo01) values($1)' );
pg_execute( $dbconn, '', array( $data ) );		

  echo "".pg_result($ver, 0);
  */
	
  $ver = pg_query($dbconn,
  
				"INSERT INTO xdetect.installations(account, installator, photo01, photo02, photo03,  photo04, photo05, photo06, photo07, photo08, photo09, photo10, installation_created_at) VALUES ('{$_REQUEST['account']}', '{$_REQUEST['installator']}', '$photo01', '$photo02', '$photo03', '$photo04', '$photo05', '$photo06', '$photo07', '$photo08', '$photo09', '$photo10', '{$_REQUEST['created_at']}')" 
			
  );
				
  echo "".pg_result($ver, 0);

// Closing connection
pg_close($dbconn);
?>