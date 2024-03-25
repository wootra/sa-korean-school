import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';

type ChildElement = { title?: string; value?: string; desc?: string };
type DocElement = {
    title: string;
    value?: string;
    desc?: string;
    children?: ChildElement[];
};

const doc: DocElement[] = [
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
            { value: '354 Heimer Rd. San Antonio, TX 78232' },
            { value: '만 3세 등록 예정자는 반드시Potty Trained 되어야 한다.' },
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
];

const AboutIntro = () => {
    return (
        <div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
            <Heading type='page'>학교 소개</Heading>
            <section className='text-sm p-4 bg-slate-200 rounded-md shadow-sm flex flex-col'>
                {multiLineText(
                    `샌안토니오 한국학교는 샌안토니오 한인 사회 구성원이었던 다양한 지식인들이 한인 2세들의 한국어 교육의 절박성을 인식하여 한글학교의 설립의 뜻을 세우로 다양한 방법으로 기금을 모아 1979년 9월 샌안토니오 한글학교가 출범하였습니다.
그 이후 지금까지 약 40여 년 동안 샌안토니오 지역 후세들에게 언어 교육을 통하여 한국의 문화와 얼을 심어 주고, 샌안토니오 지역 사회에 한국 문화와 역사를 소개하고 경험하게 하며 샌안토니오 지역사회에서 공동의 가치를 위해 노력하고 있습니다.
                `,
                    false
                )}
            </section>
            <section className='text-sm p-4 bg-orange-100 rounded-md shadow-sm'>
                {`샌안토니오 한국학교는 미국 연방정부 IRS에  501(c )(3) 비영리 단체로 등록된 단체입니다.`}
            </section>
            {doc.map((item, idx) => {
                return (
                    <section
                        key={item.title + '_' + idx}
                        className='text-sm text-left'
                    >
                        <div className='flex flex-row gap-2 justify-start items-center py-2'>
                            <Heading type='subheader'>{item.title}</Heading>
                            {item.value && `: ${item.value}`}
                        </div>
                        {item.desc && <p>{item.desc}</p>}
                        {item.children &&
                            item.children.map((child, idx) => {
                                return (
                                    <ol
                                        key={`${
                                            (child.title ?? 'child') + idx
                                        }`}
                                    >
                                        <li>
                                            <span>
                                                {child.title}
                                                {child.value &&
                                                    `: ${child.value}`}
                                            </span>
                                            {child.desc && <p>{child.desc}</p>}
                                        </li>
                                    </ol>
                                );
                            })}
                    </section>
                );
            })}
            <section>{``}</section>
        </div>
    );
};

export default AboutIntro;
