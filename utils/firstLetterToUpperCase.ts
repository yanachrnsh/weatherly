


export const firstLetterToUpperCase = (title: string): string => {
	if(!title) return '';
	return title[0].toUpperCase() + title.slice(1);
};
