const cancelIcon = document.querySelector('#cancel-icon');
const menu = document.querySelector('.header');
const main = document.querySelector('main');
const humburger = document.querySelector('#hamburger');
const html = document.querySelector('html');
const cardContainer = document.querySelector('.card-container');
const mobileData = [
  // Array of data that is implemented in the pop-up window
  {
    id: 'project1',
    secondTitle: 'Awesome Books Library',
    images: {
      img: 'https://user-images.githubusercontent.com/65068771/125845737-89416fa1-37cb-41ed-aef7-04267ec83748.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: ['Css', 'Javascript', 'Github', 'Bootstrap', 'Terminal'],
    heading: 'Awesome Books Library',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://andersonlebon.github.io/Awesome-book/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/andersonlebon/Awesome-book',
      },
    ],
    paragraph:
      '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list',
  },
  {
    id: 'project2',
    secondTitle: 'BookStore',
    images: {
      img: 'https://user-images.githubusercontent.com/65068771/132000196-3c14dc6f-32e1-42c9-afb5-97904db7c044.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: ['Css', 'Javascript', 'Github', 'Bootstrap', 'Terminal'],
    heading: 'BookStore',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://caleb-bookstore.herokuapp.com/books',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/andersonlebon/BookStore',
      },
    ],
    paragraph:
      "This is a simple website build with 'REACT' and 'REDUX'  that displays a list of books from an API and allows you to add and remove books in the API store.",
  },
  {
    id: 'project3',
    secondTitle: 'CAR-PARKING',
    images: {
      img: 'https://user-images.githubusercontent.com/65068771/131568626-757e19ec-c926-4276-901d-481b8f7593e1.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: [
      'Reactjs',
      'Css',
      'Javascript',
      'Github',
      'Bootstrap',
      'Terminal',
      'Sass',
    ],
    heading: 'CAR-PARKING',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://car-packing.netlify.app/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/andersonlebon/CAR-PARKING',
      },
    ],
    paragraph: `We are already using the intelligence of the connected car with companion apps that recognize when the car 
    is in a paid parking area and later auto-stops when leaving. Creating a simple customer-focused payment solution for parking.`,
  },
  {
    id: 'project4',
    secondTitle: 'ICinema',
    images: {
      img: './images/icinema.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'ICinema',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://samanatashi.github.io/JS-Capstone-project/dist/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/SamanAtashi/JS-Capstone-project/edit/development',
      },
    ],
    paragraph: `The iCinema is a single webapp that is based on the TVmaze API. With the use of the Involvement API to POST and GET the likes and comments, 
    users can comment and like a certain series.`,
  },
  {
    id: 'project5',
    secondTitle: 'Charity in the world',
    images: {
      img: 'https://user-images.githubusercontent.com/65068771/124763376-2b23ec00-df34-11eb-98e9-f124a398e502.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: ['Css', 'Javascript', 'Github', 'Bootstrap', 'Terminal'],
    heading: 'Charity in the world',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://andersonlebon.github.io/CHARITY-CAPSTON-PROJECT/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/andersonlebon/CHARITY-CAPSTON-PROJECT',
      },
    ],
    paragraph: `CHARITY IN THE WORLD is a website that provides the resources and platform to empower families to raise funds for their adoption and engage their community with the powerful story of why they are choosing adoption. As one of the purest expressions of the love and compassion of the Gospel, 
    adoption has always provided the life-altering solution to this need.`,
  },
  {
    id: 'project6',
    secondTitle: 'TODO-LIST',
    images: {
      img: 'https://user-images.githubusercontent.com/65068771/130613281-01b9b321-df1a-4fc4-87c7-7cf5a6c83f73.png',
      cancelPop: './images/icons/IconCancelblack.png',
    },
    techno: [
      'Reactjs',
      'Css',
      'Javascript',
      'Github',
      'Bootstrap',
      'Terminal',
      'Sass',
    ],
    heading: 'TODO-LIST',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
        live: 'https://andersonlebon.github.io/todo-with-react/',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
        live: 'https://github.com/andersonlebon/todo-with-react',
      },
    ],
    paragraph: `ToDo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do, 
    We can add more tasks at any time and delete a task that is completed.`,
  },
];

