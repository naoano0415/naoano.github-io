// Firebaseの設定
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);

// データベースを取得
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
