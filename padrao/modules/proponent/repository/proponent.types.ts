import { EAccessedCulturalPublicFunding, EAnnualBudgetV2, EAnnualIncomeRelatedToCulturalActivityV2, EArtisticCulturalSegment, EChildhoodAndAdolescenceCulturalParticipationV2, ECulturalActivityModeLastYearV2, ECulturalContributionPlan, ECulturalGroupParticipation, ECurrentFundingSource, EDisabilityTypeV2, EEducationKnowledgeAreaV2, EEducationLevelV2, EEthnicity, EFinancialDependenceOnCulturalActivityV2, EGenderV2, EHasAccessedCulturalPublicFunding, EHasDisability, EMainAreaOfCulturalActivitySegment, EMainObjectiveWhenParticipatingV2, EMaritalStatusV2, EMonthlyFamilyIncomeV2, ENumberOfMembersOrEmployeesV2, ENumberOfPartnerships, EOtherCulturalFields, EPartnershipType, EProponentMemberType, EPublicCulturalFundingBefore, EPublicCulturalFundingSourcesAccessed, ESex, ESocialImpactAndInclusionAction, ESocialObjectivesBeyondArtisticV2, ETraditionalCommunity, ETypeOfInstitutionOrCollectiveV2, EYearsOfExperienceInCulturalArea, EYearsOfOrganizationExperienceV2 } from './enum/culturalProfile.enum.ts';
import { EPersonType, EProponentStatus } from './enum/personType.enum.ts';
import { IUser } from '../../auth/repository/user.types.ts';
import { IAddress } from './address.types.ts';
import { ObjectId } from 'mongodb';

export interface IProponentCreateRequest {
	proponent: Partial<IProponent>;
}

export interface IProponentCreatedResponse {
	STATUS: string;   // "SUCCESS"
	MESSAGE: string;  // "Successfully created the proponent"
	DATA: IProponent;
  }

  export interface IProponent {
	_id?: string;
	personType?: EPersonType; // Pessoa Física/Jurídica/Jurídica Cooperativa
	identification?: INaturalPerson | ILegalPerson | ICollective;
	contactDetails?: IBasicContact | ICompanyContact;
	address?: {
		// endereco responsavel legal, quando PJ / endereço do proponente quando PF
		zipCode?: string; // CEP
		place: string; // logradouro
		number?: string;
		complement?: string;
		district: string; // Bairro
		city: string; // Municipio
		state: string; // UF
		ibgeCode?: string; // Código IBGE
		cityName?: string;
		foreignLocation?: string;
		hasForeignAddress?: boolean;
	};
	creationUser?: IUser;
	creationDate?: Date;
	usersQueue?: IUser[] | string[];
	users?: Array<ObjectId> | Array<string>;
	blockedUsers?: IUser[] | string[];

	status?: EProponentStatus;

	members?: IBaseMember[];


	naturalPersonCulturalProfileV2?: INaturalCulturalProfileV2;
	legalPersonCulturalProfileV2?: ILegalCulturalProfileV2;

	/** The address entity id for the proponent */
	proponentAddressId?: string; // PF, PJ, Cooperative, Collective
	/** The address entity id for the responsible */
	responsibleAddressId?: string; // PJ, Cooperative, Collective
}
export interface IBaseMember {
	_id?: ObjectId;
	legalName?: string;
	name: string;
	CPF: string;
	RG: string;
	birthDate: Date;
	linkedProponentId?: string | null; // a.k.a "authenticatedUser id"
	address: {
		city: string
		complement: string
		district: string
		ibgeCode: string
		number: string
		place: string
		state: string
		zipCode: string
	}
	type?: EProponentMemberType

}

