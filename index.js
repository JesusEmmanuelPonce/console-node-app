const { inquirerMenu, inquirerPause } = require("./helpers/inquirer");

require("colors");

const main = async() => {

    console.clear();

    let option = "";

    do {

        option = await inquirerMenu();
        console.log({option})
        await inquirerPause();

    } while (option !== '0');
};

main();