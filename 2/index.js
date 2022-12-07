import { readFileSync } from "fs";
const mappingObj = {
  X: 1,
  Y: 2,
  Z: 3,
};
const data = readFileSync("./input.txt", { encoding: "utf8", flag: "r" });
const scores = data.split("\n");

const calculateScore = () => {
  const total = scores.reduce((acc, curr) => {
    let [opponentMove, myMove] = curr.split(" ");
    myMove = mappingObj[myMove];
    if (
      (myMove === 1 && opponentMove === "A") ||
      (myMove === 2 && opponentMove === "B") ||
      (myMove === 3 && opponentMove === "C")
    ) {
      return acc + 3 + myMove;
    }
    if (
      (myMove === 1 && opponentMove === "B") ||
      (myMove === 2 && opponentMove === "C") ||
      (myMove === 3 && opponentMove === "A")
    ) {
      return acc + myMove;
    }
    if (
      (myMove === 1 && opponentMove === "C") ||
      (myMove === 2 && opponentMove === "A") ||
      (myMove === 3 && opponentMove === "B")
    ) {
      return acc + 6 + myMove;
    }
  }, 0);
  console.log(total);
  return total;
};

const calculateEndScore = () => {
  const mappingScores = {
    X: 0,
    Y: 3,
    Z: 6,
  };
  const equalMove = {
    A: 1,
    B: 2,
    C: 3,
  };
  const losingMove = {
    A: 3,
    B: 1,
    C: 2,
  };
  const winningMove = {
    A: 2,
    B: 3,
    C: 1,
  };
  const total = scores.reduce((acc, curr) => {
    let [opponentMove, myMove] = curr.split(" ");
    const wantedResult = mappingScores[myMove];
    myMove = mappingObj[myMove];
    if (wantedResult === 0) {
      return acc + losingMove[opponentMove];
    }
    if (wantedResult === 3) {
      return acc + equalMove[opponentMove] + wantedResult;
    }
    if (wantedResult === 6) {
      return acc + winningMove[opponentMove] + wantedResult;
    }
  }, 0);
  console.log(total);
  return total;
};

calculateScore();
calculateEndScore();
