const input = document.getElementById('new-todo-title');
const ul = document.getElementById('todo-list');
input.addEventListener('keypress', onKeypressHandler);


function onKeypressHandler(event){
    const title = event.target.value;
 
    if(event.key==='Enter'){
        ul.insertAdjacentHTML("beforeend", rendering(title));
        input.value = ''; //input을 초기화 시켜주는 것임.
      
    }
}


function rendering(title){
    return       ` <li>
                  <div class="view">
                      <input class="toggle" type="checkbox">
                      <label class="label">${title}</label>
                      <button class="destroy"></button>
                  </div>
                  <input class="edit" value="새로운 타이틀">
              </li>`
}

