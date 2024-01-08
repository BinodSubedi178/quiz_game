let selectedCard = null;
let continueButton = document.getElementById('continue-btn');

continueButton.addEventListener('click', () => {
    continueToNextPage();
});

function selectCard(cardId) {
    if (selectedCard) {
        document.getElementById(selectedCard).classList.remove('selected');
    }
    document.getElementById(cardId).classList.add('selected');
    selectedCard = cardId;

    // Check if on mobile and a card is selected
    if (window.innerWidth < 640 && selectedCard) {
        continueToNextPage();
    }
}

function continueToNextPage() {
    if (selectedCard) {
        switch (selectedCard) {
            case 'card1':
                window.location.href = 'classicMode/classic.html';
                break;
            case 'card2':
                window.location.href = 'rapidFire/rapid.html';
                break;
            case 'card3':
                window.location.href = 'survivalMode/survival.html';
                break;
            case 'card4':
                window.location.href = 'visualMode/visual.html';
                break;
        }
    } else {
        Swal.fire("Please select a mode");
    }
}
