import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generatePDF = (element, filename = 'document.pdf') => {
  return new Promise((resolve, reject) => {
    html2canvas(element, { useCORS: true })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')

        // A4 용지 크기 (210mm x 297mm)
        const pdfWidth = 210
        const pdfHeight = 297

        // 원본 이미지 크기
        const originalImgWidth = canvas.width
        const originalImgHeight = canvas.height

        // 여백 설정 (상하좌우 각각 10mm)
        const margin = 10
        const usableWidth = pdfWidth - 2 * margin
        const usableHeight = pdfHeight - 2 * margin

        // 이미지 비율 유지하며 A4 용지에 맞추기
        let imgWidth = (originalImgWidth * usableHeight) / originalImgHeight
        let imgHeight = usableHeight

        // 이미지가 A4 페이지 너비를 초과하는 경우 조정
        if (imgWidth > usableWidth) {
          imgWidth = usableWidth
          imgHeight = (originalImgHeight * imgWidth) / originalImgWidth
        }

        // 페이지 중앙 정렬 해제: 이미지 상단 여백 조정
        const yOffset = margin

        // 이미지가 A4 페이지를 넘어가는 경우 처리
        const totalPages = Math.ceil(imgHeight / usableHeight)
        for (let i = 0; i < totalPages; i++) {
          if (i > 0) pdf.addPage()
          const offset = i * usableHeight
          pdf.addImage(imgData, 'PNG', margin, yOffset - offset, imgWidth, imgHeight)
        }

        pdf.save(filename)
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}
