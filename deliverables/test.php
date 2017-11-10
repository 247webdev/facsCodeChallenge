<?PHP
// PHP file that contains a class that defines methods to write to a postgres database (see assumptions).

//    /**
//     * controller
//     * Laravel routes respond to calls
//     *
//     * 1. /test/save-new-item
//        a. Parameters   received
//        i. Item_text
//        ii. Item_description
//        b. Returned   data i. Item_id
//        2. /test/update-user-item
//        a. Parameters   received
//        i. Item_id ii. User_id
//        iii. Item_status
//        b. Returned   data
//        i. Update   result
//     */




    // Minimial security here, provided by Laravel later
    // just load class and test tht one methods responds

  if( file_get_contents( "php://input" )){

       $data = file_get_contents( "php://input" ); //$data is now the string '[1,2,3]';
       $data = json_decode( $data ); //$data is now a php array array(1,2,3)

        // sanitize Data


        // set new Class interfaces
        // Load the class once &b auto loads interfaces
        require_once('testClass.php');
        $t = new TestClass();

        //Loaded class and call to sanitizeDAO works
        $validateUser= $t->sanitizeDAO("TESTTESETET");
        echo(json_encode($validateUser));


    } else {

        echo(json_encode("login"));
    }



?>