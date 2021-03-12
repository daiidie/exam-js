const guess = (userGuess, secret) => {
  if (userGuess > secret)  {
    return console.log("Too small!")
  }
  else if (userGuess < secret)  {
    return console.log("Too big!")
  }
  
else {
  return console.log("you win") }
}


console.log(guess(3,3))


