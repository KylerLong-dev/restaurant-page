const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
    <h1>Contact Us</h1>
    <div>
        <h2>Chef Ky</h2>
        <p>123-123-1234</p>
        <p>realemail@fake.com</p>
    </div>
    <div>
        <h2>Owner Ty</h2>
        <p>123-123-1234</p>
        <p>realemail@fake.com</p>
    </div>
    `
}

export { createContact };
