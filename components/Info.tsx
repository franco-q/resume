import React from 'react'
import { useTranslation } from 'next-i18next'
const Info = () => {
	const { t } = useTranslation('Info')
	return (
		<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
			<div className="flex flex-wrap sm:mb-2 -mx-2">
				<div className="px-2 w-full">
					<h2 className="text-4xl font-mono mb-4 text-gray-900">
						Franco Nicolás Quintana
					</h2>
				</div>
				<div className="p-1 w-full">
					<div className="bg-gray-100 rounded flex p-2 h-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						<a
							href="mailto: franco.n.quintana@gmail.com"
							className="title-font font-medium"
							target="_blank"
						>
							franco.n.quintana@gmail.com
						</a>
					</div>
				</div>
				<div className="p-1 w-full">
					<div className="bg-gray-100 rounded flex p-2 h-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
						>
							<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
							<line x1="12" y1="18" x2="12.01" y2="18"></line>
						</svg>
						<a href="tel:2235975477" className="title-font font-medium" target="_blank">
							2235975477
						</a>
					</div>
				</div>
				<div className="p-1 w-full">
					<div className="bg-gray-100 rounded flex p-2 h-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<span className="title-font font-medium">{t('location')}</span>
					</div>
				</div>
				<div className="p-1 w-full">
					<div className="bg-gray-100 rounded flex p-2 h-full items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
						</svg>
						<a
							href="https://github.com/franco-q"
							className="title-font font-medium"
							target="_blank"
						>
							https://github.com/franco-q
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
