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
    secondTitle: '1Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot PortfolioMob.png',
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
    heading: '11Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `11Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project2',
    secondTitle: '2Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot Portfolio.png',
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
    heading: '222Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `2222Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project3',
    secondTitle: '3Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot Portfoliothree.png',
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
    heading: '33Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `3Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project4',
    secondTitle: '4Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot Portfolio.svg',
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
    heading: '4Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `4Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project5',
    secondTitle: '5Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot Portfolio.svg',
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
    heading: '5Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `5Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project6',
    secondTitle: '6Multi-Post Stories Gain+Glory',
    images: {
      img: './images/Snapshoot Portfolio.svg',
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
    heading: '6Keeping track of hundreds of components',
    list: [
      {
        icon: './images/icons/IconExport.svg',
        text: 'See Live',
      },
      {
        text: 'See Source',
        icon: './images/icons/IconGitHub.svg',
      },
    ],
    paragraph: `6Lorem Ipsum is simply dummy text of the printing and typesetting industry's. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
    const btn = document.createElement('button');
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

const submitError = contactForm.querySelector('.button-gren');
const span = document.createElement('span');
span.className = 'submitError';
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
    span.innerText = '';
    span.innerText = 'Input error, Not submitted';
  } else {
    span.innerText = '';
    success(inputName);
  }

  if (inputEmailValue === '') {
    throwError(inputEmail);
    span.innerText = '';
    span.innerText = 'Input error, Not submitted';
  } else if (!IsEmailValid) {
    span.innerText = '';
    span.innerText = 'Input error, Not submitted';
    const div = inputEmail.parentElement.querySelector('div');
    div.innerText = 'Invalid, email should be valid and in lowercase';
  } else {
    span.innerText = '';
    success(inputEmail);
  }

  if (inputCommentValue === '') {
    span.innerText = '';
    span.innerText = 'Input error, Not submitted';
    throwError(inputComment);
  } else {
    span.innerText = '';
    success(inputComment);
  }
}

const error = document.querySelectorAll('.error');

// Implement submision of the form

contactForm.addEventListener('submit', (e) => {
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

// const localData = {};
// localData.name = inputName.value;
// localData.email = inputEmail.value;
// localData.comment = inputComment.value;

// localStorage.setItem('mydata', localData);
// const dataInput = localStorage.getItem('mydata');
// console.log(localStorage.getItem('mydata'));
