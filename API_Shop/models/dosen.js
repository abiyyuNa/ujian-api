var mongoose = require('mongoose')

var DosenSchema = mongoose.Schema({
    kodeDosen: {
        type :String,
        require: true
    },
    namaDosen: {
        type :String,
        require: true
    },
    alamat: {
        type:String,
        require: true
    },
    noTelp: {
        type: String,
        require: true
    },

},
{
    timestamps: true
})

var Dosen=module.exports = mongoose.model('dosens', DosenSchema)