const mc = require('./mYclAsS')
const mu = require('./myUtility')


const customer = new mc.Human('Andy' , mu.getRd(20,50))
customer.info()
const employee = new mc.Human('Bobby' , 25)
employee.info()



