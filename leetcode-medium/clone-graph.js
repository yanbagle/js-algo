/**

https://leetcode.com/problems/clone-graph/

 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 
 */
 
 const cloneGraph = (node) => {
   if (!node) {
    return null;
    }
    
   const set = {};
   
   const dfs = (node) => {
     if (set[node.val]) {
       return set[node.val];
     }
     
     const copy = new Node(node.val);
     set[copy.val] = copy;
     for (let neighbor of node.neighbors) {
       copy.neighbors.push(dfs(neighbor));
     }
     return copy;
   }
   
   return dfs(node);
 }