
// graph = [ [1,3] , [2,5] , [...] ...]
// k1 = target 1
// k2 = target 2

const connectedKingdom = (graph, k1, k2) => {
  
  const set = {};
  
  for (let k of graph) {
    const kingdom = k[0];
    set[kingdom] = set[kingdom] ? set[kingdom].push(k[1]) : k[1]; 
  }
  
  const visited = {};
  let days = 0;
  
  const helper = (kingdom) => {
    if (visited[kingdom]) {
      return;
    }
    if (kingdom === k2) {
      return true;
    }
    
    visited[kingdom] = true;
    days++;
    const connectedKingdoms = set[kingdom];
    for (let ck of connectedKingdoms) {
      helper(ck);
    }
    
    return false;
  }
  
  helper(k1);
  
  return Math.ceiling(days / 2);
}










