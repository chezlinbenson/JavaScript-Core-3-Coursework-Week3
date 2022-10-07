let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


function printReceipt(orders){
  console.log("QTY \t", "ITEM \t", "TOTAL \t");
  let myQuantity = orders.forEach((item) => {
    let { quantity } = item;
    console.log(quantity);
  });

  let myItems = orders.forEach((item) => {
    let { itemName } = item;
    console.log(itemName);
  });

  let myTotal = orders.forEach((item) => {
    let { unitPrice } = item;
    console.log(unitPrice);
  });
  console.log("TOTAL: \t");
  
  // item.quantity
  
}

printReceipt(order)