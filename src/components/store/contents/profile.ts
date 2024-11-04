export const profileContent = {
	content: {
		links: {
			orders: ['profile', 'users'] as const,
			profile: {
				label: 'Profile',
				href: '/profile',
			},
			users: {
				label: 'Allowed Users',
				href: '/profile/users',
			},
		},
		signOutBtn: {
			label: 'Sign Out',
		},
	},
	users: {},
};
