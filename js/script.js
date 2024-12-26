// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Chatroom functionality
const chatBox = document.querySelector("#chat-box");
const chatInput = document.querySelector("input[type='text']");
const chatButton = document.querySelector("button");

chatButton.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    chatBox.appendChild(userMessage);
    chatInput.value = "";

    // Auto-reply from Admin (for demonstration)
    setTimeout(() => {
      const adminReply = document.createElement("p");
      adminReply.innerHTML = `<strong>Admin:</strong> Thank you for your message!`;
      chatBox.appendChild(adminReply);
    }, 1000);
  }
});

// Form submission functionality
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  alert(`Thank you for contacting us, ${name}! We'll get back to you soon.`);
  form.reset(); // Clear form fields
});
/*fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('weather').innerText = `Weather: ${data.weather[0].description}`;
  });
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  };
  */