let project = 1;
const sections = [];
const cards = [];
// Implementing the Flex card dynamically
mobileData.forEach((asection) => {
  const li = document.createElement('li');
  li.innerHTML = `<div class='card'>
    <div class='image'><div class="project-bg"></div><img class="project-img" src='${
  asection.images.img}'></div>
    <div class='card-info'>
      <h2>${asection.secondTitle}</h2>
      <ul class='card-buttons'>
       ${asection.techno.map((atechno) => `<li>
          <button type='button'>${atechno}</button>
        </li>`).join('')}
      </ul>
      <button type='button' class='card-see button-gren show-popup'>
        See Project
      </button>
    </div>
  </div>`;
  cards.push(li);
});

// Filtering the data for the pop up window using "project id's"
cards.forEach((card) => {
  cardContainer.appendChild(card);
  const btn = card.querySelector('.show-popup');
  btn.id = `project${project}`;
  project += 1;
  btn.addEventListener('click', () => {
    const showSection = sections.filter((section) => section.id === btn.id);
    main.appendChild(showSection[0]);
    html.classList.add('scrollHtml');
  });
});

// Creaiting the pop-up window
mobileData.forEach((asection) => {
  const section = document.createElement('section');
  const container = document.createElement('div');
  const bgFilter = document.createElement('div');
  const cancelPop = document.createElement('div');
  const imageContainer = document.createElement('div');
  const heading2 = document.createElement('h2');
  const img = document.createElement('img');
  const cancel = document.createElement('img');
  const list = document.createElement('ul');
  const paragraph = document.createElement('p');
  section.className = 'popup-window';
  img.className = 'pop-image';
  container.className = 'pop-container';
  section.id = asection.id;
  imageContainer.className = 'pop-img-container';
  list.className = 'card-buttons pop-button';
  bgFilter.className = 'bgFilter';
  cancelPop.className = 'cancelPop';
  heading2.className = 'heading2';
  cancel.src = asection.images.cancelPop;
  cancel.classList = 'iconCancel';

  img.src = asection.images.img;
  paragraph.innerText = asection.paragraph;
  heading2.innerText = asection.heading;

  section.appendChild(container);
  imageContainer.appendChild(img);
  container.appendChild(imageContainer);
  container.appendChild(heading2);
  container.appendChild(list);
  container.appendChild(paragraph);
  section.appendChild(bgFilter);
  cancelPop.appendChild(cancel);
  imageContainer.appendChild(cancelPop);

  let listTech = [];
  let listBtn = [];
  const divGreenBtn = document.createElement('div');
  divGreenBtn.className = 'see-btn';
  asection.list.forEach((element) => {
    const btn = document.createElement('a');
    btn.href = element.live;
    btn.innerHTML = `<span>${element.text}</span> <img src=${element.icon}>`;
    btn.className = 'card-see button-gren';
    listBtn.push(btn);
  });
  container.appendChild(divGreenBtn);
  asection.techno.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `<button class="button">${element}</button>`;
    listTech.push(li);
  });

  listBtn.forEach((abtn) => divGreenBtn.appendChild(abtn));
  listTech.forEach((element) => list.appendChild(element));
  listBtn = [];
  listTech = [];
  sections.push(section);
  cancelPop.addEventListener('click', () => {
    const child = main.children[3];
    html.classList.add('anim-popup');
    setTimeout(() => {
      html.classList.remove('anim-popup');
      html.classList.remove('scrollHtml');
      main.removeChild(child);
    }, 500);
  });
});

// Implementing the mobile menu by adding the class  "mob-menu"
humburger.addEventListener('click', () => {
  menu.classList.add('mob-menu');
});

