class Etelek {
	#nev;
	#ar;
	#kategoria;
	#osszetevok = [];

	constructor(nev, ar, kateg, osszet) {
		this.setName(nev);
		this.setPrice(ar);
		this.setCategory(kateg);
		this.setIngredient(osszet);
	}

	getName() {
		return this.#nev;
	}

	setName(nev) {
		if (nev === "" || nev.length <= 4) {
			alert('Nevet meg kell adnia');
			return;}
		this.#nev = nev;
	}
	getPrice() {
		return this.#ar;
	}

	setPrice(price) {
		if (price <= 100) {
			alert('Valós árat írjon be');
			return;}
		this.#ar = price;
	}

	getCategory() {
		return this.#kategoria;
	}

	setCategory(categ) {
		if (categ === "" || categ === undefined) {
			alert('Írjon be kategóriát');
			return;}
		this.#kategoria = categ;
	}

	getIngredient() {
		return this.#osszetevok;
	}

	setIngredient(osszet) {
		if (!osszet || osszet.trim() === "") {
			alert('Adjon meg összetevőket');
			return;}
		this.#osszetevok.push(osszet);
	}

	toString() {
		return `<tr><td>${this.#nev}</td>
				<td>${this.#ar}</td>
				<td>${this.#kategoria}</td>
				<td>${this.#osszetevok}</td></tr>`;
	}

}