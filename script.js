const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const quotes = [
  {
    text: "Không gì bộc lộ sự khôn ngoan của Đấng Tạo Hóa rõ bằng cấu trúc của vũ trụ và toán học.",
    author: "Leonhard Euler"
  },
  {
    text: "Tôi luôn thấy rằng việc nghiên cứu tự nhiên dẫn tâm trí đến sự kính phục Thiên Chúa.",
    author: "Leonhard Euler"
  },
  {
    text: "Read Euler, read Euler, he is the master of us all.",
    author: "Laplace"
  }
];

let currentQuote = 0;
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

function renderQuote(index) {
  quoteText.textContent = `“${quotes[index].text}”`;
  quoteAuthor.textContent = `— ${quotes[index].author}`;
}

function nextQuote(step = 1) {
  currentQuote = (currentQuote + step + quotes.length) % quotes.length;
  renderQuote(currentQuote);
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("next-quote").addEventListener("click", () => nextQuote(1));
document.getElementById("prev-quote").addEventListener("click", () => nextQuote(-1));

renderQuote(currentQuote);
