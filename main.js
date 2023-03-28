// Nullish Coalescing Operator
const idade = 0

// 0, '', [], undefined, null => falsy

console.log('Sua idade é: ' + (idade || 'Não informado'))
console.log('Sua idade é: ' + (idade ?? 'Não informado'))

// Objetos
const user = {
    name: 'Walisson Aguirra',
    age: 23,
    address: {
        street: 'Rua teste',
        number: 123,
        // fullAddress() {
        //   return 'Rua teste, 123'
        // }
    }
}

console.log(('name' in user))
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// Desestruturação

const { address, name: nome, nickname = 'Novo usuário' } = user

console.log([address, nome, nickname])

function idadeUsuario({ age }) {
  return age;
}

console.log(idadeUsuario(user))

// Rest operator

const { name, ...rest } = user

console.log(rest)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, , third, ...restArray] = array

console.log(first, third, restArray)

// Short Syntax

const firstName = 'Walisson';
const lastName = 'Aguirra';

const person = {
  firstName,
  lastName
}

console.log('Person', person)


// Optional Chaining

console.log(user.address?.street ?? 'Não informado');
console.log(user.address?.fullAddress?.() ?? 'Função não encontrada')

// Funções para arrays

for (const i of array) {
  // console.log(i)
}

// array.forEach(item => console.log(item))

const NovoArray = array.map(item => {
  if (item % 2 == 0) {
    return item * 10;
  }

  return item
})

const novoArray = array.filter(item => item % 2 === 0)

const todosItensSaoNumeros = array.every(item => typeof item === 'number')

const peloMenosUmItemNaoEUmNumero = array.some(item => typeof item !== 'number')

const primeiroItemPar = array.find(item => item % 2 === 0)

const indicePrimeiroItemPar = array.findIndex(item => item % 2 === 0)

const soma = array.reduce((acc, item) => {
  return acc + item
})

console.log(soma)

// Template Líterals

const fullname = "Walisson Aguirra"
const message = `Bem-vindo, ${fullname ?? 'visitante'}`

console.log(message)

// Promises

fetch('http://api.github.com/users/waguirra')
  .then(response => {
    return response.json()
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('ok')
  })


async function buscaDadosNoGithub() {
  try {
    const response = await fetch('http://api.github.com/users/waguirra')
    const body = await response.json()

    console.log(body)
  } catch(err) {
    console.log(err)
  } finally {
    console.log('ok')
  }
}

buscaDadosNoGithub()

// ES Modules

import { soma as sum, sub } from './lib/math'

console.log(sub(10, 4))
console.log(sum(10, 4))

import * as math from './lib/math'

console.log(math)
