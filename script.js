const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');

noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});

yesButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://api.whatsapp.com/send/?phone=902241****&text=I+Love+You+Too', '_blank');
});


