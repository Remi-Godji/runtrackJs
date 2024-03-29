document.addEventListener('DOMContentLoaded', function() {
  const gridContainer = document.getElementById('grid-container');
  const restartBtn = document.getElementById('restart-btn');

  const images = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png', ''];

  // Function to shuffle the array
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // Initialize the game
  function initializeGame() {
      shuffle(images);
      renderGrid();
  }

  // Render the grid with images
  function renderGrid() {
      gridContainer.innerHTML = '';
      images.forEach((image, index) => {
          const cell = document.createElement('div');
          cell.className = 'cell';
          if (image !== '') {
              const img = document.createElement('img');
              img.src = image;
              cell.appendChild(img);
          }
          gridContainer.appendChild(cell);

          // Add click event listener to each cell
          cell.addEventListener('click', () => {
              moveTile(index);
          });
      });
  }

  // Function to move tile
  function moveTile(index) {
      const emptyIndex = images.indexOf('');
      const rowDiff = Math.abs(Math.floor(index / 3) - Math.floor(emptyIndex / 3));
      const colDiff = Math.abs(index % 3 - emptyIndex % 3);
      
      if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
          [images[index], images[emptyIndex]] = [images[emptyIndex], images[index]];
          renderGrid();
          if (checkWin()) {
              alert('Vous avez gagné !');
              gridContainer.classList.add('disabled');
          }
      }
  }

  // Function to check if the player has won
  function checkWin() {
      const sortedImages = images.slice().sort();
      return JSON.stringify(images) === JSON.stringify(sortedImages);
  }

  // Event listener for the restart button
  restartBtn.addEventListener('click', initializeGame);

  // Initialize the game when the page loads
  initializeGame();
});
