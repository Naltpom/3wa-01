class Model {
	// constructeur
	constructor(tableName) {
		this._table = tableName;
	}

	get table() {
		return this._table;
	}

	getTable() {
		return this._table;
	}

	set table(tableName) {
		this._table = tableName;
	}

    setTable(tableName) {
		this._table = tableName;
	}
}

const m = new Model("posts");

m.table; // accéder à la valeur de l'attribut, l'accesseur get table est invoqué
console.log(m._table);
m.table = "POSTS"; // modifier l'attribut, l'accesseur set table est invoqué
console.log(m._table);

console.log(m.getTable());
m.setTable('test');
console.log(m.getTable());
