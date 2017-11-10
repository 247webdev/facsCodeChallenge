<?PHP
// PHP file that contains a class that defines methods to write to a postgres database (see assumptions).

/* Controller
Laravel routes respond to calls
1. /test/save-new-item
	a. Parameters   received
		i. Item_text
	   ii. Item_description
	b. Returned   data
		i. Item_id
2. /test/update-user-item
	a. Parameters   received
		i. Item_id ii. User_id
	  iii. Item_status
	b. Returned   data
		i. Update   result
*/

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