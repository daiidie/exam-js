const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let nbUsers = tab[0] 
for (let i = 0; i < tab.length; ++i) {
  nbUsers += tab[i].length
}

console.log(`${tab[0]}, lenght : ${tab[0].length}`)
console.log(`${tab[1]}, lenght : ${tab[1].length}`)
console.log(`${tab[2]}, lenght : ${tab[2].length}`)
console.log(`${tab[3]}, lenght : ${tab[3].length}`)
console.log(`${tab[4]}, lenght : ${tab[4].length}`)