// --- ILegalCulturalProfileV2 ---

// characteristicsAndAreasOfOperation
export enum ETypeOfInstitutionOrCollectiveV2 {
	ASSOCIATION = 'association',
	FOUNDATION = 'foundation',
	CULTURAL_COLLECTIVE = 'culturalCollective',
	COOPERATIVE = 'cooperative',
	OTHER = 'other',
}

export enum ENumberOfMembersOrEmployeesV2 {
	LESS_THAN_5 = 'lessThan5',
	BETWEEN_5_AND_10 = 'between5And10',
	BETWEEN_11_AND_20 = 'between11And20',
	BETWEEN_21_AND_50 = 'between21And50',
	MORE_THAN_50 = 'moreThan50',
}

export enum EAnnualBudgetV2 {
	UP_TO_40000 = 'upTo40000',
	UP_TO_80000 = 'upTo80000',
	UP_TO_160000 = 'upTo160000',
	UP_TO_360000 = 'upTo360000',
	UP_TO_1000000 = 'upTo1000000',
	UP_TO_4800000 = 'upTo4800000',
	ABOVE_4800000 = 'above4800000',
}

export enum ECurrentFundingSource {
	CORPORATE_SPONSORSHIP = 'corporateSponsorship',
	DONATIONS = 'donations',
	GOVERNMENT_SUBSIDIES = 'governmentSubsidies',
	TICKET_OR_PRODUCT_SALES = 'ticketOrProductSales',
	OTHER = 'other',
}

// experienceAndPartnerships
export enum EYearsOfOrganizationExperienceV2 {
	LESS_THAN_2 = 'lessThan2',
	BETWEEN_2_AND_5 = 'between2And5',
	BETWEEN_6_AND_10 = 'between6And10',
	MORE_THAN_10 = 'moreThan10',
}

export enum EPartnershipType {
	CORPORATE_SPONSORSHIP = 'corporateSponsorship',
	TECHNICAL_COLLABORATION = 'technicalCollaboration',
	EXECUTION_PARTNERSHIP = 'executionPartnership',
}

export enum ENumberOfPartnerships {
	NONE = 'none',
	UP_TO_2 = 'upTo2',
	BETWEEN_3_AND_5 = 'between3And5',
	MORE_THAN_5 = 'moreThan5',
}

export enum EArtisticCulturalSegment {
	ARCHITECTURE = 'architecture',
	CRAFT_ACTIVITIES = 'craftActivities',
	PERFORMING_ARTS = 'performingArts',
	VISUAL_ARTS = 'visualArts',
	LIBRARIES_AND_LITERATURE = 'librariesAndLiterature',
	CINEMA_RADIO_TV = 'cinemaRadioTv',
	MUSIC = 'music',
	DIGITAL_ART_AND_GAMES = 'digitalArtAndGames',
	DESIGN = 'design',
	EDITORIAL = 'editorial',
	FASHION = 'fashion',
	MUSEUMS = 'museums',
	OTHER = 'other',
}

export enum EPublicCulturalFundingBefore { // hasAccessedPublicCulturalFundingBefore -> yes/no
	YES = 'yes',
	NO = 'no',
}

export enum EPublicCulturalFundingSourcesAccessed {
	PROAC_EDITAIS = 'proacEditais',
	PROAC_ICMS = 'proacICMS',
	MUNICIPAL_LAWS = 'municipalLaws',
	FEDERAL_FUNDING_LAWS = 'federalFundingLaws',
	LEI_ROUANET = 'leiRouanet',
	OTHER = 'other',
}

// socialAndCommunityImpact
export enum ESocialImpactAndInclusionAction {
	AFFIRMATIVE_ACTIONS = 'affirmativeActions',
	PROFESSIONAL_TRAINING = 'professionalTraining',
	CULTURAL_EDUCATION_AND_MEDIATION = 'culturalEducationAndMediation',
	ACCESSIBILITY_AND_ADAPTATION = 'accessibilityAndAdaptation',
	OTHER = 'other',
}

export enum ESocialObjectivesBeyondArtisticV2 {
	COMMUNITY_DEVELOPMENT = 'communityDevelopment',
	SOCIAL_AND_HUMAN_DEVELOPMENT = 'socialAndHumanDevelopment',
	EMPOWERMENT_AND_CIVIC_ENGAGEMENT = 'empowermentAndCivicEngagement',
	CULTURAL_HERITAGE_PRESERVATION = 'culturalHeritagePreservation',
	ENVIRONMENTAL_SUSTAINABILITY = 'environmentalSustainability',
	NO_SOCIAL_OBJECTIVES = 'noSocialObjectives',
}

// --- INaturalCulturalProfileV2 ---

export enum ESex {
	FEMALE = 'female',
	MALE = 'male',
	UNDECLARED = 'undeclared',
}

