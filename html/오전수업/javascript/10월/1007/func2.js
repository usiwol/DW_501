// js_control2.html

/*

    1. window.onload 에서
    전역으로 3개의 정수값 배열로 저장

    2. 3개의 정수값은 중복없음(범위 : 1~9 )

    3. button 클릭하면 number_input 함수 실행
    4. number_input 함수에서 세개의 input 값 가져오기
    5. number_input 함수에서 number_check 함수 실행
    6. number_check 함수에서 input값 3개 전달
    7. number_check 함수에서 input 값과 배열과 비교하기
    8. print함수에서 div#result 에 일치하는 값이 몇개 인지 출력

*/

var play = new Array();
window.onload = function(){
    // 2. 3개의 정수값은 중복없음(범위 : 1~9 )
    for(var i=0; i<3;){
        var tmp = Math.floor(Math.random()*9) + 1;
        if(play.indexOf(tmp) == -1){
            play.push(tmp);
            i++
        }
    }
    // 3. button 클릭하면 number_input 함수 실행
    var bt = document.querySelector("#send");
    bt.addEventListener("click", number_input);
};

function number_input(){
    // 4. number_input 함수에서 세개의 input 값 가져오기
    // class 명으로 가져오기
    var user = new Array();
    var num = document.getElementsByClassName('num');
    user.push(parseInt(num[0].value));
    user.push(parseInt(num[1].value));
    user.push(parseInt(num[2].value));
    for(var i in num)num[i].value = "";
    num[0].focus();
    if(input_check(user)){
        alert("잘못된 숫자 입력입니다. 중복없이 1~9중에서 입력하세요");
        return;
    }
    number_check(user);
}
function input_check(user){
    for(var i in user){
        if(user[i]<1 || user[i]>9)
            return true;
    }
    if(user[0] == user[1] || user[0] == user[2] || user[1] == user[2])
        return true;

    return false
}

// 5. number_input 함수에서 number_check 함수 실행
function number_check(u){
    var strike = 0 , ball = 0;
    if(u[0] == play[0])     strike++;
    if(u[1] == play[1])     strike++;
    if(u[2] == play[2])     strike++;
    if(u[0] == play[1] || u[0] == play[2]) ball++;
    if(u[1] == play[0] || u[1] == play[2]) ball++;
    if(u[2] == play[0] || u[2] == play[1]) ball++;

    print(strike, ball);

    // var count = 0;
    // for(var i in play){
    //     // 6. number_check 함수에서 input값 3개 전달
    //     if(u.indexOf(play[i]) != -1){
    //         count++;
    //     }
    // }
    // print(count);
}
function print(strike, ball){
    var res = document.querySelector("#result");
    var div = document.createElement("div");
    var out = 3-strike-ball;
    div.appendChild(document.createTextNode(strike + "스트라이크"+ball+"볼 "+out+"아웃"));
    res.prepend(div);
}

// 나의 오답
// var n = new Array();

// // 중복값 없애기
// while ( n.length != 3 ){
//     let num = Math.floor(Math.random() * 9 ) + 1;
//     if( n.indexOf(num) ==  -1){
//         n.push(num);
//     }
// }

// window.onload = function(){
//     var nb = document.querySelectorAll(".num");

//     for(var i=0; i<nb.length; i++){
//         nb[i].innerHTML = n[i];
//         // check(this.innerHTML);
//     }

// }
