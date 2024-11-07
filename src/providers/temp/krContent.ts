export const krContent = {
	navs: {
		logo: '산안토니오\n한국학교',
		home: '홈',
		about: '소개',
		courses: '교육과정',
		events: '행사정보',
		payment: '결제정보',
		contacts: '연락처',
	},
	about: {
		greetings: {},
		policy: {
			content: {
				heading: 'Privacy Policy',
				description:
					'San Antonio Korean School Homepage does not collect or save personal information except for an email address.',
			},
		},
		terms: {
			content: {
				heading: '서비스 이용정책',
				description:
					'샌안토니오 한국학교 홈페이지는 학교 관계자(서비스 관리자, 홈페이지 관리자, 학교 관련 직원)의 로그인만 허용합니다.',
			},
		},
		content: {
			intro: {
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
		},
	},
	contacts: {
		content: {
			title: {
				contacts: '연락처',
				enterance: '학교 입구',
			},
		},
	},
	courses: {
		content: {
			title: {
				introduction: {
					label: '과정 소개',
					href: '/courses',
					exact: true,
				},
				schedule: {
					label: '학사 일정',
					href: '/courses/schedule',
				},
				titleTable: {
					label: '시간표',
					href: '/courses/time-table',
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
					href: '/events',
					exact: true,
				},
				news: {
					label: '새소식',
					href: '/events/news',
					notReady: true,
				},
				last: {
					label: '지난 소식',
					href: '/events/last',
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
					href: '/payment/manual-payment',
					exact: true,
				},
				card: {
					label: 'Credit Card',
					href: '/payment',
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
