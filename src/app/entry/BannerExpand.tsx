'use client';

import React from 'react';
import Image from 'next/image';

const BannerExpand = ({ image }: { image: { desc: string; url: string } }) => {
	const [checked, setChecked] = React.useState(false);
	const onChecked = () => setChecked(!checked);
	return (
		<label className='flex items-center justify-center p-2 pointer-events-none'>
			<input type='checkbox' className='hidden w-0 h-0 overflow-hidden' checked={checked} onChange={onChecked} />
			<Image
				src={image.url}
				alt={image.desc}
				width={500}
				height={400}
				loading='lazy'
				style={{
					objectFit: 'fill',
					width: '100%',
					...(checked ? {} : { maxWidth: '500px' }),
				}}
				className='object-cover rounded-lg pointer-events-auto'
			/>
		</label>
	);
};

export default BannerExpand;
