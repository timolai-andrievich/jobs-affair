export interface VacancyType {
	contents: string; // Description of the job
	name: string; // Short description of the job
	type: string; // External/internal to the API site
	publication_date: string;
	short_name: string; // Short name of the job, is not human-readable
	model_type: string;
	id: number;
	locations: Array<string>;
	categories: Array<string>;
	levels: Array<string>;
	tags: Array<string>;
	refs: {
		landing_page: string;
	};
	company: {
		id: number;
		short_name: string;
		name: string;
	};
}

export interface ApiResponse {
	page: number;
	page_count: number;
	items_per_page: number;
	took: number;
	timed_out: boolean;
	total: number;
	results: Array<VacancyType>;
}

export interface Company {
	description: string;
	locations: Array<{ name: string }>;
	industries: Array<{ name: string }>;
	tags: Array<string>;
	short_name: string;
	name: string;
	publication_date: string;
	model_type: string;
	twitter: string;
	id: number;
	size: {
		name: string;
		short_name: string;
	};
	refs: {
		landing_page: string;
		jobs_page: string;
		mini_f1_image: string;
		f2_image: string;
		logo_image: string;
		f1_image: string;
		f3_image: string;
	};
}
