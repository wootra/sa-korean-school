import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://sakoreanschool.org/kr/entry',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: 'https://sakoreanschool.org/en/entry',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: 'https://sakoreanschool.org/kr/about',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.8,
		},
		{
			url: 'https://sakoreanschool.org/kr/about/greetings',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.8,
		},
		{
			url: 'https://sakoreanschool.org/kr/contacts',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/courses',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/courses/schedule',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/courses/time-table',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/events',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/events/news',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/events/news',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/manual-payment',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/payment',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/kr/profile',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/about',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.8,
		},
		{
			url: 'https://sakoreanschool.org/en/about/greetings',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.8,
		},
		{
			url: 'https://sakoreanschool.org/en/contacts',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/courses',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/courses/schedule',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/courses/time-table',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/events',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/events/news',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/events/news',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/manual-payment',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/payment',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: 'https://sakoreanschool.org/en/profile',
			lastModified: new Date(),
			changeFrequency: 'never',
			priority: 0.5,
		},
	];
}
