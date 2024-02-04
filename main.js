const url=require('url')
const http=require('http')
const fs=require('fs');
const { time } = require('console');

myserver=http.createServer((req,res)=>{

    //time
    
function time(a){
    var currentDate = new Date();
    
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    
    var formattedDateTime = currentYear + "-" + addLeadingZero(currentMonth) + "-" + addLeadingZero(currentDay) + " " +
                            addLeadingZero(currentHour) + ":" + addLeadingZero(currentMinute);
    
    return formattedDateTime
    
    
    function addLeadingZero(number) {
        return (number < 10 ? '0' : '') + number;
    }
    
    }
    //

    let aa=time()

    const data=`${aa} page ${req.url}\n`
    fs.appendFile('./log.txt',data,()=>{
    
        switch(req.url){
            case '/':
                res.end("welcome to my website")
                break;
                case '/home':
                    res.end("Welcome to home")
                    break;
                    case '/signin':
                        res.end("welcome to signin page")
                        break;
                        case '/signup':
                            res.end("welcome to signup page")
                            break;
                          
        }




    



    })


})

myserver.listen(3000)
console.log("starting.....")