import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        /*Pass your questions here */
        {
            message: "Gebe eine URL hier ein: ",
            name: "URL"
        }
    ])
    .then((answers) => {
        // Use your feedback for... whatever!!
        const url = answers.URL
        console.log(url)

        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr_code.png'));

        fs.writeFile('url.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current enviroment
        } else {
            // Something else went wrong
        }
    });