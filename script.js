function sendEmoji() {
    let input = document.getElementById("emojiInput").value;
    if (input.trim() !== "") {
        let chatBox = document.getElementById("chat");
        let message = document.createElement("div");
        message.className = "message";
        message.textContent = input;
        chatBox.appendChild(message);
        document.getElementById("emojiInput").value = "";
    }
}
