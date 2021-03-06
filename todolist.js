// todo list에 todoItem을 키보드로 입력하여 추가하기
// todo list의 체크박스를 클릭하여 complete 상태로 변경. 
// (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
// todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
// todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
// todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
// todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기

const ul = document.getElementById('todo-list');
const root = document.querySelector('.todoapp');
const input = document.querySelector('#new-todo-title');


input.addEventListener('keypress', keypressHandler);
root.addEventListener('click', clickEvent)
root.addEventListener('click', xBtn)
root.addEventListener('dblclick', editor)


function editor(e){
    let li = e.target.closest('li');
    if(e.target.className==='label'){
    li.classList.toggle('editing');
}
        if(e.key === 'Enter'){
            li.removeEventListener('dblclick', editor)
        }
}


function xBtn(e){
    if(e.target.className==='destroy'){
        let li = e.target.closest('li');
        ul.removeChild(li);

        console.log(e)
    }
}

function clickEvent(e){
    if(e.target.className === 'toggle'){
        console.log(e)
        // e.target.closest('li').classList.toggle('completed');
        e.target.closest('li').classList.toggle('completed');
    }
}

function keypressHandler(e){
    //input창에 텍스트르 ㄹ입력했을때 
    //ul태그안에 li 추가되었으면 함 .
    // li 안에는 키보드 누른 텍스트값 들어가긔
   
    const text = e.target.value ; 
    if(e.key === "Enter"){
        ul.insertAdjacentHTML("beforeend", rendering(text))
        const reset = e.target.value = ""
    }
}





function rendering(text){
    return       ` <li>
    <div class="view">
    <input class="toggle" type="checkbox">
    <label class="label">${text}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="새로운 타이틀">
    </li>`
}

