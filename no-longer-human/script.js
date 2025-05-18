document.addEventListener("DOMContentLoaded", () => {
  const entries = document.querySelectorAll(".entry");

  let delay = 0;

  entries.forEach((entry, i) => {
    const text = entry.getAttribute("data-text");
    entry.textContent = ""; // Clear it

    setTimeout(() => {
      typeWriter(entry, text, 0);
    }, delay);

    delay += text.length * 50 + 1000; // Delay for next poem
  });
});

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 50); // Speed here
  }
}