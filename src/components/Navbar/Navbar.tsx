import Image from "next/image";
import Link from "next/link";

export function Navbar() {
	return (
		<div className="grid bg-cover bg-indigo-400 w-auto items-center gap-20 justify-between mt-5 mb-3 md:grid-cols-2 gap:4 md:gap-20 md:px-20">
			<Image
				src="/assets/ferran_dev_logo.png"
				alt="Logo FerranDev"
				width="200"
				height="25"
				className="mx-auto lg:mx-0"
			/>
			<div className="flex items-end justify-between  ml-20 gap-4 text-center">
				<Link href="#overview">
					Inicio
					<br />
					Start
				</Link>
				<Link href="#features">
					Nosotros
					<br />
					Us
				</Link>
				<Link href="#about">
					Servicios
					<br />
					Services
				</Link>
				<Link href="#practice">
					Cursos
					<br />
					Courses
				</Link>
				<Link href="#pricing">
					Precios
					<br />
					Pricing
				</Link>
			</div>
		</div>
	);
}
