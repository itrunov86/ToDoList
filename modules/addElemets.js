
export const addElements = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const toAdd = document.createElement('form');
    toAdd.className = 'toAdd';
    container.appendChild(toAdd);

    const toAddInput = document.createElement('input');
    toAddInput.className = 'toAdd__input';
    toAddInput.type = 'text';


    const toAddButton = document.createElement('toAdd__button');
    toAddButton.className = 'toAdd__button';
    toAddButton.textContent = 'Добавить';

    toAdd.appendChild(toAddInput, toAddButton);

    const list = document.createElement('ul');
    list.className = 'list';
    container.appendChild(list);
}


/* <div class="container">
// <!-- <div class="toAdd">
//             <input class="toAdd__input" type="text">
//             <button class="toAdd__button">Добавить</button>
//         </div>
//         <ul class="list">
//         </ul> -->
    </div> */
