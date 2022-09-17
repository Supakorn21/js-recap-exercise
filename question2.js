// Question 2
// ฉันกำลังพยายามดูการบรรยายเพื่อเรียนสำหรับการสอบครั้งต่อไป แต่ฉันกลับถูกรบกวนด้วย meme tiktok anime และอื่นๆ บนแพลตฟอร์มวิดีโอโปรดของฉัน

// งานของคุณคือช่วยฉันสร้างฟังก์ชันที่ตรวจสอบว่ามีคำหรือวลีต่อไปนี้อยู่ในข้อความหรือไม่:

// "meme"

// "tiktok"

// "anime"

// "football"

// ถ้ามีข้อความเหล่านี้ให้รีเทิร์นคำว่า "NO!" ถ้าไม่มีให้รีเทิร์นคำว่า "Safe watching!"

const main = (sentences) => {
  let toArr = sentences.split(" ");
  let word = ["meme", "tiktok", "anime", "football"];
  let includeCheck = toArr.filter((value) => word.includes(value))[0];
  console.log(includeCheck);

  const result = word.includes(includeCheck) ? "No!" : "Safe Watching!";
  console.log(result);
};

main("The most popular viral tiktok videos");
// The most popular viral tiktok videos
// Top 10 football players of all time
// How to ace BC Calculus in 5 Easy Steps
