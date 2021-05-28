export const domainListHome = 'https://truyendocfull.com/api/app/listHome'

export const domain = 'https://truyendocfull.com/api/app/listHome'

export const domainListHom = 'https://truyendocfull.com/api/app/listHome'

export const domainListHo = 'https://truyendocfull.com/api/app/listHome'



export const imgDriver = "https://drive.google.com/uc?export=view&id=";


function getTime(){
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()

    var time = h * 3600 + m * 60 + s
    return time;
}

var md5 = require('md5');

var key = "truyen_doc_full"
export var typeListHome = "list_home";
export var time = getTime()
var convertMD5ListHome = key + time.toString() + typeListHome;

export var hashListHome = md5(convertMD5ListHome);