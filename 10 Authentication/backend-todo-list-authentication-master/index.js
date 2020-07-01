const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user')
const todoListRoutes = require('./routes/todoList');
const db = require('./models');

//เรียกใช้ passport
require('./config/passport/passport');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);
app.use('/users', userRoutes)

db.sequelize.sync({force : false }).then(() => {
    app.listen(8000, () => {
        console.log(`Server is running at port 8000`);
    });
});