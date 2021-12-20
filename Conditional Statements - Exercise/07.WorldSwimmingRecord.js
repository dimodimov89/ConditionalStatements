function solve(input) {
  let secondsWR = Number(input[0]);
  let meters = Number(input[1]);
  let secondsFor1Meter = Number(input[2]);
  let secondsAdded = Math.floor(meters / 15) * 12.5;
  let swimingTime = meters * secondsFor1Meter + secondsAdded;

  if (swimingTime >= secondsWR) {
    let secondsSlower = swimingTime - secondsWR;
    console.log(
      `No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      ` Yes, he succeeded! The new world record is ${swimingTime.toFixed(
        2
      )} seconds.`
    );
  }
}
solve(["55555.67", "3017", "5.03"]);
