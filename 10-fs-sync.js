const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.text','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

console.log(first,second)

writeFileSync('./content/result-sync.txt',`here is the fucking result: ${first} ,${second}`,{flag:'a'})


