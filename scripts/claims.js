let bases = [];
let netherBases = [];

let userData = {
    claimMain: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "Don't build near"
    },
    claim1: {
        username: "Kweenxkikii",
        X: -381,
        Z: 1194,
        desc: "300x300 spawn claim"
    },
    claim: {
        username: "Popdey",
        X: 967,
        Z: 331,
        desc: "Don't build near"
    },
    claim: {
        username: "FakeFrede",
        X: 3600,
        Z: 1900,
        desc: "Don't build near"
    },
    claim: {
        username: "Emorgancy",
        X: -2188,
        Z: -287,
        desc: "Don't build near"
    },
    claim: {
        username: "Gamecrazybro/NewtStock/C4",
        X: 170,
        Z: -780,
        desc: "Don't build near"
    },
    claim: {
        username: "DigitalRabbit",
        X: -2182,
        Z: -1003,
        desc: "Don't build near"
    },
    claim: {
        username: "_Portal_",
        X: 463,
        Z: 187,
        desc: "Don't build near"
    },
    
};


let userNetherData = {
    claim60: {
        username: "Spawn",
        X: 0,
        Z: 0,
        desc: "150x150 spawn claim"
    }
}


for (user in userData) {
    bases.push([userData[user].X, userData[user].Y, userData[user].username, userData[user].desc])
}



for (user in userNetherData) {
    netherBases.push([userNetherData[user].X, userNetherData[user].Y, userNetherData[user].username, userNetherData[user].desc])
}

console.log(netherBases)



