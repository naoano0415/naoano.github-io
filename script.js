// Firebaseの設定情報を入力
  const firebaseConfig = {
    apiKey: "AIzaSyBD0wUDgQVaXKHwfdbjwguWiHk6Nt2bIzA",
    authDomain: "emoji-chat-sns.firebaseapp.com",
    databaseURL: "https://emoji-chat-sns-default-rtdb.firebaseio.com",
    projectId: "emoji-chat-sns",
    storageBucket: "emoji-chat-sns.firebasestorage.app",
    messagingSenderId: "103706956561",
    appId: "1:103706956561:web:fa973f68b3ff3119ecf2b0",
    measurementId: "G-6FK9FML8CJ"
  };


// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 絵文字を送信
function sendEmoji() {
    let input = document.getElementById("emojiInput").value;
    let emojiPattern = /^[\p{Emoji}\s]+$/u;

    if (input.trim() !== "" && emojiPattern.test(input)) {
        database.ref("messages").push(input);
        document.getElementById("emojiInput").value = "";
    } else {
        alert("絵文字のみ送信してください！😊");
    }
}

// メッセージを取得して表示
database.ref("messages").on("value", (snapshot) => {
    let chatBox = document.getElementById("chat");
    chatBox.innerHTML = ""; // チャット欄をクリア
    snapshot.forEach((childSnapshot) => {
        let message = document.createElement("div");
        message.className = "message";
        message.textContent = childSnapshot.val();
        chatBox.appendChild(message);
console.log(input);
    });
});
