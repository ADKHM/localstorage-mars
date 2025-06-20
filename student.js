let ism = document.getElementById("ism");
let group = document.getElementById("guruh");
let ustoz = document.getElementById("teacher");
let coins = document.getElementById("coin");
let xp = document.getElementById("quvvat");


let ismi = JSON.parse(localStorage.getItem("student")).name;
let guruhi = JSON.parse(localStorage.getItem("student")).guruh;
let ustozi = JSON.parse(localStorage.getItem("student")).teacher;
let coinlari = JSON.parse(localStorage.getItem("student")).coin;
let quvvatlari = JSON.parse(localStorage.getItem("student")).quvvat;

ism.innerHTML = `${ismi}`;
group.innerHTML = `${guruhi}`;
ustoz.innerHTML = `${ustozi}`;
coins.innerHTML = `${coinlari}`;
xp.innerHTML = `${quvvatlari}`;