let users = [{
        id: 1,
        name: "Charmander",
        hp: 39,
        attack: 52,
        defense: 43,
    },
    {
        id: 2,
        name: "Charmeleon",
        hp: "58",
        attack: "64",
        defense: "58",
    },
    {
        id: 3,
        name: "Squirtle",
        hp: "44",
        attack: "48",
        defense: "65",
    },
    {
        id: 4,
        name: "Caterpie",
        hp: "45",
        attack: "30",
        defense: "35",
    },
    {
        id: 5,
        name: "Pikachu",
        hp: "35",
        attack: "55",
        defense: "40",
    },

];

export function getAllUsers() {
    return users;
}

export function getUser(id) {
    return users.find((user) => user.id === id);
}

export function deleteUser(id) {
    users = users.filter((user) => user.id !== id);
}