import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return ( 
    <div>
      
     
            {children}
            
     
      <Footer />
    </div>
   );
}
 
export default Layout;