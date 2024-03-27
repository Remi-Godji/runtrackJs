document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.getElementById('shuffleButton');
    const checkButton = document.getElementById('checkButton');
    const imageContainer = document.getElementById('imageContainer');
    const message = document.getElementById('message');
  
    // Mélanger les images aléatoirement
    shuffleButton.addEventListener('click', function() {
      const images = Array.from(imageContainer.children);
      images.sort(() => Math.random() - 0.5);
      imageContainer.innerHTML = '';
      images.forEach(img => {
        imageContainer.appendChild(img);
      });
      message.textContent = '';
    });
  
    // Vérifier si les images sont dans le bon ordre
    function checkOrder() {
      const images = Array.from(imageContainer.children);
      const imageOrder = images.map(img => img.id).join('');
      const correctOrder = 'image1image2image3image4image5image6';
      if (imageOrder === correctOrder) {
        message.textContent = 'Vous avez gagné';
        message.style.color = 'green';
      } else {
        message.textContent = 'Vous avez perdu';
        message.style.color = 'red';
      }
    }
  
    checkButton.addEventListener('click', checkOrder);
  
    // Activer le déplacement des images
    let dragged;
  
    document.addEventListener('dragstart', function(event) {
      dragged = event.target;
      event.target.style.opacity = .5;
    });
  
    document.addEventListener('dragend', function(event) {
      event.target.style.opacity = '';
    });
  
    document.addEventListener('dragover', function(event) {
      event.preventDefault();
    });
  
    document.addEventListener('dragenter', function(event) {
      if (event.target.className === 'draggable') {
        event.target.style.background = 'lightgray';
      }
    });
  
    document.addEventListener('dragleave', function(event) {
      if (event.target.className === 'draggable') {
        event.target.style.background = '';
      }
    });
  
    document.addEventListener('drop', function(event) {
      event.preventDefault();
      if (event.target.className === 'draggable') {
        event.target.style.background = '';
        imageContainer.insertBefore(dragged, event.target);
      }
    });
  });
  