export enum EGenderV2 {
	CIS_WOMAN = 'cisWoman',
	CIS_MAN = 'cisMan',
	TRANS_WOMAN = 'transWoman',
	TRANS_MAN = 'transMan',
	NON_BINARY = 'nonBinary',
	OTHER = 'other',
	UNDECLARED = 'undeclared',
}

export enum EEthnicity {
	YELLOW = 'yellow',
	WHITE = 'white',
	INDIGENOUS = 'indigenous',
	BROWN = 'brown',
	BLACK = 'black',
	UNDECLARED = 'undeclared',
}

export enum ETraditionalCommunity {
	NATIVE = 'native',
	QUILOMBOLA = 'quilombola',
	RIVERSIDE = 'riverside',
	CAICARA = 'caiçara',
	ROMANI = 'romani',
	NO = 'no',
	OTHER = 'other',
}

export enum EMaritalStatusV2 {
	SINGLE = 'single',
	STABLE_UNION = 'stableUnion',
	MARRIED = 'married',
	DIVORCED = 'divorced',
	WIDOWED = 'widowed',
	OTHER = 'other',
}

export enum EHasDisability {
	YES = 'yes',
	NO = 'no',
	UNDECLARED = 'undeclared',
}

export enum EDisabilityTypeV2 {
	HEARING_IMPAIRMENT = 'hearingImpairment',
	PHYSICAL_MOTOR_IMPAIRMENT = 'physicalMotorImpairment',
	INTELLECTUAL_DISABILITY = 'intellectualDisability',
	DEAF_LIBRAS_USER = 'deafLibrasUser',
	PSYCHOSOCIAL_DISABILITY = 'psychosocialDisability',
	DEAF_BLINDNESS = 'deafBlindness',
	AUTISM_SPECTRUM_DISORDER = 'autismSpectrumDisorder',
	VISUAL_IMPAIRMENT = 'visualImpairment',
	OTHER = 'other',
}

export enum EMonthlyFamilyIncomeV2 {
	UP_TO_1500 = 'upTo1500',
	FROM_1500_TO_3000 = '1500To3000',
	FROM_3000_TO_6000 = '3000To6000',
	FROM_6000_TO_9000 = '6000To9000',
	FROM_9000_TO_12000 = '9000To12000',
	FROM_12000_TO_15000 = '12000To15000',
	ABOVE_15000 = 'above15000',
}

export enum EEducationLevelV2 {
	ELEMENTARY_INCOMPLETE = 'elementaryIncomplete',
	ELEMENTARY_COMPLETE = 'elementaryComplete',
	HIGH_SCHOOL_INCOMPLETE = 'highSchoolIncomplete',
	HIGH_SCHOOL_COMPLETE = 'highSchoolComplete',
	UNDERGRADUATE_INCOMPLETE = 'undergraduateIncomplete',
	UNDERGRADUATE_COMPLETE = 'undergraduateComplete',
	POSTGRADUATE_LATO_SENSU = 'postgraduateLatoSensu',
	POSTGRADUATE_STRICTO_SENSU = 'postgraduateStrictoSensu',
}

export enum EEducationKnowledgeAreaV2 {
	EXACT_AND_EARTH_SCIENCES = 'exactAndEarthSciences',
	BIOLOGICAL_SCIENCES = 'biologicalSciences',
	ENGINEERING = 'engineering',
	HEALTH_SCIENCES = 'healthSciences',
	AGRICULTURAL_SCIENCES = 'agriculturalSciences',
	LINGUISTICS_AND_ARTS = 'linguisticsAndArts',
	APPLIED_SOCIAL_SCIENCES = 'appliedSocialSciences',
	HUMAN_SCIENCES = 'humanSciences',
}

// --- INaturalCulturalProfileV2 - experiência e participação ---
export enum EYearsOfExperienceInCulturalArea {
	LESS_THAN_2 = 'lessThan2',
	BETWEEN_2_AND_5 = 'between2And5',
	BETWEEN_6_AND_10 = 'between6And10',
	MORE_THAN_10 = 'moreThan10',
}

export enum EHasAccessedCulturalPublicFunding {
	YES = 'yes',
	NO = 'no',
}

export enum EAccessedCulturalPublicFunding {
	PROAC_EDITAIS = 'proacEditais',
	PROAC_ICMS = 'proacICMS',
	MUNICIPAL_LAWS = 'municipalLaws',
	FEDERAL_LAWS = 'federalLaws',
	LEI_ROUANET = 'leiRouanet',
	OTHER = 'other',
}

export enum ECulturalActivityModeLastYearV2 {
	AUTONOMOUS = 'autonomous',
	INSTITUTION_EMPLOYEE = 'institutionEmployee',
	OTHER_SECTOR_EMPLOYEE = 'otherSectorEmployee',
	NOT_ACTIVE = 'notActive',
}

