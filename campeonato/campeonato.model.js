const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String, unique: true, required: true },
    //hash: { type: String, required: true },
    fecha: { type: String, required: true },
    lugar: { type: String, required: true },
    descripcion: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    inscriptos: [
        {
        nombre: {type:String},
        apellido: {type: String},
        edad: {type:Number},
        id: {type:String}
    }
        ]
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
       // delete ret.hash;
    }
});

module.exports = mongoose.model('Campeonato', schema);