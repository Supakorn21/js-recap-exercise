// Question 4
// กำหนดอาร์เรย์สองชุดซึ่งแทนแซนวิชสองอัน ให้รีเทิร์นว่าแซนวิชทั้งสองใช้ขนมปังประเภทเดียวกันหรือไม่ โดยที่ขนมปังจะอยู่ที่อาร์เรย์ตำแหน่งแรกและอาร์เรย์ตำแหน่งสุดท้ายเสมอ

const hasSameBread = (arr1, arr2) => {
  let topBread1 = arr1[0];
  let BottomBread1 = arr1[arr1.length - 1];
  let topBread2 = arr2[0];
  let BottomBread2 = arr2[arr2.length - 1];

  const result =
    topBread1 !== BottomBread1 ||
    topBread2 !== BottomBread2 ||
    topBread1 !== topBread2 ||
    BottomBread1 !== BottomBread2
      ? false
      : true;

  console.log(result);
};

hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
);
// ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]
// ["brown bread", "chicken", "brown bread"],["white bread", "chicken", "white bread"]
// ["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]
