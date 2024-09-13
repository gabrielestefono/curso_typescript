interface Person {
    nome: string;
}

interface Person {
    age: number;
}

const somePerson: Person = {
    nome: "Gabriel",
    age: 30
}

console.log(somePerson)

type PersonType = {
    nome: string;
}

// type PersonType = { // Dá erro
//     age: number;
// }

