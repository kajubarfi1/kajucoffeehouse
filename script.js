const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function changeGameContent(option) {
  // Grab all screens
  const screenSize = document.getElementById('screen-size');
  
  const screenTemp = document.getElementById('screen-temp');
  const screenMilk = document.getElementById('screen-milk');

  const buttonsTemp = document.getElementById('buttons-temp');
  const buttonsMilk = document.getElementById('buttons-milk');

  switch (option) {
    
    case 'small':
      // Hide size screen, show temp (hot/iced)
      screenSize.style.display = 'none';
      screenTemp.style.display = 'block';

      // Add buttons for hot/iced
      buttonsTemp.innerHTML = `
        <button onclick="changeGameContent('hot')">Hot</button>
        <button onclick="changeGameContent('iced')">Iced</button>
      `;
      break;

    case 'medium':
      alert("You chose medium!");
      break;

    case 'large':
      alert("You selected large!");
      break;

    case 'hot':
      alert("You chose hot!");
      // You can add a next screen or flow for 'hot' if needed
      break;

    case 'iced':
      // Hide hot/iced screen, show milk options
      screenTemp.style.display = 'none';
      screenMilk.style.display = 'block';

      // Add milk options
      buttonsMilk.innerHTML = `
        <button onclick="alert('You chose regular milk')">Regular Milk</button>
        <button onclick="alert('You chose almond milk')">Almond Milk</button>
        <button onclick="alert('You chose oat milk')">Oat Milk</button>
      `;
      break;

    default:
      alert("Choose wisely...");
  }
}


document.getElementById('start-button').addEventListener('click', () => {
  // Hide start menu
  document.getElementById('start-menu').style.display = 'none';
  
  // Show the modal (assuming it's hidden initially)
  document.getElementById('game-modal').style.display = 'block';
});