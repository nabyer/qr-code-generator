import inquirer from 'inquirer';

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
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current enviroment
        } else {
            // Something else went wrong
        }
    });