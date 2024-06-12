self.addEventListener("install", (event) => {
  console.log("Установлен сервис-воркер");
});

// Активируем сервис-воркер
self.addEventListener("activate", (event) => {
  console.log("Активирован сервис-воркер");
});

// Обрабатываем события fetch (запросы ресурсов)
self.addEventListener("fetch", (event) => {
  // if (event.request.url.includes("paypal.com")) {
  //   // Клонируем запрос, чтобы иметь возможность изменить его заголовки
  //   const modifiedRequest = event.request.clone();
  //   // Создаем объект заголовков и добавляем необходимые заголовки
  //   const headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   // Изменяем заголовки запроса
  //   modifiedRequest.headers = headers;
  //   // Выполняем модифицированный запрос с измененными заголовками
  //   event.respondWith(fetch(modifiedRequest));
  // }
  // console.log(event.request);
});
