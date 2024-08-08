document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadFormation() {
      fetch('https://jsn-dev.github.io/assets/data/formation.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          displayFormation(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  
    // Fonction pour afficher les données dans le HTML
    function displayFormation(formation) {
      const formationList = document.getElementById('formation-list');
      formation.forEach(course => {
        const exp_div = document.createElement('div');
        exp_div.className = 'p-2';
        exp_div.innerHTML = `<h3>${course.title}</h3>`+
        `<h4>${course.location}</h4>`+
        `${course.year}`;
        formationList.appendChild(exp_div);
        const hr_balise = document.createElement('hr');
        formationList.appendChild(hr_balise);
      });
    }
  
    // Charger les experiences pro au démarrage
    loadFormation();
  });