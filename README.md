 📝 To-Do List App
A simple and interactive **To-Do List Web Application** built using **HTML, CSS, and JavaScript**. Users can add tasks, mark them as completed, delete tasks, and automatically save everything using **LocalStorage**, so tasks persist even after refreshing the page.

## 🚀 Features
* Add tasks using **Add button** or **Enter key**
* Mark tasks as completed by clicking (strike-through effect)
* Delete tasks using **× icon**
* Tasks persist with **LocalStorage**
* Clean, modern, and responsive UI

## 📂 Project Structure
/todo-list-app
│── index.html
│── style.css
│── script.js
│── icon.png
│── checked.png
│── unchecked.png
│── README.md


## 🧠 How It Works
* Add tasks with:
```js
button.addEventListener("click", () => { addTask(); });
inputBox.addEventListener("keydown", (event) => { if(event.key === "Enter"){ addTask(); } });

🖼️ Screenshots
![To-Do List App](./screenshots/todo-list.png)

▶️ How to Run
1.Clone repository:
git clone https://github.com/arihantjain-14/todo-list-app.git

2.Open project folder
3.Open index.html in browser

💡 Future Improvements

* Edit tasks
* Sort tasks
* Add categories
* Dark mode
* Drag-and-drop ordering

🤝 Contributing

* Submit issues, feature requests, or pull requests

📜 License

* Open-source and free to use