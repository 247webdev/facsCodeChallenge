$(document).ready(function(){

// init environment
	// element shortcuts include    elItemBox elDeleteBox elAddBtn elDeleteBtn
	var elItemBox = $("#itemBox"),
	  elDeleteBox = $("#deleteBox"),
	     elAddBtn = $("#addBtn"),
	  elDeleteBtn = $("#deleteBtn"),

	// itemArray => the index is the itemID, the value is: 1 for used, 0 for available. The last index should always be value of 0. Other preceeding indexes may also be 0. Stub function looks for first index with a value of 0 and uses that index as the next avail Item ID
	    itemArray = [0];

	// event listeners
		// Add Button click
			elDeleteBtn.click(function(){
				deleteItem();
			});
		// Delete Button click
			elAddBtn.click(function(){
				addItem();
			});

		// Item selected click
			$(".item").click(function(){
				//addItem();
			});


	console.log(elAddBtn);
	console.log("itemArray " + itemArray);
	console.log("Started");

// toggle button class to active
	function buttonActive() {
		console.log("buttonActive");
		elDeleteBtn.removeClass("facs-button-disabled"); 
		elDeleteBtn.addClass("facs-button-active");
	}

// toggle button class to disable
	function buttonDisable() {
		console.log("buttonDisable");
		elDeleteBtn.removeClass("facs-button-active");
		// elDeleteBtn.addClass("facs-button-disabled");
	}

// create an element for a new item
	function addItem() {
		console.log("addItem");
		// stub for no DB is to find the next available ID
		var nextID = itemArray.indexOf(0);
	}

// delete an element that was deleted
	function deleteItem(el) {
		console.log("deleteItem");
		console.log("Delete item " + el );  
	}

// set the selected item and call buttonActive
	function selectedItem() {
		console.log("selectedItem");
		// reset any selected item for when user changes the selected item
	}

});