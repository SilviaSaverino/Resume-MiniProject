var templateParams = {
    to_name: 'Silvia',
    from_name: document.getElementById(`${fullname}`),
    reply_to: document.getElementById(`${emailaddress}`),
    message: document.getElementById(`${projectsummar}`)
};

function sendMail(contactForm) {
    emailjs.send("service_muva9zn", "template_u8jyv4i", templateParams, "hEsVCyJpzOT6pjxLm")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

sendMail(contactForm)