// Implementing the removal of the mobile menu by removing the class  "mob-menu"
cancelIcon.addEventListener('click', () => {
  menu.classList.remove('mob-menu');
});

// Implement the Validation of the form inputs

const contactForm = document.querySelector('.contactForm');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputComment = document.querySelector('#message');
const localData = {};
function putErrorContainer(input) {
  const parent = input.parentElement;
  const div = document.createElement('div');
  div.className = 'error';
  parent.appendChild(div);
}

putErrorContainer(inputName);
putErrorContainer(inputEmail);
putErrorContainer(inputComment);

// Implement Error message on the front end

function throwError(input) {
  const errorContainer = input.parentElement;
  const errorText = errorContainer.querySelector('div');
  errorText.innerHTML = `Please this '${input.name}' form is required`;
}

// Implement Success message on the front end

function success(input) {
  const parent = input.parentElement;
  const div = parent.querySelector('div');
  div.innerHTML = '';
}

const submitError = contactForm.querySelector('.submit-container');
const span = document.createElement('span');
// span.className = 'submitError';
submitError.appendChild(span);
span.classList.add('error');
// Impement Validation function
function inputValidation() {
  const inputNameValue = inputName.value.trim();
  const inputEmailValue = inputEmail.value.trim();
  const inputCommentValue = inputComment.value.trim();

  const expression = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const IsEmailValid = expression.test(inputEmailValue);

  if (inputNameValue === '') {
    throwError(inputName);
  } else {
    success(inputName);
  }

  if (inputEmailValue === '') {
    throwError(inputEmail);
    span.classList.remove('remove');
    span.innerText = 'Invalid, Email is required';
  } else if (!IsEmailValid) {
    span.classList.remove('remove');
    span.innerText = 'Invalid, email should be valid and in lowercase';
    const div = inputEmail.parentElement.querySelector('div');
    div.innerText = 'Invalid, email should be valid and in lowercase';
  } else {
    span.classList.add('remove');
    success(inputEmail);
  }

  if (inputCommentValue === '') {
    throwError(inputComment);
  } else {
    success(inputComment);
  }
}

const error = document.querySelectorAll('.error');

// Implement submision of the form

contactForm.addEventListener('submit', (e) => {
  localData.name = inputName.value;
  localData.email = inputEmail.value;
  localData.comment = inputComment.value;
  localStorage.setItem('mydata', JSON.stringify(localData));

  inputValidation();
  if (error[0].parentElement.innerText !== '') {
    error[0].parentElement.classList.add('anim-error');
    error[0].parentElement.classList.add('focus-error');
    error[0].parentElement.classList.remove('success');

    setTimeout(() => {
      error[0].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[0].parentElement.classList.remove('focus-error');
    error[0].parentElement.classList.add('success');
  }
  if (error[1].parentElement.innerText !== '') {
    error[1].parentElement.classList.add('anim-error');
    error[1].parentElement.classList.add('focus-error');
    error[1].parentElement.classList.remove('success');

    setTimeout(() => {
      error[1].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[1].parentElement.classList.remove('focus-error');
    error[1].parentElement.classList.add('success');
  }
  if (error[2].parentElement.innerText !== '') {
    error[2].parentElement.classList.add('anim-error');
    error[2].parentElement.classList.add('focus-error');
    error[2].parentElement.classList.remove('success');

    setTimeout(() => {
      error[2].parentElement.classList.remove('anim-error');
    }, 500);
    e.preventDefault();
  } else {
    error[2].parentElement.classList.remove('focus-error');
    error[2].parentElement.classList.add('success');
  }
});

const dataInput = localStorage.getItem('mydata');
const mydata = JSON.parse(dataInput);
window.onload = () => {
  inputName.value = mydata.name;
  inputEmail.value = mydata.email;
  inputComment.value = mydata.comment;
};
