const DB = require("./data.json");

const getAllMfrs = () => {
  return DB.manufacturers;
};

const getOneMfrsById = (id) => {
    return DB.manufacturers.find(manufacturer => manufacturer.id === id);
};

const getOneMfrsByName = (name) => {
    return DB.manufacturers.find(manufacturer => manufacturer.name === name);
};

module.exports = { 
    getAllMfrs,
    getOneMfrsById,
    getOneMfrsByName
 };