type clother = {
  name: string,
  price: number,
  classfied: string,
  disc: number,
}

const clothers: clother[] = [
  {name: "Camiseta", price: 50.33, classfied: "Verão", disc: 5},
  {name: "Casaco", price: 99, classfied: "Inverno", disc: 10},
  {name: "Biquíne", price: 80, classfied: "Banho", disc: 4},
  {name: "Cueca", price: 15, classfied: "Íntima", disc: 7}
]


function discounts(array: clother[]): any {
  
  return array.map(item => [{...item, total: item.price - (item.price * (item.disc / 100))}])
}

console.log(discounts(clothers))


