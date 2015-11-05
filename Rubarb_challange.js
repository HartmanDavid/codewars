// for the answer to Rhubarb Pie part 1 type
// 'rhubarbPiePartOne()' into the console on the right

function rhubarbPiePartOne(){
    var arr = [];
    for(i=1; i<=1000; i++){
        arr.push(i);
    }
    index = arr[Math.floor(Math.random()*1000)];
    // console.log(index);
    return index;
}

// for the answer to Rhubarb Pie part 2 type
// 'rhubarbPiePartTwo()' into the console on the right

function rhubarbPiePartTwo(){
    rhubarbPiePartOne();
    if ( index % 15 === 0){
        console.log( 'Rhubarb Pie ' + index )
    } else if ( index % 5 === 0 ){
        console.log('Pie ' + index )
    }else if (index % 3 === 0){
        console.log( 'Rhubarb ' + index)
    }else {
        console.log(index)
    }
}


// the telephone number format posses a few issues when
// dealing with two phone numbers together (20 digits) in JS
// JS only handles out to 16 digits see:
// http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
// This said I will assume that for this problem part 1 & 2 we will
// receive the unformatted phone number (or phone numbers) as
// a string with a min of 10 digits and max of 20 digits.

function toPhone(str){
    var length = str.length;
    if (length % 10 === 0 ){
        var n = length/10
        if (n === 1){
            var answerA = str
                .replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
            console.log (answerA)
        }else if (n === 2 ){
           var answerB = str
           .replace(/(\d{3})(\d{3})(\d{4})(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3,($4)-$5-$6');
            console.log (answerB)
        }
    }
    else if (length % 10 !== 0 ){
    var answerC = str
                .replace(/(\d{3})(\d{3})(\d{4})[0-9]+/, '($1)-$2-$3');
            console.log (answerC)
    }
}
