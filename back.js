const showItem = () => {
    const dd = document.querySelector(".display");
    let data = localStorage.getItem("work");

    if (!data || JSON.parse(data).length === 0) {
        dd.innerHTML = "No To-Do Work Added";
        return;
    }
else{
    let arr = JSON.parse(data);
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        str+=`
            <span>📝 Work:${element.work}</span>
            <span>📅 Date:${element.date}</span>
            <button onclick="deleteWork('${element.work}')" style="margin-left: 20px; margin-bottom: 10px; background-color: red;width: 90px; height: 40px; font-weight: 500; font-size: 1.2rem; border-radius: 9px;">Delete</button>
            `
    }
    dd.innerHTML = str;
}
};
const deleteWork=(work)=>{
let data = localStorage.getItem("work")
    let arr = JSON.parse(data);
    arrup=arr.filter((e)=>{
        return e.work!=work;
    })
    localStorage.setItem("work", JSON.stringify(arrup))
    alert(`Successfully deleted ${work}'s `)
    showItem ()
}
showItem();
document.querySelector(".add").addEventListener("click", (e) => {
    e.preventDefault();

    // Get input values correctly
    let workInput = document.querySelector("#work");   // assuming <input id="work">
    let dateInput = document.querySelector("#date");   // assuming <input id="date">

    let storedData = localStorage.getItem("work");

    let json = storedData ? JSON.parse(storedData) : [];

    json.push({ work: workInput.value, date: dateInput.value });

    localStorage.setItem("work", JSON.stringify(json));
    alert("Data saved");
    showItem();
});