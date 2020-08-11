const db = require("./db.js");

const Player = db.players;
const Team = db.teams;

/*
Player.findAll({ raw: true }).then(data => {
    console.log(data);
});

Team.findAll({ raw: true }).then(data => {
    console.log(data);
});

TeamPlayer.findAll({ raw: true }).then(data => {
    console.log(data);
});
*/

/*
Player.findByPk(1, 
    { 
        include: [{
            model: Team,
            as: 'teams',
            attributes: ['id','name'],
            through: {
                attributes: [],
            }
        }],
        raw: false 
    }
).then(player => {
    console.log(player.teams);
});
*/

Team.findByPk(1, 
    { 
        include: [{
            model: Player,
            as: 'players',
            attributes: ['id','first_name','last_name'],
            through: {
                attributes: [],
            }
        }],
        raw: false 
    }
).then(team => {
    console.log(JSON.stringify(team));
});
