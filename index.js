const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
const getNumberEntries = (object) => {
	//initialize empty array to store results
	let results = [];

	//iterate over every key in object
	for (let key in object) {
		//check if the key's value is a number
		if (typeof object[key] === "number") {
			//if so, add an array of the key value pair to the results array
			results.push([key, object[key]]);
		}
	}

	//return results
	return results;
};

// #2 // 
const addKeyValuePairs = (object, additions) => {
	//iterate through the additions array
	for (let i = 0; i < additions.length; i++) {
		//use the first element of each subarray as the key and the second as the value
		object[additions[i][0]] = additions[i][1];
	}

	//return the mutated object
	return object;
};

// #3 //
const filterByPrice = (array, price) => {
	//use the filter method to get only the products with a price greater than the input price
	return array.filter((purchase) => purchase.price > price);
};

// #4 //
const mapPurchases = (array) => {
	//map each item in the input array to a string consisting of the capitalized product name and the text of its most recent review
	return array.map((purchase) => {
		//use toUpperCase() to capitalize the product name
		const productName = purchase.product.toUpperCase();
		//assuming the most recent review is the last element in the reviews array
		const review = purchase.mostLikedReviews[purchase.mostLikedReviews.length - 1].text;
		//return a correctly formatted template literal
		return `${productName} - Review: ${review}`;
	}); 
};

// #5 //
const accumulateString = (array) => {
	//use reduce to build up the string
	return array.reduce((str, purchase) => {
		let wordPosition = purchase.quantity - 1; //subtract one because arrays are 0 indexed
		let words = purchase.product.split(" "); //use split to get an array of individual words
		str += words[wordPosition]; //add the correct word to the accumulated string
		return str; //return the accumulated string
	}, ""); //seed is an empty string
};

// #6 //
const findProduct = (array, product) => {
	//base case - out of elements
	if (array.length === 0) return [null, null];
	//base case - product found
	if (array[0].product === product) return [array[0].product, array[0].category];

	//recursive case - check the rest of the array
	return findProduct(array.slice(1), product);
};

// #7 //
const filterByReviewLength = (array) => {
	//use filter to return only the products which have a review of more than 35 characters
	//filter's test function uses some() on the reviews array to see if any reviews are sufficiently long
	return array.filter((purchase) => purchase.mostLikedReviews.some((review) => review.text.length > 35));
};


