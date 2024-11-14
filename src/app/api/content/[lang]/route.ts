import { enContent } from '@/app/api/content/[lang]/_temp/enContent';
import { krContent } from '@/app/api/content/[lang]/_temp/krContent';

import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ lang: string }> }) {
	const { lang } = (await params) ?? {};
	if (lang === 'kr') {
		return NextResponse.json(krContent);
	}
	return NextResponse.json(enContent);
}
