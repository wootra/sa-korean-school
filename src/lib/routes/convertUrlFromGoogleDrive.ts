export const convertImageUrlFromGoogleDrive = (url: string, size = 1000) => {
    let id = '';
    // example: 'https://drive.google.com/file/d/{some-id}/view?usp=sharing'
    if (url.includes('https://drive.google.com/file/d/')) {
        const exp = new RegExp(
            'https://drive.google.com/file/d/([\\w-]+)/view?'
        );
        id = exp.exec(url)?.[1] ?? '';
    } else {
        id = url;
    }
    // both of below works.
    // return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
    return `https://lh3.googleusercontent.com/d/${id}=w${size}?authuser=0`;
};
