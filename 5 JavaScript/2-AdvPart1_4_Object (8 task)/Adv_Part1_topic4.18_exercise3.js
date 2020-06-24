const user = {
    name: "John"
  };
  
  // does it work?
  user.name = "Pete";

  // ไม่มี Error เพราะไม่ได้เปลี่ยนแปลง Refference -- ถึงจะใช้ const ก็เพิ่มลด key ได้