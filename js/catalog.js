document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const resetButton = document.getElementById('reset');
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNjBmNjE4N2U1YzAwMTgxNGM3MzciLCJpYXQiOjE3MDU2NjQ3NTgsImV4cCI6MTcwNjg3NDM1OH0.vzJPr4HBsSqd0dkq16k3e6y2f6yLUBj4gS2xYgLIt_4'; // Sostituisci con il tuo token di autenticazione

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productData = {
            name: document.getElementById('name').value,
            brand: document.getElementById('brand').value,
            price: document.getElementById('price').value,
            imageUrl: document.getElementById('image').value,
            description: document.getElementById('description').value,
        };

        // Effettua la richiesta POST all'API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Qui puoi aggiungere codice per aggiornare l'interfaccia utente
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    resetButton.addEventListener('click', function() {
        form.reset();
    });
});
