var Converter = function () {

	// private attributes
	listAngkaTerbilang = {
		'nol': '0', 'satu': 1, 'dua': 2, 'tiga': 3, 'empat': 4, 'lima': 5, 'enam': 6, 'tujuh': 7, 'delapan': 8, 'sembilan': 9
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

		return ubahKataSpesialMenjadiNol(results)
	}

	/** 
	* fungsi ini akan mengubah kata ratus ribu, ribu, ratus menjadi 0 
	* sesuai dengan kebutuhan
	*/
	function ubahKataSpesialMenjadiNol(potonganKalimatTerbilang) {
		var ratusRibuan = potonganKalimatTerbilang.indexOf('ratus') < potonganKalimatTerbilang.indexOf('ribu') 
			&& potonganKalimatTerbilang.indexOf('ratus') > -1 && potonganKalimatTerbilang.indexOf('ribu') > -1

		var puluhRibuan = potonganKalimatTerbilang.indexOf('puluh') < potonganKalimatTerbilang.indexOf('ribu') 
			&& potonganKalimatTerbilang.indexOf('puluh') > -1 && potonganKalimatTerbilang.indexOf('ribu') > -1

		console.log(ratusRibuan)

		// cek ribuan
		var indexRibuan = potonganKalimatTerbilang.indexOf('ribu')
		if (indexRibuan > -1) {
			// hapus kata ribu dari array
			potonganKalimatTerbilang.splice(indexRibuan, 1)

			panjangArray = potonganKalimatTerbilang.length
			// panjangArray -= indexRibuan - 1

			// apakah panjang array sudah sama dengan panjang seharusnya?
			panjangSeharusnya = 4

			if (ratusRibuan) {
				panjangSeharusnya = 6
			} else if (potonganKalimatTerbilang.indexOf('puluh') > -1){
				panjangSeharusnya = 5
			}

			console.log(potonganKalimatTerbilang)
			console.log("cek ribuan, panjangSeharusnya -> " + panjangSeharusnya)
			console.log('panjang array -> ' + panjangArray)

			if (panjangArray < panjangSeharusnya) {
				selisih = Math.abs(panjangArray - panjangSeharusnya)
				console.log('ribuan kurang dari ' + panjangSeharusnya)
				potonganKalimatTerbilang = nolTambahan(potonganKalimatTerbilang, indexRibuan, selisih)
			}
			console.log()
		}

		// cek ratusan
		var indexRatusan = potonganKalimatTerbilang.indexOf('ratus')
		if (indexRatusan > -1) {
			
			potonganKalimatTerbilang.splice(indexRatusan, 1)

			panjangArray = potonganKalimatTerbilang.length
			panjangArray -= indexRatusan - 1

			panjangSeharusnya = 3

			if (ratusRibuan) {
				panjangSeharusnya = 6
				// if (potonganKalimatTerbilang.indexOf('puluh') > -1) {
				// 	panjangSeharusnya = 7
				// }
			}

			console.log(potonganKalimatTerbilang)
			console.log("cek ratusan, panjangSeharusnya -> " + panjangSeharusnya)
			console.log("pasjang array -> " + potonganKalimatTerbilang.length)
			// apakah panjang array sudah sama dengan panjang seharusnya?
			if (panjangArray < panjangSeharusnya) {
				selisih = Math.abs(panjangArray - panjangSeharusnya)
				console.log('ratusan kurang dari ' + panjangSeharusnya)
				potonganKalimatTerbilang = nolTambahan(potonganKalimatTerbilang, indexRatusan, selisih)
			}

		}

		// cek puluhan
		var index = potonganKalimatTerbilang.indexOf('puluh')
		if (index > -1) {
			potonganKalimatTerbilang.splice(index, 1)

			panjangArray = potonganKalimatTerbilang.length
			panjangArray -= index - 1

			panjangSeharusnya = puluhRibuan ? 5	: 2
			// apakah panjang array sudah sama dengan panjang seharusnya?
			if (panjangArray < panjangSeharusnya) {
				selisih = Math.abs(panjangArray - panjangSeharusnya)
				console.log('ribuan kurang dari ' + panjangSeharusnya)
				potonganKalimatTerbilang = nolTambahan(potonganKalimatTerbilang, index, selisih)
			}

		}

		return potonganKalimatTerbilang
	}

	function nolTambahan(potonganKalimatTerbilang, index, jumlahNol) {
		console.log([potonganKalimatTerbilang, index, jumlahNol])
		for (var i = index; i < index + jumlahNol; i++) {
			// potonganKalimatTerbilang[i] = 'nol'
			potonganKalimatTerbilang.splice(i, 0, 'nol')
		}

		console.log(potonganKalimatTerbilang)
		return potonganKalimatTerbilang
	}

	return {
		convert: function (kalimatTerbilang) {
			var result = ''; // variable untuk menyimpan hasil
			// potong kalimat terbilang dengan spasi
<<<<<<< HEAD
			var potonganKalimatTerbilang = kalimatTerbilang.split(' ')
			// console.log(potonganKalimatTerbilang)
=======
			var potonganKalimatTerbilang = potong(kalimatTerbilang)
			console.log('\ninputan setelah diproses: ')
			console.log(potonganKalimatTerbilang)
>>>>>>> 5ba1e12fe8d8a14f8e8b4b34de89421ea58b55b2
			// lakukan perulangan satu-satu, dari depan.
			
			for (key in potonganKalimatTerbilang) {
				var kata = potonganKalimatTerbilang[key]
				var hasilTerjemah = listAngkaTerbilang[kata]

				// jika hasil terjemah atau kata tidak ditemukan?
				if (!hasilTerjemah) {
					// jika masih ada kata spesial yang tersisa
					if (kata == 'ribu' || kata == 'ratus' || kata == 'puluh') {
						hasilTerjemah = '0'
					} else {
						// biar tidak undefined, jadikan string kosong
						hasilTerjemah = ''
					}
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

var converter = new Converter()
var inputan = "empat ratus lima puluh enam ribu tujuh ratus"
var result = converter.convert(inputan)

console.log(inputan)
console.log(result)
