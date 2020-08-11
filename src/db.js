const Sequelize = require("sequelize");
const sequelize = new Sequelize('activities', 'app_user', 'Password123!', {
  host: '127.0.0.1',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-6',
  },
  define: {
    timestamps: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.players = require("./models/player.js")(sequelize, Sequelize);
db.teams = require("./models/team.js")(sequelize, Sequelize);

db.players.belongsToMany(db.teams, { through: 'teams_players', as: 'teams', foreignKey: 'player_id' });
db.teams.belongsToMany(db.players, { through: 'teams_players', as: 'players', foreignKey: 'team_id' });

module.exports = db;