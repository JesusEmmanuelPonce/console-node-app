require("colors");

const { objMenu } = require("../constants");

const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
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
            resolve(answer)
        });
    });
};

const pause = () => {

    return new Promise(resolve => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nSelect ${"Enter".green} to continue:\n`, (answer) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    showMenu,
    pause,
}