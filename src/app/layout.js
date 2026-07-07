import "./globals.css";
import Navbar from "./components/Navabr";
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body   className="antialiased"
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded=""
        data-gr-ext-installed=""
      >
        <Navbar />
        {children}
        <Footer />
      </body> */}
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
