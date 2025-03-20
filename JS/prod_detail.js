// Function to get the product key from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param); // Retrieves the value of the parameter (e.g., productKey)
}

// When the page loads, get the product key from the URL and render product details
window.onload = function () {
  const productKey = getQueryParam("productKey"); // This retrieves 'productKey' from the URL
  

  // Assuming `product` is your product data object
  const currentProduct = product[productKey];

  if (currentProduct) {
    renderProductDetails(currentProduct);
    renderSpecifications(currentProduct); // Render the specifications in the spec div
  } else {
    console.log("Product not found!");
  }

  
};

// Function to render the product details in a table without specifications
function renderProductDetails(productDetails) {
  const descDiv = document.querySelector(".desc");

  // Create a div to hold the product details
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  // Title of the product
  const productTitle = document.createElement("h1");
  productTitle.textContent = productDetails.name;
  productInfo.appendChild(productTitle);

  // Create a table for displaying the general product details (excluding specifications)
  const table = document.createElement("table");

  // List the general details (name, brand, type, etc.)
  const generalDetails = [
    { label:  "ব্র্যান্ড নাম", value: productDetails["Brand Name"] || "N/A" },
    { label: "প্রকার", value: productDetails.Type || "N/A" },
    { label: "চাকা", value: productDetails.Wheel },
    { label: "মূল্য", value: `৳ ${productDetails.Price}` },
    { label: "শ্রেণী", value: productDetails.Category },
  ];

  generalDetails.forEach((detail) => {
    const row = document.createElement("tr");
    const labelCell = document.createElement("td");
    labelCell.textContent = detail.label;
    const valueCell = document.createElement("td");
    valueCell.textContent = detail.value;

    row.appendChild(labelCell);
    row.appendChild(valueCell);
    table.appendChild(row);
  });

  productInfo.appendChild(table);
  descDiv.appendChild(productInfo);
}

// Function to render the specifications in the spec div as a comma-separated list
// function renderSpecifications(productDetails) {
//   const specDiv = document.querySelector(".spec");

//   // Get the specifications from the product
//   const specifications = productDetails.Specification;

//   if (specifications && specifications.length > 0) {
//     const specHeading = document.createElement("p");
//     specHeading.style.fontWeight = "bold";
//     specHeading.textContent = "Specification:"; // Heading for the specifications
//     specDiv.appendChild(specHeading);

//     // Join specifications into a single string with commas
//     const specList = specifications.join(", ");

//     const specParagraph = document.createElement("p");
//     specParagraph.textContent = specList; // Add specifications to the paragraph
//     specDiv.appendChild(specParagraph);
//   } else {
//     // If no specifications are available, you can display a default message
//     const noSpecMessage = document.createElement("p");
//     noSpecMessage.textContent = "No specifications available.";
//     specDiv.appendChild(noSpecMessage);
//   }
// }

let sliderContainer = document.querySelector(".slider");

function renderSlider() {
  
  const productKey = getQueryParam("productKey");
  let currentProduct = product[productKey];

  // Add the main image (first image) as the active slide
  let firstSlide = document.createElement("div");
  firstSlide.classList.add("slide", "active");
  let mainImg = document.createElement("img");
  mainImg.src = `.${currentProduct["Picture Path"]}`; // Prefix the main image path with a '.'
  mainImg.alt = `Main image of ${productKey}`;
  firstSlide.appendChild(mainImg);
  sliderContainer.appendChild(firstSlide);

  // Add other images from the 'other pic path' array as additional slides
  currentProduct["other pic path"].forEach((imagePath) => {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    let img = document.createElement("img");
    img.src = `.${imagePath}`; // Prefix the other image paths with a '.'
    img.alt = `Additional image of ${productKey}`;
    slide.appendChild(img);
    sliderContainer.appendChild(slide);
  });
}
renderSlider();


