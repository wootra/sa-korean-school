'use client';

import React from 'react';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

const BannerExpand = ({ image, onClose }: { image: { desc: string; url: string }; onClose?: () => void }) => {
	const [checked, setChecked] = React.useState(false);
	const onChecked = () => setChecked(!checked);
	return (
		<label className='flex items-center justify-center p-2 pointer-events-none w-full'>
			<input type='checkbox' className='hidden w-0 h-0 overflow-hidden' checked={checked} onChange={onChecked} />
			<div className='relative w-fit flex justify-center transition-all'>
				<Image
					src={image.url}
					alt={image.desc}
					width={1024}
					height={600}
					loading='lazy'
					style={{
						objectFit: 'fill',
						// ...(onClose ? {} : { width: '100%' }),
						width: '100%',

						...(checked ? {} : { maxWidth: '500px' }),
					}}
					className='object-cover rounded-lg pointer-events-auto'
				/>
				{onClose && (
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							zIndex: 11,
							pointerEvents: 'auto',
							width: '30px',
							height: '30px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white',
						}}
						onClick={onClose}
					>
						<IoMdClose />
					</div>
				)}
			</div>
		</label>
	);
};

export default BannerExpand;
