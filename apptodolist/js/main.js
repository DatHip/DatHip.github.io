let todo_list = document.querySelector(".todo_list");
let todo_input = document.querySelector(".todo_input input");
let btn_add = document.querySelector(".btn_add");
let isUpdate = false;
let idUpdate = null;

let createId = () => {
  let id = Math.floor(Math.random() * 1000);
  return id;
};

let todos = [
  // {
  //   id: createId(),
  //   title: "Kiem tien nao",
  //   trangThai: true,
  // },
  // {
  //   id: createId(),
  //   title: "Kiem tien nao",
  //   trangThai: false,
  // },
  // {
  //   id: createId(),
  //   title: "Kiem tien nao",
  //   trangThai: true,
  // },
];

btn_add.addEventListener("click", () => {
  let todoTitle = todo_input.value;
  // Kiểm tra nội dung input có trống ko ?
  if (todoTitle == "") {
    alert("Nhập việc cần làm vào ô!");
    return
  }

  if (isUpdate) {
    // isupdate = true thì chạy 
    for (let i = 0; i < todos.length; i++) {
      // nếu id trùng với func edỉt thì chạy
      if (todos[i].id == idUpdate) {
        // gán input.value của thằng đc click vào todos.i.title đó !
        todos[i].title = todoTitle
      }
    }

    btn_add.innerText = "Thêm";
    isUpdate = false;
    idUpdate = null
  } else {
    // nếu isUpdate = false thì chạy như thường 
    let newTodo = {
      id: createId(),
      title: todoTitle,
      trangThai: false
    }

    todos.push(newTodo)

  }

  renderUi(todos)
  todo_input.value = ''
})


// Func xuất ra html
let renderUi = (arr) => {
  todo_list.innerHTML = "";

  if (arr.length == 0) {
    todo_list.innerHTML = `<p class="todo-empty">Hãy thêm việc cần làm 😃</p>`;
  }

  for (let i = 0; i < todos.length; i++) {
    const t = arr[i];

    todo_list.innerHTML += `
                <div class="todo_item">
                  <div class="todo_item-title ${t.trangThai ? "active_todo" : ""}">
                     <input type="checkbox" ${t.trangThai ? "checked" : ""} onClick="toggleTrangthai(${t.id})" />
                     <p>${t.title}</p>
                  </div>
                  <div class="todo_item-btn">
                     <button class="btn btn_update" onClick="updateTodo(${t.id})">
                        <img src="./img/pencil.svg" alt="" />
                     </button>
                     <button class="btn btn_remove" onClick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="" />
                     </button>
                  </div>
               </div>
    `;

  }
};

// Func toggle ô input 
let toggleTrangthai = (id) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].trangThai = !todos[i].trangThai
    }
  }
  renderUi(todos)
}

// Func update sửa todo el 
let updateTodo = (id) => {
  let title

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      title = todos[i].title
    }
  }

  btn_add.innerText = `Cập Nhật`
  todo_input.value = title;
  todo_input.focus();

  idUpdate = id;
  isUpdate = true
}


// Func click xoa el
let deleteTodo = (id) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1)
    }
  }
  renderUi(todos)
}

renderUi(todos);
