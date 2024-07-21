const foo = () => {
  i = 0
  x = 0
  for (let i = 1; i < 11; i++) {
    console.log("-----------");
    for (x = 1; x < 11; x++) {
      console.log(`${i} ** ${x} = ${i ** x}`);
    }
  }
}

foo()