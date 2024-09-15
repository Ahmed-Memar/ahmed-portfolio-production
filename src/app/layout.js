import { Inter , Roboto} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight:['400','700','900'] });

export const metadata = {
  title: "Ahmed Memar cybersecurity's portfolio",
  description: "Ahmed's portfolio developed by NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased ${inter.className}`}>
      <NavBar />
      <main className="container max-w-[1280px] xl:mx-auto  font-mono ">
        {children}
      </main>
      </body>
    </html>
  );
}
