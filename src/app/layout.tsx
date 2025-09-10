import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import '@/shared/styles/global.scss'


export const metadata: Metadata = {
  title: "Prime_setup",
  description: "Prime-setup NEXT ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
          <Toaster position="top-right" />
      </body>
    </html>
  );
}
