// Chicago Pizza Button
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

// Pizza Marinara Button
const marinaraOrder = document.getElementById("add-marinara-order");

marinaraOrder.addEventListener("click", function(event) {
  event.preventDefault();
  // Chicago Pizza Variables
  const marinaraQuantity = parseInt(
    document.getElementById("marinara-quantity").value
  );
  const marinaraSize = document.getElementById("marinara-size");
  const mozzarella = document.getElementById("mozzarella");
  const tomatoes = document.getElementById("tomatoes");
  const basil = document.getElementById("basil");
  const oregano = document.getElementById("oregano");
  const olive = document.getElementById("olive");
  const marinaraCrust = document.getElementById("marinara-crust");
  const toppings = [mozzarella, tomatoes, basil, oregano, olive];

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
    cell1.innerHTML = marinaraQuantity;
    cell2.innerHTML = marinaraSize.options[marinaraSize.selectedIndex].text;
    cell3.innerHTML = toppingsTotal();
    cell4.innerHTML = marinaraCrust.options[marinaraCrust.selectedIndex].text;
    cell5.innerHTML =
      marinaraQuantity *
      (parseInt(marinaraSize.value) +
        toppingsTotal() +
        parseInt(marinaraCrust.value));
  };

  results();
});

// Sicilian Pizza Button
const sicilianOrder = document.getElementById("add-sicilian-order");

sicilianOrder.addEventListener("click", function(event) {
  event.preventDefault();
  // Chicago Pizza Variables
  const sicilianQuantity = parseInt(
    document.getElementById("sicilian-quantity").value
  );
  const sicilianSize = document.getElementById("sicilian-size");
  const sicilianTomatoes = document.getElementById("sicilian-tomatoes");
  const sicilianOnions = document.getElementById("sicilian-onions");
  const anchovies = document.getElementById("anchovies");
  const herbs = document.getElementById("herbs");
  const sicilianCrust = document.getElementById("sicilian-crust");
  const toppings = [sicilianTomatoes, sicilianOnions, anchovies, herbs];

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
    cell1.innerHTML = sicilianQuantity;
    cell2.innerHTML = sicilianSize.options[sicilianSize.selectedIndex].text;
    cell3.innerHTML = toppingsTotal();
    cell4.innerHTML = sicilianCrust.options[sicilianCrust.selectedIndex].text;
    cell5.innerHTML =
      sicilianQuantity *
      (parseInt(sicilianSize.value) +
        toppingsTotal() +
        parseInt(sicilianCrust.value));
  };

  results();
});

const checkout = document.getElementById("checkout");

checkout.addEventListener("click", function(event) {
  event.preventDefault();
  const deliveryInput = document.getElementById("delivery-input").value;
  const display = document.getElementById("display");

  display.innerHTML = `Thank you for shopping with us. Your order will be delivered to ${deliveryInput}`;
});
