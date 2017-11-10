$(document).ready(function(){

// init environment
	// element shortcuts include    elItemBox elDeleteBox elAddBtn elDeleteBtn
	var elItemBox = $("#itemBox"),
	  elDeleteBox = $("#deleteBox"),
	     elAddBtn = $("#addBtn"),
	  elDeleteBtn = $("#deleteBtn"),

	// stub item inputs
	  newItemText = "", 
	  newItemDesc = "";

	// get item array
	  var itemArray = getItemArray();
	  var arrayLength = itemArray.length;

	// event listeners
		// Add Button onClick
			elAddBtn.click(function(){ addItem(newItemText, newItemDesc); });

		// Delete Button onClick
			elDeleteBtn.click(function(){ deleteItem(); });

		// an Item onClick to select it
			$("div.facs-item").click(function(){ selectItem(); });

		// ---------------------
		// function control stubs
			// Toggle Stub control onClick
				$("#toggleStubs").click(function(){
					$(".stub").toggleClass("hide");  //text("here");
				 });

			// Activate/Disable control of Delete Button onClick
				$("#toggleDelBtn").click(function(){
					console.log("toggled delete Btn"); 
					$("#deleteBtn").toggleClass("hide");
					$("#deleteBtn").toggleClass("facs-button-disabled");
					$("#deleteBtn").toggleClass("facs-button-active");
				 });

			// click on Select Item function
				$("#selectCtrl").click(function(){ selectItem( 0 ); }); // 0 is the index of an Item ID of 1
		// ---------------------


	console.log("Started");

// new Item constructor
function item(id, text, desc) {
    this.id = id;
    this.itemText = text;
	this.item_description = desc;
}

// get array of Items
function getItemArray(){
	var itemArray = $('#itemBox').get();
    console.log("getItemArray " + itemArray);
    return itemArray;
}

// toggle button class to active
	function buttonActive() {
		console.log("In function buttonActive");
		elDeleteBtn.removeClass("facs-button-disabled"); 
		elDeleteBtn.addClass("facs-button-active");
		elDeleteBtn.show();
	}

// toggle button class to disable
	function buttonDisable() {
		console.log("In function buttonDisable");
		elDeleteBtn.removeClass("facs-button-active");
		elDeleteBtn.addClass("facs-button-disabled");
		elDeleteBtn.hide();
	}

// create an element for a new item
	function addItem(itemText, itemDesc) {
		console.log("In function addItem");

		// back-end would re-number the Item IDs by using any deleted/moved ID(s) in succession and return the newest ID # as 'result'
        $.ajax({
        	url: "test/save-new-item?Item_text=itemText&Item_description=itemDescription",
        	type: "GET",
        	username: "",
        	password: "",
        	timeout: 5000,

        	success: function(result){
            	// create new Item instance passing in the new item's ID which is held in result
	            console.log("This is stubbed so, how can there be Ajax success?");
   	        	var newItem = new item(result, itemText, itemDesc);
   	        	// finish once there is proper back-end
        	},
        	error: function(xhr){
	            console.log("An error occured: " + xhr.status + " " + xhr.statusText);
	        },
	        complete: function(result){
	        	buttonDisable();
	        	result = 3;
            	// append new item element
            	var text = '<div class="facs-item">Item #' + result + '</div>';
            	console.log("item text " + text);
            	$( "#itemBox" ).append( text ).click(function(){ selectItem(); });
            	console.log("Item array "+ $() );
	        }
    	});

	}


// after adding an item normalize
    function resetSelected() {
    	itemArray = getItemArray();
      arrayLength = itemArray.length;

        // update item #s
        for (var i = 0; i < arrayLength; i++) {
            // normalize class delete and add click listener to each item
            $(itemArray[i]).removeClass('delete');
            $(itemArray[i]).innerHTML = "";

            $(itemArray[i]).click(function (e) {
                $(this).addClass('delete');
            });
        }

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


    // update item #

      itemArray = getItemArray();
    arrayLength = itemArray.length;

    function setSelected(e) {
            // onClick enable delete button
            buttonActive();
            resetSelected();
            $(this).addClass('delete');

        }

    for (var i = 0; i < arrayLength; i++) {
        // reset delete class and add click listener to ea. item

        $(itemArray[i]).innerHTML = "";

        var labelCount = i + 1;
        itemArray[i].innerHTML = "Item #" + labelCount;
        $(itemArray[i]).click( setSelected() );
    }

});