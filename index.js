const { showMenu, pause } = require("./helpers/messages");

require("colors");

const main = async() => {

    console.clear();

    let option = "";

    do {

        option = await showMenu();
        console.log("from main: ", option);

        if(option !== '0') await pause();

    } while (option !== '0');
};

main();