module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      }
    });

    return Player;
};