r
function changeBackgroundColor() {
    var body = document.body;
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
}

// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to display an alert when a class is clicked
function alertClass(className) {
    alert('You clicked on the ' + className + ' class!');
}
