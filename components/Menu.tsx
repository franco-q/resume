import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = () => {
	const router = useRouter()
	const tolocale: string = router.locale === 'es' ? 'en' : 'es'
	const print = e => {
		e.preventDefault()
		window.print()
	}
	return (
		<nav className="flex print:hidden justify-center">
			<Link href="/" locale={tolocale}>
				<a className="mr-5 text-indigo-500 hover:text-indigo-200 flex" href="#">
					<span>{tolocale.toUpperCase()}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className=" w-6 h-6 flex-shrink-0"
						viewBox="0 0 24 24"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M2 12L22 12"></path>
						<path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
					</svg>
				</a>
			</Link>
			<a className="mr-5 text-indigo-500 hover:text-indigo-200" href="/" onClick={print}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className=" w-6 h-6 flex-shrink-0"
					viewBox="0 0 24 24"
				>
					<path d="M6 9L6 2 18 2 18 9"></path>
					<path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
					<path d="M6 14H18V22H6z"></path>
				</svg>
			</a>
		</nav>
	)
}

export default Menu
