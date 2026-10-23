const taskinput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

let tasks = [];
function rendertasks() {
    tasklist.innerHTML = "";
    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        if(task.done) li.classList.add("done");

        li.innerHTML = `
        <span onclick = "toggletask(${index})">${task.name}</span>
        <button class ="delete-btn" onclick = "deletetask(${index})">delete</button>;`
        tasklist.appendChild(li);

    });

}
function addtask(){
    const taskname = taskinput.value.trim();
    if(taskname === "")return;
    tasks.push({name:taskname, done:false
    });
    taskinput.value = "";
    rendertasks();
}
function deletetask(index){
    tasks.splice(index,1);
    rendertasks();
}
addbtn.addEventListener("click" , addtask);
taskinput.addEventListener("keypress",(e) =>{
    if(e.key ==="Enter") addtask();
});
