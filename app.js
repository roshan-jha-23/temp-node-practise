//npm - global command comes with thee node 
//npm --version
//local dependency - use it only in this particular projrct
//npm i <packageName>
//

//global dependency - use it in any projrct
//npm install -g<packageName>

// npm uninstall -g<packageName>

//package.json -manifest file (stores important info about the project/package)
//manual appoarch (create package.json in the root ,create properties etc)
//npm init(step by step enter to skip)
//npm init -y (everything default)

const _=require('lodash');
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems);