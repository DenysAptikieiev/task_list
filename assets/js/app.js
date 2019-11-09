"use strict";

$(document).ready(function () {
    // $(this).load('data.json');

    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",
    }).always(function (msg) {
        if (!localStorage.getItem('dataObj')) {
            setLocalStorage(msg, 'dataObj');
        }
    });

    let dataLocal = getLocalStorage('dataObj');
    console.log(dataLocal);

    let id = 1;


    for (let i = 0; i < dataLocal.length; i++) {
        id++;
        $('.onorder').append(`<div id="${dataLocal[i].id}" class="list-item-task"><span>${dataLocal[i].name}</span></div>`);
        $(`#${dataLocal[i].id}`).append(`<button class="del del${dataLocal[i].id}"></button>`);
        $(`#${dataLocal[i].id}`).append(`<button class="edit edit${dataLocal[i].id}"></button>`);
        $(`#${dataLocal[i].id}`).append(`<label>
                LOW<input id="todo-prior-low${dataLocal[i].id}" type="checkbox"> 
                MINOR<input id="todo-prior-minor${dataLocal[i].id}" type="checkbox">
                HIGH<input id="todo-prior-higt${dataLocal[i].id}" type="checkbox"> 
            </label>`);
    };

    $('#addTask').on('click', function (evt) {
        evt.preventDefault();
        let value = $('#todoElem').val();
        $('.onorder').append(`<div id="${id++}">
            <label>
                <span>${value}</span>
                <button class="del del${id}"></button>
                <button class="edit edit${id}"></button>
                LOW<input id="todo-prior-low${id}" type="checkbox"> 
                MINOR<input id="todo-prior-minor${id}" type="checkbox">
                HIGT<input id="todo-prior-higt${id}" type="checkbox"> 
            </lable>
        </div>`);
        let newTask = new Task(value, id);
        dataLocal.push(newTask);
        console.log(dataLocal);
        setLocalStorage(dataLocal, 'dataObj');
    });

    for (let i = 0; i < dataLocal.length; i++) {
        $(`.del${dataLocal[i].id}`).on('click', function () {
            $(`#${dataLocal[i].id}`).remove();
            let index = getIndexElem(dataLocal, dataLocal[i].id);
            console.log(index);
            dataLocal.splice(index, 1);
            setLocalStorage(dataLocal, 'dataObj');
        });

        $(`.edit${dataLocal[id]}`).on('click', function () {
            $(`#${dataLocal[i].id}`).append(`<input type="text" placeholder="Внести изменение">`)
        });
    }
});



