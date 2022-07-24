import './contact.css';

const contactContent = (() => {
    const contactContainer = document.createElement('main');
    contactContainer.classList.add('contact-container');

    const contactInfo = document.createElement('section');
    contactInfo.classList.add('contact-info');
    contactContainer.appendChild(contactInfo);

    const infoTitle = document.createElement('h1');
    infoTitle.classList.add('contact-info-title');
    infoTitle.textContent = 'Ciao amici';
    contactInfo.appendChild(infoTitle);

    const infoDescription = document.createElement('div');
    infoDescription.classList.add('contact-info-description');
    infoDescription.innerHTML = 
    `<p>At <em>dall\'inferno</em> we aim to provide a relaxed, authentic 
    Italian experience to each and every customer.</p>`
    +
    `<p>All our pizzas are made fresh daily with 100% natural, high quality
    ingredients.</p>`
    +
    `<p>We hope to see you soon!</p>`
    contactInfo.appendChild(infoDescription);

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactContainer.appendChild(contactForm);

    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Get in touch';
    contactForm.appendChild(formTitle);

    const formNameLabel = document.createElement('label');
    formNameLabel.htmlFor = 'name';
    formNameLabel.textContent = 'Name'
    contactForm.appendChild(formNameLabel);
    const formName = document.createElement('input');
    formName.name = 'name';
    formName.id = 'name';
    formName.type = 'text';
    contactForm.appendChild(formName);

    const formEmailLabel = document.createElement('label');
    formEmailLabel.htmlFor = 'email';
    formEmailLabel.textContent = 'Email';
    contactForm.appendChild(formEmailLabel);
    const formEmail = document.createElement('input');
    formEmail.name = 'email';
    formEmail.id = 'email';
    formEmail.type = 'email';
    contactForm.appendChild(formEmail);

    const formMessageLabel = document.createElement('label');
    formMessageLabel.htmlFor = 'message';
    formMessageLabel.textContent = 'Message';
    contactForm.appendChild(formMessageLabel);
    const formMessage = document.createElement('textarea');
    formMessage.name = 'message';
    formMessage.id = 'message';
    contactForm.appendChild(formMessage);

    const formSubmit = document.createElement('button');
    formSubmit.textContent = 'Send';
    contactForm.appendChild(formSubmit);

    return contactContainer;
})();

export default contactContent;