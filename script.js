function sendEmoji() {
    let input = document.getElementById("emojiInput").value;
    let emojiPattern = /^[\p{Emoji}\s]+$/u;

    if (input.trim() !== "" && emojiPattern.test(input)) {
        let chatBox = document.getElementById("chat");
        let message = document.createElement("div");
        message.className = "message";
        message.textContent = input;
        chatBox.appendChild(message);

        // ローカルストレージに保存
        let messages = JSON.parse(localStorage.getItem("emojiMessages")) || [];
        messages.push(input);
        localStorage.setItem("emojiMessages", JSON.stringify(messages));

        document.getElementById("emojiInput").value = "";
        fetchMessages();
    } else {
        alert("絵文字のみ送信してください！😊");
    }
}

function fetchMessages() {
    let chatBox = document.getElementById("chat");
    chatBox.innerHTML = ""; // チャット欄をクリア
    let messages = JSON.parse(localStorage.getItem("emojiMessages")) || [];
    messages.forEach((msg) => {
        let message = document.createElement("div");
        message.className = "message";
        message.textContent = msg;
        chatBox.appendChild(message);
    });
}

// ページロード時にメッセージを取得
window.onload = fetchMessages;
