import type { Metadata } from "next";
import '@/shared/styles/global.module.scss'


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
      </body>
    </html>
  );
}
