
const Footer = () => {
  return (
    <footer className="bg-background text-white px-4 pb-12 md:pb-16" id="footer">
      <div>        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MaestroPilot. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer 