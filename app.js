const cancelIcon = document.querySelector('#cancel-icon');
const menu = document.querySelector('.header');
const main = document.querySelector('main');
const humburger = document.querySelector('#hamburger');
const html = document.querySelector('html');
const cardContainer = document.querySelector('.card-container');
const mobileData = [
  {
    id: 'project1',
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
mobileData.forEach((asection) => {
  const li = document.createElement('li');
  li.innerHTML = `<div class='card'>
    <div class='image'><div class="project-bg"></div><img class="project-img" src='${asection.images.img}'></div>
    <div class='card-info'>
      <h2>Multi-Post Stories Gain+Glory</h2>
      <ul class='card-buttons'>
       ${asection.techno
    .map((atechno) => `<li>
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
    html.classList.remove('scrollHtml');
    main.removeChild(child);
  });
});

humburger.addEventListener('click', () => {
  menu.classList.add('mob-menu');
});

cancelIcon.addEventListener('click', () => {
  menu.classList.remove('mob-menu');
});
