// Calcule a diferença de dias entre duas datas.

const data = new Date()

const data1 = new Date("2025-07-01");
const data2 = new Date("2025-07-12");

// Diferença em milissegundos
const diffMs = Math.abs(data2 - data1);

// Converter para dias
const diffDias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

console.log(`Diferença: ${diffDias} dias`); // Diferença: 11 dias