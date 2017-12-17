var XLSX = require('xlsx');
var workbook = XLSX.readFile('Mstar_DVB.xls');
var sheet_name_list = workbook.SheetNames;
//console.log(workbook.SheetNames);
var worksheet = workbook.Sheets['word'];

//console.log(XLSX.utils.sheet_to_json(worksheet));

//console.log(String.fromCharCode({65, 66, 67}));


var chStart = 'A'.charCodeAt();
var chEnd = 'Z'.charCodeAt();
var progressive = chEnd - chStart + 1;
//console.log(progressive);

function decTo26(dec) {
    var ans = '';
    while(dec >= 1)
    {
        ans += String.fromCharCode(dec%26 + chStart);
        dec/=progressive;
    }
    //console.log(ans.split("").reverse().join(""));
    return ans.split("").reverse().join("");
}

/*
for (z in worksheet) {
    console.log(z);
};
*/

var Idx = 1;
console.log(worksheet['B1'].v);
while(typeof(worksheet[decTo26(Idx) + '1']) != 'undefined')
{
    console.log(decTo26(Idx) + '1');
    console.log(worksheet[decTo26(Idx) + '1'].v);
    Idx++;
}