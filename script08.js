let music = new Audio("music.mp3");

const year = new Date().getFullYear();
console.log(year);
function disPlay(){ 
    var onDay = new Date();
    document.getElementById("end-date").innerHTML = onDay;
}
setInterval(
    disPlay,1000
);

// function stopMusic(){
//     music.pause();
// }

function getInputvalue(){
    const date = document.getElementById("date").value;
    
    const month = document.getElementById("month").value;
    
    const hour = document.getElementById("hour").value;
    
    const minute = document.getElementById("minute").value;
    
    const time = document.getElementById("time").value;
     
    var Day = date+" "+month+" " + year +" "+ hour +":" +minute +" "+ time;
    console.log(year);
    // console.log(Day);
    // document.getElementById("end-date").innerHTML = Day;



    const inputs = document.querySelectorAll(".inpt");

        const end = new Date(Day);
        function clock()  {
            var onDay = new Date();
            document.getElementById("end-date").innerHTML = onDay;
            const now = new Date();
            const diff = (end - now)/1000;
            // console.log(diff);
            // convert to days
            if(diff<="0" && diff>="-2"){
                music.play();
                // stop();
                // function stopMusic(){
                //     music.pause();
                // }
            } 
            if(diff<0) return;
            inputs[0].value = Math.floor(diff/3600/24);
            //convert to minutes
            inputs[1].value = Math.floor((diff/3600)%24);
            //convert to minutes
            inputs[2].value = Math.floor((diff/60)%60);
            //convert to second
            inputs[3].value = Math.floor(diff%60);
        }

    clock();

    setInterval(

        ()=>{
            clock();
            // setTimeout(function(){
            //     music.pause();
            // },1000);
        },1000
    );
}


// document.getElementById("end-date").innerHTML = onDay;