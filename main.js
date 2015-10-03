(function () {

//////////////////////////QUESTION 1////////////////////////////////

	// console.log(items.length);

	// items.forEach( function (item){
	// 	console.log(item.price);
	// });

	// Create an array of just the prices
	var prices = items.map( function (item){
		return item.price;
	});
	// console.log(prices);

	// Add all of the prices together
	var sum = prices.reduce( function (prev, next){
		return prev + next;
	});
	// console.log(sum);

	// Divide by total number of items
	var avg = sum / items.length;
	// console.log(avg);

	// Convert it to 2 decimal places
	var converted = avg.toFixed(2);
	// console.log(converted);

	// Make it a string
	var str = 'The average price is $' + converted;
	// console.log(str);

	//Make it show up on the page

		// Find our answer element
	var answer1 = document.querySelector('#answer1');
		// Create a node from our above answer ready for the DOM
	var textNode = document.createTextNode(str);
		// Append newly created node to our element
	answer1.appendChild(textNode);

//////////////////////////QUESTION 2////////////////////////////////
 	// Create a blank array to push filtered items into
 	var specItems = [];
 	// filter items that are priced between 14 and 18 and push into blank array
 	var filteredPrices = items.filter(function (filteredItem){
 			if ((filteredItem.price > 14.00) && (filteredItem.price < 18.00))
 				specItems.push(filteredItem.title);
 		}); 				
 		 		// console.log(specItems);

 	// take items in array and make it show up on page

document.getElementById('answer2').innerHTML = specItems[0] + '<p>' + specItems[1] + '<p>' + specItems[2];
	// var answer2 = document.querySelector('#answer2');
	// var textNode = document.createTextNode(specItems);
	// answer2.appendChild(textNode);

//////////////////////////QUESTION 3////////////////////////////////

var gbpCodeItems = [];

var filterItemTitle = items.filter(function (britishItem){
		if (britishItem.currency_code === 'GBP')
			gbpCodeItems.push(britishItem);
});


document.getElementById('answer3').innerHTML = gbpCodeItems[0].title + ' costs' + ' &#163;' + gbpCodeItems[0].price;



//////////////////////////QUESTION 4////////////////////////////////

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

//////////////////////////QUESTION 5////////////////////////////////

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

//////////////////////////QUESTION 6////////////////////////////////

var sellerItems = [];

var itemQuantity = items.filter(function(made){
		if (made.who_made === "i_did")
			sellerItems.push(made);
});

document.getElementById('answer6').innerHTML = sellerItems.length + ' were made by their sellers';

}());

