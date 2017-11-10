<?php
    // extend DAO class

function __autoload($name){
    if($name === is_class){
        include_once($name.'class.php');
    }elseif ($name === is_interface){
        include_once($name.'interface.php');
    }
}


interface TestClasslogin
{
    function validateUser($usrArr);
    public function sanitizeDAO($DAOArray);

}

interface TestClassUpdateUserItem
{
    public function sanitizeDAO($DAOArray);
}

interface TestClassSaveNewItem
{
    public function sanitizeDAO($DAOArray);

}





    class TestClass extends abstractdbDAO
{

    /**
     * //implement interfaces later implements TestClasslogin , TestClassUpdateUserItem , TestClassSaveNewItem
     *  Extend abstractdbDAO class
     * @var string
     */
    private $varasneeded;
    /**
     * constructor
     */
    public function __construct()
    {

    }


        /**
         * sanitizeDAO
         * input some string var
         * output: sanitized string
         *
         */

    public function sanitizeDAO($someStringPosted)
    {
        $var = stripslashes($someStringPosted);
        $var = htmlentities($var);
        $var = strip_tags($var);
        return $var;

    }


}



    /**
     * abstractdbDAO
     * can be extended not instantiated like final class
     */

abstract class abstractdbDAO
{

    /**
     * An indentifier
     * @var string
     */
    private $someprivvar;
    /**
     * constructo
     */

    protected function __construct($name)
    {
        $this->name = $name;
    }



    /**
     * validateUser
     * input @var $usrArr array having name and email posted values
     * output: return true
     * limit to 3 logins or logging in
     */

    protected function validateUser($usrArr)
    {
        $_SESSION['counter'] = 4;
        //$_SESSION['time']  = date('Y-m-d', strtotime(intlcal_get_now());


        while($_SESSION['counter'] > 1 ){
            // assume access to query select user based $usrArr  DB::select(   select   *   from   t_user);
            $getUser =DB::select("   select      from   t_user where t_user.name  = {$usrArr[email]} and t_user.email = {$usrArr[email]} and 1 =1 limit 1; ");
            if(count($getUser)==1 ){
                return true;
            }
            else if( 1==1){
//            else if (date('Y-m-d', strtotime(intlcal_get_now()) -$_SESSION['time']  < 3 ){
                return " IP blocked due to ";

            } else {

                return "login";
            }

            --$_SERVER['counter'];


        }
        // block ip if less then 2 seconds per post, our response fast time is 2 seconds
        if(  //date('Y-m-d', strtotime(intlcal_get_now()) -$_SESSION['time']  < 3
            1==1){
           return " IP blocked due to ";

        }

        // default ip blocked if cond. above not hit
        return " IP blocked due to ";



    }

        /**
         * validaUserLoggedinSession
         * input @var $usrArr array having name and email posted values
         * output: return true
         * limit to 3 logins or logging in
         */
    protected function validaUserLoggedinSession($usrArr)
    {
        // assume access to query select user based $usrArr
        // server side confirm user session exists and company/role model allows access
//       if( validateUser($usrArr) == true  && in_array($_SESSION['user_id'], $usrArr['user_id'] == 1){
//               return true;
//           }else{
//                return "login";
//       }
        return ("placeholder login!");
    }

        /**
         * validaUserLoggedinSessionItemAccess
         * input @var $usrArr array having name and email posted values
         * output: return true
         * limit to 3 logins or logging in
         */


    protected function validaUserLoggedinSessionItemAccess($usrArr)
    {
        // assume access to query select user based $usrArr
        // server side confirm user session exists and company/role model allows access
    }



        /**
         * getUserItems
         * input @var $usrArr array having name and email posted values
         * output: return true
         * limit to 3 logins or logging in
         */

    protected function getUserItems()
    {
        if(validaUserLoggedinSession($usrArr) == true) {
            // assume access to query select items for user  DB::select(   select   *   from   t_user);
            //
        } else{
            return "login";
        }

    }

/**
 * updateUserItem
 * input @var $usrArr array having name and email posted values
 * output: return true
 * limit to 3 logins or logging in
 */
    protected function updateUserItem($usrArr, $itemArr)
    {
        if(validaUserLoggedinSession($usrArr) == true) {
            // assume access to query select items for user  DB::select(   select   *   from   t_user);
            // call method to update items
        } else{
            return "login";
        }

    }

}

?>