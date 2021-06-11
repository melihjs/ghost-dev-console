const chalk = require('chalk');
let hataMesaj = "Eğer hata var ise sorun! https://discord.gg/yW4Mj4J8EA"
let hataRenk = chalk.red;

module.exports = {
  yaz: function yaz(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(metin);
  },
  hata: function hata(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(hataRenk(metin));
  }
};