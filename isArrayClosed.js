function isArrayClosed(arr) {
    
    if (!arr || arr.length === 0) {
        return false;
    }
    
    let stack = [];
    
    for (let ele of arr) {
        if (ele === '[') {
            stack.push(ele);
        } else if (ele === ']' && stack.length > 0) {
            stack.pop();            
        } else if (ele === ']' && stack.length === 0) {
            return false;           
        }
    }
    
    return stack.length === 0;
} 

alert(isArrayClosed(['[','a',']']));