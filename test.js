const add = requuire("./index");

if (add(20, 30) === 50) {
  console.log("the result is correct");
  process.exit(0);
} else {
  console.log("the result is incorrect");
  process.exit(1);
  
}