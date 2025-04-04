export function findWinner(user, robot) {
  if (user === robot) {
    return "tied";
  } else if (
    (user === "rock" && (robot === "scissors" ||robot==="lizard")) ||
    (user === "paper" &&( robot === "rock" || robot==="puppy")) ||
    (user === "scissors" && (robot === "paper" ||robot==="lizard")) ||
    (user === "lizard" && (robot === "paper"||robot==="puppy"))||
    (user === "puppy" && (robot === "scissors"||robot==="rock"))
  ) {
    return "user";
  } else {
    return "robot";
   
  }
}