export interface INaturalCulturalProfileV2 {
	type: EPersonType.naturalPerson;
	demographics: {
		sex: ESex;
		gender: EGenderV2;
		genderDescription?: string;
		ethnicity: EEthnicity;
		belongsToTraditionalCommunity: ETraditionalCommunity;
		belongsToTraditionalCommunityDescription?: string;
		maritalStatus: EMaritalStatusV2;
		maritalStatusDescription?: string;
		hasDisability: EHasDisability;
		disabilityType?: Array<EDisabilityTypeV2>;
		disabilityTypeDescription?: Array<string>;
		monthlyFamilyIncome: EMonthlyFamilyIncomeV2;
		educationLevel: EEducationLevelV2;
		educationKnowledgeArea: EEducationKnowledgeAreaV2;
		academicSegment: string;
	};
	experienceAndCulturalParticipation: {
		yearsOfExperienceInCulturalArea: EYearsOfExperienceInCulturalArea;
		hasAccessedCulturalPublicFunding: EHasAccessedCulturalPublicFunding;
		accessedCulturalPublicFunding?: Array<EAccessedCulturalPublicFunding>;
		accessedCulturalPublicFundingDescription?: string;
		numberOfProjectsApproved?: string;
		culturalActivityModeLastYear: Array<ECulturalActivityModeLastYearV2>;
		mainAreaOfCulturalActivitySegment: EMainAreaOfCulturalActivitySegment;
		mainAreaOfCulturalActivitySegmentDescription?: string;
		mainAreaOfCulturalActivitySegmentOptions: Array<string>;
		otherCulturalFields?: Array<EOtherCulturalFields>;
		otherCulturalFieldsDescription?: string;
		mainArtisticCulturalOccupation: string;
		mainArtisticCulturalOccupationDescription?: string;
	};
	financialAspects: {
		annualIncomeRelatedToCulturalActivity: EAnnualIncomeRelatedToCulturalActivityV2;
		financialDependenceOnCulturalActivity: EFinancialDependenceOnCulturalActivityV2;
	};
	objectivesAndMotivations: {
		mainObjectiveWhenParticipating: EMainObjectiveWhenParticipatingV2;
		culturalContributionPlan: ECulturalContributionPlan;
		culturalGroupParticipation: ECulturalGroupParticipation;
		childhoodAndAdolescenceCulturalParticipation: Array<EChildhoodAndAdolescenceCulturalParticipationV2>;
		attendedInstitutionsNames?: string;
	};
}

export interface ILegalCulturalProfileV2 {
	type: EPersonType.legalPerson | EPersonType.cooperative | EPersonType.collective;
	characteristicsAndAreasOfOperation: {
		typeOfInstitutionOrCollective: ETypeOfInstitutionOrCollectiveV2;
		CNAE: string;
	};
	structureAndResources: {
		numberOfMembersOrEmployees: ENumberOfMembersOrEmployeesV2;
		annualBudget: EAnnualBudgetV2;
		currentFundingSources: Array<ECurrentFundingSource>;
		currentFundingSourcesDescription?: string;
	};
	experienceAndPartnerships: {
		yearsOfOrganizationExperience: EYearsOfOrganizationExperienceV2;
		typesOfPartnerships: Array<EPartnershipType>;
		numberOfPartnerships: ENumberOfPartnerships;
		mainArtisticCulturalSegment: EArtisticCulturalSegment;
		mainArtisticCulturalSegmentDescription?: string;
		hasAccessedPublicCulturalFundingBefore: EPublicCulturalFundingBefore;
		publicCulturalFundingSourcesAccessed?: Array<EPublicCulturalFundingSourcesAccessed>;
		publicCulturalFundingSourcesAccessedDescription?: string;
	};
	socialAndCommunityImpact: {
		socialImpactAndCulturalInclusionActions: Array<ESocialImpactAndInclusionAction>;
		socialImpactAndCulturalInclusionActionsDescription?: string;
		socialObjectivesBeyondArtistic: Array<ESocialObjectivesBeyondArtisticV2>;
	};
	responsable: INaturalCulturalProfileV2;
}

export interface IProponentSummary {
	_id?: string;
	name: string;
	personType?: EPersonType;
	city?: string;
	document: string;
	responsibleName?: string;
	responsibleDocument?: string;
	responsibleCity?: string;
	profitNature?: boolean | null;
	corporationBirthDate?: string | null;
	cityName?: string | null;
	foreignLocation?: string | null;
}

export interface INaturalPerson {
	CPF: string;
	RG: string;
	name: string;
	birthDate?: Date;
	legalName?: string;
}

export interface ILegalPerson {
	CNPJ: string;
	corporateName: string; // RAZAO SOCIAL
	tradingName?: string; // NOME FANTASIA
	website?: string;
	corporationBirthDate?: Date; // Data de fundação/início das atividades
	profitNature?: boolean;
	isMei?: boolean;
	hasPartners?: boolean;
}

