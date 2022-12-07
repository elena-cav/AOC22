import { readFileSync } from "fs";

const calculateCalories = () => {
  const data = readFileSync("./input.txt", { encoding: "utf8", flag: "r" });
  const caloriesByElves = data.split("\n\n");
  const elvesCalories = caloriesByElves.map((elf) => {
    const food = elf.split("\n");
    const sum = food.reduce((acc, curr) => acc + Number(curr), 0);
    return sum;
  });
  const highestCaloriesAmount = Math.max(...elvesCalories);

  const [a, b, c] = elvesCalories.sort((a, b) => b - a);
  const threeHighestCalories = a + b + c;
  console.log(highestCaloriesAmount);
  console.log(threeHighestCalories);

  return highestCaloriesAmount;
};

calculateCalories();
