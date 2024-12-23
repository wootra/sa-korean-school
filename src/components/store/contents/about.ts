export const aboutContents = {
	list: {
		orders: ['introduction', 'greetings', 'privacyPolicy', 'termsOfService'] as const,
		content: {
			introduction: {
				title: 'Introduction',
				href: '/[lang]/about',
				exact: true,
				notReady: false,
			},
			greetings: {
				title: 'Greetings',
				href: '/[lang]/about/greetings',
				exact: false,
				notReady: true,
			},
			privacyPolicy: {
				title: 'Privacy Policy',
				href: '/[lang]/about/policy',
				exact: false,
				notReady: false,
			},
			termsOfService: {
				title: 'Terms of Service',
				href: '/[lang]/about/terms',
				exact: false,
				notReady: false,
			},
		},
	},
	introduction: {
		heading: 'heading',
		description: `description`,
		info: `info`,
		orders: ['name', 'target', 'purpose', 'subjects', 'schedule'] as const,
		content: {
			name: {
				title: '학교명',
				value: '샌안토니오 한국학교 (San Antonio Korean School)',
				desc: '관할공관: 휴스턴 총영사관, 남서부협의회 센트럴지역 협의회 소속',
				orders: [],
				content: {},
			},
			target: {
				title: '교육목표',
				value: null,
				desc: '자긍심을 가지고 세계중심에서 생각하고 표현하고 행동하며 한국어 및 한국 문화 및 역사의 문화적, 교육적 가치를 배운다.',
				orders: [],
				content: {},
			},
			purpose: {
				title: '교육목적',
				value: null,
				desc: null,
				orders: ['koreanEducation', 'multiculturalEducation', 'globalCitizenEducation'] as const,
				content: {
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
			},
			subjects: {
				title: '모집대상',
				value: '만 3세 ~ 성인',
				desc: null,
				orders: ['pottyTrained'] as const,
				content: {
					pottyTrained: {
						value: '만 3세 등록 예정자는 반드시Potty Trained 되어야 한다.',
					},
				},
			},
			schedule: {
				title: '수업 일정',
				value: '매 학기는 보통 15~16주를 기본으로 한다.',
				desc: '단, 학교 사정으로 인하여 학사 일정이 바뀔 수 도 있다.',
				orders: ['fallSemester', 'springSemester', 'summerSemester'] as const,
				content: {
					fallSemester: { title: '가을학기(1학기)', value: '9월 ~ 12월' },
					springSemester: { title: '봄학기(2학기)', value: '1월 ~ 5월' },
					summerSemester: { title: '여름학기', value: '6월달(2주), 8월달(3주)' },
				},
			},
		},
	},
	greetings: {},
	privacyPolicy: {
		content: {
			heading: 'Privacy Policy',
			description: `San Antonio Korean School Homepage does not collect or save personal information except for an email address.`,
		},
	},
	termsOfService: {
		content: {
			heading: '서비스 이용정책',
			description: `샌안토니오 한국학교 홈페이지는 학교 관계자(서비스 관리자, 홈페이지 관리자, 학교 관련 직원)의 로그인만 허용합니다.`,
		},
	},
	content: {},
};
