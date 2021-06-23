const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    typeBet: {
      type: String
    },
    won: {
      type: Number
    },
    lose: {
      type: Number
    },
    beforeStatistics_1: {
      type: String
    },
    beforeStatistics_2: {
      type: String
    },

    quota: {
      type: String
    },
    allBetStat: {
      type: String
    },
    fecha: {
      type: Date
    },
    versionKey: false
  }
);

module.exports = mongoose.model('Rol', rolesSchema);