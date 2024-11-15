import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/auth-provider";
import { UIStateProvider } from "@/hooks/use-uiState";
import "@/theme/globals.css";
import "@/theme/fonts.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <AuthProvider><UIStateProvider>{children}</UIStateProvider></AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
