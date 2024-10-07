
function showModal(imageId) {
let modalText = document.getElementById("modalText");
if (imageId === 'image1') {
    modalText.textContent = "Ce projet de groupe est effectué dans l'année de BTS portant sur la création d'un site de gestion des commandes pour des restaurants avec une fonction livraison. Actuellement entrain de produire le front end en travaillant avec HTML/CSS.";
} else if (imageId === 'image2') {
    modalText.textContent = "Ce projet est la première version d'un portfolio créé en HTML/CSS/JS dont l'objectif est de retransmettre un maximum d'information utile à des potentiels recruteurs.";
}
document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}
