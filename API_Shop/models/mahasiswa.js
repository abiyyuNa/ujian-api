var mongoose = require('mongoose')

var MahasiswaSchema = mongoose.Schema({
    nim: {
        type :String,
        require: true
    },
    nama: {
        type :String,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    jurusan: {
        type:String,
        require: true
    },
    
    semester: {
        type:String,
        require: true
    },
    image: {
        type: String
    },
},
{
    timestamps: true
})

var Mahasiswa=module.exports = mongoose.model('mahasiswas', MahasiswaSchema)