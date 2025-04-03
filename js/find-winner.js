export function findWinner(user, robot) {
  if (user === robot) {
    return "tied";
  } else if (
    (user === "rock" && robot === "scissors") ||
    (user === "paper" && robot === "rock") ||
    (user === "scissors" && robot === "paper")
  ) {
    return "user";
  } else {
    return "robot";
   
  }
}
