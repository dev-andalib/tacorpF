let prodCat = document.getElementById("category");
function getProductOption() {
  // Check if the element exists
  if (!prodCat) {
    console.error("Dropdown element not found.");
    return;
  }

  let temp1 = [];

  // Loop through all products and add product keys to temp1 if the product has a valid name
  for (let key in product) {
    if (product[key]["name"] !== "") {
      temp1.push(key);
    }
  }

  // Clear the current options to prevent duplication
  prodCat.innerHTML = "";

  // Add a default "Select Category" option
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "সিলেক্ট";
  prodCat.appendChild(defaultOption);

  // Loop through the filtered products (temp1) and create an option for each product
  temp1.forEach((productKey) => {
    let currentProduct = product[productKey];

    let productOption = document.createElement("option");
    productOption.value = productKey; // Set the product key as the value
    productOption.textContent = currentProduct["name"]; // Display the product name

    // Append the option to the dropdown
    prodCat.appendChild(productOption);
  });
}
getProductOption();

function getProducts(searchlist) {
  let query = [];
  count = 0;
  for (let i of searchlist) {
    if (i != null && count == 0 && !query.includes(i)) {
      query.push(searchlist[count]);
    } else if (i != null && count == 1) {
      for (let key in product) {
        let value = product[key].Price;
        if (value >= i && !query.includes(key)) query.push(key);
      }
    } else if (i != null && count == 2) {
      for (let key in product) {
        let value = product[key].Price;
        if (value <= i && !query.includes(key)) query.push(key);
      }

      if (query.length != 0) {
        for (let key of query) {
          let value = product[key].Price;
          if (value >= i && query.includes(key))
            query.splice(query.indexOf(key), 1);
        }
      }
    } else if (i != null && count == 3) {
      for (let key in product) {
        let value = product[key]["number sold"];
        if (value >= i && !query.includes(key)) query.push(key);
      }

      if (query.length != 0) {
        for (let key of query) {
          console.log(key);
          let value = product[key]["number sold"];
          if (value < i && query.includes(key))
            query.splice(query.indexOf(key), 1);
        }
      }
    }

    count += 1;
  }

  return query;
}

let productGrid = document.getElementsByClassName("product-grid")[0];
function displayFeaturedProd(query) {
  productGrid.innerHTML = "";
  query.forEach((productKey) => {
    let currentProduct = product[productKey];
    let productCard = document.createElement("a");
    productCard.href = `../html/product_detail.html?productKey=${productKey}`;
    productCard.innerHTML = `<div class="product-card">
          <img src=".${currentProduct["Picture Path"]}" alt="${productKey}" />
          <h2>${currentProduct["name"]}</h2>
          <h3>মূল্য: ${currentProduct.Price}<h3>
        </div>`;

    productGrid.appendChild(productCard);
  });
}

let searchlist = [null, null, null, null];
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const category = document.getElementById("category").value;
    if (category != "") searchlist[0] = category;

    const minPrice = document.getElementById("minPrice").value;
    if (minPrice != "") searchlist[1] = minPrice;

    const maxPrice = document.getElementById("maxPrice").value;
    if (maxPrice != "") searchlist[2] = maxPrice;

    const minSold = document.getElementById("minSold").value;
    if (minSold != "") searchlist[3] = minSold;

    if (!category && !minPrice && !maxPrice && !minSold) {
      alert("Please fill in all the fields.");
      return;
    }

    let results = getProducts(searchlist);

    displayFeaturedProd(results);
  });

let productGrid2 = document.getElementsByClassName("product-grid2")[0];
function displayAllProd() {
  for (let productKey in product) {
    let currentProduct = product[productKey];
    let productCard = document.createElement("a");
    productCard.href = `../html/product_detail.html?productKey=${productKey}`;
    productCard.innerHTML = `<div class="product-card">
            <img src=".${currentProduct["Picture Path"]}" alt="${productKey}" />
            <h2>${currentProduct["name"]}</h2>
            <h3>মূল্য: ${currentProduct.Price}<h3>
          </div>`;

    productGrid2.appendChild(productCard);
  }
}
displayAllProd();

function performSearch() {
  document.getElementsByClassName("searched_results")[0].style.display ="block";
  document.getElementsByClassName("view_all")[0].style.display ="none";
}

function viewAll() {
  document.getElementsByClassName("searched_results")[0].style.display ="none";
  document.getElementsByClassName("view_all")[0].style.display ="block";
}
