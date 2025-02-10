document.addEventListener("DOMContentLoaded", function () {
    /**
     * 1. 画像のURLをBase64デコードして設定（画像URLの直リンクを隠す）
     */
    const imageElement = document.getElementById("protectedImage");
    if (imageElement) {
        const encodedURL = "aW1hZ2VzL0M2MjVEMkM3LUU0OTUtNDgwNS04MDE3LTUyOENDNTIwMkQzN18xXzEwMl9vLmpwZWc=";
        imageElement.src = atob(encodedURL);
    }

    /**
     * 2. 右クリック（コンテキストメニュー）を禁止
     */
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        alert("右クリックは禁止されています。");
    });

    /**
     * 3. 画像のドラッグ&ドロップ保存を禁止
     */
    document.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });

    /** 
     * 4. `F12` キー、`Ctrl+Shift+I`（開発者ツール）をブロック
     */
    document.addEventListener("keydown", function (e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
            e.preventDefault();
            alert("開発者ツールは無効化されています。");
        }
    });

    /**
     * 5. コピー＆ペーストを禁止
     */
    document.addEventListener("copy", function (e) {
        e.preventDefault();
        alert("コピーは禁止されています。");
    });

    /**
     * 6. 他サイトのiframe埋め込みを禁止（クリックジャッキング対策）
     */
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
});
