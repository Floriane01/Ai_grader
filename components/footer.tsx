import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Ai_grader
        </a>
      
      </footer>
  )
}

export default Footer