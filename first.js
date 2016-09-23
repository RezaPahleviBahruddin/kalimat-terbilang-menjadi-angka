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

angka1 = "lima";
angka2 = "tiga";

console.log(decode(proses(encode(angka1), encode(angka2))));