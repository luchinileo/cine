let butacasDelCine:number[]=new Array(100);
let butacasOcupadas:number= 0;
let butacasDesocupadas:number= 0;

for (let indice =0; indice< 100; indice++){
  let butacasAleatorio=Math.floor(
    Math.random() * (butacasDesocupadas - butacasOcupadas)+butacasDesocupadas 
  );
  butacasDelCine[indice]=butacasAleatorio;
}
for (let indice =0; indice<100; indice++){
  let butacas=butacasDelCine[indice];

}