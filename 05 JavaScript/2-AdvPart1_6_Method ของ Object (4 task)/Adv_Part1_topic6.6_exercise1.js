let user = {
    name : "john",
    go : function () { alert(this.name)}

} // #### บรรทัดนี้ บางทีถ้าไม่มีจะ error


user.go();

//แสดงผลออกมาได้ john 
//แต่แนะนำให้ใส่ semicolon ตรงบรรทัดที่มี #### หลัง curly bracket