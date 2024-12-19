
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

const createContentText = () => {
    const contentText = document.createElement("div");
    contentText.classList.add("content_text");
    contentText.innerHTML = `<p>Sushi Bar & Lounge - Located on the 3rd floor of The Abbey at Downtown Eatsville, Sushi For You has a diverse and rich food culture with something for everyone.</p>`
    contentContainer.appendChild(contentText);
}

const createWelcome = () => {
    const welcome = document.createElement("div");
    welcome.classList.add("welcome");
    welcome.innerHTML = `
        <img class="welcome_img" src="/images/j-XcLSYPRif3k-unsplash.jpg">
        <div class="welcome_text">
            <h2>WELCOME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt earum natus perferendis recusandae possimus suscipit iste, mollitia necessitatibus? Iste temporibus eligendi odio ea labore numquam unde quia placeat laborum.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae earum amet quod consectetur possimus, eveniet quos corporis exercitationem dolorem! Ad harum qui corrupti repellat unde consectetur sed deserunt impedit? Velit?</p>
        </div>
    `
    contentContainer.appendChild(welcome);
}

const createInfo = () => {
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerHTML = `
        <div class="hours">
            <h2>Hours</h2>
            <p>Lunch Service 11am - 3pm</p>
            <p>Sat & Sun Brunch 11am - 3pm</p>
            <p>Dinner Tuesday - Thursday 5pm - 10pm</p>
            <p>Dinner Friday and Saturday - 5pm - 11pm</p>
            <p>Dinner Sunday 5pm - 9pm</p>
        </div>
        <div class="map" style="width: 100%; height: 400px; overflow: hidden;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.75441951878!2d-81.5074790192652!3d28.48107384021243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1733369579842!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
        </div>
    `
    contentContainer.appendChild(info);
}

const createGalleryTwo = () => {
    const galleryTwo = document.createElement("div");
    galleryTwo.classList.add("gallery-2");
    galleryTwo.innerHTML = `
        <img class="gallery-2_img" src="/images/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg">
        <img class="gallery-2_img" src="/images/kyle-head-PW8K-W-Kni0-unsplash.jpg">
        <img class="gallery-2_img" src="/images/luigi-pozzoli-iIS1SIO5_aY-unsplash.jpg">
        <img class="gallery-2_img" src="/images/ryan-stone-DQjbcUzivfA-unsplash.jpg">
        <img class="gallery-2_img" src="/images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg">
    `
    contentContainer.appendChild(galleryTwo);
}

export { contentContainer, createGalleryOne, createContentText, createWelcome, createInfo, createGalleryTwo };
