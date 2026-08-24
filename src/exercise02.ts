export function transcribeDNA(dna: string): string {
  const complements: Record<string, string> = {
    'A': 'U',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

let ret = "";

for (const c of dna) {
  if (c in complements){
    ret += complements[c];
  }
  else {
    throw new TypeError('Invalid nucleotide: ${c}');
  }
}

return ret;
}

