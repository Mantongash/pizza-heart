// Chicago Pizza Variables
const order = document.getElementById("add-chicago-order");

order.addEventListener("click", function(event) {
  event.preventDefault();
  // Chicago Pizza Variables
  const chicagoQuantity = parseInt(
    document.getElementById("chicago-quantity").value
  );
  const chicagoSize = document.getElementById("chicago-size");
  const groundBeef = document.getElementById("beef");
  const sausage = document.getElementById("sausage");
  const pepperoni = document.getElementById("pepperoni");
  const onions = document.getElementById("onions");
  const mushrooms = document.getElementById("mushrooms");
  const chicagoCrust = document.getElementById("chicago-crust");
  const toppings = [groundBeef, sausage, pepperoni, onions, mushrooms];

  const toppingsTotal = function() {
    let totals = 0;
    toppings.forEach(function(topping, index) {
      if (topping.checked) {
        return (totals += parseInt(topping.value));
      }
    });
    return totals;
  };

  const results = function() {
    const tbl = document.getElementById("tbl");
    const row = tbl.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    cell1.innerHTML = chicagoQuantity;
    cell2.innerHTML = chicagoSize.options[chicagoSize.selectedIndex].text;
    cell3.innerHTML = toppingsTotal();
    cell4.innerHTML = chicagoCrust.options[chicagoCrust.selectedIndex].text;
    cell5.innerHTML =
      chicagoQuantity *
      (parseInt(chicagoSize.value) +
        toppingsTotal() +
        parseInt(chicagoCrust.value));
  };

  results();
});
