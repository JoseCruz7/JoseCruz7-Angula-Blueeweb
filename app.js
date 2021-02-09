"use strict";
(() => {
    //Las clases se Debden de iniciar con la palabra reservada class y la primera letra es mayuscula
    class Avenger {
        //Se necesitan establecer en el constructuor, funcion que se ejecuta cuando inicia una instancia
        constructor(name, team, realName, figth, winFigth) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.figth = figth;
            this.winFigth = winFigth;
        }
    }
    const antman = new Avenger();
})();
