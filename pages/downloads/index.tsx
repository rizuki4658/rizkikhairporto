import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import PDFDownloads from "../../components/template/downloads"

const Downloads = () => {
  const componentRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="relative">
      <div className="fixed bottom-8 right-6">
        <button
          className="px-12 py-4 rounded-full font-bold h-auto bg-primary-gradient hover:opacity-60"
          onClick={handlePrint}>
          Print
        </button>
      </div>
      <div ref={componentRef}>
        <PDFDownloads />
      </div>
    </div>
  )
}

export default Downloads