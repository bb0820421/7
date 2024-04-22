function translateText() {
      var inputText = document.getElementById("inputText").value;
      var outputText = document.getElementById("outputText");

      // 使用 Google 翻譯 API
      var apiKey = 'YOUR_API_KEY'; // 替換為你的 Google 翻譯 API 金鑰
      var url = 'https://translation.googleapis.com/language/translate/v2?key=' + apiKey;
      var data = {
        q: inputText,
        source: 'zh-TW', // 源語言是中文
        target: 'en' // 目標語言是英文
      };

      // 發送 POST 請求
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        var translatedText = data.data.translations[0].translatedText;
        outputText.innerHTML = translatedText;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }