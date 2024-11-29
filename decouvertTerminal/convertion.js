 
 //exportation de la fonction celsiusToFahrenheit

 const celsiusToFahrenheit = (celsius) => {
    return celsius * (9/5) +32;
 };

 const add = (a, b) => {
    return a + b;
  };

  const SayHello = (name)=> `Salut, je suis ${name}`;

module.exports = {celsiusToFahrenheit, add, SayHello}; 