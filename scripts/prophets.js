const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

let prophetsData ="";
//Buttons

const utahBtn = document.querySelector('#born-in-utah');
const childrenBtn = document.querySelector('#children');
const over15Btn = document.querySelector('#over-15');
const allBtn = document.querySelector('#all');

const displayProphets = (prophets) => {
   cards.innerHTML = '';
   prophets.forEach((prophet) => {
      
   
   //Create elements to add to the div.cards element
   let card = document.createElement('section');
   let fullName = document.createElement('h2');
   let dateBirth = document.createElement('p');
   let birthplace = document.createElement('p');
   let portrait = document.createElement('img');


   //Build the h2 content out to show the prophet's full name
   fullName.textContent = `${prophet.name} ${prophet.lastname}`;
   dateBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
   birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

   //Build the image portrait by setting all the relevant attributes
   portrait.setAttribute('src', prophet.imageurl);
   portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet
      .lastname}`);
   portrait.setAttribute('loading', 'lazy');
   portrait.setAttribute('width', '150');
   portrait.setAttribute('height', '200');
   card.appendChild(fullName);
   card.appendChild(dateBirth);
   card.appendChild(birthplace);
   card.appendChild(portrait);
   cards.appendChild(card);


   });
}
async function getProhetData() {
   const response = await fetch(url);
   const data = await response.json();
   displayProphets(data.prophets);
   prophetsData = data.prophets;
}


const resetClasses = () => {
   allBtn.classList.remove("selected");
   utahBtn.classList.remove("selected");
   childrenBtn.classList.remove("selected");
   over15Btn.classList.remove("selected");
}


//Events
allBtn.addEventListener('click', () => {
   displayProphets(prophetsData);
   resetClasses();
   allBtn.classList.add("selected");
});


utahBtn.addEventListener('click', () => {
   displayProphets(prophetsData.filter(prophet => prophet.birthplace === 'Utah'));
   resetClasses();
   utahBtn.classList.add("selected");
});

childrenBtn.addEventListener('click', () => {
   displayProphets(prophetsData.filter(prophet => prophet.numofchildren >= 10));
   resetClasses();
   childrenBtn.classList.add("selected");
});


over15Btn.addEventListener('click', () => {
   displayProphets(prophetsData.filter(prophet => prophet.length >= 15));
   resetClasses();
   over15Btn.classList.add("selected");
});



getProhetData();