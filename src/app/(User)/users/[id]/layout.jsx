import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/users/shared/NavbarUsers";
import Footer from "@/components/users/shared/FooterUsers";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlushBelle",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={inter.className}>
        {children}
      </div>
      <Footer />
      <ToastContainer /> {/* Toast container for notifications */}
    </>
  );
}
