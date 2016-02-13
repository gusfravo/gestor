var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });
menu.reset();
menu.write('Gestor de Plugins ionic2 \n');
menu.write('------------------------------\n');
 
menu.add('Seleccionar Proyecto de ionic ');
menu.add('Seleccionar plugins');
menu.add('Instalar plugins');
menu.add('Build Android APK');
menu.add('SALIR');

menu.write('-------------------------------\n');
menu.write('       Creado por: GustavoSL');

menu.on('select', function (label) {
    menu.close();
    console.log('SELECTED: ' + label);
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);
 
process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});
