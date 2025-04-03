export function robotChooser(){
    const hands= ["paper" ,"scissors" ,"rock"];
    const randomIndex=Math.trunc(Math.random() *hands.length);
   return hands[randomIndex]
}