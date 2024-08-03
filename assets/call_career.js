document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadCareer() {
      fetch('https://jsn-dev.github.io/assets/data/career.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          displayCareer(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  
    // Fonction pour afficher les données dans le HTML
    function displayCareer(skills) {
      const skillsList = document.getElementById('career-list');
      skills.forEach(skill => {
        const skill_div = document.createElement('div');
        let subclass = "success";
        skill_div.className = 'p-2';
        if (skill.percent < 25 ){subclass = "danger"}else if(skill.percent <50){subclass="warning"}else if(skill.percent <75){subclass="info"}else if(skill.percent <100){subclass="primary"}
        skill_div.innerHTML = `${skill.name}<div class='progress'> <div class='progress-bar bg-${subclass} progress-bar-striped progress-bar-animated' role='progressbar' style='width: ${skill.percent}%' aria-valuenow=${skill.percent} aria-valuemin='0' aria-valuemax='100'></div>`;
        skillsList.appendChild(skill_div);
      });
    }
  
    // Charger les experiences pro au démarrage
    loadCareer();
  });