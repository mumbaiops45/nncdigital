import "./globals.css";
import Navbar from "./components/Navabr";
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded=""
        data-gr-ext-installed=""
      >
        <Navbar />
        {children}
        <Footer />
      </body> */}
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
