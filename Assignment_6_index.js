/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qrimage from 'qr-image';
import fs from "fs";

inquirer.prompt([
{
    name: 'url',
    message: 'What is your url?',
    type: 'input'
    }])
    .then(function(answer){
        console.log(answer.url)
        var qr_png = qrimage.image(answer.url, { type: 'png' });
        qr_png.pipe(fs.createWriteStream("qr_code.png"));
        fs.writeFile("URL.txt", answer.url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
          });
    })
    .catch((error) => {
        console.log(error)
        });

