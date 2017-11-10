# facsCodeChallenge
## Christian Chandler - 247webdev@gmail.com 510-852-1039
November 9, 2017


###STEP 1
* The user is presented with an empty container and a button.
* The only action the user can take is click on the add button.


###STEP 2
* When the user clicks on the add button from step 1, an item box is added to the empty box.
* The item box contains the text “item #” concatenated with the next number in the sequence.
* The sequence starts at number one and continues up infinitely and never repeats a number. Also, a delete button now appears.
* The delete button is disabled until an item box is selected.
* The user now can keep clicking the add button and keep adding item boxes to the container or they can click on an item box and click the delete button.


###STEP 3
* Once the user has deleted an item a new container is made and the deleted item is moved to the new box.
* The item in the deleted box contains the same text as before with the text “deleted” concatenated to it.
* The user can now add more items to the first container or they can delete items and have them moved to the second big box.
* If the first box runs out of items then the delete button is hidden, if there are items in the first box but none are selected the delete is visible but disabled.


###STEP 4
PHP model
* Tie in the work from above to the back end using a combination of php calls in the phtml file and Ajax calls in the javascript file to correctly reflect the state of the screen for when the user exits the page and then comes back to it later


###CSS
Assume that there is a global css file that defines the following classes for use.

1. facs-button-active
2. facs-button-disabled
3. facs-box
4. facs-item
5. facs-item-selected


###URLs
Assume the following urls can be used for ajax calls.

1. /test/save-new-item
	a. Parameters received
		* i. Item_text
		* ii. Item_description
	b. Returned data
		i. Item_id

2. /test/update-user-item
	a. Parameters received
		* i. Item_id
		* ii. User_id
		* iii. Item_status
	b. Returned data
		* i. Update result


###Tables:
* t_user ->
  id,
  name, 
  email (assume data is available in $_SESSION[‘user’])

* t_item ->
  id,
  text,
  description

* r_item_user ->
  user_id, 
  item_id, 
  status


###BackEnd
1. Assume there is a Laravel route and controller that takes the urls above then calls your methods in the class described in step 4.
2. Assume there is a DB configured (example: $query = DB::select( select * from t_user);
3. Your test.php should use the class name TestClass
4. Assume that a user has logged in and you have their user ID available in a PHP session variable.

