import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return ( 
    <div>
      <Navbar />
      <div class="py-10">
    <header>
 
    <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         
          <div class="px-4 py-4 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            {children}
            </div>
          </div>
          
        </div>
      </main>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
       
        <div class="px-4 py-8 sm:px-0">
          
        </div>
      </div>
    </main>
  </div>

     
      <Footer />
    </div>
   );
}
 
export default Layout;