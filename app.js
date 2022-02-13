function updateProductNumber(isIncresing, product, price) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncresing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product+'-total');
  productTotal.innerText = productNumber * price;
  calculateTotal()
}
 function getInputValue(product){
    const productInput=document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
 }
function calculateTotal(){
    
    const phoneTotal=getInputValue('phone')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const totalPrice=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById("total-price").innerText=totalPrice;
}
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber(true, "phone", 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber(false, "phone",  1219);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber(true, "case", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber(false, "case", 59);
});
