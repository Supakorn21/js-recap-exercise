// Question 1
// สร้างฟังก์ชันที่ตรวจสอบว่า temp เป็นน้ำเดือดหรือไม่ tempสามารถรับค่าเป็นฟาเรนไฮต์และเซลเซียสได้ ( จุดเดือดของน้ำคือ 212F ในฟาเรนไฮต์และ 100C ในเซลเซียส )

// Hint: ใช้ charAt() และ parseInt()

// const checkingTempUnit = (value) => {
//     if(typeof value !== 'string'){
//         return false
//     }

//     return /^[a-zA-Z]+$/.test(char)
// }

const isBoiling = (str) => {
  let toArr = str.split("");
  let lastValue = toArr[toArr.length - 1];

  let number = toArr.filter((value) => value !== lastValue);
  number = number.toString().replace(/,/g, "");

  let result =
    (lastValue === "F" && number >= 212) || (lastValue === "C" && number >= 100)
      ? true
      : false;

  console.log(result);
};
isBoiling("99C");
