
const arr = [ "a", "b", "c"];

// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// arr.push(arr[0]);
// 뒷부분에 값 삽입
// arr.shift();
// 앞부분 값 삭제
// console.log(arr);

// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?

// arr.unshift(arr[arr.length-1]);
// 앞부분에 값 삽입
// arr.pop();
// 뒷부분 값 삭제
// console.log(arr);

// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?

arr.unshift(arr[1]);
// 앞부분에 값 삽입
arr.splice(2,1);
//splice는 특정 위치 값을 삭제하거나 추가할 수 있다
//(2,1)은 2번째 인덱스부터 1개를 삭제하겠다는 의미
console.log(arr);

//*슬라이더처럼 작동할 수 있게 변경해봐!
