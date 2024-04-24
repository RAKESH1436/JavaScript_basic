const marvel_hero=["sanjay","hiii","love"];
const dc_heri=["rahul","nishsa","batman"];
marvel_hero.push(dc_heri);
console.log(marvel_hero);
console.log(marvel_hero[3][1]);
const all_new=[...marvel_hero,...dc_heri];
console.log(all_new);
const another=[1,2,3,[4,5,6],7,[6,7],[4,5]];
const real_anothe=another.flat(Infinity);
console.log(real_anothe);

console.log(Array.isArray("sanjay"));
console.log(Array.from("sanjay"));

let score1=100;
let score2=200;
let score3=300;
let arrn=Array.of(score1,score2,score3);
console.log(arrn)


