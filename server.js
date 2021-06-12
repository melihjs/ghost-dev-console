const chalk = require('chalk');
let hataMesaj = "Eğer hata var ise sorun! https://discord.gg/yW4Mj4J8EA"
let hataRenk = chalk.red;
let yesils = chalk.green;
let mavis = chalk.mavi;
let cyans = chalk.cyan;
let magentas = chalk.magenta;
let saris = chalk.yellow;
let beyazs = chalk.white;
let gris = chalk.gray;
let siyahs = chalk.black;
let altcizilis = chalk.underline;
let kirmizis = chalk.red;

module.exports = {
  yaz: function yaz(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(metin);
  },
  hata: function hata(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(hataRenk(metin));
  },
  yesil: function yesil(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(yesils(metin));
  },
  mavi: function mavi(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(mavis(metin));
  },
  cyan: function cyan(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(cyans(metin));
  },
  magenta: function magenta(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(magentas(metin));
  },
  sari: function sari(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(saris(metin));
  },
  beyaz: function beyaz(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(beyazs(metin));
  },
  gri: function gri(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(gris(metin));
  },
  siyah: function siyah(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(siyahs(metin));
  },
  altcizili: function altcizili(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(altcizilis(metin));
  },
  kirmizi: function kirmizi(metin) {
    if(!metin) console.log(hataRenk(hataMesaj));
    return console.log(kirmizis(metin));
  }
};
