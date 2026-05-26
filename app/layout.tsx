export const metadata = {
  title: "Meta Facebook Proxy",
  description: "Coze to Meta Facebook proxy service"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
