import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const Poppins = localFont({
	src: './fonts/PoppinsRegular.ttf',
	variable: '--font-poppins',
	weight: '100 900',
});
const MarckScript = localFont({
	src: './fonts/MarckScriptRegular.ttf',
	variable: '--font-marck-script',
	weight: '400',
});

export const metadata: Metadata = {
	title: "Asuncion's Purplehub",
	description: "Asuncion's purplehub official website, cakes, pastry",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${Poppins.variable} ${geistSans.variable} ${MarckScript.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
