export const enContent = {
	navs: {
		logo: 'San Antonio\nKorean School',
		home: 'Home',
		about: 'About',
		courses: 'Courses',
		events: 'Events',
		payment: 'Payment',
		contacts: 'Contacts',
	},
	about: {
		list: {
			introduction: {
				title: 'Introduction',
				description: `San Antonio Korean School was established by a group of knowledgeable and influential Korean Americans in San Antonio who recognized the need for accelerated Korean language education for Korean American children. With great effort and determination, they raised funds and established the school in 1979. Since then, for over 40 years, the school has been teaching the Korean language to the children of the San Antonio community, introducing them to the culture and history of Korea, and promoting the values of community and cooperation.
        The school's educational goals are to instill a sense of pride in being a global citizen, to develop effective communication skills in the four language functions of speaking, listening, reading, and writing, and to foster a cultural and historical understanding of Korea and other cultures.`,
				info: 'The school is a non-profit organization registered with the IRS as a 501(c)(3) tax-exempt organization.',
			},
			greetings: {
				title: 'Greetings',
			},
			privacyPolicy: {
				title: 'Privacy Policy',
			},
			termsOfService: {
				title: 'Terms of Service',
			},
		},
		introduction: {
			heading: 'Introduction',
			description: `San Antonio Korean School was established by a group of knowledgeable and influential Korean Americans in San Antonio who recognized the need for accelerated Korean language education for Korean American children. With great effort and determination, they raised funds and established the school in 1979. Since then, for over 40 years, the school has been teaching the Korean language to the children of the San Antonio community, introducing them to the culture and history of Korea, and promoting the values of community and cooperation.
        The school's educational goals are to instill a sense of pride in being a global citizen, to develop effective communication skills in the four language functions of speaking, listening, reading, and writing, and to foster a cultural and historical understanding of Korea and other cultures.`,
			info: 'The school is a non-profit organization registered with the IRS as a 501(c)(3) tax-exempt organization.',
			content: {
				name: {
					title: 'School Name',
					value: 'San Antonio Korean School (San Antonio Korean School)',
					desc: 'Affiliated organization: City of San Antonio, Lone Star Convention and Visitors Bureau, and the Greater San Antonio Chamber of Commerce',
				},
				target: {
					title: 'Educational Goals',
					value: null,
					desc: 'To instill a sense of pride in being a global citizen, to develop effective communication skills in the four language functions of speaking, listening, reading, and writing, and to foster a cultural and historical understanding of Korea and other cultures.',
				},
				purpose: {
					title: 'Educational Objectives',
					value: null,
					desc: null,
					orders: ['koreanEducation', 'multiculturalEducation', 'globalCitizenEducation'] as const,
					content: {
						koreanEducation: {
							title: 'Korean Language Education',
							value: 'To develop language skills in accordance with age, level, topic, and situation by focusing on the four language functions of speaking, listening, reading, and writing.',
						},
						multiculturalEducation: {
							title: 'Multicultural National Education',
							value: 'To develop a multicultural identity through direct experience and understanding of various cultures and histories.',
						},
						globalCitizenEducation: {
							title: 'Global Citizenship Education',
							value: 'To develop a sense of community and cooperation through a shared understanding of our global community.',
						},
					},
				},
				subjects: {
					title: 'Subject to Education',
					value: 'Age 3 to Adult',
					desc: null,
					content: {
						pottyTrained: {
							value: 'Children aged 3 must be potty trained.',
						},
					},
				},
				schedule: {
					title: 'Class Schedule',
					value: 'Typically 15 to 16 weeks per semester',
					desc: 'However, the academic schedule may be subject to change due to school circumstances.',
					content: {
						fallSemester: {
							title: 'Fall Semester (1st Semester)',
							value: 'September to December',
						},
						springSemester: {
							title: 'Spring Semester (2nd Semester)',
							value: 'January to May',
						},
						summerSemester: {
							title: 'Summer Semester',
							value: 'June (2 weeks), August (3 weeks)',
						},
					},
				},
			},
		},
		greetings: {
			content: {},
		},
		privacyPolicy: {
			content: {
				heading: 'Privacy Policy',
				description:
					'San Antonio Korean School Homepage does not collect or save personal information except for an email address.',
			},
		},
		termsOfService: {
			content: {
				heading: 'Terms of Service',
				description: `San Antonio Korean School Homepage only allows internal user(administrators, homepage managers, school relative workers) to log in. All information except for management pages are open to public.`,
			},
		},
	},
	contacts: {
		content: {
			title: {
				contacts: 'Contacts',
				enterance: 'Enterance',
			},
		},
	},
	courses: {
		content: {
			title: {
				introduction: {
					label: '과정 소개',
					href: '[lang]/courses',
					exact: true,
				},
				schedule: {
					label: '학사 일정',
					href: '[lang]/courses/schedule',
				},
				titleTable: {
					label: '시간표',
					href: '[lang]/courses/time-table',
				},
			},
			backHeader: 'COURSES',
		},
	},
	events: {
		content: {
			title: {
				schedule: {
					label: '행사 일정',
					href: '[lang]/events',
					exact: true,
				},
				news: {
					label: '새소식',
					href: '[lang]/events/news',
					notReady: true,
				},
				last: {
					label: '지난 소식',
					href: '[lang]/events/last',
					notReady: true,
				},
			},
		},
	},
	payment: {
		content: {
			title: {
				transfer: {
					label: 'Transfer',
					href: '[lang]/payment/manual-payment',
					exact: true,
				},
				card: {
					label: 'Credit Card',
					href: '[lang]/payment',
					exact: true,
				},
			},
			classRegistration: {
				accordionLabel: 'Class Registration',
				paymentButton: '[%1:year] Autom Semester Deposit',
			},
			deposit: {
				title: '2024 Autumn Semester Deposit',
				desc: 'Deposit for the class. This includes 3% as fee',
			},
			backHeader: 'PAYMENT',
		},
		canceled: {
			content: {
				title: 'Payment Canceled!',
				content: 'Your payment is successfully canceled.',
				goBackBtn: 'Go back to Payment Page',
			},
		},
		failed: {
			content: {
				title: 'Payment Failed!',
				content: {
					reason: 'Your payment is failed for this reason:',
				},
				goBackBtn: 'Go back to Payment Page',
			},
		},
		success: {
			content: {
				title: 'Payment Succeed!',
				content: 'Your payment is successfully paid!',
				goBackBtn: 'Home',
			},
		},
	},
	profile: {
		content: {
			links: {
				profile: {
					label: 'Profile',
					href: '[lang]/profile',
				},
				users: {
					label: 'Allowed Users',
					href: '[lang]/profile/users',
				},
			},
			signOutBtn: {
				label: 'Sign Out',
			},
		},
	},
	signIn: {
		content: {
			title: 'Sign In',
			email: {
				label: 'Email',
				placeholder: 'Enter your email',
			},
			password: {
				label: 'Password',
				placeholder: 'Enter your password',
			},
			submit: 'Sign In',
			helpDesc: 'Please request a new account with [%1:helpLink]',
			helpLink: {
				label: 'adminstrator',
				href: 'mailto:sa.koreanschool@gmail.com',
			},
		},
	},
	entry: {
		content: {
			meta: {
				title: 'San Antonio Korean School Homepage',
				description: 'San Antonio Korean School Official Homepage',
			},
			title: {
				hero: 'Welcome to\nSan Antonio Korean School',
				heroDesc:
					"We value children's dreams 🛌 and love💖.\n            Join our safe and happy learning environment!",
			},
		},
	},
};
