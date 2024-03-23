function loadData() {
  let xhr = new XMLHttpRequest(); // создаем объект XMLHttpRequest
  xhr.open("GET", "data.json", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error(
        "Запрос к файлу data.json завершился ошибкой " + xhr.status
      );
    }
  };
  xhr.onerror = function () {
    console.error("Запрос к файлу data.json завершился ошибкой");
  };
  xhr.send();
}
loadData();
