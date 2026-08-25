import{ 
    EventEmitter
}
from "node:events";
const task=new EventEmitter();
const sayhi = (name) => {
    console.log(`logged in as ${name}`);
};
const starts = () =>{
    console.log("system started");
}
task.once("greet", starts);
task.on("greet", sayhi);   //event and method binding
task.emit("greet", "sb");   //Announcement
task.emit("greet", "sbi"); 
task.emit("greet", "sbk"); 

task.on("greet", (name)=> {
    console.log(`logged in as ${name}`);

}; 
task.emit("greet", "sb");   
task.emit("greet", "sbi"); 
task.emit("greet", "sbk"); 