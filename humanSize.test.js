const { humanSize } = require('./humanSize')
// Test cases
x = [1232, 53453534, 2342345352452134, 32423534432432, 352342342, 325253462434234123412132131, 423, 449823485124, 365325253462434234123412132131]

for (let ii = 0; ii < x.length; ii++) {
    const element = x[ii];
    const result = humanSize(element)
    console.log(result)
}