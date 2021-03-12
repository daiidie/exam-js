const podium = (tab) =>{
  let MAX = tab[0]
  for(const elem of tab) {
    if (MAX < elem) {
      MAX = elem
    }
  }
  return MAX
}
  console.log(podium([100,1,200,52,63,87,99]))