export interface ICollective {
	corporateName: string; // RAZAO SOCIAL
	website?: string;
	corporationBirthDate?: Date;
}

export interface IBasicContact {
	email: string;
	cellphone: string;
	phoneNumber?: string;
	altPhoneNumber?: string;
	isMailChecked?: boolean;
}

export interface ICompanyContact extends IBasicContact {
	responsibleName: string;
	responsibleSocialName?: string;
	CPF: string;
	RG: string;
	occupation: string;
	birthDate: string;
	address?: {
		// endereco da empresa, somente em caso PESSOA JURÍDICA
		zipCode?: string; // CEP
		place: string; // logradouro
		number?: string;
		complement?: string;
		district: string; // Bairro
		city: string; // Municipio
		state: string; // UF
		ibgeCode?: string; // Código IBGE
		cityName?: string;
	};
}

export interface IProponentGrouped {
	proponentId: string;
	proponents: IProponent[];
	count: number;
}

// Pessoa Física
export interface IProponentNaturalPerson {
	_id?: string;
	personType?: EPersonType;
	identification?: {
		CPF: string;
		RG: string;
		name: string;
		birthDate?: Date;
	};
	contactDetails?: {
		email?: string;
		cellphone?: string;
		phoneNumber?: string;
		altPhoneNumber?: string;
	};
	address?: {
		zipCode?: string;
		place: string;
		number?: string;
		complement?: string;
		district: string;
		city: string;
		state: string;
		ibgeCode?: string;
		cityName?: string;
		foreignLocation?: string;
		hasForeignAddress?: boolean;
	};
}

// Pessoa Jurídica
export interface IProponentLegalPerson {
	_id?: string;
	personType?: EPersonType;
	identification?: {
		CNPJ: string;
		corporateName: string;
		tradingName?: string;
		website?: string;
		profitNature?: boolean;
		corporationBirthDate?: string;
		isMei?: boolean;
	};
	contactDetails?: {
		email: string;
		cellphone: string;
		phoneNumber?: string;
		altPhoneNumber?: string;
	};
	address?: {
		zipCode?: string;
		place: string;
		number?: string;
		complement?: string;
		district: string;
		city: string;
		state: string;
		ibgeCode?: string;
		cityName?: string;
	};
	responsible: IProponentNaturalPerson;
}

// Cooperativa
export interface IProponentCooperative {
	_id?: string;
	personType?: EPersonType;
	identification?: {
		CNPJ: string;
		corporateName: string;
		tradingName?: string;
		website?: string;
	};
	contactDetails?: {
		email: string;
		cellphone: string;
		phoneNumber?: string;
		altPhoneNumber?: string;
	};
	address?: {
		zipCode?: string;
		place: string;
		number?: string;
		complement?: string;
		district: string;
		city: string;
		state: string;
		ibgeCode?: string;
		cityName?: string;
	};
	responsible: IProponentNaturalPerson;
	cooperated: IProponentNaturalPerson | null;
}

export interface IProponentCollective {
	_id?: string;
	personType?: EPersonType;
	identification?: {
		corporateName: string;
		website?: string;
	};
	contactDetails?: {
		email: string;
		cellphone: string;
		phoneNumber?: string;
		altPhoneNumber?: string;
	};
	address?: {
		zipCode?: string;
		place: string;
		number?: string;
		complement?: string;
		district: string;
		city: string;
		state: string;
		ibgeCode?: string;
		cityName?: string;
	};
	responsible: IProponentNaturalPerson;
}

export type IProponentSearchSummary<TCompatibility extends 'legacy' | undefined = undefined> = {
	_id: TCompatibility extends 'legacy' ? null : string;
	name: string;
	document: string;
	personType: string;
};

export type IProponentSummaryWithEmail = {
	_id: string;
	name: string;
	email: string;
	document: string;
	personType: string;
};

export interface IExistProponentByUser {
	_id: string;
	personType: EPersonType;
	status: EProponentStatus | null;
}

export type IProponentManagement = IProponent & {
	submissionCount: number;
	membersCount: number; // cooperated or public servants
	partnersCount: number; // partners
};

export interface IProponentWithAddressDetails {
	proponentId: string;
	proponentName: string;
	proponentType: EPersonType;
	proponentAddress: IAddress | null;
	responsibleName: string | null;
	responsibleAddress: IAddress | null;
}