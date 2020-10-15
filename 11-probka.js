const prompt = require('prompt-sync')();

const a = prompt('a: ')
const b = prompt('b: ')
const c = prompt('c: ')

const probka = () => {
    if( a+b > c && c +a >b && c +b >a){
        return 'три угольник болот '
    }else {
        return'три угольник болбойт '
    }
}

console.log(probka())
