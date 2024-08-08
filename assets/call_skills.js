document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadSkills() {
      fetch('https://jsn-dev.github.io/assets/data/skills.json')
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
        const skill_div = document.createElement('div');
        let subclass = "success";
        skill_div.className = 'p-2';
        if (skill.percent < 25 ){subclass = "danger"}else if(skill.percent <50){subclass="warning"}else if(skill.percent <75){subclass="info"}else if(skill.percent <100){subclass="primary"}
        skill_div.innerHTML = `<div class='fs-6'>${skill.name}</div><div class='progress'> <div class='progress-bar bg-${subclass}' role='progressbar' style='width: ${skill.percent}%' aria-valuenow=${skill.percent} aria-valuemin='0' aria-valuemax='100'></div>`;
        skillsList.appendChild(skill_div);
      });
    }
  
    // Charger les compétences au démarrage
    loadSkills();
  });