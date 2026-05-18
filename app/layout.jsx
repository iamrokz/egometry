import "./globals.css";

export const metadata = {
  title: "rokz. : GODS AWAKE — Egometry",
  description:
    "A stylized philosophical-dystopian 2D adventure concept inside the Egometry universe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
