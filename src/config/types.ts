export interface Note {
	id: number;
	icon: string;
	title: string;
	description?: string;
	startDate: string;
	dueDate: string;
	projectID: number;
	priority: "Baixa" | "Normal" | "Alta" | string;
	state: "Novo" | "Em Andamento" | "Pronto" | string;
	tags?: {
		id: number;
		value: string;
	}[];
}

export interface Project {
	name: string;
	notes: Note[];
}