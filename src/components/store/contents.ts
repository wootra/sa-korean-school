import { createPeekaboo } from 'peekaboo-store';
import { aboutContents } from './contents/about';
import { coursesContent } from './contents/courses';
import { eventsContent } from './contents/events';
import { paymentContent } from './contents/payment';
import { profileContent } from './contents/profile';
import { signInContent } from './contents/signin';
import { entryContent } from './contents/entry';
import { navsContent } from './contents/nav';

const baseContent = {
	navs: navsContent,
	about: aboutContents,
	contacts: {
		content: {
			title: {
				contacts: '연락처',
				enterance: '학교 입구',
			},
		},
	},
	courses: coursesContent,
	events: eventsContent,
	payment: paymentContent,
	profile: profileContent,
	signIn: signInContent,
	entry: entryContent,
};

export const contentStore = createPeekaboo(baseContent);
