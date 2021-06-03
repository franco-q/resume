import React from 'react'
import Check from './Check'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Skills = () => {
	const { i18n } = useTranslation()
	const router = useRouter()
	const translations: any = i18n.getResourceBundle(router.locale, 'Skills')

	return (
		<div>
			<div className="text-center mb-20">
				<h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 font-mono">
					Technical skills
				</h1>
				<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
					{translations.intro}
				</p>
			</div>
			<div className="flex flex-wrap -m-4">
				{translations.skills.map((categ: { title: string; links: string[] }, i: number) => (
					<div className="p-4 sm:w-1/4 w-full" key={i + categ.title}>
						<h2 className="font-mono font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
							{categ.title}
						</h2>
						<nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
							{categ.links.map((txt: string, j: number) => (
								<a key={i + categ.title + j} href="#">
									<Check />
									{txt}
								</a>
							))}
						</nav>
					</div>
				))}
			</div>
		</div>
	)
}

export default Skills
