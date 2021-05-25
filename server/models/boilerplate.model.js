const mongoose = require("mongoose")


const BoilerPlateSchema = new mongoose.Schema({
    unit:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [4, "Name must be at least 4 chars"],
    },
    type:{
        type: String,
        required:[true, "type is required!"]
    },
    model:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [4, "Name must be at least 4 chars"],
    },
    vin: {
        type: String,
    },
    plate: {
        type: String,
    },
    state: {
        type: String,
    },
    start_date: {
        type: Date
    },
    oil_date: {
        type: Date
    }

}, {timestamps:true})


const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;
