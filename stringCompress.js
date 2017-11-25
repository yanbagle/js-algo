function compressString(str) {
    if (!str || str.length === 0) {
        return null;
    }
    
    let count = 0;
    let output = '';
    
    for (let i = 0; i < str.length; i++) {
        count++;
        if ( i+1 <= str.length || str.charAt(i) !== str.charAt(i+1) )  {
            output += str.charAt(i) + count;
            count = 0;
        }
    }
    
    return output;
}

function decompressString(str) {
    
    if (!str || str.length === 0) {
        return null;
    }
    
    let output = '';
    
    for (let i = 0; i < str.length-1; i++) {
        let curr = str.charAt(i);
        let count = str.charAt(i + 1);
        
        while (count > 0) {
            output += curr;
            count--;
        }
    }
    
    return output;
}