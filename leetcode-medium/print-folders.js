/*
    
  filenode: {
      name: string,
      children: [filenode]
  }
  
  input => 
  
  root: {
    name: string,
    children: [filenode]
  }
  
  e.g. 
  
  print out something like this 
  
  src: 
    -app
    -img
      -logo.png
  public
    -something
  
*/

const printFolders = (root) => {
  if (!root) {
    return;
  }
  
  let res = {str: ''};
  for (let child in root) {
    renderNode(root[child], 0, res);
  }
  
  return res.str;
}

const renderNode = (node, level, res) => {
  if (!node) {
    return;
  }
  
  // printing format stuff
  res.str += '\n';
  let l = level;
  while (l > 0) {
    l--;
    res.str += ' ';
  }
  res.str += ' - ' + node.name;

  for (let child of node.children) {
  	level++;
    renderNode(child, level, res);
  }
}

// console.log(printFolders({
// 	'src': {
//   	name: 'src',
//   	children: [
//     	{
//       name: 'app',
//         children: [{
//         	name: 'yo',
//           children: [],
//         }]
//       }
//     ]
//   },
//   'public': {
//   	name: 'public',
//   	children: []
//   }
// }));














