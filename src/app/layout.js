import "./globals.css";
import Navbar from "./components/Navabr";
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  cz-shortcut-listen="true">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
