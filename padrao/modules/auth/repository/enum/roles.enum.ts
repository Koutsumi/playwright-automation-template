export enum ERoles {
	dev = 'dev',
	none = 'none',
	admin = 'admin',
	proponent = 'proponent',
	projectEvaluator = 'projectEvaluator',
	documentEvaluator = 'documentEvaluator',
	noticeManager = 'noticeManager',
	submissionManager = 'submissionManager',
	evaluationManager = 'evaluationManager',
	evaluatorICMS = 'evaluatorICMS', // Relator ICMS
	government = 'government', // SERVIDOR PUBLICO
	publicCallEvaluator = 'publicCallEvaluator', // Avaliador de Chamamento Público
	adminReadOnly = 'adminReadOnly', // Administrador apenas para leitura
	contractManager = 'contractManager', // Gestor de Contrato
	aiUser = 'aiUser', // Operador de IA
	civilSocietyEvaluator = 'civilSocietyEvaluator', // Avaliador Sociedade Civil
	sponsorContractEvaluator = 'sponsorContractEvaluator', // Avaliador de contrato de incentivo
	curatorship = 'curatorship', // Visualizador de projetos no edital e curadoria(possui a possibilidade de alterar tag)
	monitoringEvaluator = 'monitoringEvaluator', // Avaliator de área de monitoramento (ICMS),
	board = 'board', // Diretor da equipe de Gestão Cultural
}
