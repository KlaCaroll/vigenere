const paragraph = 'The 9 quick brown 23 fox jumps over the lazy dog. It barked.';
const array: any = [];
const index = paragraph.split(' ');
console.log(paragraph);
const regex = /[a-z]/g;
for (let i = 0; i < index.length; i += 1 ) {
    let isLetter = index[i].match(regex);
    if ( isLetter !== null)
    array.push(index[i]);

    
}

console.log(array);

console.log((-90)%360);
const mod = (-90 % 360 + 360) % 360;
console.log(mod);
console.log(((-17)*-1)%26);
