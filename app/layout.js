import { Poppins } from "next/font/google";
import "../styles/style.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Splash",
  description: "Splash Website",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
