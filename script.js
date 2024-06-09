function applyButtonEffect() {
    var getStartedButton = document.getElementById('getStartedButton');
    getStartedButton.classList.add('button-effect');
}

function openLoginPage() {
    var innerBox = document.querySelector('.inner-box');
    innerBox.innerHTML = `
        <h1>Login</h1>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <input type="submit" value="Login">
        </form>
        <button class="nav-button" onclick="openSignPage()">Sign In</button>
        <button class="nav-button back" onclick="openGetStartedPage()">Back</button>
    `;
}

function openSignPage() {
    var innerBox = document.querySelector('.inner-box');
    innerBox.innerHTML = `
        <h1>Sign In</h1>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <input type="submit" value="Sign In">
        </form>
        <button class="nav-button back" onclick="openLoginPage()">Back</button>
    `;
}

function openGetStartedPage() {
    var innerBox = document.querySelector('.inner-box');
    innerBox.innerHTML = `
        <h1>Welcome to Guardiana!</h1>
        <h2>AI Powered Leaf Analysis for Disease Diagnosis and Information</h2>
        <p><b>Here, you'll discover the wonders of plant health with our cutting-edge AI-powered leaf image analysis, providing accurate disease diagnosis and effective remedies. Delve into the rich tapestry of plant life as we offer insights into cultivation tips, the purpose behind various plants, and much more. Join us in nurturing a greener, healthier world through knowledge and innovation.</b></p>
        <button class="nav-button" onclick="openLoginPage()">Get Started</button>
    `;
}

function applyCircleButtonEffect(button) {
    button.classList.add('effect'); // Add effect class to trigger animation

    // Remove effect class after animation completes
    setTimeout(function() {
        button.classList.remove('effect');
    }, 1000); // Adjust duration to match animation duration
}
