function Telefon(marka, kolor, cena) {
	this.marka = marka;
	this.kolor = kolor;
	this.cena = cena;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6S = new Telefon("Apple", "różowy", "3199");

iPhone6S.printInfo();

var GalaxyS6 = new Telefon("Samsung", "złoty", "1999");

GalaxyS6.printInfo();

var One = new Telefon("OnePlus", "złoty", "499");

One.printInfo();
