document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les données JSON
    function loadPersonal() {
      fetch('https://jsn-dev.github.io/assets/data/personal.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          displayPersonal(data);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  
    // Fonction pour afficher les données dans le HTML
    function displayPersonal(personal) {
        const user_name = document.getElementById('user_name');
        const user_phone = document.getElementById('user_phone');
        const user_mail = document.getElementById('user_mail');
        const user_address = document.getElementById('user_address');
        const user_linkedin = document.getElementById('user_linkedin');
        const user_github = document.getElementById('user_github');
        user_name.appendChild(personal[0].firstname+' '+personal[0].lastname);
        user_phone.appendChild(personal[0].user_phone);
        user_mail.appendChild(personal[0].user_mail);
        user_address.appendChild(personal[0].city+' '+personal[0].postcode+' '+personal[0].country);
        user_linkedin.appendChild(personal[0].user_linkedin);
        user_github.appendChild(personal[0].user_github);
    }
  
    // Charger les compétences au démarrage
    loadPersonal();
  });