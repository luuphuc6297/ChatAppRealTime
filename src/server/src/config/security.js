const path = require('path');
const root = path.normalize(__dirname + '/..')
 
const MainConfig = {
   secret: 'A67C97C8E0DA77100CA098A4C0D6F3E179BEB38CEE5D8B0EAC9BA93B856E5DF2',
   LibraryDir: root + '/library',
   

}
module.exports = Object.assign(MainConfig, {})