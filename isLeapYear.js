const isLeapyear = (nb) => {
  if (nb %400 === 0) {
    return true
  }
    else {
    return false
  }
}
 console.log(isLeapyear(1523))