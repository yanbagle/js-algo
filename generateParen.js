function generateParenthesis(n) {
    let result = [];
    dfs(result, "", n, n);
    return result;
}

function dfs(result, s, left, right){
    if(left > right)
        return;

    if(left===0 && right===0){
        result.push(s);
        return;
    }

    if(left>0){
        dfs(result, s+"(", left-1, right);
    }

    if(right>0){
        dfs(result, s+")", left, right-1);
    }
}

console.log(generateParenthesis(2));