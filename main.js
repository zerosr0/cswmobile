const parentElement = document.querySelector('.panels');
const childElement = document.querySelector('.panels li .first-child');

// 자식 요소의 높이를 부모 요소에 설정
parentElement.style.height = `${childElement.offsetHeight}px`;