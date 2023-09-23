//Common js ,every file is module(by default)
//modules-Encapsulated Code (only share minimum)
//Modules are self contained and can be reused in other projects.
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(names);
sayHi(names.john);
sayHi('Lucifer');
sayHi('roshan');

