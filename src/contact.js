const contentContainer = document.querySelector(".content");

const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
    <h1>Contact Us</h1>
    <div class="contact_person">
        <h2>Chef Ky</h2>
        <p>123-123-1234</p>
        <p>realemail@fake.com</p>
    </div>
    <div class="contact_person">
        <h2>Owner Ty</h2>
        <p>123-123-1234</p>
        <p>realemail@fake.com</p>
    </div>
    `
    contentContainer.appendChild(contact);
}

export { createContact };
