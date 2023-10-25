import { Footer } from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Website FerránDeveloper",
	description: "Modern and responsive Website with NextJS13",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={ubuntu.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
