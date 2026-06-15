import { useEffect, useRef, useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import ResumeDocument from '../components/ResumeDocument'
import { resumeSection } from '../data/portfolio'
import { downloadResumePdf } from '../utils/downloadResumePdf'
import './Resume.css'

/** Resume preview (A4 paper) with PDF download matching on-screen content. */
export default function Resume() {
  usePageTitle('Resume')
  const documentRef = useRef(null)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownload = async () => {
    if (!documentRef.current || downloading) return
    setDownloading(true)
    try {
      await downloadResumePdf(documentRef.current)
    } catch (err) {
      console.error('PDF export failed:', err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="page resume-page">
      <div className="resume-page__desk">
        <div className="resume-page__toolbar">
          <span className="resume-page__label">Preview</span>
          <button
            type="button"
            className="resume-page__download text-link"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? 'Generating PDF…' : resumeSection.downloadLabel}{' '}
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <ResumeDocument documentRef={documentRef} />
      </div>
    </div>
  )
}
