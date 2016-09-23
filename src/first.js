var Converter = function () {

	// private attributes
	listAngkaTerbilang = {
		'nol': 0, 'satu': 1, 'dua': 2, 'tiga': 3, 'empat': 4, 'lima': 5, 'enam': 6, 'tujuh': 7, 'delapan': 8, 'sembilan': 9
	}

	/***
	* fungsi ini digunakan untuk memotong inputan, menjadi array
	**/
	function potong (kalimatTerbilang) {
		var results = kalimatTerbilang.split(' ')

		// periksa jika ada kalimat belas
		var indexBelas = results.indexOf('belas')

		while (indexBelas > -1) { // jika ketemu
			// ubah kata belas menjadi satu angka sebelumnya
			// lalu angka sebelumnya diubah menjadi satu

			// contoh -> sembilan belas -> jadi -> satu sembilan

			results[indexBelas] = results[indexBelas-1];
			results[indexBelas-1] = 'satu'

			// periksa lagi apakah ada kata belas lainnya pada inputan
			indexBelas = results.indexOf('belas')
		}

		return results
	}

	return {
		convert: function (kalimatTerbilang) {
			var result = ''; // variable untuk menyimpan hasil
			// potong kalimat terbilang dengan spasi
			var potonganKalimatTerbilang = potong(kalimatTerbilang)
			console.log(potonganKalimatTerbilang)
			// lakukan perulangan satu-satu, dari depan.
			
			for (key in potonganKalimatTerbilang) {
				var kata = potonganKalimatTerbilang[key]
				var hasilTerjemah = listAngkaTerbilang[kata]

				// jika hasil terjemah atau kata tidak ditemukan?
				if (!hasilTerjemah) {
					// biar tidak undefined, jadikan string kosong
					hasilTerjemah = ''
				}

				result += hasilTerjemah
			}

			return result
		}
	}
}

function encode(angka) {
	if (angka.toLowerCase() == "satu") 
		return 1;
	else if(angka.toLowerCase() == "dua")
		return 2;
	else if(angka.toLowerCase() == "tiga")
		return 3;
	else if(angka.toLowerCase() == "empat")
		return 4;

	else if(angka.toLowerCase() == "lima")
		return 5;
	else if(angka.toLowerCase() == "enam")
		return 6;
	else if(angka.toLowerCase() == "tujuh")
		return 7;
	else if(angka.toLowerCase() == "delapan")
		return 8;
	else if(angka.toLowerCase() == "sembilan")
		return 9;
	else if(angka.toLowerCase() == "sepuluh")
		return 10;
	else 
		return angka;
}

function proses(angka1, angka2) {
	return angka1 + angka2;
}

function decode(hasil) {
	if (hasil == 1) 
		return "satu";
	else if(hasil == 2)
		return "dua";
	else if(hasil == 3)
		return "tiga";
	else if(hasil == 4)
		return "empat";
	else if(hasil == 5)
		return "lima";
	else if(hasil == 6)
		return "enam";
	else if(hasil == 7)
		return "tujuh";
	else if(hasil == 8)
		return "delapan";
	else if(hasil == 9)
		return "sembilan";
	else if(hasil == 10)
		return "sepuluh";
	else 
		return hasil;
}


var converter = new Converter()
var inputan = "lima ratus sembilan belas"
var result = converter.convert(inputan)

console.log(inputan)
console.log(result)