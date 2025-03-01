// Function to change the flower image after 2 years (for demonstration, we'll use 10 seconds)
setTimeout(() => {
    const flowerImage = document.getElementById("blue-flower");
    flowerImage.src = "withered-flower.jpg"; // New image after 2 years
    flowerImage.alt = "Withered Blue Nuit Flower";
    document.querySelector(".flower-text").textContent = "The Blue Nuit flower has withered after two years.";
}, 10000); // 10 seconds for demonstration (replace with 2 years in milliseconds: 2 * 365 * 24 * 60 * 60 * 1000)