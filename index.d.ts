declare module 'friendly-truncate';

export function truncateEnd(
	string: string,
	length: number,
	opts?: { ellipsis?: string; boundary?: RegExp; tolerance?: number },
): any;
export function truncateMiddle(
	string: string,
	length: number,
	opts?: { join?: string; boundary?: RegExp; tolerance?: number },
): any;
