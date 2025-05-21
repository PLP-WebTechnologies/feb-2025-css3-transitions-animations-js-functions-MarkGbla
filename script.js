document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animateBtn = document.getElementById('animateBtn');
    const targetBox = document.getElementById('targetBox');
    const savePrefBtn = document.getElementById('savePref');
    const bgColorPicker = document.getElementById('bgColor');
    const countDisplay = document.getElementById('countDisplay');

    // Load saved preferences
    loadPreferences();
    
    // Initialize animation counter
    let animationCount = localStorage.getItem('animationCount') || 0;
    countDisplay.textContent = animationCount;

    // Animation Button Click Handler
    animateBtn.addEventListener('click', function() {
        // Trigger animation
        targetBox.classList.add('animate');
        
        // Increment and save counter
        animationCount++;
        countDisplay.textContent = animationCount;
        localStorage.setItem('animationCount', animationCount);
        
        // Remove animation class after it completes
        setTimeout(() => {
            targetBox.classList.remove('animate');
        }, 1500);
    });

    // Save Preferences Button Click Handler
    savePrefBtn.addEventListener('click', function() {
        localStorage.setItem('bgColor', bgColorPicker.value);
        document.body.style.backgroundColor = bgColorPicker.value;
    });

    // Load saved preferences
    function loadPreferences() {
        const savedColor = localStorage.getItem('bgColor');
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
            bgColorPicker.value = savedColor;
        }
        
        const savedCount = localStorage.getItem('animationCount');
        if (savedCount) {
            countDisplay.textContent = savedCount;
        }
    }
});
