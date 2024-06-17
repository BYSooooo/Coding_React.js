import { Metadata } from "next"
import Navigation from "../components/navigation"
import "../style/global.css"

export const metadata : Metadata= {
  title : {
    template : "%s | Next Movies",
    default : "Loading..."
  },
  description: 'The best movies on the best frameworks'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
