document.addEventListener('DOMContentLoaded', () => {
    const mailButtons = document.querySelectorAll('.mail');
    const mailIds = [
      'ranzer@kkpp.in.net',
      'info@kkpp.in.net',
      'rickop@kkpp.in.net',
      'happy@kkpp.in.net',
      'ajinjijigeorge001@gmail.com',
      // Add more mail IDs for additional contacts
    ];
  
    mailButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const card = button.parentNode;
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        h3.style.display = 'none';
        p.style.display = 'none';
        button.textContent = `Contact Me on Mail Id ${mailIds[index]}`;
        button.href = 'javascript:void(0)';
      });
    });
  });

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseleave', () => {
    const mailButton = card.querySelector('.mail');
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    mailButton.textContent = 'Contact Me';
    h3.style.display = 'block';
    p.style.display = 'block';
    mailButton.style.padding = '10px 20px';
    mailButton.style.borderRadius = '5px';
  });
});
const individualCard = document.querySelectorAll('.individual-card');

individualCard.forEach(card => {
  card.addEventListener('mouseleave', () => {
    const mailButton = card.querySelector('.mail');
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    mailButton.textContent = 'Contact Me';
    h3.style.display = 'block';
    p.style.display = 'block';
    mailButton.style.padding = '10px 20px';
    mailButton.style.borderRadius = '5px';
  });
});