// Show selected form and hide others
function showForm(formId) {
  const forms = document.querySelectorAll(".form-section");
  const status = document.getElementById("status");

  forms.forEach(form => {
    form.style.display = "none";
  });

  status.innerText = "";

  const activeForm = document.getElementById(formId);
  if (activeForm) {
    activeForm.style.display = "block";
  }
}

// Attach EmailJS submit handling to all forms
document.querySelectorAll(".form-section").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("status");
    status.style.color = "#ffffff";
    status.innerText = "Sending your request...";

    emailjs.sendForm(
      "service_zqvgwwe",
      "template_tzybhsq",
      this
    ).then(
      function () {
        status.innerText = "Thank you! We will contact you shortly.";
        status.style.color = "#c8ffb0";
      },
      function (error) {
        status.innerText = "Failed to send. Please try again.";
        status.style.color = "#ffb3b3";
        console.error(error);
      }
    );

    form.reset();
  });
});
  const chatToggleBtn = document.getElementById("chatToggleBtn");
  const chatCloseBtn = document.getElementById("chatCloseBtn");
  const chatPanel = document.getElementById("chatPanel");

  chatToggleBtn.addEventListener("click", () => {
    chatPanel.classList.add("active");
  });

  chatCloseBtn.addEventListener("click", () => {
    chatPanel.classList.remove("active");
  });


