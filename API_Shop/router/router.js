const mahasiswasController= require('../controller/mahasiswasController')
const dosenController= require('../controller/dosenController')
const matkulController= require('../controller/matkulController')


module.exports = app => {
    app.get('/', mahasiswasController.home)

    app.get('/mahasiswas', mahasiswasController.listMahasiswa)
    app.get('/mahasiswas/:id', mahasiswasController.detailMahasiswa)
    app.post('/mahasiswas/', mahasiswasController.tambahMahasiswa)
    app.put('/mahasiswas/:id', mahasiswasController.ubahMahasiswa)
    app.delete('/mahasiswas/:id', mahasiswasController.hapusMahasiswa)

        //api dosen
        app.get('/dosens', dosenController.listDosen)
        app.get('/dosens/:id', dosenController.detailDosen)
        app.post('/dosens/', dosenController.tambahDosen)
        app.put('/dosens/:id', dosenController.ubahDosen)
        app.delete('/dosens/:id', dosenController.hapusDosen)
    
            //api matkul
            app.post('/matkul/:id', matkulController.addToMatkul)
            app.get('/matkul/:id', matkulController.showMatkul)
            app.put('/matkul/:id',matkulController.editMatkul)
            app.delete('/matkul/:id',matkulController.deleteMatkul)
            app.get('/matkul/remove/:id',matkulController.removeMatkul)

                // // cekout
                // app.get('/cart/checkout/:id', cartController.checkOut)
}