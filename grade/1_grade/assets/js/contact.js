window.addEventListener("DOMContentLoaded", () => {
    // textareaタグを全て取得
    const textareaEls = document.querySelectorAll("textarea");

    textareaEls.forEach((textareaEl) => {
        // デフォルト値としてスタイル属性を付与
        textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
        // inputイベントが発生するたびに関数呼び出し
        textareaEl.addEventListener("input", setTextareaHeight);
    });

    // textareaの高さを計算して指定する関数
    function setTextareaHeight() {
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight + 4}px`;
    }
});

function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        textarea: document.getElementById("textarea").value,
    };

    const serviceID = "service_f58d4zn";
    const templateID = "template_cs31o7v";

    emailjs.send(serviceID, templateID, parms)
        .then(function (res) {
            console.log("送信完了しました。", res.status);
            alert("送信完了しました。")
        })
        .catch((err) => console.log(err));
}