// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum = sum + data[i].price;
  }
  let average = (sum / data.length).toFixed(2);
  console.log("The average price is $" + average +".");
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let itemsInRange = []; // The question asks for an array of items, so I did an array, not just the name.
  // I also excluded the item that costs 18 GBP, because that's more than $18 US.
  for (var i = 0; i < data.length; i++) {
    if ((data[i].price >= 14) && (data[i].price <= 18) && (data[i].currency_code === "USD")) {
      itemsInRange.push(data[i]);
    }
  }
  console.log(itemsInRange);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        console.log((data[i].title) + " is made of wood.");
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title + " has " + data[i].materials.length + " materials:");
      for (var j = 0; j < data[i].materials.length; j++) {
        console.log("- " + data[i].materials[j]);
      }
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let itemsMadeBySellers = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      itemsMadeBySellers++;
    }
  }
  console.log(itemsMadeBySellers + " items were made by their sellers.");
}
