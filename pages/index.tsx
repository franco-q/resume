import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Info from '../components/Info'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Menu from '../components/Menu'
import Story from '../components/Story'

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 print:p-0 text-gray-600 body-font overflow-hidden">
			<Head>
				<title>Franco Q</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Quicksand:wght@700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Menu />
			<div className="max-w-6xl px-10 py-14 print:py-10 md:py-20 mx-auto">
				<div className="flex flex-col sm:flex-row mt-10">
					<Intro />
					<Info />
				</div>
			</div>
			<div className="max-w-6xl px-10 py-14 print:py-10 md:py-20 mx-auto">
				<Story />
			</div>
			<div className="max-w-6xl px-10 py-14 print:py-10 md:py-20 mx-auto">
				<Skills />
			</div>
		</div>
	)
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['Intro', 'Info', 'Skills', 'Story']))
	}
})
export default Home
