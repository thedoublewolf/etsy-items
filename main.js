<<<<<<< HEAD
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
 		 		console.log(specItems);

 	// take items in array and make it show up on page

	var answer2 = document.querySelector('#answer2');
	var textNode = document.createTextNode(specItems);
	answer2.appendChild(textNode);

//////////////////////////QUESTION 3////////////////////////////////





//////////////////////////QUESTION 4////////////////////////////////







//////////////////////////QUESTION 5////////////////////////////////








//////////////////////////QUESTION 6////////////////////////////////

}());
=======
function 
>>>>>>> master
