<!-- PHP file that contains a class that defines methods to write to a postgres database (see assumptions). -->

<!-- PHP model
  step 4 Tie in the work from above to the back end using a combination of php calls in the phtml file and Ajax calls in the javascript file to correctly reflect the state of the screen for when the user exits the page and then comes back to it later -->

<!--  Tables:
t_user ->
  id,
  name, 
  email (assume data is available in $_SESSION[‘user’])

t_item ->
  id,
  text,
  description

r_item_user ->
  user_id, 
  item_id, 
  status
-->

<!--  BackEnd :
1. Assume there is a Laravel route and controller that takes the urls above then calls your methods in the class described in step 4.
2. Assume there is a DB configured (example: $query = DB::select( select * from t_user);
3. Your test.php should use the class name TestClass
4. Assume that a user has logged in and you have their user ID available in a PHP session variable.
-->