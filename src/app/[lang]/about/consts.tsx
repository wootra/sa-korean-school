import { SubNavInfo } from '@/entities/SubNav';
import { DocElement } from './types';
import { Languages } from '@/lib/langs/types';

export const ABOUT_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof ABOUT_PAGES)[number];

export const ABOUT_LIST: Record<Languages, SubNavInfo[]> = {
    kr: [
        {
            title: '학교 소개',
            href: '/[lang]/about',
            exact: true,
        },
        {
            title: '학교장/이사장 인사',
            href: '/[lang]/about/greetings',
            notReady: true,
        },
        {
            title: '개인정보취급',
            href: '/[lang]/about/policy',
        },
        {
            title: '서비스 이용정책',
            href: '/[lang]/about/terms',
        },
    ],
    en: [
        {
            title: 'Introduction',
            href: '/[lang]/about',
            exact: true,
        },
        {
            title: 'Greetings',
            href: '/[lang]/about/greetings',
            notReady: true,
        },
        {
            title: 'Privacy Policy',
            href: '/[lang]/about/policy',
        },
        {
            title: 'Terms of Service',
            href: '/[lang]/about/terms',
        },
    ],
};

export const introductions: Record<
    Languages,
    { heading: string; description: string; info: string }
> = {
    en: {
        heading: 'Introduction',
        description: `San Antonio Korean School was established by a group of knowledgeable and influential Korean Americans in San Antonio who recognized the need for accelerated Korean language education for Korean American children. With great effort and determination, they raised funds and established the school in 1979. Since then, for over 40 years, the school has been teaching the Korean language to the children of the San Antonio community, introducing them to the culture and history of Korea, and promoting the values of community and cooperation.
        The school's educational goals are to instill a sense of pride in being a global citizen, to develop effective communication skills in the four language functions of speaking, listening, reading, and writing, and to foster a cultural and historical understanding of Korea and other cultures.`,
        info: 'The school is a non-profit organization registered with the IRS as a 501(c)(3) tax-exempt organization.',
    },
    kr: {
        heading: '학교 소개',
        description: `샌안토니오 한국학교는 샌안토니오 한인 사회 구성원이었던 다양한 지식인들이 한인 2세들의 한국어 교육의 절박성을 인식하여 한글학교의 설립의 뜻을 세우로 다양한 방법으로 기금을 모아 1979년 9월 샌안토니오 한글학교가 출범하였습니다.
       그 이후 지금까지 약 40여 년 동안 샌안토니오 지역 후세들에게 언어 교육을 통하여 한국의 문화와 얼을 심어 주고, 샌안토니오 지역 사회에 한국 문화와 역사를 소개하고 경험하게 하며 샌안토니오 지역사회에서 공동의 가치를 위해 노력하고 있습니다.`,
        info: `샌안토니오 한국학교는 미국 연방정부 IRS에  501(c )(3) 비영리 단체로 등록된 단체입니다.`,
    },
};

export const docs: Record<Languages, DocElement[]> = {
    kr: [
        {
            title: '학교명',
            value: '샌안토니오 한국학교 (San Antonio Korean School)',
            desc: '관할공관: 휴스턴 총영사관, 남서부협의회 센트럴지역 협의회 소속',
        },
        {
            title: '교육목표',
            desc: '자긍심을 가지고 세계중심에서 생각하고 표현하고 행동하며 한국어 및 한국 문화 및 역사의 문화적, 교육적 가치를 배운다.',
        },
        {
            title: '교육목적',
            children: [
                {
                    title: '한국어 교육',
                    value: '연령, 단계, 주제 · 상황별로 적절한 의사소통 능력 배양을 위한 언어의 4가지 기능 (말하기/듣기/읽기/쓰기)을 배양한다.',
                },
                {
                    title: '다문화적 민족 교육',
                    value: '다양한 문화 및 역사에 대한 직 · 간접 체험과 이해를 통한 다문화적 정체성을 배양한다.',
                },
                {
                    title: '세계시민교육',
                    value: '너와 나 함께하는 우리 공동체 의식을 통한 세계시민을 육성한다.',
                },
            ],
        },
        {
            title: '모집대상',
            value: '만 3세 ~ 성인',
            children: [
                {
                    value: '만 3세 등록 예정자는 반드시Potty Trained 되어야 한다.',
                },
            ],
        },
        {
            title: '수업 일정',
            value: '매 학기는 보통 15~16주를 기본으로 한다.',
            desc: '단, 학교 사정으로 인하여 학사 일정이 바뀔 수 도 있다.',
            children: [
                { title: '가을학기(1학기)', value: '9월 ~ 12월' },
                { title: '봄학기(2학기)', value: '1월 ~ 5월' },
                { title: '여름학기', value: '6월달(2주), 8월달(3주)' },
            ],
        },
    ],
    en: [
        {
            title: 'School Name',
            value: 'San Antonio Korean School (San Antonio Korean School)',
            desc: 'Affiliated organization: City of San Antonio, Lone Star Convention and Visitors Bureau, and the Greater San Antonio Chamber of Commerce',
        },
        {
            title: 'Educational Goals',
            desc: 'To instill a sense of pride in being a global citizen, to develop effective communication skills in the four language functions of speaking, listening, reading, and writing, and to foster a cultural and historical understanding of Korea and other cultures.',
        },
        {
            title: 'Educational Objectives',
            children: [
                {
                    title: 'Korean Language Education',
                    value: 'To develop language skills in accordance with age, level, topic, and situation by focusing on the four language functions of speaking, listening, reading, and writing.',
                },
                {
                    title: 'Multicultural National Education',
                    value: 'To develop a multicultural identity through direct experience and understanding of various cultures and histories.',
                },
                {
                    title: 'Global Citizenship Education',
                    value: 'To develop a sense of community and cooperation through a shared understanding of our global community.',
                },
            ],
        },
        {
            title: 'Subject to Education',
            value: 'Age 3 to Adult',
            children: [
                {
                    value: 'Children aged 3 must be potty trained.',
                },
            ],
        },
        {
            title: 'Class Schedule',
            value: 'Typically 15 to 16 weeks per semester',
            desc: 'However, the academic schedule may be subject to change due to school circumstances.',
            children: [
                {
                    title: 'Fall Semester (1st Semester)',
                    value: 'September to December',
                },
                {
                    title: 'Spring Semester (2nd Semester)',
                    value: 'January to May',
                },
                {
                    title: 'Summer Semester',
                    value: 'June (2 weeks), August (3 weeks)',
                },
            ],
        },
    ],
};
