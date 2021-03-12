const functionFactory = () => {
  let i = 0
  return () => {
    i += 1
    console.log(`function used ${i} times`)
  }
}

let closure = functionFactory()



const showStars = (nbBase) => {
   
    for (let i = 1; i <= nbBase; ++i) {
      console.log('*'.repeat(i))
    }
  
    }
  

