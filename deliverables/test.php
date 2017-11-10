<?PHP
// PHP file that contains a class that defines methods to write to a postgres database (see assumptions).

if( file_get_contents( "php://input" )){
   $data = file_get_contents( "php://input" );
   $data = json_decode( $data ); // convert $data from string to array

   // load class
   require_once('testController.php');
   $t = new TestClass();

   //Loaded class and call to sanitizeDAO works
   $validateUser= $t->sanitizeDAO("TESTTESETET");
   echo(json_encode($validateUser));
} else {
   echo(json_encode("login"));
}

?>