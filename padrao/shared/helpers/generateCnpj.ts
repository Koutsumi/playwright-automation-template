/**
 * Gera um CNPJ válido aleatório
 * @param formatted - Se true, retorna formatado (00.000.000/0000-00), se false retorna apenas números
 * @returns CNPJ válido
 */
export default function generateCNPJ(formatted: boolean = false): string {
    const base = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
    
    const cnpjBase = [...base, 0, 0, 0, 1];
    
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += cnpjBase[i] * weights1[i];
    }
    const firstVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += cnpjBase[i] * weights2[i];
    }
    sum += firstVerifier * weights2[12];
    const secondVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    const cnpj = [...cnpjBase, firstVerifier, secondVerifier].join('');
    
    if (formatted) {
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
    return cnpj;
  }