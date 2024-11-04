export const eventsContent = {
	content: {
		title: {
			orders: ['schedule', 'news', 'last'] as const,
			schedule: {
				label: '행사 일정',
				href: '/[lang]/events',
				exact: true,
			},
			news: {
				label: '새소식',
				href: '/[lang]/events/news',
				notReady: true,
			},
			last: {
				label: '지난 소식',
				href: '/[lang]/events/last',
				notReady: true,
			},
		},
	},
	last: {},
	news: {},
};
