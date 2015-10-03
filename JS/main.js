
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
 	// filter items that are priced between 14 and 18 and push into blank array
 	var filteredPrices = items.filter(function (filteredItem){
 			if ((filteredItem.price > 14.00) && (filteredItem.price < 18.00))
 				specItems.push(filteredItem.title);
 	}); 				
 	// take items in array and make it show up on page
	var answer2a = document.querySelector('#answer2a');
	var textNode0 = document.createTextNode(specItems[0]);
	answer2a.appendChild(textNode0);
	var answer2b = document.querySelector('#answer2b');
	var textNode1 = document.createTextNode(specItems[1]);
	answer2b.appendChild(textNode1);
	var answer2c = document.querySelector('#answer2c');
	var textNode2 = document.createTextNode(specItems[2]);
	answer2c.appendChild(textNode2);

			// This used to be document.getElementById('answer2').innerHTML 
			// but I changed it to figure out how to style auto-generated text from text nodes.

//>>>-----------------------ANSWER 3----------------------->>>//

	var gbpCodeItems = [];
	var filterItemTitle = items.filter(function (britishItem){
			if (britishItem.currency_code === 'GBP')
				gbpCodeItems.push(britishItem);
	});
	document.getElementById('answer3').innerHTML = gbpCodeItems[0].title + ' costs' + ' &#163;' + gbpCodeItems[0].price;
	
//>>>-----------------------ANSWER 4----------------------->>>//

	var woodItems = [];
	var itemsWithWood = items.filter(function (woodItem){
			if ((woodItem.materials.indexOf('wood')) != (-1))
				woodItems.push(woodItem.title);
	});
	document.getElementById('answer4').innerHTML = woodItems[0] + ' is made of wood.' + '<p>' + woodItems[1] +
		' is made of wood.' + '<p>' + woodItems[2] + 
		' is made of wood.' + '<p>' + woodItems[3] + 
		' is made of wood.' + '<p>' + woodItems[4] +
		' is made of wood.';

	//>>>-----------------------ANSWER 5----------------------->>>//

	var multMaterialItems = [];
	var itemsWithMultMat = items.filter(function (mat){
			if ((mat.materials.length) >= (8))
				multMaterialItems.push(mat);
	});
	document.getElementById('answer5').innerHTML = 
		multMaterialItems[0].title + ' has ' + multMaterialItems[0].materials.length + ' materials:' + '<p>'
			+ multMaterialItems[0].materials[0] + '<br>' 
			+ multMaterialItems[0].materials[1] + '<br>' 
			+ multMaterialItems[0].materials[2] + '<br>' 
			+ multMaterialItems[0].materials[3] + '<br>' 
			+ multMaterialItems[0].materials[4] + '<br>' 
			+ multMaterialItems[0].materials[5] + '<br>' 
			+ multMaterialItems[0].materials[6] + '<br>' 
			+ multMaterialItems[0].materials[7] + '<br>' 
			+ multMaterialItems[0].materials[8] + '<p>' 
		+ multMaterialItems[1].title + ' has ' + multMaterialItems[1].materials.length + ' materials:' + '<p>' 
			+ multMaterialItems[1].materials[0] + '<br>'
			+ multMaterialItems[1].materials[1] + '<br>'
			+ multMaterialItems[1].materials[2] + '<br>'
			+ multMaterialItems[1].materials[3] + '<br>'
			+ multMaterialItems[1].materials[4] + '<br>'
			+ multMaterialItems[1].materials[5] + '<br>'
			+ multMaterialItems[1].materials[6] + '<br>'
			+ multMaterialItems[1].materials[7] + '<br>'
			+ multMaterialItems[1].materials[8] + '<br>'
			+ multMaterialItems[1].materials[9] + '<br>'
			+ multMaterialItems[1].materials[10] + '<br>'
			+ multMaterialItems[1].materials[11] + '<br>'
			+ multMaterialItems[1].materials[12] + '<br>';

	//>>>-----------------------ANSWER 6----------------------->>>//

	var sellerItems = [];
	var itemQuantity = items.filter(function(made){
			if (made.who_made === "i_did")
				sellerItems.push(made);
	});
	document.getElementById('answer6').innerHTML = sellerItems.length + ' were made by their sellers';

}());

