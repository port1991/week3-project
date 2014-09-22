/* Database Controller */   //   http://sqlitebrowser.org/   for databases
var db = Ti.Database.open("db"); // initializing db
db.execute('CREATE TABLE IF NOT EXISTS btc_info (id INTEGER PRIMARY KEY, high TEXT, low TEXT, average TEXT, vol TEXT, vol_cur TEXT, last TEXT, buy TEXT, sell TEXT, updated TEXT)');
db.close();
// Retrieve ALL data from the databasee
exports.findAll = function() {
	var data = new Array();
	db = Titanium.Database.open('db');
	var row_databse = db.execute('SELECT * FROM btc_info');  //btc_info is defined in btc.sqlite file		
	while (row_databse.validRow) {
		data['high'] = row_databse.fieldByName('high');
		data['low'] = row_databse.fieldByName('low');
		data['avg'] = row_databse.fieldByName('average');
		data['vol'] = row_databse.fieldByName('vol');
		data['vol_cur'] = row_databse.fieldByName('vol_cur');
		data['last'] = row_databse.fieldByName('last');
		data['buy'] = row_databse.fieldByName('buy');
		data['sell'] = row_databse.fieldByName('sell');
		data['updated'] = row_databse.fieldByName('updated');
		row_databse.next();
	}
	db.close();
	
	return data;
};

// saving all countries from api into sqlite db
exports.saveBtcInfo = function(json) {
	db = Titanium.Database.open('db'); // initializing database
	//console.log(json.ticker.high);
	db.execute("INSERT OR REPLACE into btc_info(id, high, low, average, vol, vol_cur, last, buy, sell, updated) VALUES(?,?,?,?,?,?,?,?,?,?)", 1, json.ticker.high, json.ticker.low, json.ticker.avg, json.ticker.vol, json.ticker.vol_cur, json.ticker.last, json.ticker.buy, json.ticker.sell, json.ticker.updated);
	db.close(); // closing database
};