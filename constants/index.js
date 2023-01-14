require("colors");

const arrMenu = [
    {
        type: "list",
        name: "option",
        message: "Select a option",
        choices: [
            {
                name: "1. Create task",
                value: "1"
            },
            {
                name: "2. List task",
                value: "2"
            },
            {
                name: "3. List completed taks",
                value: "3"
            },
            {
                name: "4. List pending task",
                value: "4"
            },
            {
                name: "5. Task done",
                value: "5"
            },
            {
                name: "6. Delete task",
                value: "6"
            },
            {
                name: "0. Exit",
                value: "0"
            },
        ]
    }
];

const arrPause = [
    {
        type: "input",
        name: "enter",
        message: `\nPresione ${'enter'.green} to continue`
    }
]

module.exports = {
    arrMenu,
    arrPause,
};