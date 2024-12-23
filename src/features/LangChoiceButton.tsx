'use client';

import { useLang } from '@/providers';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import krFlag from './images/kr.svg';
import enFlag from './images/en.svg';
import React from 'react';
import { Languages } from '@/lib/langs/types';

const LangChoiceButton = () => {
	const { language, setLanguage } = useLang();
	const pathname = usePathname();
	const onClick = async () => {
		
		await setLanguage(lang => (lang === 'en' ? 'kr' : 'en'));

	};
	const newPathname = pathname.replace(`/${language}/`, language === 'en' ? '/kr/' : '/en/');
	const lang = language ?? 'en';
	return (
		<Link href={newPathname} onClick={onClick} className='h-auto w-6 p-0 relative' aria-label='logout'>
			<Image
				src={lang === 'kr' ? krFlag : enFlag}
				alt='profiletwentyfo'
				width='24'
				height='24'
				className='rounded-full'
			/>
			<div className='absolute w-full h-[10px] flex justify-center items-center left-0 top-[100%] z-50'>
				<div className='text-center text-nowrap font-mono p-[2px] bg-red-800/70 text-white text-[5px]'>
					{lang}
				</div>
			</div>
		</Link>
	);
};

export default LangChoiceButton;
