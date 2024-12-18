

const contentContainer = document.querySelector(".content");

const createGalleryOne = () => {
    const galleryOne = document.createElement("div");
    galleryOne.classList.add("gallery-1");
    contentContainer.appendChild(galleryOne);
    galleryOne.innerHTML = `
    <img class="gallery-1_img" src="/images/derek-duran-Jz4QMhLvGgw-unsplash.jpg">
    <img class ="gallery-1_img" src="/images/felix-ngo--s9MPEdgzjQ-unsplash.jpg">
    <img class="gallery-1_img" src="/images/flyd-2i0it6LpwsI-unsplash.jpg">
    `
}


export { contentContainer, createGalleryOne };
