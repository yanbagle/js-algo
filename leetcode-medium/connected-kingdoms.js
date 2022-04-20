// graph = [ [1,3] , [2,5] , [...] ...]
// k1 = target 1
// k2 = target 2

const connectedKingdom = (graph, k1, k2) => {
  
  const set = {};

  // convert to adjacentcy list
  for (let k of graph) {
    const kingdom = k[0];
    if (!set[kingdom]) {
    	set[kingdom] = [];
    }
    set[kingdom].push(k[1]); 
  }
  
  // add in the start kingdom
  const visited = {[k1]: true};
  const stack = [k1];
  let edges = 0;
  let found = false;
  
  while (stack.length) {
    const currKing = stack.pop();
    if (!set[currKing]) {
      break;
    }
    edges++;
    
    for (let neighbor of set[currKing]) {
      if (neighbor === k2) { // if we found our end goal kingdom 
        found = true;
        break;
      }
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }
  
  return found ? Math.ceil(edges/2) : 0;
}