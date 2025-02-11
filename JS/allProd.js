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

  // Log to verify products
  console.log("Products to display:", temp1);

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
