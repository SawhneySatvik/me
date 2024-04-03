

//Hero-Section fint styling
var typed = new Typed('#typed-text', {
    strings: [
        'Satvik Sawhney'
    ],
    typeSpeed: 120,
    backSpeed: 50,
    loop: false,
    onComplete: (self) => { 
        setTimeout(() => {
            self.cursor.style.display = 'stable'; 
        }); 
    }
});
var typed2 = new Typed('#typed-text2', {
    strings: [
        'Developer, ',
        'Problem Solver'
    ],
    typeSpeed: 150,
    backSpeed: 60,
    loop: true
});

//Projects

const panels = document.querySelectorAll(`.panel`);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// card

const container = document.querySelector('.container-project');

// Example card data


const cardData = [
  {
    imageUrl: '../../src/assets/backgrounds/lawyerUp.png',
    title: 'Lawyer Up',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti suscipit voluptate accusantium, laudantium ratione inventore quisquam numquam eos voluptatem cupiditate mollitia ipsam est illo nesciunt.'
  },
  {
    imageUrl: '../../src/assets/backgrounds/AskYourPDF.png',
    title: 'Ask Your PDF',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti suscipit voluptate accusantium, laudantium ratione inventore quisquam numquam eos voluptatem cupiditate mollitia ipsam est illo nesciunt.'
  },
  {
    imageUrl: '../../src/assets/backgrounds/CPU.png',
    title: 'CPU Scheduling Simulator',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti suscipit voluptate accusantium, laudantium ratione inventore quisquam numquam eos voluptatem cupiditate mollitia ipsam est illo nesciunt.'
  },
  {
    imageUrl: '../../src/assets/backgrounds/AskYourPDF.png',
    title: 'UniBuddy',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti suscipit voluptate accusantium, laudantium ratione inventore quisquam numquam eos voluptatem cupiditate mollitia ipsam est illo nesciunt.'
  }
];

// Function to create card element
function createCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  cardImage.innerHTML = `<img src="${cardData.imageUrl}" alt="Card Image">`;
  card.appendChild(cardImage);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  cardContent.innerHTML = `
    <h2>${cardData.title}</h2>
    <p>${cardData.content}</p>
  `;
  card.appendChild(cardContent);

  return card;
}

// Function to render cards
function renderCards(cardData) {
  cardData.forEach(data => {
    const card = createCard(data);

    container.appendChild(card);
  });
}

// Call the function to render cards
renderCards(cardData);