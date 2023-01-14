require("colors");

const { objMenu } = require("../constants");

const showMenu = () => {
    console.log("&&&&&&&&&&&&&&&&&&&&");
    console.log("        Menu        ");
    console.log("&&&&&&&&&&&&&&&&&&&&\n");

    for (const [key, values] of Object.entries(objMenu)) {
        console.log(`${key.blue}. ${values}`);
    };

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Select a option: ", (answer) => {
        readline.close();
    });
};

const pause = () => {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`Select ${"Enter".green} to continue: `, (answer) => {
        readline.close();
    });
}

module.exports = {
    showMenu,
    pause,
}