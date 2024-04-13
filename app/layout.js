import "./globals.css";
import ThemeRegistry from "./component/ThemeRegistry";

export const metadata = {
  title: "romeltech",
  description: "Next js 14 and MUI starter file",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
