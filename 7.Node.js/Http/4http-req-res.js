const http = require('http')

http.createServer( (req,res) => {
    //ตระกูล writeHead
    res.writeHead(200, {
        'content-type' : 'text/html'
    })
    // ตระกูล setHeader ใช้ทีหลัง writeHead ไม่ได้  (precedence ต่ำกว่า)
    // res.statusCode = 200 
    // res.setHeader('content-type' , 'text/html')

    if (req.url === '/') {
        res.write('<h2>This is Homepage</h2>')
        res.write(`<h2>You're welcome</h2>`)
        return  res.end()
    }
    
    if (req.url === '/user') {
        res.write('<h2>This is User page</h2>')
        return  res.end()
    }

    if (req.url === '/page1') {
        res.write(`<!DOCTYPE html>
        <html>
        <body style="background-color:powderblue;">
        
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
        
        </body>
        </html>
        `)
        return  res.end()
    }

    if (req.url === '/form') {
        res.write(`
        <!DOCTYPE html>
        <html>
        <body>
        
        <h2>Text input fields</h2>
        
        <form>
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname" value="John"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname" value="Doe">
        </form>
        
        <p>Note that the form itself is not visible.</p>
        
        <p>Also note that the default width of text input fields is 20 characters.</p>
        
        </body>
        </html>
        `)
        return  res.end()
    }


    //ตระกูล writeHead
    res.writeHead(404, 'Not found in our site...', {
        'content-type' : 'text/html'
    })
    // ตระกูล setHeader ใช้ทีหลัง writeHead ไม่ได้  (precedence ต่ำกว่า)
    // res.statusCode = 404 
    // res.statusMessage = 'Not found in out site'
    // res.setHeader('content-type' , 'text/html')
    // res.write(res.statusMessage)
    
    res.end('<hr><h3>Not found</h3><hr>')

}).listen(8080 , ()=> {
    console.log('Server start...')
})