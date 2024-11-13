import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function stripUrl(url: string) {
	const protocol = url.split('://')[0];
	const onlyUrl = url.split('://')[1];
	const baseUrl = onlyUrl.split('/')[0];
	return `${protocol}://${baseUrl}`;
}
