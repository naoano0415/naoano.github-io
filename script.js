function sendEmoji() {
    let input = document.getElementById("emojiInput").value;
    
    // 絵文字のみを許可（Unicodeの絵文字にマッチする正規表現）
    let emojiPattern = /^[\p{Emoji}\s]+$/u;
    
    if (input.trim() !== "" && emojiPattern.test(input)) {
        let chatBox = document.getElementById("chat");
        let message = document.createElement("div");
        message.className = "message";
        message.textContent = input;
        chatBox.appendChild(message);
        
        // 入力欄をクリア
        document.getElementById("emojiInput").value = "";

        // WebSocketを利用してリアルタイム更新（簡易版）
        sendToServer(input);
    } else {
        alert("絵文字のみ送信してください！😊");
    }
}

// 簡単なWebSocketのセットアップ（リアルタイム通信のため）
const socket = new WebSocket("ws://yourserver.com");

socket.onmessage = function(event) {
    let chatBox = document.getElementById("chat");
    let message = document.createElement("div");
    message.className = "message";
    message.textContent = event.data;
    chatBox.appendChild(message);
};

function sendToServer(emoji) {
    socket.send(emoji);
}
