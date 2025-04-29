import express from "express";
import cors from "cors";
import bodyParser from "body-parser"

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Позволяет запрашивать сервер с других доменов
app.use(bodyParser.json()); // Для парсинга JSON

// Массив для хранения данных
let dataStore = [];

//Метод GET
app.get("/data", (req, res) => {
    res.json({ title: String, desc: String, price:String });
  });

// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData); // Сохраняем данные в массив
  res.status(201).json(newData); // Отправляем ответ с новыми данными
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
