const numeros = [1, 2, 3, 4, 5, 6];

for (let i of numeros) {
   if (i === 2) {
   continue; // pula para o próximo número
   }

   if(i === 4) {
      break; // faz parar numa ação que neste caso é o número 4
   }

   console.log(i);
}
