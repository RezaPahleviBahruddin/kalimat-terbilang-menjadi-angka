var Converter = function () {

	// private attributes
	listAngkaTerbilang = {
		'satu': 1, 'dua': 2, 'tiga': 3, 'empat': 4, 'lima': 5, 'enam': 6, 'tujuh': 7, 'delapan': 8, 'sembilan': 9
	}

	return {
		convert: function (kalimatTerbilang) {
			var result = ''; // variable untuk menyimpan hasil
			// potong kalimat terbilang dengan spasi
			var potonganKalimatTerbilang = kalimatTerbilang.split(' ')
			console.log(potonganKalimatTerbilang)
			// lakukan perulangan satu-satu, dari depan.
			
			for (key in potonganKalimatTerbilang) {
				var kata = potonganKalimatTerbilang[key]
				var hasilTerjemah = listAngkaTerbilang[kata]

				// jika hasil terjemah atau kata tidak ditemukan?
				if (!hasilTerjemah) {
					// sementara skip dulu
				}

				result += hasilTerjemah
			}

			return result
		}
	}
}

converter = new Converter()
result = converter.convert("satu dua tiga empat lima enam")
console.log(result)
