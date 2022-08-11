"use strict";

let testArr1 = [1, 2, 3, 4];

//A./ Tömb metódusok, amik az eredeti tömböt módosítják

//A1. A tömbhöz hozzáadnak
//.push - a tömb végéhez hozzáadja a paraméterként kapott elemet, az új tömb hosszát adja vissza

testArr1.push(5); // --> [1,2,3,4,5]
console.log(testArr1);

//.unshift - a tömb elejéhez hozzáadja a paraméterként kapott elemet, az új tömb hosszát adja vissza

testArr1.unshift(0); // --> [0,1,2,3,4,5]
console.log(testArr1);

//A2. A tömbből eltávolítanak
//.pop - a tömb utolsó elemét 'kiugrasztja' és ezt adja vissza returnként is
// ennek kapcsán nem kap paramétert sem

console.log(testArr1.pop()); // --> [0,1,2,3,4]
console.log(testArr1);

//.shift - a tömb első elemét'kiugrasztja' és ezt adja vissza returnként is

console.log(testArr1.shift()); // --> [1,2,3,4]
console.log(testArr1);

//.splice - meghatározott indexú elemtől opcionálisan megadható adott hosszú tartományban kivágja az elemeket
//gyakran az utolsó tömbelem levágására használjuk

console.log(testArr1.splice(-1)); // --> [1,2,3]
console.log(testArr1);

//A3. Más célú metódusok
//.reverse - visszaadja a tömbelemeket fordított sorrendben

testArr1.reverse(); // --> [3,2,1]
console.log(testArr1);

//.sort - sorba rendezi a tömbelemeket

testArr1.sort((a, b) => a - b); // növekvő sorrend
console.log(testArr1);
testArr1.sort((a, b) => b - a); // csökkenő sorrend
console.log(testArr1);

//----------------------------------------------------------------
//B./ Tömb metódusok, amik új tömböt adnak vissza az eredeti alapján
//.map - végigiterál a tömbelemeken és valamilyen műveletet végez rajtuk
//!!fontos, mivel nem az eredeti tömböt módosítja, ha nem tároljuk el a kimenő értéket változóba vagy íratjuk ki, akkor nem fogunk látni semmit

const testArr2 = [1, 2, 3, 4, 5, 6];
console.log(testArr2);

const mappedArray = testArr2.map((el) => el * 2); // minden paraméterként kapott elemnek annak kétszeresét adja vissza
console.log(mappedArray);

//.filter - végigiterál a tömbelemeken és valamilyen feltétel alapján, az annak megfelelő elemekből álló tömböt adja vissza

const filteredArray = testArr2.filter((el) => el % 2); // csak a páratlan elemeket szűri ki és adja vissza
console.log(filteredArray);

//.slice - az eredeti tömbnek egy szeletét adja vissza, kezdő index és hossz alapján (hasonló a splice-hoz)

const slicedArray = testArr2.slice(0, 2); // 0. indexú elemtől 2 hosszúságban lévő elemeket adja vissza
console.log(slicedArray);

//.concat - két tömb értékeit egymáshoz fűzi

const concatedArray = testArr1.concat(testArr2);
console.log(concatedArray);

//.flat - ha többdimenziós tömbünk van, a flat a paraméterként megadott szám alapján adott 'mélységben / dimenzióban'
//lapítja a tömböt, tehát egy szintre helyezi a korábban mélyebben lévő tömbelemekt

const testArr3 = [1, 2, [3, 4], [5, 6, [7, 8]]];

const flattenedArray = testArr3.flat(); // ha nem adunk meg paramétert, mindig 1 szintet lapít csak, tehát a belső [7,8] tömb érintetlen marad
console.log(flattenedArray);

//.flatMap - a flat és a map metódust kombinálja, de ez esetben nem adható meg extra paraméterként a flat mélysége, mindig 1 mélységű

//----------------------------------------------------------------
//C./Tömb metódusok, amik tömb elem indexet adnak vissza
//.indexOf - visszaadja a keresett értékű elem első előfordulási indexét, ha nincs ilyen elem akkor -1

const testArr4 = [1, 2, 1, 3, 4, 5, 6]; // hiába van két 1-es a tömbben, csak az elsőt, tehát a 0. indexet fogja visszadni
console.log(testArr4.indexOf(1));

//.findIndex - megkeresi annak az első tömbelemnek az indexét, ami a feltételnek eleget tesz

console.log(testArr4.findIndex((el) => el % 3 === 0)); // az az első elem, amelynek 3al osztva nincs maradéka --> 3 --> indexe: 3

//.find - megkeresi az első tömbelemet, ami a feltételnek eleget tesz

console.log(testArr4.find((el) => el % 2 === 0)); // az első páros elem értékét adja vissza --> 2

//----------------------------------------------------------------
//D./Tömb metódusok, amik boolean visszatérésű értékűek (true/false)
//.includes - megadja, hogy a tömb tartalmazza e a keresett elemet vagy sem

console.log(testArr4.includes(10)); // van e 10-es érték a testArr4 tömbben? Nincs, tehát false a visszatérési érték

//.some - megadja, hogy a tömbnek van e legalább egy olyan eleme, amely eleget tesz a keresési feltételnek

console.log(testArr4.some((el) => el % 5 === 0)); // van e legalább egy elem ami 5-el osztva 0 maradékot ad --> van, az 5, tehát true

//.every - megadja, hogy a tömbnek minden elemére igaz e, hogy eleget tesz a keresési feltételnek

console.log(testArr4.every((el) => el % 5 === 0)); // minden elem osztható e 5-el maradék nélkül? --> nem, tehát false

//----------------------------------------------------------------
//E.
//.join - elválasztó string alapján összefűz tömbelemeket

const testArr5 = ["cica", "kutya", "ló"];
console.log(testArr5.join("+")); // visszaadja a tömbelemekből összefűzott stringet +-al elválasztva

//----------------------------------------------------------------
//F.
//.reduce - rendkívül hasznos tömb metódus, ami a tömbelemeket egy elemmé szintetizálja megadott feltételek alapján
//alapvetően két paraméterként megkapja először az akkumulátort, utána az aktuálisan iterált elem értékét. 3. peraméterként opcionálisan az adott iteráció indexét is lekérhetjük

const testArr6 = [1, 2, 3, 4, 5, 6];

console.log(testArr6.reduce((acc, cur) => (acc += cur))); // sum usecase - összeadja az összes tömbelemet
// ezt a cikluson kívül leosztva a testArr6.length-el könnyen számolható átlag is

console.log(testArr6.reduce((acc, cur) => (acc < cur ? acc : cur))); // min usecase - kiválasztja a legkisebb tömbelemet

console.log(testArr6.reduce((acc, cur) => (acc > cur ? acc : cur))); // max usecase - kiválasztja a legnagyobb tömbelemet

//----------------------------------------------------------------
//G.
//.forEach - a legalapvetőbb tömb metódus, ami végigiterál az összes tömbelemen
//!!fontos, mivel nem az eredeti tömböt módosítja, ha nem tároljuk el a kimenő értéket változóba vagy íratjuk ki, akkor nem fogunk látni semmit

testArr6.forEach((el) => console.log(el));
