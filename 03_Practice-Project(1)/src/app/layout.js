
import Nav from "@/components/Nav";
import "./globals.css";
import {Poppins} from 'next/font/google'
const newFont = Poppins({
  subsets:["latin"],
  weight:["400" , "600"],
  display:"swap"
})

export const metadata={
  title:"Travel Guide Website",
  description:"Best travel guidance"
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`${newFont.className} w-screen h-screen bg-black`}>
        <Nav/>
        <div>{children}</div>
      </body>
    </html>
  );
}
