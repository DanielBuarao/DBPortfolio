// Function.js

// Typing effect

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typewriter", {
      strings: [
                "Aspiring Full Stack Web Developer",
                "Technical Support and Troubleshooting",
                "Multimedia Editing Expertise",
                "Product Expertise"
                ],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true
            });

// Google Sheets Form Submission

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxRGOiSLko7gDiVFARsUdjxpABXtK-TgkMPOLujnWy3KW61ZG2UYR-rw-iRAk9R7v8Ong/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message));
    });
  });

   // Tab Navigation Functionality

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side Menu Functionality

document.addEventListener('DOMContentLoaded', function() {
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0"; // Slide menu in
    }

    function closemenu() {
        sidemenu.style.right = "-100%"; // Slide menu out
    }

    // Attach event listeners to the icons
    document.querySelector(".fa-bars").addEventListener("click", openmenu);
    document.querySelector(".fa-times").addEventListener("click", closemenu);
});