const toggleSwitch = document.querySelector('input[type="checkbox"]');
const headingColor = document.querySelector('h1');

// Switch Theme Dynamically
function switchTheme (event) {
    const isChecked = event.target.checked;
    console.log(isChecked);
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)