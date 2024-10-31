function Personas(nombre,edad,estatura,color){
    this.nombre=nombre
    this.edad=edad
    this.estatura=estatura
    this.color=color

    this.moverse=function(nombre)
    {console.log(this.nombre=nombre+" se ha movido");}

    this.expresarse=function() 
    {console.log("Expresado");}
}
let personaUno=new Personas('Roberto',18,1.65,'Blanco');
let personaDos=new Personas('Carlos',18,1.90,'Blanco');
let personaTres=new Personas('Cristian',18,1.58,'Moreno');

console.log(personaUno, personaDos)

personaUno.moverse()
personaDos.expresarse()
personaTres.expresarse()