export const metadata = {
	title: 'Flexialbe',
	description: 'A dribble clone using Next.js',
};
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/* body k andr jo children h whi mera page.tsx ko represent krta h  */}
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
