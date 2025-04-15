// Fonctionnalités interactives
function showSource(id) {
    document.getElementById(id).style.display = 'block';
}

function submitPoll() {
    alert('Merci pour votre participation !');
    // Ici vous pourriez ajouter un envoi à une base de données
}

// Configuration des boutons quiz
document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', function() {
        if(this.textContent.includes('b)')) {
            this.style.background = '#4CAF50';
            alert('Bonne réponse ! Le soutien familial est crucial.');
        } else {
            this.style.background = '#f44336';
        }
    });
});