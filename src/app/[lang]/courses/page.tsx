import React from 'react';
import CourseIntro from './CourseIntro';
import { Languages } from '@/lib/langs/types';

const CoursesPage = ({ params: { lang } }: { params: { lang: Languages } }) => {
    return <CourseIntro lang={lang} />;
};

export default CoursesPage;
