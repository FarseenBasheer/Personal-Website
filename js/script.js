document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('IBVgNTH6jv0nvt07I');
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    const downloadButton = document.getElementById('download-resume');
    const contactForm = document.getElementById('contact-form');
    const sendEmailButton = document.getElementById('send-email');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
            navList.classList.remove('show');  // Close the menu after clicking
        });
    });

    sendEmailButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Use EmailJS to send email
        emailjs.send('service_w0sl1mv', 'template_2ggpexm', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Your message has been sent successfully!');
            contactForm.reset();
        }, function(error) {
            console.error('Email send error:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        });
    });
});
