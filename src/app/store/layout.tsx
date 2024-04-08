"use client"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <BuyerNavbar /> */}
        {children}
      </body>
    </html>
  );
}
