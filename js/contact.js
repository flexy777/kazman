function sendMail(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('msg').value;

    // Construct the mailto link
    const mailtoLink = `mailto:info@kazmangroup.com?subject=Service Enquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
}
