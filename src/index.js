import "./styles.css";

import { contentContainer } from "./content.js";
console.log(contentContainer);

import { createGalleryOne, createContentText, createWelcome, createInfo, createGalleryTwo } from "./content.js";
createGalleryOne();
createContentText();
createWelcome();
createInfo();
createGalleryTwo();


import { createMenu } from "./menu.js";
createMenu();

import { createContact } from "./contact.js";
createContact();

