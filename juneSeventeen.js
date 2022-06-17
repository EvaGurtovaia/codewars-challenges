//Fake Binary

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

function fakeBin(str){
    let res = [];
    for (let i = 0; i < str.length; i++) {
            if (parseInt(str[i]) < 5) {
                res.push(0);
            } 
          if (parseInt(str[i]) >= 5)  
          {
                res.push(1);
            }
        }
            return res.join("");
    
    }

    function fakeBin(str) {
        return str.split('').map(num => num < 5 ? 0 : 1).join('');
    }