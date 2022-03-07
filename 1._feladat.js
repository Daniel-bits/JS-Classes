class Szemely {
	#vezeteknev;
	#keresztnev;
	#eletkor;
	#hobby;
	constructor(vezeteknev, keresztnev, eletkor, hobby) {
		this.#vezeteknev = vezeteknev;
		this.#keresztnev = keresztnev;
		this.#eletkor = eletkor;
		this.#hobby = hobby;
	}


	getVezeteknev() {
		return this.#vezeteknev;
	}

	setVezeteknev(value) {
		if (value < 4) {
			alert("a név túl rövid");
			return;
		}
		this.#vezeteknev = value;
	}

	getKeresztnev() {
		return this.#keresztnev;
	}

	setKeresztnev(value) {
		this.#keresztnev = value;

	}

	eletkor() {
		return this.#eletkor;
	}

	setEletkor(value) {
		if (value < 0) {
			alert("Adjon meg egy életkort");
			return;
		}
		this.#eletkor = value;
	}

	getHobby() {
		return this.#hobby;
	}

	setHobby(value) {

		this.#hobby = value;
	}

	teljesnev() {
		return this.#vezeteknev + ' ' + this.#keresztnev;
	}


}
