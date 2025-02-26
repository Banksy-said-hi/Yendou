import "./globals.css";
import { Provider } from "@/components/ui/provider"
import { CounterProvider } from "./CounterContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <CounterProvider>
            {children}
          </CounterProvider>
        </Provider>
      </body>
    </html>
  );
}
