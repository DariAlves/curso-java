const kakashi = ['Sasuke', 'Naruto', 'Sakura']
const gai = ['Tenten', 'Neji', 'Rock Lee']
const kurenai = ['Shino', 'Hinata', 'Kiba']
const asuma = ['Chouji', 'Shikamaru', 'Ino']

const konoha = [...kakashi,...gai,...kurenai,...asuma]

for(let shinobi of konoha) {
    console.log(konoha.indexOf(shinobi) + 1, shinobi)
}
/* Output
    1 Sasuke
    2 Naruto
    3 Sakura
    4 Tenten
    5 Neji
    6 Rock Lee
    7 Shino
    8 Hinata
    9 Kiba
    10 Chouji
    11 Shikamaru
    12 Ino
*/