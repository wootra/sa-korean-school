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

			name: {
				title: '학교명',
				value: '샌안토니오 한국학교 (San Antonio Korean School)',
				desc: '관할공관: 휴스턴 총영사관, 남서부협의회 센트럴지역 협의회 소속',
			},
			target: {
				title: '교육목표',
				desc: '자긍심을 가지고 세계중심에서 생각하고 표현하고 행동하며 한국어 및 한국 문화 및 역사의 문화적, 교육적 가치를 배운다.',
			},
			purpose: {
				title: '교육목적',
				orders: ['koreanEducation', 'multiculturalEducation', 'globalCitizenEducation'] as const,
				koreanEducation: {
					title: '한국어 교육',
					value: '연령, 단계, 주제 · 상황별로 적절한 의사소통 능력 배양을 위한 언어의 4가지 기능 (말하기/듣기/읽기/쓰기)을 배양한다.',
				},
				multiculturalEducation: {
					title: '다문화적 민족 교육',
					value: '다양한 문화 및 역사에 대한 직 · 간접 체험과 이해를 통한 다문화적 정체성을 배양한다.',
				},
				globalCitizenEducation: {
					title: '세계시민교육',
					value: '너와 나 함께하는 우리 공동체 의식을 통한 세계시민을 육성한다.',
				},
			},
			subjects: {
				title: '모집대상',
				value: '만 3세 ~ 성인',
				orders: ['pottyTrained'] as const,
				pottyTrained: {
					value: '만 3세 등록 예정자는 반드시Potty Trained 되어야 한다.',
				},
			},
			schedule: {
				title: '수업 일정',
				value: '매 학기는 보통 15~16주를 기본으로 한다.',
				desc: '단, 학교 사정으로 인하여 학사 일정이 바뀔 수 도 있다.',
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
