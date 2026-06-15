import { profile } from '../data/portfolio'

/** Export a DOM node to PDF via html2pdf.js */
export async function downloadResumePdf(element) {
  if (!element) return

  const html2pdf = (await import('html2pdf.js')).default
  const filename = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`

  await html2pdf()
    .set({
      margin: 0,
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    })
    .from(element)
    .save()
}
