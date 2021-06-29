const cancelIcon = document.querySelector('#cancel-icon');
// const cancelPop = document.querySelector('.cancelPop');
const menu = document.querySelector('.header');
const main = document.querySelector('main');
const humburger = document.querySelector('#hamburger');
const seeButton = document.querySelectorAll('.show-popup');
const html = document.querySelector('html');
const mobileData = [
  {
    id: 'project1',
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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
    images: {
      img: './images/Snapshoot Portfolio.svg',
    },
    techno: ['Ruby on Rails', 'Css', 'Javascript'],
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

const sections = [];

mobileData.forEach((asection) => {
  const section = document.createElement('section');
  const container = document.createElement('div');
  const bgFilter = document.createElement('div');
  const cancelPop = document.createElement('div');
  const imageContainer = document.createElement('div');
  const heading2 = document.createElement('h2');
  const img = document.createElement('img');
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
    main.removeChild(child);
    html.classList.remove('scroll');
  });
});

humburger.addEventListener('click', () => {
  menu.classList.add('mob-menu');
});

cancelIcon.addEventListener('click', () => {
  menu.classList.remove('mob-menu');
});

let project = 1;
seeButton.forEach((btn) => {
  btn.id = `project${project}`;
  project += 1;
  btn.addEventListener('click', () => {
    const showSection = sections.filter((section) => section.id === btn.id);
    console.log('hello');
    main.appendChild(showSection[0]);
    html.classList.add('scroll');
  });
});
