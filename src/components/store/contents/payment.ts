import { PAYMENTS } from '@/config/registration';

export const paymentContent = {
	content: {
		title: {
			transfer: {
				label: 'Transfer',
				href: '/[lang]/payment/manual-payment',
				exact: true,
			},
			card: {
				label: 'Credit Card',
				href: '/[lang]/payment',
				exact: true,
			},
		},
		classRegistration: {
			accordionLabel: 'Class Registration',
			paymentButton: '[%1:year] Autom Semester Deposit',
		},
		[PAYMENTS.DEPOSIT]: {
			title: '2024 Autumn Semester Deposit',
			desc: 'Deposit for the class. This includes 3% as fee',
			price: 51.55,
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
};
