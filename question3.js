// Question 3
// แป้นพิมพ์ของฉันมีปัญหา ฉันต้องพิมพ์ตัวเลขแทนตัวอักษรบางตัว ฉันอยากให้ช่วยสร้างฟังก์ชันแปลงข้อความของฉัน โดยที่

// อักษร A แทนที่ด้วยเลข 4

// อักษร S แทนที่ด้วยเลข 5

// อักษร O แทนที่ด้วยเลข 0

// อักษร I แทนที่ด้วยเลข 1

// Hint: ใช้ includes()

const keyboardMistakes = (str) => {
  let results = str
    .replaceAll(4, "A")
    .replaceAll(5, "S")
    .replaceAll(0, "O")
    .replaceAll(1, "I");
  console.log(results);
};

keyboardMistakes("51NG4P0RE");
keyboardMistakes("DUNL1N");
keyboardMistakes("MUB45H1R");
// DUNL1N
// MUB45H1R
// 51NG4P0RE
