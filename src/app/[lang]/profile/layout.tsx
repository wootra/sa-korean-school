import { Languages } from '@/lib/langs/types';

import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { PropsWithChildren } from 'react';

type Props = {
	params: { lang: string };
};

export default function ProfileLayout({
	params: { lang },
	children,
}: PropsWithChildren<Props>) {
	const langCode = (['en', 'kr'] as Languages[]).includes(lang as Languages)
		? (lang as Languages)
		: 'en';
	return (
		<div className='w-full flex justify-center items-center'>
			<div className='min-h-screen w-full bg-gray-50 py-10'>
				<div className='container flex'>
					{/* Sidebar Menu */}
					<div className='w-64 flex-shrink-0 bg-white shadow-lg rounded-lg p-5 relative'>
						<div className='font-semibold text-lg mb-10'>Menu</div>
						<ul className='space-y-4'>
							<li>
								<Link
									href={`/${lang}/profile`}
									className='text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out'
								>
									Profile
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/profile/users`}
									className='text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out'
								>
									Allowed Users
								</Link>
							</li>
							{/* Add more menu items here */}
						</ul>
						<div className='absolute bottom-2 left-2 right-2 h-fit'>
							<SignOutButton />
						</div>
					</div>

					{/* Content Panel */}
					<div className='flex-1 bg-white shadow-lg rounded-lg overflow-hidden ml-10'>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
