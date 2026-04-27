// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectTitle = e.target.parentElement.querySelector('h3').innerText;
            alert(`You clicked on: ${projectTitle}\nThis is where you could trigger a modal or redirect to a PDF!`);
        });
    });

    console.log("Portfolio script loaded successfully.");
});