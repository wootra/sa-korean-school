export const krContent = {
	navs: {
		logo: '샌안토니오\n한국학교',
		home: '홈',
		about: '소개',
		courses: '교육과정',
		events: '행사정보',
		payment: '결제정보',
		contacts: '연락처',
	},
	about: {
		list: {
			introduction: {
				title: '학교 소개',
			},
			greetings: {
				title: '인사말',
			},
			privacyPolicy: {
				title: '개인 정보 취급',
			},
			termsOfService: {
				title: '서비스 이용정책',
			},
		},
		introduction: {
			heading: '학교 소개',
			description: `샌안토니오 한국학교는 샌안토니오 한인 사회 구성원이었던 다양한 지식인들이 한인 2세들의 한국어 교육의 절박성을 인식하여 한글학교의 설립의 뜻을 세우로 다양한 방법으로 기금을 모아 1979년 9월 샌안토니오 한글학교가 출범하였습니다.
       그 이후 지금까지 약 40여 년 동안 샌안토니오 지역 후세들에게 언어 교육을 통하여 한국의 문화와 얼을 심어 주고, 샌안토니오 지역 사회에 한국 문화와 역사를 소개하고 경험하게 하며 샌안토니오 지역사회에서 공동의 가치를 위해 노력하고 있습니다.`,
			info: `샌안토니오 한국학교는 미국 연방정부 IRS에  501(c )(3) 비영리 단체로 등록된 단체입니다.`,

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
		greetings: {},
		privacyPolicy: {
			content: {
				heading: '개인정보 취급 정책',
				description: `샌안토니오 한국학교 홈페이지는 이메일 주소를 제외한 개인정보도 수집/저장하지 않습니다.`,
			},
		},
		termsOfService: {
			content: {
				heading: '서비스 이용정책',
				description:
					'샌안토니오 한국학교 홈페이지는 학교 관계자(서비스 관리자, 홈페이지 관리자, 학교 관련 직원)의 로그인만 허용합니다.',
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
					href: '/[lang]/courses',
					exact: true,
				},
				schedule: {
					label: '학사 일정',
					href: '/[lang]/courses/schedule',
				},
				titleTable: {
					label: '시간표',
					href: '/[lang]/courses/time-table',
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
	},
	payment: {
		content: {
			title: {
				transfer: {
					label: '이체',
					href: '/[lang]/payment/manual-payment',
					exact: true,
				},
				card: {
					label: '카드 결제',
					href: '/[lang]/payment',
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
					href: '/[lang]/profile',
				},
				users: {
					label: 'Allowed Users',
					href: '/[lang]/profile/users',
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
				title: '샌안토니오 한국학교',
				description: '샌안토니오 한국학교 공식 홈페이지',
			},
			title: {
				hero: `샌안토니오 한국학교에\n오신 것을 환영합니다!`,
				heroDesc: `샌안토니오 한국학교는 행복하고 안전한 교육환경에서 
			아이들의 꿈과 🛌 사랑을 💖 키워 줍니다.`,
			},
		},
	},
};
