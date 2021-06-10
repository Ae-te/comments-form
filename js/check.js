let btnForm = document.querySelector("#comments-form button");
let countComments = 0;//переменнная производит подсчет комментариев
let idComment = 0;

btnForm.onclick = function() {
  idComment++;//При создавании комментария будет увеличиваться id на 1
  let form = document.querySelector("#comments-form");
  if(form.name.value.length < 4) {//обратились к form input(name="name"). value - атрибут, в котором записывается значение какого-либо текстового поля.
    document.querySelector("#error").innerHTML = "Длина имени не менее 4 символов"; //что прописать внутрь блока error текст используем функцию innerHTML
    return false;//если найдем ошибку, мы хотим, чтобы дальше, что находится внутри этой функции, не обрабатывалось, т.е. мы выйдем из функции.
  } else if(form.comment.value.length < 10) {
    document.querySelector("#error").innerHTML = "Длина сообщения не менее 10 символов";
    return false;
  }

  document.querySelector("#error").innerHTML = "";//если нет ошибок, то очищаем блок от текста

  // Установим новое значение для подсчета комментариев
  if(countComments == 0)//переменнная производит подсчет комментариев
    document.querySelector("#comments").innerHTML = "";//если 0 комментариев, то очищаем текст "Пока комментариев нет"
    countComments++;//а потом увеличиваем на 1
    document.querySelector(".count-comm").innerHTML = countComments;//меняется красное число, которое отвечает за количество комментариев

  let newComment = "<div class='comment' id='block-" + idComment + "'>" +
  "<span class='delete' onclick='delComm(" + idComment +")'>&times;</span>" + //кнопка, при нажатии на которую вызывается функция удаления комментария - delComm(в которую передается idComment).
  //&times - специальный html-символ, который выглядит, как крестик
  "<p class='name'>" + form.name.value + "</p>" + //ввели имя
  "<p class='mess'>" + form.comment.value + "</p>" + //ввели текст комментария
  "</div>";

  document.querySelector("#comments")
  .insertAdjacentHTML('afterbegin', newComment);//добавляем в блок "Пока комментариев нет" новый блок с кодом, т.к. он массивный пришлось использовать другю функцию(insertAdjacentHTML), а не innerHTML.
  //(1 параметр - тип того, как будем вставлять данные, 2 - код, который будем помещать внутрь самого блока).
  //afterbegin - каждый новые элемент будет вставляться в самое начало, не удаляя старые  данные, а сдвигая их вниз. Противоположная функция  - beforeend, она вставляет элемент в самый конец.

  //Очистка формы комментариев
  form.comment.value = "";
};

function delComm(id) {
  document.querySelector("#block-" + id).remove();//удаляем комментарий

  countComments--;//уменьшаем количество комментариев
  document.querySelector(".count-comm").innerHTML = countComments;//меняем число комментариев
  if(countComments == 0)
    document.querySelector("#comments").innerHTML = "Пока комментариев нет";//если 0 комментариев, то меняем текст "Пока комментариев нет"
    
}
