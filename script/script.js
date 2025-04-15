function changeTheme() {
    document.body.style.backgroundColor = "#fbe8eb";
}

function showMessage() {
    alert("Welcome to Song Huong Bakery!");
}

function checkAge() {
    const age = prompt("Please enter your age:");
    if (age >= 18) {
        alert("Welcome to the party!");
    } else {
        alert("Sorry, you must be at least 18.");
    }
}

function showMany() {
    const answer = confirm("Do you really want to close?");
    if (answer) {
        alert("Okay, closing...");
    } else {
        alert("Phew! Glad you stayed.");
    }
}

function changeColor() {
    const colors = ["#FF6347", "#2E8B57", "#8A2BE2", "#FF1493"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("main").style.color = randomColor;
}

function changeToJuice() {
    document.getElementById("cakejuice").src = "https://www.spicehaven.ca/wp-content/uploads/2024/03/Fresh-Fruit-Juice-img.jpg";
    document.getElementById("cakejuice").alt = "Fresh Juice";
}

function changeToCake() {
    document.getElementById("cakejuice").src = "https://preppykitchen.com/wp-content/uploads/2017/07/Ultimate-Funfetti-feature.jpg";
    document.getElementById("cakejuice").alt = "Funfetti Cake";
}
