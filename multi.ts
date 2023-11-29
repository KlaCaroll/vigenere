
function multi(A: number, B: number): void {
  let i = 0;
  if (Number.isInteger(A / B)) {
    while (i <= B) {
      const result = i * A;
      console.log(`${i} * ${A} =  ${result}`);
      i += 1;
    }
  }
}
multi(5, 5);