// Reuso do segmento artístico-cultural para:
// - mainAreaOfCulturalActivitySegment
// - otherCulturalFields
export { EArtisticCulturalSegment as EMainAreaOfCulturalActivitySegment };
export { EArtisticCulturalSegment as EOtherCulturalFields };

// Dinâmicos (mainAreaOfCulturalActivitySegmentOptions)
export enum EArchitectureSpecialty {
	ARCHITECTURE_PROJECTS = 'architectureProjects',
	HERITAGE_PRESERVATION = 'heritagePreservation',
}
export enum ECraftActivitiesSpecialty {
	HANDCRAFTED_PRODUCTION = 'handcraftedProduction',
	MANUAL_CRAFTS = 'manualCrafts',
}
export enum EPerformingArtsSpecialty {
	THEATER = 'theater',
	DANCE_AND_PERFORMANCE = 'danceAndPerformance',
	CIRCUS = 'circus',
}
export enum EVisualArtsSpecialty {
	FINE_ARTS = 'fineArts',
	ART_EXHIBITION = 'artExhibition',
}
export enum ELibrariesAndLiteratureSpecialty {
	LITERATURE = 'literature',
}
export enum ECinemaRadioTvSpecialty {
	AUDIOVISUAL_PRODUCTION = 'audiovisualProduction',
	GAME_PRODUCTION = 'gameProduction',
}
export enum EMusicSpecialty {
	CLASSICAL_AND_CONTEMPORARY = 'classicalAndContemporary',
	POPULAR_MUSIC = 'popularMusic',
}
export enum EDigitalArtAndGamesSpecialty {
	SOFTWARE_AND_GAMES = 'softwareAndGames',
	DIGITAL_ART = 'digitalArt',
}
export enum EDesignSpecialty {
	DESIGN_PROJECTS = 'designProjects',
}
export enum EEditorialSpecialty {
	CULTURAL_PUBLISHING = 'culturalPublishing',
}
export enum EFashionSpecialty {
	FASHION_DESIGN = 'fashionDesign',
}
export enum EMuseumsSpecialty {
	MUSEUM_MANAGEMENT = 'museumManagement',
}

// --- financialAspects ---
export enum EAnnualIncomeRelatedToCulturalActivityV2 {
	UP_TO_18000 = 'upTo18000',
	FROM_18000_TO_36000 = '18000to36000',
	FROM_36000_TO_72000 = '36000to72000',
	FROM_72000_TO_108000 = '72000to108000',
	ABOVE_108000 = 'above108000',
}

export enum EFinancialDependenceOnCulturalActivityV2 {
	ESSENTIAL_BUT_NOT_ONLY = 'essentialButNotOnly',
	COMPLEMENTARY = 'complementary',
	VOLUNTARY = 'voluntary',
}

// --- objectivesAndMotivations ---
export enum EMainObjectiveWhenParticipatingV2 {
	PERSONAL_AND_PROFESSIONAL_DEVELOPMENT = 'personalAndProfessionalDevelopment',
	COMMUNITY_CONTRIBUTION = 'communityContribution',
	ARTISTIC_RECOGNITION = 'artisticRecognition',
	INCOME_GENERATION = 'incomeGeneration',
}

export enum ECulturalContributionPlan {
	DIVERSITY_INCLUSION = 'diversityInclusion',
	CULTURAL_EDUCATION = 'culturalEducation',
	ARTISTIC_INNOVATION = 'artisticInnovation',
	HERITAGE_PRESERVATION = 'heritagePreservation',
	TALENT_DEVELOPMENT = 'talentDevelopment',
}

export enum ECulturalGroupParticipation {
	FORMAL_PARTICIPATION = 'formalParticipation',
	INFORMAL_PARTICIPATION = 'informalParticipation',
	CULTURAL_CONSUMER = 'culturalConsumer',
}

export enum EChildhoodAndAdolescenceCulturalParticipationV2 {
	SCHOOL_GROUPS = 'schoolGroups',
	ART_COURSES = 'artCourses',
	COMMUNITY_EVENTS = 'communityEvents',
	FABRICAS_DE_CULTURA = 'fabricasDeCultura',
	CULTURAL_WORKSHOPS = 'culturalWorkshops',
	PROJETO_GURI = 'projetoGuri',
	NO_ACTIVE_PARTICIPATION = 'noActiveParticipation',
	NO_CULTURAL_INVOLVEMENT = 'noCulturalInvolvement',
}

export enum EHasExperienceInOtherCommittees {
	YES = 'yes',
	NO = 'no',
}

export enum EProponentMemberType {
	PARTNER = 'PARTNER', // Sócio
	COLLECTIVE_MEMBER = 'COLLECTIVE_MEMBER', // Integrante do Grupo/Coletivo
}