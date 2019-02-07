import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume/02:19.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
console.log(resume);

  
const Resume = (props) => (
    <Layout>
        <Helmet>
            <title>Jen Lipton's Resume</title>
            <meta name="description" content="Jen Lipton's developer resume" />
        </Helmet>

        <div id="resume">
            <Document
                className='resume-container'
                externalLinkTarget={'_blank'}
                file={resume}>
                <Page 
                    scale={1.5}
                    className='canvas-container'
                    pageNumber={1} 
                    renderAnnotationLayer={false}/>
            </Document>
            
            <span className="back-page">
                <Link to="/" className="button detail prev">Back</Link>
            </span>
        </div>
    </Layout>
)

//TODO: change pdf to one with interactive links

export default Resume