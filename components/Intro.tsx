import React from 'react'
import { useTranslation } from 'next-i18next'

const Intro = () => {
	const { t } = useTranslation('Intro')
	return (
		<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
			<div className="w-48 h-48 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 overflow-hidden">
				<img src="/img.png" alt="" />
			</div>
			<div className="flex flex-col items-center text-center justify-center">
				<p className="text-base">
					{t('line1')} {t('line2')} {t('line3')}
				</p>
			</div>
		</div>
	)
}
export default Intro
