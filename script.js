// script.js

// Chat toggle and simple echo bot
document.addEventListener("DOMContentLoaded", function () {
  const chatHeader = document.getElementById("chat-header");
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  if (chatHeader && chatBody) {
    chatHeader.addEventListener("click", () => {
      chatBody.style.display = chatBody.style.display === "none" ? "block" : "none";
    });
  }

  if (chatInput && chatMessages) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && chatInput.value.trim() !== "") {
        const userMsg = chatInput.value.trim();
        addMessage("You", userMsg);
        // Simple auto-response placeholder
        addMessage("Support", "Thanks for reaching out! We’ll respond as soon as we can.");
        chatInput.value = "";
      }
    });
  }

  function addMessage(sender, text) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(p);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
