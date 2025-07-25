import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.postimg.cc/MTFfrNVf/favicon-32x32.png" sizes="any" />
        <title>ScanQR</title>
        <meta name="description" content="A modern webapp containing profile social links and contacts" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
