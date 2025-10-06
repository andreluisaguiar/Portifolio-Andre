export default function handler(req, res) {
  res.status(200).json({
    name: 'André Luis Aguiar',
    role: 'Desenvolvedor Back-end',
    intro:
      'Desenvolvedor de Software com foco em Backend e estudante de Engenharia da Computação (UFMA).',
    summary:
      'Experiência em soluções para gestão pública e acadêmica, com foco em impacto e eficiência.',
    tech:
      'PHP (Laravel), Python, JavaScript, Bootstrap e bancos de dados relacionais.'
  })
}


