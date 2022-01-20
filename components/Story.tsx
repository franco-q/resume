import React from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Story = () => {
	const { i18n } = useTranslation()
	const router = useRouter()
	const translations: any = i18n.getResourceBundle(router.locale, 'Story')

	return (
		<div className="divide-y-2 divide-gray-100">
			{translations.items.map(
				(
					stage: {
						title: string
						items: Array<{
							period: string
							caption: string
							sub?: string
							txt?: string
							link?: string
						}>
					},
					i
				) => (
					<div className="py-8" key={i + stage.title}>
						<span className="block font-semibold title-font text-gray-700 mb-2 md:m-0">
							{stage.title}
						</span>
						{stage.items.map((item, c) => (
							<div
								className="md:flex flex-wrap md:flex-nowrap mb-2"
								key={i + stage.title + c}
							>
								<div className="md:w-64 flex-shrink-0 flex flex-col">
									<span className="mt-1 text-gray-500 text-sm">
										{item.period}
									</span>
								</div>
								<div className="md:flex-grow">
									<h2 className="text-2xl font-mono font-medium text-gray-900 title-font mb-2">
										{item.caption}
									</h2>
									<p className="leading-relaxed">
										{item.sub}
										{item.txt && (
											<>
												<br />
												<i>{item.txt}</i>
											</>
										)}
									</p>
									{item.link && (
										<a
											className="text-indigo-500 inline-flex items-center text-sm"
											href={item.link}
										>
											{translations.website}
											<svg
												className="w-4 h-4 ml-2"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M5 12h14"></path>
												<path d="M12 5l7 7-7 7"></path>
											</svg>
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				)
			)}
		</div>
	)
}

export default Story
