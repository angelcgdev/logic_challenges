// sencontrar el indice de la primera aparicion de un string ( word) dentro de otro (book)
// es decode, el objeto del ejercicio es determinar si el primer string, word, esta dentro del segundo book, y en dicho caso, devolver el indice en el que esto ocurre.

const word = 'casa';
const book = 'En la casaca esta en la casa de mi tia';
// result 6

function findWord (book, word){
    const arrBook = book.split(' ');
    let cont = 0;
    for (i = 0; i < arrBook.length; i++ ){
        if(arrBook[i] === word){
            return cont;
        }else{
            cont = cont + arrBook[i].length + 1;
        }
    }

    return arrBook;
}

console.log(findWord(book, word));
