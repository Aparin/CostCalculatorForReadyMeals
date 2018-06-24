var div = document.createElement("div");

// var node = document.createTextNode(`"${receptName}"`);
// div.appendChild(node);
div.appendChild(document.createTextNode(`"${receptName}"`)); // объедининие предыдущих 2 строк

// var div2 = document.getElementById("headerCostCalculatorForReadyMeals");
// div2.appendChild(div);
document.getElementById("headerCostCalculatorForReadyMeals").appendChild(div); // объедининие предыдущих 2 строк

var cost = 0;
var result = '<table><tr><th>Ингридиенты</th><th>ед. измерения</th><th>Цена</th><th>Количество</th><th>Себестоимость</th>';

for (i = 0; i + 4 <= productList.length; i += 4) {
    result += `<tr><td>${productList[i]}</td><td>${productList[i+1]}</td><td>${productList[i+2]}</td><td>${productList[i+3]}</td><td>${(productList[i + 2] * productList[i + 3]).toFixed(2)} руб.</td>`;
    cost += productList[i + 2] * productList[i + 3];
}
result += `<tr><th>Итого:</th><td></td><td></td><td></td><td><b>${cost.toFixed(2)} руб.</b></td>`;
result += `<tr><td>Количество порций:</td><td></td><td></td><td></td><td>${numberOfServings}</td>`;
result += `<tr><th>Себестоимость порции:</th><td></td><td></td><td></td><td><b>${(cost / numberOfServings).toFixed(2)} руб.</b></td>`;
result += '</table>';
document.getElementById('bodyCostCalculatorForReadyMeal').innerHTML = result;