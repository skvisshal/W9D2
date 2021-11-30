
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = (dogs) =>{
  const dogArr = [];
  const dogNames = Object.keys(dogs);

  for (let i = 0; i < dogNames.length; i++){
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerHTML = dogNames[i];
    a.href = dogs[dogNames[i]];
    li.classList = 'dog-link';

    li.appendChild(a);
    dogArr.push(li);
  }
  return dogArr;
};

export const attachDogLinks = () =>{
  const dogArr = dogLinkCreator(dogs);
  const dropdown = document.querySelector('.drop-down-dog-list');

  for (let i = 0; i < dogArr.length; i++){
    dropdown.appendChild(dogArr[i]);
  }
};

attachDogLinks();

const handleEnter = () => {
  const links = document.querySelectorAll('.dog-link');
  for (let i = 0; i < links.length; i++){
    links[i].classList.add('open');
  }
};

const handleLeave = () => {
  const links = document.querySelectorAll('.dog-link');
  for (let i = 0; i < links.length; i++){
    links[i].classList.remove('open');
  }
};

const nav = document.querySelector('.drop-down-dog-nav');
nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);