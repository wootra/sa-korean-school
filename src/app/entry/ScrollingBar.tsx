'use client';

import Image from 'next/image';

import { CSSProperties, useState } from 'react';
import { ScrollProps } from './consts';
import BannerExpand from './BannerExpand';
type ImgInfo = { desc: string; url: string };
const ScrollingBar = ({ scrollImages }: { scrollImages: ImgInfo[] }) => {
	const duplicatedImages = [...scrollImages, ...scrollImages];
	const pictureContainerWidth = ScrollProps.pictureWidth + 16; //16 is p-2 (8px * 2)
	const [selected, setSelected] = useState<ImgInfo | null>(null);
	return (
		<div style={{ position: 'relative' }}>
			<div className='flex flex-col w-full h-[300px] overflow-x-clip py-4 relative'>
				<div className='absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10'></div>
				<div className='absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10'></div>
				<div className='h-full w-full relative' aria-label='scrolling images'>
					<div
						className='flex flex-row flex-nowrap animate-scroll-x absolute inset-y-0'
						style={
							{
								'--itemCount': scrollImages.length,
								'--itemWidth': `${pictureContainerWidth}px`,
								'--animationDuration': `${duplicatedImages.length * ScrollProps.secPerPic}s`,
								width: `${pictureContainerWidth * duplicatedImages.length}px`,
							} as CSSProperties
						}
						aria-hidden
					>
						{duplicatedImages.map((image, index) => (
							<div
								key={`image-${index}`}
								className='flex items-center justify-center p-2 overflow-hidden'
								style={{
									width: `${pictureContainerWidth}px`,
								}}
								onClick={() => setSelected(image)}
							>
								<Image
									src={image.url}
									alt={image.desc}
									width={ScrollProps.pictureWidth}
									height={ScrollProps.pictureHeight}
									loading='lazy'
									style={{
										aspectRatio: `${ScrollProps.pictureWidth}/${ScrollProps.pictureHeight}`,
										objectFit: 'cover',
									}}
									className='object-cover rounded-lg'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{selected && (
				<div style={{ position: 'absolute', top: 0, zIndex: 2, width: '100%' }}>
					<div
						style={{ position: 'absolute', top: 0, zIndex: -1, inset: 0, background: '#eeeeeedd' }}
						onClick={e => {
							setSelected(null);
						}}
					/>
					<BannerExpand image={selected} />
				</div>
			)}
		</div>
	);
};

export default ScrollingBar;
