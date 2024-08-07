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
        const user_name_content =  document.createElement('div');
        const user_phone_content =  document.createElement('div');
        const user_mail_content =  document.createElement('div');
        const user_address_content =  document.createElement('div');
        const user_linkedin_content =  document.createElement('div');
        const user_github_content =  document.createElement('div');
        user_name_content.innerHTML = `${personal.firstname} ${personal.lastname}`;
        user_phone_content.innerHTML = `<i class="bi-phone"></i> ${personal.phone}`;
        user_mail_content.innerHTML = `<i class="bi-envelope"></i> ${personal.email}`;
        user_address_content.innerHTML = `<i class="bi-mailbox"></i> ${personal.postcode} ${personal.city}`;
        user_linkedin_content.innerHTML = `<i class="bi-linkedin"></i> ${personal.linkedin}`;
        user_github_content.innerHTML = `<i class="bi-github"></i> ${personal.github_profile}`;
        user_name.appendChild(user_name_content);
        user_phone.appendChild(user_phone_content);
        user_mail.appendChild(user_mail_content);
        user_address.appendChild(user_address_content);
        user_linkedin.appendChild(user_linkedin_content);
        user_github.appendChild(user_github_content);
    }
  
    // Charger les compétences au démarrage
    loadPersonal();
  });