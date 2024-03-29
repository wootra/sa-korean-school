import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';
import { docs, introductions } from './consts';
import { Languages } from '@/lib/langs/types';
import InfoSection from './InfoSection';

const AboutIntro = ({ lang }: { lang: Languages }) => {
    const doc = docs[lang] ?? docs.en;
    const intro = introductions[lang] ?? introductions.en;
    return (
        <div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
            <Heading type='page'>{intro.heading}</Heading>
            <InfoSection>{multiLineText(intro.description, false)}</InfoSection>
            <InfoSection type={2}>{intro.info}</InfoSection>
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
