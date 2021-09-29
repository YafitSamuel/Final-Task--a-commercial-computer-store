function showCart() {
  for (let i = 0; i < cart.length; i++) {
    table.innerHTML += `    
   <td> <img src= "${cart[i].img}"</td>  
   <td>${cart[i].amount}</td>  
   <td>${cart[i].price}</td>  
   <td><button onclick="ClearProductsFromCart(${i})">clear </button> </td> `;
  }
}
showCart();
console.log(cart);

function ClearProductsFromCart(index) {
  cart.splice(index, 1);
  console.log(cart)
  table.innerHTML=''
  showCart()
  sumAllPriceInTheCart()
}



function sumAllPriceInTheCart() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
    console.log(total);
    btnSum.innerHTML = `Total for payment ${total}`;
  }
  return total;
}
sumAllPriceInTheCart();








//form

Form.onsubmit = (event) => {
  event.preventDefault();
  if (checkPasswordLengthLessThanEight() && checkLengthPasswordOverFifteen()) {
    return true;
  }
  return false;
};
function checkPasswordLengthLessThanEight() {
  if (password.value.length > 8) {
    return true;
  }
  labelPassword.innerHTML += "*";
  labelPassword.style.color = "red";
  pi.innerHTML = "Please try again,enter at least eight characters";
  return false;
}

function checkLengthPasswordOverFifteen() {
  if (password.value.length < 15) {
    return true;
  }
  labelPassword.innerHTML += "*";
  labelPassword.style.color = "red";
  errorMessage.innerHTML =
    "Please try again,enter less than fifteen characters";
  errorMessage.style.color = "red";
  return false;
}
