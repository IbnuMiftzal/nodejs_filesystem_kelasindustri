const fs = require('node:fs'); 
fs.writeFile(
             'biodata.txt',
             'Hello Nama Saya M Ibnu Miftzal, Kelas XI TJKT 2, Usia 16 Tahun, Alamat Rumah Kec Rawalumbu, JL Pangandaran C, No 176',
              function(error) {
                if(error) {
                    console.error('Terjadi Error', error);
                } else {
                    console.log('File Berhasil DIbuat');
                }
              } 

)