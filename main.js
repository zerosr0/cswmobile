//home 화면 js

const bgSection = document.querySelector('.bgSection');
const bgMobile = document.querySelector('.bgMobile');
const panels = document.querySelectorAll('.panels li');

const len = panels.length - 1;
const interval = 5000;
let vsNum = 0;
let timer = null;


window.onload = () => {
  startRolling();
};


//패널 활성화함수
function activation(index) {
  for (const el of panels) el.classList.remove('on');
  panels[index].classList.add('on');
  vsNum = index;
}

//롤링함수
function rolling() {
  vsNum < len ? vsNum++ : (vsNum = 0);
  activation(vsNum);
}

//롤링 시작 함수
function startRolling() {
  activation(vsNum);
  timer = setInterval(rolling, interval);
}



//sub 화면 js
const homeDownBtn = document.getElementById('homeDownBtn');
const bottomSheet = document.getElementById('downloadSheet');
const editBtn = document.querySelector('.editBtn');
const ksCertification = document.querySelector('.ksCertification input[type="checkbox"]');
const thickType = document.querySelector('.thickType');

//발행 버튼 눌렀을 때 모달창이 뜨고 기존 페이지의 input등을 터치해도 반응되지 않도록 
homeDownBtn.addEventListener('click', () => {
  bottomSheet.classList.toggle('active');
  document.body.style.pointerEvents = "none";
  bottomSheet.style.pointerEvents = "auto";
});

//수정하기 버튼을 누르면 모달창이 사라지고 다시 기존페이지의 포인트 이벤트가 복구
editBtn.addEventListener('click', () => {
  bottomSheet.classList.remove('active');
  document.body.style.pointerEvents = "auto";
});


//ks인증서 앞의 체크 버튼을 눌렀을 때 선경을 입력할 수 있는 란이 나오게(toggle형태로)
ksCertification.addEventListener("change", () => {
  thickType.classList.toggle("active", ksCertification.checked);
});
