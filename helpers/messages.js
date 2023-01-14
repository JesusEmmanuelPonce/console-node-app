require("colors");

const { objMenu } = require("../constants");
const { customReadline } = require("../utils");

const showMenu = () => {
    console.log("&&&&&&&&&&&&&&&&&&&&");
    console.log("        Menu        ");
    console.log("&&&&&&&&&&&&&&&&&&&&\n");

    for (const [key, values] of Object.entries(objMenu)) {
        console.log(`${key.blue}. ${values}`);
    };

    const readline = customReadline;

    readline.question("Select a option: ", (answer) => {
        readline.close();
    });
};

module.exports = {
    showMenu
}