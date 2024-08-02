document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadSkills() {
      fetch('data/skills.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          displaySkills(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  
    // Fonction pour afficher les données dans le HTML
    function displaySkills(skills) {
      const skillsList = document.getElementById('skills-list');
      skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    }
  
    // Charger les compétences au démarrage
    loadSkills();
  });