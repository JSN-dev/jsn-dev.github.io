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
    function displayCareer(career) {
      const careerList = document.getElementById('career-list');
      career.forEach(experience => {
        const exp_div = document.createElement('div');
        exp_div.className = 'p-2';
        const responsabilities_ul = document.createElement('ul');
        responsabilities_ul.className = 'list-group';
        const responsabilities = experience.responsabilities.forEach(function(task){
          const new_li = document.createElement('li');
          new_li.className = 'list-group-item border-0';
          new_li.textContent = task;
          responsabilities_ul.appendChild(new_li);
        })
        exp_div.innerHTML = `<h3>${experience.job_name}</h3>`+
        `<h4>${experience.company_name}</h4>`+
        `${experience.company_location}`;
        exp_div.appendChild(responsabilities_ul);
        careerList.appendChild(exp_div);
        const hr_balise = document.createElement('hr');
        careerList.appendChild(hr_balise);
      });
    }
  
    // Charger les experiences pro au démarrage
    loadCareer();
  });