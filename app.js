document.getElementById('submit').addEventListener('click', function(){
    let userInput = document.getElementById('input-text').value ;
    let newList = document.createElement('li');
    // newList.className = 'checked';
    newList.innerText = `${userInput}` ;
    let span = document.createElement('span');
    span.innerHTML = '\u00d7' ;
    newList.appendChild(span);
    const listContainer = document.getElementById('list-container');
    // listContainer.innerText ='';
    listContainer.appendChild(newList);
    document.getElementById('input-text').value = '';
    saveData();

})

// listContainer.addEventListener('click', function(e){
//     if(e.target.tagName==='LI'){
//         e.target.classList.toggle('checked');
//     }else if(e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove();
//     }
// }, false);

document.getElementById('list-container').addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})
