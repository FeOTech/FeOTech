const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", ()=>{
    arr.classList.add("active_arr");
    if(left_container.classList.contains("off")){
        left_container.classList.remove("off");
        left_container.classList.add("active");}
});

clc.addEventListener("click", ()=>{
    arr.classList.remove("active_arr");
    if(left_container.classList.contains("active")){
        left_container.classList.remove("active");
        left_container.classList.add("off");}
});

const clc1 = document.querySelector(".cancel1");
const arr1 = document.querySelector(".arr_container1");
const left_container1 = document.querySelector(".left_container1");

arr1.addEventListener("click", ()=>{
    arr1.classList.add("active_arr1");
    if(left_container1.classList.contains("off1")){
        left_container1.classList.remove("off1");
        left_container1.classList.add("active1");}
});

clc1.addEventListener("click", ()=>{
    arr1.classList.remove("active_arr1");
    if(left_container1.classList.contains("active1")){
        left_container1.classList.remove("active1");
        left_container1.classList.add("off1");}
});


const clc2 = document.querySelector(".cancel2");
const arr2 = document.querySelector(".arr_container2");
const left_container2 = document.querySelector(".left_container2");

arr2.addEventListener("click", ()=>{
    arr2.classList.add("active_arr2");
    if(left_container2.classList.contains("off2")){
        left_container2.classList.remove("off2");
        left_container2.classList.add("active2");}
});

clc2.addEventListener("click", ()=>{
    arr2.classList.remove("active_arr2");
    if(left_container2.classList.contains("active2")){
        left_container2.classList.remove("active2");
        left_container2.classList.add("off2");}
});


const clc3 = document.querySelector(".cancel3");
const arr3 = document.querySelector(".arr_container3");
const left_container3 = document.querySelector(".left_container3");

arr3.addEventListener("click", ()=>{
    arr3.classList.add("active_arr3");
    if(left_container3.classList.contains("off3")){
        left_container3.classList.remove("off3");
        left_container3.classList.add("active3");}
});

clc3.addEventListener("click", ()=>{
    arr3.classList.remove("active_arr3");
    if(left_container3.classList.contains("active3")){
        left_container3.classList.remove("active3");
        left_container3.classList.add("off3");}
});
