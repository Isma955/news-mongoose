const express = require ('express');
const mongoose = require ('mongoose')
const app = express();
app.use(express.json())


mongoose.connect("mongodb+srv://isma955:12345@cluster0.c0o27ym.mongodb.net/SiteNews?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.use(require("./routes/categories.route"))
app.use(require("./routes/news.route"))
app.use(require("./routes/comments.route"))


app.listen(3000, () => {
    console.log('server has benn started')
})