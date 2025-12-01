
function ContactHeader() {
  return (
    <div className="bg-[#41A5B0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
          {/* Left: Phone and Email */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="tel:+923007029003" className="flex items-center gap-2 hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M2 5.75A2.75 2.75 0 0 1 4.75 3h1.5A2.75 2.75 0 0 1 9 5.75v.5c0 .47-.11.93-.33 1.34l-.76 1.43a1.5 1.5 0 0 0 .2 1.67 15.6 15.6 0 0 0 6.25 4.18 1.5 1.5 0 0 0 1.62-.4l1.02-1.13c.35-.39.86-.62 1.39-.62h.52A2.75 2.75 0 0 1 22 15.75v1.5A2.75 2.75 0 0 1 19.25 20H18a16 16 0 0 1-16-16v-1.25z" />
              </svg>
              <span className="font-medium">+92 3007029003</span>
            </a>
            <a href="mailto:adilammeradi@gmail.com" className="flex items-center gap-2 hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.488.27 6.86 4.116a2.25 2.25 0 0 0 2.304 0l6.86-4.116a.75.75 0 0 0-.76-1.29L12 9.75 4.747 5.73a.75.75 0 1 0-.759 1.29z" />
              </svg>
              <span className="font-medium">adilammeradi@gmail.com</span>
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a href="https://wa.me/923007029003" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .02 5.37.02 11.98c0 2.11.55 4.16 1.6 5.98L0 24l6.2-1.62c1.75.96 3.73 1.47 5.76 1.47h.01c6.62 0 11.99-5.37 11.99-11.98 0-3.2-1.25-6.21-3.44-8.39zM12 21.3h-.01c-1.86 0-3.66-.5-5.23-1.45l-.38-.23-3.68.96.98-3.58-.25-.37A9.32 9.32 0 0 1 2.7 12C2.7 6.84 6.85 2.7 12 2.7c2.48 0 4.81.96 6.56 2.71A9.23 9.23 0 0 1 21.3 12c0 5.16-4.15 9.3-9.3 9.3zm5.06-6.97c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.27-.73.9-.9 1.08-.17.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.28-.33.42-.5.14-.17.18-.29.28-.48.09-.2.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49-.16-.01-.35-.01-.54-.01-.2 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.12.55-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.2-.54-.34z" />
              </svg>
            </a>
            <a href="mailto:adilammeradi@gmail.com" aria-label="Email" className="hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.488.27 6.86 4.116a2.25 2.25 0 0 0 2.304 0l6.86-4.116a.75.75 0 0 0-.76-1.29L12 9.75 4.747 5.73a.75.75 0 1 0-.759 1.29z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.13V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.69-2.5 3.44V23h-4V8.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
</div>
  );
}

export default ContactHeader;