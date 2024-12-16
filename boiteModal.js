function showModal(imageId) {
    let modalText = document.getElementById("modalText");
    if (imageId === 'image1') {
        modalText.innerHTML = "Ce projet de groupe est effectué dans l'année de BTS portant sur la création d'un site de gestion des commandes pour des restaurants avec une fonction livraison.<br>Le front-end a été fait avec HTML CSS et Bootstrap.<br><br>Gérer le patrimoine informatique</br>Recenser et identifier les ressources numériques<br>Gérer les sauvegardes<br><br>Répondre aux incidents et aux demandes d'assistance et d'évolution</br>Traiter des demandes concernants les applications<br><br>Travailler en mode projet</br>Analyser les objectifs et les modalités d'organisation d'un projet<br><br>Organiser son développement professionel<br>Mettre en place son environnement d'apprentissage personnel ";
    } else if (imageId === 'image2') {
        modalText.innerHTML = "Ce projet est la première version d'un portfolio créé en HTML/CSS/JS dont l'objectif est de retransmettre un maximum d'informations utiles à des potentiels recruteurs.<br><br>Développer la présence en ligne de l'organisation</br> Participer à l'évolution d'un site web exploitant les données de l'organisation<br><br>Mettre à disposition des utilisateurs un service informatique</br>Déployer un service<br><br>Organiser son développement professionnel</br>Gérer son identité professionnelle<br>Mettre en place son environnement d'apprentissage personnel";
    } else if (imageId === 'image3') {
        modalText.innerHTML = "Ce projet a été réalisé durant la période de stage de 10 semaine.<br>Les tâches à réaliser consistaient à faire une interface en python avec tkinter ou customtkinter qui servira aux étudiants de l'Enssat pour un TD sur les couches de mémoire cache.<br><br>Gérer le patrimoine informatique</br>Recenser et identifier les ressources numériques<br><br>Répondre aux incidents et aux demandes d'assistance et d'évolution</br>Traiter des demandes concernant les applications<br><br>Travailler en mode projet</br>Planifier les activités<br><br>Organiser son développement professionnel</br>Mettre en place son environnement d'apprentissage personnel";
    }
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
