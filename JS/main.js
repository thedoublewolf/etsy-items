
//               _________          _______ 
//               \__   __/|\     /|(  ____ \
//                  ) (   | )   ( || (    \/
//                  | |   | (___) || (__    
//                  | |   |  ___  ||  __)   
//                  | |   | (   ) || (      
//                  | |   | )   ( || (____/\
//                  )_(   |/     \|(_______/
                                         
//  ______   _______           ______   _        _______ 
// (  __  \ (  ___  )|\     /|(  ___ \ ( \      (  ____ \
// | (  \  )| (   ) || )   ( || (   ) )| (      | (    \/
// | |   ) || |   | || |   | || (__/ / | |      | (__    
// | |   | || |   | || |   | ||  __ (  | |      |  __)   
// | |   ) || |   | || |   | || (  \ \ | |      | (      
// | (__/  )| (___) || (___) || )___) )| (____/\| (____/\
// (______/ (_______)(_______)|/ \___/ (_______/(_______/
                                                      
//                    _______  _        _______ 
//          |\     /|(  ___  )( \      (  ____ \
//          | )   ( || (   ) || (      | (    \/
//          | | _ | || |   | || |      | (__    
//          | |( )| || |   | || |      |  __)   
//          | || || || |   | || |      | (      
//          | () () || (___) || (____/\| )      
//          (_______)(_______)(_______/|/      

/////////////////////////MMXV JW./////////////////////////

                                             
(function () { 

	// Find container element to apply styles to answers.
	var container = document.querySelector('#container');

//>>>-----------------------ANSWER 1----------------------->>>//

	// Create an array of just the prices
	var prices = items.map( function (item){
		return item.price;
	});
	// Add all of the prices together
	var sum = prices.reduce( function (prev, next){
		return prev + next;
	});
	// Divide by total number of items
	var avg = sum / items.length;
	// Convert it to 2 decimal places
	var converted = avg.toFixed(2);
	// Make it a string
	var str = 'The average price is $' + converted;
	//Make it show up on the page
		// Find our answer element
	var answer1 = document.querySelector('#answer1');
		// Create a node from our above answer ready for the DOM
	var textNode = document.createTextNode(str);
		// Append newly created node to our element
	answer1.appendChild(textNode);

//>>>-----------------------ANSWER 2----------------------->>>//

 	// Create a blank array to push filtered items into
 	var specItems = [];
 	// Filter items that are priced between 14 and 18
 	var filteredPrices = items.filter(function (filteredItem){
 			if ((filteredItem.price > 14.00) && (filteredItem.price < 18.00)){
 				// Push title of item into specItems array
 				specItems.push(filteredItem.title);
 			};
 			return specItems;	
 	});
 	// Take items in specItems array and make them show up on page 
	var answer2a = document.querySelector('#answer2a');
	var text2a = document.createTextNode(specItems[0]);
	answer2a.appendChild(text2a);
	var answer2b = document.querySelector('#answer2b');
	var text2b = document.createTextNode(specItems[1]);
	answer2b.appendChild(text2b);
	var answer2c = document.querySelector('#answer2c');
	var text2c = document.createTextNode(specItems[2]);
	answer2c.appendChild(text2c);

//>>>-----------------------ANSWER 3----------------------->>>//

	// Create a blank array to push filtered items into
	var gbpCodeItems = [];
	// Filter items that have 'GBP' string in currency_code
	var filterItemTitle = items.filter(function (britishItem){
			if (britishItem.currency_code === 'GBP'){
				// push the items into gbpCodeItems array
				gbpCodeItems.push(britishItem);
			};
			return gbpCodeItems;
	});
	// Take title and price of item in gbpCodeItems array and make them show up on page.
	document.getElementById('answer3').innerHTML = gbpCodeItems[0].title + ' costs' + ' &#163;' + gbpCodeItems[0].price;
	
//>>>-----------------------ANSWER 4----------------------->>>//

	// Create a blank array to push filtered items into
	var woodItems = [];
	// Filter items that have 'wood' in materials array
	var itemsWithWood = items.filter(function (woodItem){
		// Search each position of each materials array and find 'wood', which can't be -1
			if ((woodItem.materials.indexOf('wood')) != (-1)){
				// Push those items into woodItems array along with title and a string
				woodItems.push(woodItem.title + ' is made of wood.');
			};
			return woodItems;
	});
	// Make the titles and strings from the woodItems array show up on page
	var answer4a = document.querySelector('#answer4a');
	var text4a = document.createTextNode(woodItems[0]);
	answer4a.appendChild(text4a);
	var answer4b = document.querySelector('#answer4b');
	var text4b = document.createTextNode(woodItems[1]);
	answer4b.appendChild(text4b);
	var answer4c = document.querySelector('#answer4c');
	var text4c = document.createTextNode(woodItems[2]);
	answer4c.appendChild(text4c);
	var answer4d = document.querySelector('#answer4d');
	var text4d = document.createTextNode(woodItems[3]);
	answer4d.appendChild(text4c);
	var answer4e = document.querySelector('#answer4e');
	var text4e = document.createTextNode(woodItems[4]);
	answer4e.appendChild(text4c);


	//>>>-----------------------ANSWER 5----------------------->>>//
	
	// Create a blank array to push filtered items into
	var multMaterialItems = [];
	// Filter items with a materials array length greater than or equal to 8
	var itemsWithMultMat = items.filter(function (mat){
			if ((mat.materials.length) >= (8)){
				// push those items into multMaterialItems array
				multMaterialItems.push(mat);
			};
			return multMaterialItems;
	});
	// Make the title and material length show up on page
	document.getElementById('answer5a').innerHTML = 
		multMaterialItems[0].title + ' has ' + multMaterialItems[0].materials.length + ' materials:';
			// Create a function that shows each material listed below the above sentence
			var listAnswer5a = multMaterialItems[0].materials.filter(function (list1){
				var answer5List1 = document.querySelector('#answer5aList');
				var listElement = document.createElement('div');
				listElement.textContent = list1;
				answer5a.appendChild(listElement);
			});

	document.getElementById('answer5b').innerHTML = 
		multMaterialItems[1].title + ' has ' + multMaterialItems[1].materials.length + ' materials:';
			var listAnswer5b = multMaterialItems[1].materials.filter(function (list2){
				var answer5List2 = document.querySelector('#answer5bList');
				var listElement2 = document.createElement('div');
				listElement2.textContent = list2;
				answer5b.appendChild(listElement2);
			});

	//>>>-----------------------ANSWER 6----------------------->>>//

	// Create a blank array to push filtered items into
	var sellerItems = [];
	// Filter items with 'i_did' string in who_made
	var itemQuantity = items.filter(function(made){
			if (made.who_made === 'i_did'){
				// push those items into sellerItems array
				sellerItems.push(made);
			};
			return sellerItems;
	});
	// Make length of items in sellerItems array show up on page
	document.getElementById('answer6').innerHTML = sellerItems.length + ' were made by their sellers';

}());

