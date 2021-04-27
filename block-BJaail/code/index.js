class TodoList{
    constructor(root, list=[]){
        this.root = root;
        this.todos = JSON.parse(localStorage.getItem("todos")) || [];
        this.createUi()
    }
    add(title, tdAuthor, number){
        let todo = new Todo(title, tdAuthor, number);
        this.todos.push(todo);
        this.createUi();
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    handleCheck(id){
        this.todos = this.todos.filter((todo)=> todo.id !== id);
        this.createUi();
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };
    createUi(){
        this.root.innerHTML = "";
        this.todos.forEach(todo => {
            let ui  = Todo.prototype.createUi.call(todo);
            ui.querySelector(".delete").addEventListener("click", (event) => {
                this.handleCheck(event.target.dataset.id)
            });
            this.root.append(ui);
        })
    };

}

class Todo {
    constructor(title, author, number){
        this.title = title;
        this.author = author;
        this.number = number;
        this.isDone = false;
        this.id = `id-${Date.now()}`;
    };
   
    createUi(){
        let tr = document.createElement("tr");
        let tdTitle = document.createElement("td");
        tdTitle.innerText = this.title;
        let tdAuthor = document.createElement("td");
        tdAuthor.innerText = this.author;
        let tdIsbn = document.createElement("td");
        tdIsbn.innerText = this.number;
        let tdDelete = document.createElement("td");
        tdDelete.classList.add("delete");
        tdDelete.innerHTML= `<i class="fas fa-trash-alt" data-id=${this.id}></i>`
        tdAuthor.innerText = this.author;
        tdIsbn.innerText = this.number;
        tdTitle.innerText = this.title;
        tr.append(tdTitle,tdAuthor,tdIsbn,tdDelete);
        return tr;
    };
}

let todoList = new TodoList(document.querySelector("tbody"));
let form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let title = document.querySelector(".title").value;
   let author = document.querySelector(".author").value;
   let number = document.querySelector(".number").value;
   todoList.add(title, author, number);
})