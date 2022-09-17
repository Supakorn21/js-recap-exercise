// Question 6
// ช่วงนี้ฉันกำลังลดน้ำหนัก ฉันจึงมีการควบคุมอาหารโดยลดปริมาณน้ำตาลลง คุณสามารถช่วยฉันแยกเครื่องดื่มที่มีน้ำตาล ออกจากตู้เย็นของฉันได้หรือไม่

// โดยที่เครื่องดื่มที่มีน้ำตาลมีดังนี้

// cola

// fanta

// Hint: ใช้ filter()

const skipTooMuchSugarDrinks = (arr) => {
  let hasSugar = ["fanta", "cola"];
  let seperateDrinks = arr.filter((ele) => !hasSugar.includes(ele));
  console.log(seperateDrinks);
  return seperateDrinks;
};

skipTooMuchSugarDrinks(["lemonade", "beer", "water"]);

//['fanta', 'cola' , 'water'] --> 'water'
//['fanta', 'cola'] --> []
//['lemonade', 'beer', 'water'] --> ['lemonade', 'beer', 'water']
