import React from 'react';

const SocialIcons = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 rounded fixed-element" id="socialbar">
        <ul className="nav  flex-column ">
          
          <li>
            <a target="_blank" rel="noopener noreferrer"
              className="flex nav-link text-white bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm my-5"
              href="https://www.instagram.com/parthikrajput10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#b5179e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide bi pe-none me-2 lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
              className="flex nav-link text-white my-4 bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm my-5 "
              href="https://www.linkedin.com/in/parthik-mangal1/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#0277b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide bi pe-none me-2 lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
          
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
              className="flex nav-link text-white my-4 bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm my-5"
              href="https://github.com/Parthik10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide bi pe-none me-2 lucide-github">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                </path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer"
              className="flex nav-link text-white my-4 bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm my-5 "
              href="https://twitter.com/parthik_mangal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"
                className="lucide bi pe-none me-2" style={{fill: "black"}}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" style={{ fill: "none", strokeWidth: 2 }}></rect>
                <path
                  d="M11 4C7.1456661 4 4 7.1456661 4 11L4 39C4 42.854334 7.1456661 46 11 46L39 46C42.854334 46 46 42.854334 46 39L46 11C46 7.1456661 42.854334 4 39 4L11 4zM11 6L39 6C41.773666 6 44 8.2263339 44 11L44 39C44 41.773666 41.773666 44 39 44L11 44C8.2263339 44 6 41.773666 6 39L6 11C6 8.2263339 8.2263339 6 11 6zM13.085938 13L22.308594 26.103516L13 37L15.5 37L23.4375 27.707031L29.976562 37L37.914062 37L27.789062 22.613281L36 13L33.5 13L26.660156 21.009766L21.023438 13L13.085938 13zM16.914062 15L19.978516 15L34.085938 35L31.021484 35L16.914062 15z"
                  style={{fill: "black"}}></path>
              </svg>

            </a>
          </li>
        </ul>

      </div>
  );
};

export default SocialIcons;