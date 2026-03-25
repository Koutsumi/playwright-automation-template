/**
 * Gera um CPF válido aleatório
 * @param formatted - Se true, retorna formatado (000.000.000-00), se false retorna apenas números
 * @returns CPF válido
 */
export default function generateCPF(formatted: boolean = false): string {
    const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += randomDigits[i] * (10 - i);
    }
    const firstVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += randomDigits[i] * (11 - i);
    }
    sum += firstVerifier * 2;
    const secondVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    
    const cpf = [...randomDigits, firstVerifier, secondVerifier].join('');
    
    if (formatted) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    
    return cpf;
  }