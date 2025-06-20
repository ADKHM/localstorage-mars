const inp1 = document.getElementById("input1");
const inp2 = document.getElementById("input2");
const btn = document.getElementById("btn");
let icon = document.getElementById("icon");

let studentdata = {
    name: "Abdqudir Abduhakimov",
    guruh: "F2-2513",
    teacher: "Muhamadali Nosirov",
    id: "13456",
    password: "12332",
    coin: "2600",
    quvvat: "40300"
}

localStorage.setItem("student", JSON.stringify(studentdata));

let id = JSON.parse(localStorage.getItem("student")).id;
let password = JSON.parse(localStorage.getItem("student")).password;


btn.addEventListener('click', () => {
    if(inp1.value === id && inp2.value === password) {
        window.location.replace("http://127.0.0.1:5500/student.html");
    } else {
        alert("Invalid ID or Password");
    }
});

console.log(id);
console.log(password);


icon.addEventListener('click' , () => {
    if (inp2.type === "password") {
        inp2.type = "text";
        icon.classList.remove("bx-show");
        icon.classList.add("bx-low-vision");
    } else {
        inp2.type = "password";
        icon.classList.remove("bx-low-vision");
        icon.classList.add("bx-show");
    }
});