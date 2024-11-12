'use server';

import BannerExpand from './BannerExpand';

const Banners = async ({ bannerImages }: { bannerImages: { desc: string; url: string }[] }) => {
	// const pictureContainerWidth = ScrollProps.pictureWidth + 16; //16 is p-2 (8px * 2)
	return (
		<div className='flex flex-col w-full py-4 relative'>
			{bannerImages.map((image, index) => (
				<BannerExpand key={`image-${index}`} image={image}></BannerExpand>
			))}
		</div>
	);
};

export default Banners;
