

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

// card

const container = document.querySelector('.container-project');

const cardData = [
  {
    imageUrl: './src/assets/backgrounds/lawyerUp.png',
    title: 'Lawyer Up',
    content: 'Lawyer Up , Legal ChatBot — Google Solution Challenge 2024\nTechnologies Used : HTML, CSS, Javascript, Gemini-Pro , Google AI Studio , Github\nLawyer up is a website integrated with a chatbot which provides legal advice. Trained it on Google AI Studio and it is built on the Gemini-Pro model. \n Website Link : https://sawhneysatvik.github.io/LawyerUp \n Github Repository Link : https://github.com/SawhneySatvik/LawyerUp'
  },
  {
    imageUrl: './src/assets/backgrounds/AskYourPDF.png',
    title: 'Ask Your PDF',
    content: "Ask Your PDF , Generative AI Model — VAC Gen AI and LLM project\nTechnologies Used : Python, Streamlit, OpenAI ChatGPT 3.5, Ada-2, FAISS, Langchain\nMade a python web app using streamlit, integrated OpenAI’s Ada-2 for embeddings, and used FAISS for similarity search. In this project one could upload PDFs and then after processing in real time, they could chat with it and ask questions. \n Github Repository Link : https://github.com/SawhneySatvik/GenAIandLLM"
  },
  {
    imageUrl: './src/assets/backgrounds/CPU.png',
    title: 'CPU Scheduling Simulator',
    content: 'Developed with HTML, CSS, Vanilla JavaScript, and Bootstrap, it offers interactive visualization and analysis of various CPU scheduling algorithms. It was developed for Operating system course mini project.'
  },
  {
    imageUrl: './src/assets/backgrounds/UniBuddy.png',
    title: 'UniBuddy',
    content: 'UniBuddy , Java Project — Programming in Java- course in college Technologies Used : Java , MySQL -UniBuddy is a student management system built on Java and connected to MySQL demonstrating JDBC skills. It was an end to end project with frontend and backend \nGithub Repository Link : https://github.com/SawhneySatvik/UniBuddy-Java'
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

//Gallery

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