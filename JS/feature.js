

let query = [];
for (let key in product) {
  let value = product[key]["number sold"];

  if (query.length == 0) query.push(key);
  else if (query.length == 1) {
    if (value > product[query[0]]["number sold"]) query.unshift(key);
    else query.push(key);
  } else if (query.length == 2) {
    if (value > product[query[0]]["number sold"]) query.unshift(key);
    else if (value > product[query[1]]["number sold"]) query.splice(1, 0, key);
    else query.push(key);
  } else if (query.length == 3) {
    if (value > product[query[0]]["number sold"]) {
      query.unshift(key);
      query.pop();
    } else if (value > product[query[1]]["number sold"]) {
      query.splice(1, 0, key);
      query.pop();
    } else if (value > product[query[2]]["number sold"]) {
      query.splice(2, 0, key);
      query.pop();
    }
  }
}

let productGrid = document.getElementsByClassName("product-grid")[0];
function displayFeaturedProd() {
  query.forEach((productKey) => {
    let currentProduct = product[productKey];
    let productCard = document.createElement("a");
    productCard.href = "#";
    productCard.innerHTML = `<div class="product-card">
          <img src="${currentProduct["Picture Path"]}" alt="${productKey}" />
          <h2>${currentProduct["name"]}</h2>
          <h3>বিক্রিত সংখ্যা: ${currentProduct["number sold"]}<h3>
        </div>`;

    productGrid.appendChild(productCard);
  });
}

displayFeaturedProd();
