import "./styles.css";
// Dynamically load all images from the 'images' folder
const images = require.context('/public/images', false, /\.(png|jpe?g|svg)$/);

const imagePaths = images.keys().map(images);

// Use the images dynamically
imagePaths.forEach((imagePath) => {
  const img = document.createElement('img');
  img.src = imagePath;
  document.body.appendChild(img);
});

import { contentContainer } from "./content.js";
console.log(contentContainer);

import { createGalleryOne, createContentText, createWelcome, createInfo, createGalleryTwo } from "./content.js";
createGalleryOne();
createContentText();
createWelcome();
createInfo();
createGalleryTwo();

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

import { createMenu } from "./menu.js";
menuBtn.addEventListener("click", () => {
    contentContainer.innerHTML = ``;
    createMenu();
});

import { createContact } from "./contact.js";
contactBtn.addEventListener("click", () => {
    contentContainer.innerHTML =``;
    createContact();
})

homeBtn.addEventListener("click", () => {
    contentContainer.innerHTML=``;
    createGalleryOne();
    createContentText();
    createWelcome();
    createInfo();
    createGalleryTwo();
})
