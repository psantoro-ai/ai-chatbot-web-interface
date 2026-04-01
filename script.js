function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;

  if (!userText) return;

  chatBox.innerHTML += `<div class="user">You: ${userText}</div>`;

  let botResponse = "I'm an AI chatbot. How can I help you?";

  if (userText.toLowerCase().includes("hello")) {
    botResponse = "Hi! Nice to meet you!";
  }

  if (userText.toLowerCase().includes("marketing")) {
    botResponse = "AI can boost your marketing with automation and personalization.";
  }

  chatBox.innerHTML += `<div class="bot">AI: ${botResponse}</div>`;

  input.value = "";
}
