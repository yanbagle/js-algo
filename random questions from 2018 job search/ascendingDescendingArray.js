function sortAscendingDescendingArray(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }
    
    let descendingIndex = -1;
    let ascendingIndex = -1;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (ascendingIndex !== -1 && arr[i] < arr[i+1]) {
            ascendingIndex = i;
        } else if (descendingIndex !== -1 && arr[i] > arr[i+1]) {
            descendingIndex = i;               
        }
    }
    
    let ascendingArr = [];
    
    let breakpoint = descendingIndex - ascendingIndex;
    if (breakpoint < 0) { // the ascending part is in the second half of the array
        for (let i = ascendingIndex; i < arr.length; i++) {
            ascendingArr.push(arr[i]);
        } 
        for (let i = ascendingIndex - 1; i >= 0; i--) {
            ascendingArr.push(arr[i]);
        }
    } else {
        for (let i = ascendingIndex; i < breakpoint; i++) {
            ascendingArr.push(arr[i]);
        } 
        for (let i = arr.length - 1; i >= breakpoint; i--) {
            ascendingArr.push(arr[i]);
        }
    }
    
    return ascendingArr;
    
}

