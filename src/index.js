// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  

  // ITERATION 3
  //... your code goes here

  let productsList = document.getElementsByClassName('product')
  let total = 0;
  for( let i =0; i < productsList.length; i++) {
    updateSubtotal(productsList[i]);
    total += updateSubtotal(productsList[i]);
    // console.log("Total:", total)
  }

  let formattedTotal = String(total)

  let documentTotal = document.querySelector("#total-value span")
  // console.log("Formatted", formattedTotal)
  // console.log(total)

  documentTotal.innerHTML = formattedTotal;
  // console.log(documentTotal)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode
  console.log('The target in remove is:', target, row);
  const productRemove = document.getElementById('parent');
  productRemove.removeChild(row);
}


// ITERATION 5

function createProduct(event) {
  //... your code goes here


  const row = event.currentTarget.parentNode.parentNode
  const name = row.querySelector('#name').value
  const price = row.querySelector('#price').value
  const table = document.getElementById('#parent')

  let product = `<tr class="product">
              <td class="name">
                <span>${name}</span>
              </td>
              <td class="price">$<span>${price}</span></td>
              <td class="quantity">
                <input type="number" value="0" min="0" placeholder="Quantity" />
              </td>
              <td class="subtotal">$<span>0</span></td>
              <td class="action">
                 <button class="btn btn-remove">Remove</button>
              </td>
                 </tr>`

  table.innerHTML += product

  let removeButtons = table.querySelectorAll(".btn-remove")
  
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const newNameInput = document.getElementById('name')
  const newPriceInput = document.getElementById('price')

  newNameInput.value = ""
  newPriceInput.value = ""


  console.log("creating product", table)
  //... your code goes here

  
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeButtons = document.getElementsByClassName('btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);
  for(let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
  //... your code goes here
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
