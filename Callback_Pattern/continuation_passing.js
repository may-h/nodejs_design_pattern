/*
    연속 전달 방식 (Then Continuation-passing style, CPS)
    Javascript에서 콜백은 다른 함수에 인자로 전달되는 함수이며, 작업이 완료되면 결과로 호출된다.
    함수형 프로그래밍에서 결과를 전달하는 이러한 방식을 연속 전달 방식(CPS)라고 한다.  
    단순히 말하면, 결과를 직접 반환하는 대신 콜백을 통해 결과를 반환하는 방식을 말한다. 
*/

//동기식 연속 전달 방식 (Synchronous CPS) 
//결과를 return으로 직접 반환하기 때문에 '직접 스타일 (direct style)' 이라고 한다.
function add (a, b) {
    return a + b 
}

//위의 코드를 연속 전달 방식으로 바꾼 코드. 
function addCps(a, b, callback) {
    callback(a+b);
}

addCps(1, 2, result => console.log(`Result: ${result}`));

// 비동기 연속 전달 방식 (Asynchronouse CPS)
