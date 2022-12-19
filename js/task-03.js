const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeImagesList = (images = []) => {
  const { url, alt } = images;
  return `<li class="gallery--list">
  <img class="image" src=${url} alt=${alt}></img>
  </li>`;
};

const element = images.map(makeImagesList).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforebegin", element);

// const makeImagesList = () => {
//   return images.map(({ alt, url }) => {
//     const liEl = document.createElement("li");
//     liEl.classList.add("gallery--list");

//     const img = document.createElement("img");
//     img.classList.add("image");
//     img.alt = alt;
//     img.src = url;
//     img.width = 1200;

//     liEl.append(img);

//     return liEl;
//   });
// };

// const element = makeImagesList(images);

// const galleryEl = document.querySelector(".gallery");
// galleryEl.append(...element);
