// For like BDSX: do require('(path to scripts)/(gcd folder name)')
// Place contents in this folder in (gcd folder name)
// For addon:
// Either leave the file and just import the addon, or remove it (addon will auto load the scripts)
// For other:
// Same steps but change 'require' to 'import' if needed

(()=>{
	try {
		eval("require");
	} catch (e) {return;}
	require('./config');
	require('./nbt');
	require('./gcd');
})();