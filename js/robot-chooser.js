export function robotChooser(mode){
    const hands= mode==="advanced" ? ["paper" ,"scissors" ,"rock","puppy","lizard"]:  ["paper" ,"scissors" ,"rock"]
    const randomIndex=Math.trunc(Math.random() *hands.length);
   return hands[randomIndex]
}