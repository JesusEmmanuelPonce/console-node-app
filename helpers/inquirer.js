const inquirer = require("inquirer");
const { arrMenu, arrPause } = require("../constants")

const inquirerMenu = async() => {

    console.clear();
    console.log("&&&&&&&&&&&&&&&&&&&&");
    console.log("        Menu        ");
    console.log("&&&&&&&&&&&&&&&&&&&&\n");

    const { option } = await inquirer.prompt(arrMenu);

    return option;
};

const inquirerPause = async() => {
    await inquirer.prompt(arrPause);
}

module.exports = {
    inquirerMenu,
    inquirerPause
};