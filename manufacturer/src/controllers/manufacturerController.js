const manufacturerService = require("../services/manufacturerService");

const getAllMfrs = (req, res) => {
    const allMfrs = manufacturerService.getAllmanufacturers();
    res.send("Get all manufacturers");
};

const getOneMfrsById = (req, res) => {
    const manufacturer = manufacturerService.getOneMfrsById(req.params.id);
    res.send("Get an existing manufacturer");
};

const getOneMfrsByName = (req, res) => {
    const manufacturer = manufacturerService.getOneMfrsById(req.params.name);
    res.send("Get an existing manufacturer");
};

const createNewMfrs = (req, res) => {
    // const createdMfrs = manufacturerService.createNewmanufacturer();
    res.send("Create a new manufacturer");
};

const updateOneMfrs = (req, res) => {
    // const updatedMfrs = manufacturerService.updateOnemanufacturer();
    res.send("Update an existing manufacturer");
};

const deleteOneMfrs = (req, res) => {
    // manufacturerService.deleteOneMfrs();
    res.send("Delete an existing manufacturer");
};

module.exports = {
    getAllMfrs,
    getOneMfrsById,
    getOneMfrsByName
};