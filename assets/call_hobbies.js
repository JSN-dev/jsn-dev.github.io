document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadHobbies() {
      fetch('https://jsn-dev.github.io/assets/data/hobbies.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          displayHobbies(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  
    // Fonction pour afficher les données dans le HTML
    function displayHobbies(hobbies) {
      const hobbiesList = document.getElementById('hobbies-list');
      hobbies.forEach(hobbie => {
        const hobbie_div = document.createElement('div');
        hobbie_div.className = 'p-2';
        hobbie_div.innerHTML = `${hobbie.title}`;
        hobbiesList.appendChild(hobbie_div);
      });
    }
  
    // Charger les compétences au démarrage
    loadHobbies();
  });