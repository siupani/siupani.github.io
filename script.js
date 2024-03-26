
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("yesButton").addEventListener("click", function() {
        window.location.href = "yes.html";
    });
    
    const button = document.getElementById('noButton');

    button.addEventListener('mouseenter', () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
      
        // Calculate the maximum x and y positions to keep the button within the screen
        const maxX = screenWidth - button.offsetWidth - parseFloat(getComputedStyle(button).marginLeft);
        const maxY = screenHeight - button.offsetHeight - parseFloat(getComputedStyle(button).marginTop);
      
        // Calculate a random position within the visible area of the screen
        const newPosX = Math.max(0, Math.floor(Math.random() * (maxX)));
        const newPosY = Math.max(0, Math.floor(Math.random() * (maxY)));
      
        // Set the button's position
        button.style.left = `${newPosX}px`;
        button.style.top = `${newPosY}px`;    
    });
});

document.getElementById("continue").addEventListener("click", function() {
    window.location.href = "question.html";
});


