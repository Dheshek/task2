function dog(cat,man){
    setTimeout(()=>{
        console.log("Attendance")
        cat();
        man();
    },2000);
}
function cat()
{
    console.log("Lunch");
}
function man()
{
    console.log("Going to room")
}
dog(cat,man)