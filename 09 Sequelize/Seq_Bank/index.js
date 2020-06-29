// import ตัวโมเดลที่เราสร้างไว้ ในโฟลเดอร์ models
const db = require("./models/index");

// Setup Express 
const express = require("express");
const app = express();

// Setup cors เพื่อให้ FrontEnd คุยกับ Server ได้ง่ะ
const cors = require('cors');

// ประกาศ instant ไว้สับ Routes
const managerRoutes = require('./routes/Manager');
const branchRoutes = require('./routes/Branch');
const accountRoutes = require('./routes/Account');
const customerRoutes = require('./routes/Customer')

//------------------------------ ตอนใช้งาน ---------------------------//

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ใช้ระบุว่าถ้าพิมพ์มา Route นี้ให้ไปไหนต่อดีย์
app.use('/managers' , managerRoutes);
app.use('/branches' , branchRoutes);
app.use('accounts' , accountRoutes);
app.use('/customers' , customerRoutes);

//มันคืออะไรนะ 
//Synchronizing the model with the database
//การใช้ .sequelize คือ sync มันทุก model ที่มี
// Sync เสร็จแล้วค่อยเปิด Port 8000
db.sequelize.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log("Database is Running at port 8000");
  });
});
