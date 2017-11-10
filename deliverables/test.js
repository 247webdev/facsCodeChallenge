$(document).ready(function(){

// init environment
	// element shortcuts include    elItemBox elDeleteBox elAddBtn elDeleteBtn
	var elItemBox = $("#itemBox"),
	  elDeleteBox = $("#deleteBox"),
	     elAddBtn = $("#addBtn"),
	  elDeleteBtn = $("#deleteBtn"),

	// testing controls    elActiveCtrl elInactiveCtrl elSelectCtrl
	 elActiveCtrl = $("#activeCtrl"),
   elInactiveCtrl = $("#inactiveCtrl"),
	 elSelectCtrl = $("#selectCtrl"),

	// stub item inputs
	  newItemText = "", 
	  newItemDesc = "",

	// itemArray => the index is the itemID, the value is: 1 for used, 0 for available. The last index should always be value of 0. Other preceeding indexes may also be 0. Stub function looks for first index with a value of 0 and uses that index as the next avail Item ID
	    itemArray = [0];

	// event listeners
		// click on Add Button
			elAddBtn.click(function(){ addItem(newItemText, newItemDesc); });

		// click on Delete Button
			elDeleteBtn.click(function(){ deleteItem(); });

		// click on an Item... selecting it
			$(".item").click(function(){ selectItem(); });

		// ---------------------
		// function control stubs
			// click on Activate Control function
				elActiveCtrl.click(function(){ buttonActive(); });

			// click on Inactivate Control function
				elInactiveCtrl.click(function(){ buttonDisable(); });

			// click on Select Item function
				elSelectCtrl.click(function(){ selectItem( 0 ); }); // 0 is the index of an Item ID of 1
		// ---------------------


	console.log(elAddBtn);
	console.log("itemArray " + itemArray);
	console.log("Started");

// new Item constructor
function item(id, text, desc) {
    this.id = id;
    this.itemText = text;
	this.item_description = desc;
}

// toggle button class to active
	function buttonActive() {
		console.log("In function buttonActive");
		elDeleteBtn.removeClass("facs-button-disabled"); 
		elDeleteBtn.addClass("facs-button-active");
		elDeleteBtn.hide();
	}

// toggle button class to disable
	function buttonDisable() {
		console.log("In function buttonDisable");
		elDeleteBtn.show();
		elDeleteBtn.removeClass("facs-button-active");
		elDeleteBtn.addClass("facs-button-disabled");
	}

// create an element for a new item
	function addItem(itemText, itemDesc) {
		console.log("In function addItem");

		// back-end would re-number the Item IDs by using any deleted/moved ID(s) in succession and return the newest ID # as 'result'
        $.ajax({url: "test/save-new-item?Item_text=itemText&Item_description=itemDescription",
        	type: "GET",
        	dataType: "JSON",
        	success: function(result){
            	// create new Item instance passing in the new item's ID which is held in result
            	var newItem = new item(result, itemText, itemDesc);

            	// code to append new item element
            	$( "#itemBox" ).append( $( newItem ) );
        	},
        	error: function(xhr){
	            alert("An error occured: " + xhr.status + " " + xhr.statusText);
	        }
    	});		
		// stub for no DB is to find the next available ID
		var nextID = itemArray.indexOf(0);
	}

// delete an element that was deleted
	function deleteItem(el) {
		console.log("In function deleteItem");
		console.log("Delete item " + el );
	}

// set the selected item and call buttonActive
	function selectItem(el) {
		var allItems = $(".facs-item");
		console.log("In function allItems");
		console.log("allItems " + allItems[0] );
// x = $("itemBox").options;
//    var y = $("itemBox").selectedIndex;
//    console.log("Index: " + x[y].index + " is " + x[y].text);
		// if(el && el <> 0){
			// var selectedIndex = 
		// } 
		// this? this : 0; // JS linter warning 'this' context is wrong
		console.log("this Item selected " + this );
		
		console.log("Item selected " + el );
		// reset any selected item for when user changes the selected item
		var selectedID = $("#itemBox").selectedIndex;
		console.log("selected item # is " + selectedID);
		var elSelected = selectedID;
		// elSelected.addClass("facs-item-selected");
	}

});