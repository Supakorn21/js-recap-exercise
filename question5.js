// Question 5
// ฉันมีปัญหาในการหาชื่อไฟล์ จาก path ที่ค่อนข้างยาว คุณสามารถช่วยฉันสร้างฟังก์ชันที่รับ path จากนั้นรีเทิร์นชื่อไฟล์กลับมาให้ฉันได้หรือไม่

// Hint: ใช้ split()

const getFileName = (str) => {
  let toArr = str.split("/");
  let lastElement = toArr[toArr.length - 1];
  console.log(lastElement);
  return lastElement;
};

getFileName("ffprobe.exe"); //
//C:/Projects/pill_tests/ascii/edabit.txt  --> "edabit.txt"
//C:/Users/johnsmith/Music/Beethoven_5.mp3 --> "Beethoven_5.mp3"
//ffprobe.exe --> "ffprobe.exe"
