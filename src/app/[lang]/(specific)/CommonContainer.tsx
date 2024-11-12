import React, { PropsWithChildren } from 'react';
import SignOutButton from './profile/SignOutButton';

const CommonContainer = ({
	title,
	children,
}: PropsWithChildren<{ title: string }>) => {
	return (
		<>
			<div className='bg-blue-500 p-4 text-white text-lg font-semibold'>
				{title}
			</div>
			<div className='p-6'>
				<div className='flex justify-between items-center space-x-6'>
					<div className='flex-1'>
						<div className='flex items-center space-x-4 min-h-64'>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CommonContainer;
