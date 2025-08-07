import { results, mbtis } from "./data.js";

// console.log(results[0].title)
// console.log(results[0].results[0]);
// console.log(results[0].jobs[1]);
// console.log({ intp: mbtis.intp });
//console.log(mbtis.intp)

//http://127.0.0.1:5500/result.html?mbti=infp
//쿼리스트링을 가져와야 함
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
console.log(mbtis[mbti])
// 받아온 ?mbti=infp에 따른 results 결과를 받아서 변수로
const resultMbti = results[mbtis[mbti]];
console.log(resultMbti);

// 1.각각의 태그를 지정해야 함.
const titleEl = document.querySelector(".page-title");
titleEl.innerHTML = resultMbti.title;

const character = document.querySelector(".character");
character.src = resultMbti.character;

const boxEls = document.querySelectorAll(".box")
boxEls.forEach(function(box, i){
  box.innerHTML = resultMbti.results[i]
});

const jobsEls = document.querySelectorAll(".job")
jobsEls.forEach(function(jobs, i){
  jobs.innerHTML = resultMbti.jobs[i]
})

const lectureEl = document.querySelector(".lecture")
lectureEl.href = resultMbti.lectureUrl

const lectureImgEl = document.querySelector(".lecture img")
lectureImgEl.src = resultMbti.lectureImg

//위의 내용에 innerHTML 로 표시
//단, queryselecterAll로 가져온 아이들은
//foreach 구문 이용


//mbti의 해당 숫자에따라 결과 바뀜
