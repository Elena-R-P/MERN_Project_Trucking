const BoilerPlateController = require("../controllers/boilerplate.controller");


module.exports = app =>{
    app.get("/api/units", BoilerPlateController.findAllBoilerPlates)
    app.post("/api/units/create", BoilerPlateController.createBoilerPlate)
    app.get("/api/units/:id", BoilerPlateController.findOneBoilerPlate)
    app.put("/api/units/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/units/delete/:id", BoilerPlateController.deleteBoilerPlate)
}
