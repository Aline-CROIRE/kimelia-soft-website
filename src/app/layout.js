import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat", 
  weight: ["400", "700"] 
});

const lora = Lora({ 
  subsets: ["latin"], 
  variable: "--font-lora", 
  weight: ["400"] 
});

export const metadata = {
  title: "Kimelia Soft | Technology & Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/logo.png" /> 
      </head>
      <body className={`${montserrat.variable} ${lora.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}