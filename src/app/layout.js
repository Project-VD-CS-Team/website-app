import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './NavBar/navBar'
import * as motion from "./animations"

const inter = Inter({ subsets: ['latin'] })

export let metadata = {
  title: 'Visual Detector',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <motion.animate>
          <motion.div initial = {{opacity: 0}} animate = {{opacity: 1, duration: 2.5}}>
            {children}
          </motion.div>
        </motion.animate>
      </body>
    </html>
  )
}
