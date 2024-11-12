'use client';

import { cn } from '@/lib/utils';
import { useLang } from '@/providers';
import { usePathname } from 'next/navigation';
import React from 'react';

const SelectedLinkMark = ({
	pathName,
	exact = false,
	onlyHorizontal = false,
}: {
	pathName: string;
	exact?: boolean;
	onlyHorizontal?: boolean;
}) => {
	const currPathName = usePathname();
	const { language } = useLang();
	const isActive =
		pathName === `/${language}/entry` || exact ? currPathName === pathName : currPathName.includes(pathName);
	return (
		<>
			{
				// for horizontal menu
			}
			<div
				className={cn(
					`absolute transition-all`,
					!onlyHorizontal && 'hidden sm:block',
					'w-[100%] top-0 h-[2px] duration-500 pointer-events-none',

					isActive ? 'bg-red-400 left-0' : 'bg-transparent -left-[100%]'
				)}
			></div>
			<div
				className={cn(
					`absolute transition-all`,
					!onlyHorizontal ? 'hidden sm:block' : '',
					'w-[100%] duration-500 bottom-0 h-[2px] pointer-events-none',

					isActive ? 'bg-blue-400 right-0' : 'bg-transparent -right-[100%]'
				)}
			></div>

			{
				// for vertical menu
			}
			{!onlyHorizontal && (
				<>
					<div
						className={cn(
							`absolute transition-all h-full left-[-16px] w-[2px] sm:hidden duration-500 pointer-events-none`,
							isActive ? 'bg-red-400 top-0' : 'bg-transparent -top-[100%]'
						)}
					></div>
					<div
						className={cn(
							'absolute transition-all h-full right-[-16px] w-[2px] sm:hidden pointer-events-none',
							isActive ? 'bg-blue-400 bottom-0' : 'bg-transparent -bottom-[100%]'
						)}
					></div>
				</>
			)}
		</>
	);
};

export default SelectedLinkMark;
