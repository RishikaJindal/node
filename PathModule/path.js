const path=require('path');
console.log(path.dirname('C:/Users/Administrator/Desktop/node_practise/PathModule/path.js'));
console.log(path.extname('C:/Users/Administrator/Desktop/node_practise/PathModule/path.js'));
console.log(path.basename('C:/Users/Administrator/Desktop/node_practise/PathModule/path.js'));
 const myPath= path.parse('C:/Users/Administrator/Desktop/node_practise/PathModule/path.js');
 console.log(myPath.name);