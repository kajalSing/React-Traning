
export const  getRandomNumber = (max) => {
  Math.floor(Math.random() * Math.floor(max));
}



export const  getRoundRobin = (selected, random) => {
  selected === total -1 ? 0 :selected + 1;

}