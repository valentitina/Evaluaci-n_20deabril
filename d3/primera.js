 var ciudades = [
    {name:'0-24',population:42909},
    {name:'25-49',population:18531},
    {name:'50-74',population:12705},
    {name:'más de 75',population:2610}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#33B8FF')
    .attr('r', function(d) {
      return d.population / 700;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#000304')                      
    .text(function(d) {
      return ". " + d.name;
    });