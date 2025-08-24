'use client';
import dynamic from 'next/dynamic';


const TopHeader = dynamic(() => import('./Components/topheader'), { ssr: false });
const Footer = dynamic(() => import('./Components/footer'), { ssr: false });


export default function ClientLayout({ children }) {
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
}
