import { EPersonType } from "./enum/personType.enum";

export interface IAddress {
	_id: string;
	/** CEP */
	zipCode?: string;
	/** Logradouro */
	place?: string;
	/** Número */
	number?: string;
	/** Complemento */
	complement?: string;
	/** Bairro */
	district?: string;
	/** city key */
	city?: string;
	/** Estado */
	state?: string;
	/** Código IBGE */
	ibgeCode?: string;
	/** Nome da cidade */
	cityName?: string;
	/** Localização estrangeira */
	foreignLocation?: string;
	/** Erro ao obter os detalhes do endereço */
	addressDetailsErrorLog?: string;
	/** URL do mapa */
	addressMapURL?: string;
	/** Detalhes do endereço */
	addressDetails?: IAddressDailedInfo;
	/** Zona periférica */
	peripheralZoneInfo?: IPeripheralZoneResponse;

	updatedAt?: Date;
	createdAt?: Date;
}

export type IAddressDailedInfo = {
	address_components: Array<{
		long_name: string;
		short_name: string;
		types: string[];
	}>;
	formatted_address: string;
	geometry: {
		bounds?: {
			northeast: {
				lat: number;
				lng: number;
			};
			southwest: {
				lat: number;
				lng: number;
			};
		};
		location: {
			lat: number;
			lng: number;
		};
		location_type: string;
		viewport: {
			northeast: {
				lat: number;
				lng: number;
			};
			southwest: {
				lat: number;
				lng: number;
			};
		};
	};
	navigation_points?: Array<{
		location: {
			latitude: number;
			longitude: number;
		};
	}>;
	partial_match?: boolean;
	place_id: string;
	types: string[];
};

export interface ILocationValidation {
	proponentId: string;
	proponentType: EPersonType;
	noticeConfigs: {
		proponentAllowOnlyPeripheralZones: boolean;
		proponentPeripheralNotNaturalAddressShouldCheck: 'PROPONENT_ADDRESS' | 'BOTH_ADRESSES';
	};
	proponent: {
		isPeripheralZone: boolean | null;
		proponentAddress: IAddress | null;
	};
	responsible: {
		isPeripheralZone: boolean | null;
		responsibleAddress: IAddress | null;
	};
	error: {
		message: string | null;
		ptMessages: string[] | null;
	};
}

export interface IAddressProvider {
	/** Obtain and auto-complete from the provider based on the input address  */
	getAddressSuggestion(params: IAddressInput): Promise<IAddressSuggestions>;
	/** Based on an string, obtain the address detailed information from the provider */
	getAddressDetails(params: IAddressInput): Promise<IAddressDetails>;
	/** Generate a service URL based on the formatted address */
	generateServiceURL(formattedAddress: string): Promise<string>;
	/** Obtain a boolean indicating if the address is in the a Zone. The method to obtain the info may vary */
	getPeripheralZoneConfirmation(latitude: number, longitude: number): Promise<IPeripheralZoneResponse>;
}
export interface IAddressInput {
	input: string;
	language?: string;
	types?: string;
	requirePreciseLocation?: boolean; // When true, only accept ROOFTOP or RANGE_INTERPOLATED results
}

// Simplified interface with only the descriptions
export interface IAddressSuggestions {
	descriptions: Array<string>;
}

// Interface based on the google placesresponse
export interface IAddressDetails {
	requestParams: IAddressDetailsRequestParams;
	requestResponse: IAddressDetailsRequestResponse;
}
export interface IAddressDetailsRequestParams {
	originalAddress: string;
	formattedAddress: string;
	language: string;
	region: string;
	components: string;
	completeURL: string;
}
export interface IAddressDetailsRequestResponse {
	results: Array<{
		address_components: Array<{
			long_name: string;
			short_name: string;
			types: string[];
		}>;
		formatted_address: string;
		geometry: {
			bounds?: {
				northeast: {
					lat: number;
					lng: number;
				};
				southwest: {
					lat: number;
					lng: number;
				};
			};
			location: {
				lat: number;
				lng: number;
			};
			location_type: string;
			viewport: {
				northeast: {
					lat: number;
					lng: number;
				};
				southwest: {
					lat: number;
					lng: number;
				};
			};
		};
		navigation_points?: Array<{
			location: {
				latitude: number;
				longitude: number;
			};
		}>;
		partial_match?: boolean;
		place_id: string;
		types: string[];
	}>;
	status: string;
}

export interface IPeripheralZoneResponse {
	isPeripheralZone: boolean;
	zone?: string;
	description?: string;
	coordinates?: {
		latitude: number;
		longitude: number;
	};
	status?: string;
	message?: string;
}