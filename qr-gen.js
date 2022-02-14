const qr = require('qrcode');

// Prepare data
let data = {
    id: 1,
    name: "Sanjay",
    email: "testuser@gmail.com"
};

let strData = "http://noemi-ivan.info/"

// To display qr code into terminal
// qr.toString(strData, { type: 'terminal' },
//     function(err, code) {
//
//         if (err) return console.log("error occurred")
//
//         console.log(code)
//     });
//
// // To display qrcode in string format
// qr.toDataURL(strData, function(err, code) {
//     if (err) return console.log("error occurred")
//
//     console.log(code)
// })

qr.toFile("./img/qr.png", strData, { errorCorrectionLevel: 'H' , 'scale': 20,  margin: 1}, function(err, code) {
    if (err) return console.log("error occurred", err)
    console.log("qr code saved correctly")
} )
