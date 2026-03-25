import { EAnnualBudgetV2, EAnnualIncomeRelatedToCulturalActivityV2, EArtisticCulturalSegment, EChildhoodAndAdolescenceCulturalParticipationV2, ECraftActivitiesSpecialty, ECulturalActivityModeLastYearV2, ECulturalContributionPlan, ECulturalGroupParticipation, ECurrentFundingSource, EEducationKnowledgeAreaV2, EEducationLevelV2, EEthnicity, EFinancialDependenceOnCulturalActivityV2, EGenderV2, EHasAccessedCulturalPublicFunding, EHasDisability, EMainAreaOfCulturalActivitySegment, EMainObjectiveWhenParticipatingV2, EMaritalStatusV2, EMonthlyFamilyIncomeV2, ENumberOfMembersOrEmployeesV2, ENumberOfPartnerships, EOtherCulturalFields, EPartnershipType, EPerformingArtsSpecialty, EPublicCulturalFundingBefore, ESex, ESocialImpactAndInclusionAction, ESocialObjectivesBeyondArtisticV2, ETraditionalCommunity, ETypeOfInstitutionOrCollectiveV2, EYearsOfExperienceInCulturalArea, EYearsOfOrganizationExperienceV2 } from "../modules/proponent/repository/enum/culturalProfile.enum"
import { EPersonType } from "../modules/proponent/repository/enum/personType.enum"
import { IProponentCreateRequest } from "../modules/proponent/repository/proponent.types"
import generateCpf from "../shared/helpers/generateCpf";
import generateCnpj from "../shared/helpers/generateCnpj";

export default {
    naturalPerson: function(proponentName: string) {
        const data : IProponentCreateRequest = {
            proponent: {
                personType: EPersonType.naturalPerson,
                identification: {
                  name: proponentName,
                  RG: "39487349587",
                  CPF: generateCpf(),
                  birthDate: new Date('1996-05-31T03:00:00.000Z'),
                  legalName: "Lockman - Witting"
                },
                contactDetails: {
                  email: "natural_person.playwright@bnp.com.br",
                  cellphone: "44748321633",
                  altPhoneNumber: "",
                  phoneNumber: ""
                },
                address: {
                  zipCode: "18010001",
                  place: "Rua da Penha",
                  number: "513",
                  complement: "Reichel - Skiles",
                  district: "Centro",
                  city: "Sorocaba-city",
                  state: "SP",
                  ibgeCode: "3552205",
                  cityName: "Sorocaba",
                  foreignLocation: undefined,
                  hasForeignAddress: false
                },
                naturalPersonCulturalProfileV2: {
                  type: EPersonType.naturalPerson,
                  demographics: {
                    sex: ESex.FEMALE,
                    gender: EGenderV2.CIS_WOMAN,
                    ethnicity: EEthnicity.BROWN,
                    belongsToTraditionalCommunity: ETraditionalCommunity.NO,
                    maritalStatus: EMaritalStatusV2.STABLE_UNION,
                    hasDisability: EHasDisability.NO,
                    monthlyFamilyIncome: EMonthlyFamilyIncomeV2.UP_TO_1500,
                    educationLevel: EEducationLevelV2.UNDERGRADUATE_COMPLETE,
                    educationKnowledgeArea: EEducationKnowledgeAreaV2.APPLIED_SOCIAL_SCIENCES,
                    academicSegment: "Repellendus asperiores veritatis sapiente."
                  },
                  experienceAndCulturalParticipation: {
                    yearsOfExperienceInCulturalArea: EYearsOfExperienceInCulturalArea.BETWEEN_2_AND_5,
                    hasAccessedCulturalPublicFunding: EHasAccessedCulturalPublicFunding.NO,
                    culturalActivityModeLastYear: [ECulturalActivityModeLastYearV2.AUTONOMOUS],
                    mainAreaOfCulturalActivitySegment: EMainAreaOfCulturalActivitySegment.PERFORMING_ARTS,
                    mainAreaOfCulturalActivitySegmentOptions: [EPerformingArtsSpecialty.THEATER],
                    otherCulturalFields: [EOtherCulturalFields.MUSIC, EOtherCulturalFields.VISUAL_ARTS],
                    mainArtisticCulturalOccupation: "acrobata"
                  },
                  financialAspects: {
                    annualIncomeRelatedToCulturalActivity: EAnnualIncomeRelatedToCulturalActivityV2.FROM_18000_TO_36000,
                    financialDependenceOnCulturalActivity: EFinancialDependenceOnCulturalActivityV2.COMPLEMENTARY
                  },
                  objectivesAndMotivations: {
                    mainObjectiveWhenParticipating: EMainObjectiveWhenParticipatingV2.PERSONAL_AND_PROFESSIONAL_DEVELOPMENT,
                    culturalContributionPlan: ECulturalContributionPlan.ARTISTIC_INNOVATION,
                    culturalGroupParticipation: ECulturalGroupParticipation.CULTURAL_CONSUMER,
                    childhoodAndAdolescenceCulturalParticipation: [
                        EChildhoodAndAdolescenceCulturalParticipationV2.SCHOOL_GROUPS,
                        EChildhoodAndAdolescenceCulturalParticipationV2.COMMUNITY_EVENTS
                    ],
                    attendedInstitutionsNames:
                      "Consequatur quas porro sit aut nesciunt."
                  }
                }
            }
        }
        return data               
    },
    legalPerson: function(corporateName: string) {
      const data : IProponentCreateRequest = {
        proponent: {
          personType: EPersonType.legalPerson,
          identification: {
            CNPJ: generateCnpj(),
            corporateName: corporateName,
            tradingName: "Bosco, Cummerata and Gutkowski",
            website: "",
            profitNature: true,
            corporationBirthDate: new Date('2021-03-15T03:00:00.000Z'),
            isMei: true,
            hasPartners: false
          },
          contactDetails: {
            responsibleName: "Walton Hickle",
            responsibleSocialName: "",
            birthDate: "1995-05-05T03:00:00.000Z",
            email: "your.email+fakedata26020@bnpqatest.com",
            cellphone: "31672290514",
            altPhoneNumber: "",
            phoneNumber: "",
            RG: "Illum autem laboriosam recusandae nobis provident delectus tempore.",
            CPF: "56136757320",
            occupation: "Future Interactions Liaison",
            address: {
              zipCode: "09090901",
              place: "Avenida Dom Jorge Marcos de Oliveira",
              number: "537",
              complement: "Bosco - Jacobson",
              district: "Vila Guiomar",
              city: "SantoAndré-city",
              state: "SP",
              ibgeCode: "3547809",
              cityName: "Santo André"
            }
          },
          address: {
            zipCode: "15010020",
            place: "Rua Prudente de Moraes",
            number: "371",
            complement: "Tillman and Sons",
            district: "Centro",
            city: "SãoJosédoRioPreto-city",
            state: "SP",
            ibgeCode: "3549805",
            cityName: "São José do Rio Preto"
          },
          legalPersonCulturalProfileV2: {
            type: EPersonType.legalPerson,
            characteristicsAndAreasOfOperation: {
              typeOfInstitutionOrCollective: ETypeOfInstitutionOrCollectiveV2.FOUNDATION,
              CNAE: "57006142000183"
            },
            structureAndResources: {
              numberOfMembersOrEmployees: ENumberOfMembersOrEmployeesV2.LESS_THAN_5,
              annualBudget: EAnnualBudgetV2.UP_TO_80000,
              currentFundingSources: [
                ECurrentFundingSource.CORPORATE_SPONSORSHIP
              ],
              currentFundingSourcesDescription: undefined
            },
            experienceAndPartnerships: {
              yearsOfOrganizationExperience: EYearsOfOrganizationExperienceV2.LESS_THAN_2,
              typesOfPartnerships: [
                EPartnershipType.CORPORATE_SPONSORSHIP
              ],
              numberOfPartnerships: ENumberOfPartnerships.UP_TO_2,
              mainArtisticCulturalSegment: EArtisticCulturalSegment.ARCHITECTURE,
              mainArtisticCulturalSegmentDescription: undefined,
              hasAccessedPublicCulturalFundingBefore: EPublicCulturalFundingBefore.NO,
              publicCulturalFundingSourcesAccessed: undefined,
              publicCulturalFundingSourcesAccessedDescription: undefined
            },
            socialAndCommunityImpact: {
              socialImpactAndCulturalInclusionActions: [
                ESocialImpactAndInclusionAction.PROFESSIONAL_TRAINING,
                ESocialImpactAndInclusionAction.AFFIRMATIVE_ACTIONS
              ],
              socialImpactAndCulturalInclusionActionsDescription: undefined,
              socialObjectivesBeyondArtistic: [
                ESocialObjectivesBeyondArtisticV2.SOCIAL_AND_HUMAN_DEVELOPMENT
              ]
            },
            responsable: {
              type: EPersonType.naturalPerson,
              demographics: {
                sex: ESex.MALE,
                gender: EGenderV2.CIS_MAN,
                genderDescription: undefined,
                ethnicity: EEthnicity.WHITE,
                belongsToTraditionalCommunity: ETraditionalCommunity.NO,
                belongsToTraditionalCommunityDescription: undefined,
                maritalStatus: EMaritalStatusV2.STABLE_UNION,
                maritalStatusDescription: undefined,
                hasDisability: EHasDisability.NO,
                disabilityType: undefined,
                disabilityTypeDescription: undefined,
                monthlyFamilyIncome: EMonthlyFamilyIncomeV2.FROM_3000_TO_6000,
                educationLevel: EEducationLevelV2.UNDERGRADUATE_COMPLETE,
                educationKnowledgeArea:EEducationKnowledgeAreaV2.EXACT_AND_EARTH_SCIENCES,
                academicSegment: "Doloribus aperiam cupiditate facere distinctio assumenda neque excepturi reiciendis."
              },
              experienceAndCulturalParticipation: {
                yearsOfExperienceInCulturalArea: EYearsOfExperienceInCulturalArea.BETWEEN_2_AND_5,
                hasAccessedCulturalPublicFunding: EHasAccessedCulturalPublicFunding.NO,
                accessedCulturalPublicFunding: undefined,
                accessedCulturalPublicFundingDescription: undefined,
                numberOfProjectsApproved: undefined,
                culturalActivityModeLastYear: [
                  ECulturalActivityModeLastYearV2.AUTONOMOUS
                ],
                mainAreaOfCulturalActivitySegment: EArtisticCulturalSegment.DESIGN,
                mainAreaOfCulturalActivitySegmentDescription: undefined,
                mainAreaOfCulturalActivitySegmentOptions: [
                  "designProjects"
                ],
                otherCulturalFields: [
                  EArtisticCulturalSegment.CRAFT_ACTIVITIES
                ],
                otherCulturalFieldsDescription: undefined,
                mainArtisticCulturalOccupation: "aderecista",
                mainArtisticCulturalOccupationDescription: undefined
              },
              financialAspects: {
                annualIncomeRelatedToCulturalActivity: EAnnualIncomeRelatedToCulturalActivityV2.ABOVE_108000,
                financialDependenceOnCulturalActivity: EFinancialDependenceOnCulturalActivityV2.ESSENTIAL_BUT_NOT_ONLY
              },
              objectivesAndMotivations: {
                mainObjectiveWhenParticipating: EMainObjectiveWhenParticipatingV2.ARTISTIC_RECOGNITION,
                culturalContributionPlan: ECulturalContributionPlan.CULTURAL_EDUCATION,
                culturalGroupParticipation: ECulturalGroupParticipation.INFORMAL_PARTICIPATION,
                childhoodAndAdolescenceCulturalParticipation: [
                  EChildhoodAndAdolescenceCulturalParticipationV2.NO_ACTIVE_PARTICIPATION
                ],
                attendedInstitutionsNames: "Eaque tempora laboriosam."
              }
            }
          }
        }
      }
      return data
    },
    cooperative: function(corporateName: string) {
      const data : IProponentCreateRequest = {
        proponent: {
          personType: EPersonType.cooperative,
          identification: {
            CNPJ: generateCnpj(),
            corporateName: corporateName,
            tradingName: "Schaefer Inc",
            website: "",
            profitNature: true,
            corporationBirthDate: new Date('2022-03-17T03:00:00.000Z'),
            isMei: true,
            hasPartners: false
          },
          contactDetails: {
            responsibleName: "Leilani Ziemann",
            responsibleSocialName: "",
            birthDate: "1995-05-05T03:00:00.000Z",
            email: "your.email+fakedata26020@bnpqatest.com",
            cellphone: "31672290514",
            altPhoneNumber: "",
            phoneNumber: "",
            RG: "Illum autem laboriosam recusandae nobis provident delectus tempore.",
            CPF: "56136757320",
            occupation: "Future Interactions Liaison",
            address: {
              zipCode: "09090901",
              place: "Avenida Dom Jorge Marcos de Oliveira",
              number: "537",
              complement: "Bosco - Jacobson",
              district: "Vila Guiomar",
              city: "SantoAndré-city",
              state: "SP",
              ibgeCode: "3547809",
              cityName: "Santo André"
            }
          },
          address: {
            zipCode: "15010020",
            place: "Rua Prudente de Moraes",
            number: "371",
            complement: "Tillman and Sons",
            district: "Centro",
            city: "SãoJosédoRioPreto-city",
            state: "SP",
            ibgeCode: "3549805",
            cityName: "São José do Rio Preto"
          },
          legalPersonCulturalProfileV2: {
            type: EPersonType.legalPerson,
            characteristicsAndAreasOfOperation: {
              typeOfInstitutionOrCollective: ETypeOfInstitutionOrCollectiveV2.FOUNDATION,
              CNAE: "57006142000183"
            },
            structureAndResources: {
              numberOfMembersOrEmployees: ENumberOfMembersOrEmployeesV2.LESS_THAN_5,
              annualBudget: EAnnualBudgetV2.UP_TO_80000,
              currentFundingSources: [
                ECurrentFundingSource.CORPORATE_SPONSORSHIP
              ],
              currentFundingSourcesDescription: undefined
            },
            experienceAndPartnerships: {
              yearsOfOrganizationExperience: EYearsOfOrganizationExperienceV2.LESS_THAN_2,
              typesOfPartnerships: [
                EPartnershipType.CORPORATE_SPONSORSHIP
              ],
              numberOfPartnerships: ENumberOfPartnerships.UP_TO_2,
              mainArtisticCulturalSegment: EArtisticCulturalSegment.ARCHITECTURE,
              mainArtisticCulturalSegmentDescription: undefined,
              hasAccessedPublicCulturalFundingBefore: EPublicCulturalFundingBefore.NO,
              publicCulturalFundingSourcesAccessed: undefined,
              publicCulturalFundingSourcesAccessedDescription: undefined
            },
            socialAndCommunityImpact: {
              socialImpactAndCulturalInclusionActions: [
                ESocialImpactAndInclusionAction.PROFESSIONAL_TRAINING,
                ESocialImpactAndInclusionAction.AFFIRMATIVE_ACTIONS
              ],
              socialImpactAndCulturalInclusionActionsDescription: undefined,
              socialObjectivesBeyondArtistic: [
                ESocialObjectivesBeyondArtisticV2.SOCIAL_AND_HUMAN_DEVELOPMENT
              ]
            },
            responsable: {
              type: EPersonType.naturalPerson,
              demographics: {
                sex: ESex.MALE,
                gender: EGenderV2.CIS_MAN,
                genderDescription: undefined,
                ethnicity: EEthnicity.WHITE,
                belongsToTraditionalCommunity: ETraditionalCommunity.NO,
                belongsToTraditionalCommunityDescription: undefined,
                maritalStatus: EMaritalStatusV2.STABLE_UNION,
                maritalStatusDescription: undefined,
                hasDisability: EHasDisability.NO,
                disabilityType: undefined,
                disabilityTypeDescription: undefined,
                monthlyFamilyIncome: EMonthlyFamilyIncomeV2.FROM_3000_TO_6000,
                educationLevel: EEducationLevelV2.UNDERGRADUATE_COMPLETE,
                educationKnowledgeArea:EEducationKnowledgeAreaV2.EXACT_AND_EARTH_SCIENCES,
                academicSegment: "Doloribus aperiam cupiditate facere distinctio assumenda neque excepturi reiciendis."
              },
              experienceAndCulturalParticipation: {
                yearsOfExperienceInCulturalArea: EYearsOfExperienceInCulturalArea.BETWEEN_2_AND_5,
                hasAccessedCulturalPublicFunding: EHasAccessedCulturalPublicFunding.NO,
                accessedCulturalPublicFunding: undefined,
                accessedCulturalPublicFundingDescription: undefined,
                numberOfProjectsApproved: undefined,
                culturalActivityModeLastYear: [
                  ECulturalActivityModeLastYearV2.AUTONOMOUS
                ],
                mainAreaOfCulturalActivitySegment: EArtisticCulturalSegment.DESIGN,
                mainAreaOfCulturalActivitySegmentDescription: undefined,
                mainAreaOfCulturalActivitySegmentOptions: [
                  "designProjects"
                ],
                otherCulturalFields: [
                  EArtisticCulturalSegment.CRAFT_ACTIVITIES
                ],
                otherCulturalFieldsDescription: undefined,
                mainArtisticCulturalOccupation: "aderecista",
                mainArtisticCulturalOccupationDescription: undefined
              },
              financialAspects: {
                annualIncomeRelatedToCulturalActivity: EAnnualIncomeRelatedToCulturalActivityV2.ABOVE_108000,
                financialDependenceOnCulturalActivity: EFinancialDependenceOnCulturalActivityV2.ESSENTIAL_BUT_NOT_ONLY
              },
              objectivesAndMotivations: {
                mainObjectiveWhenParticipating: EMainObjectiveWhenParticipatingV2.ARTISTIC_RECOGNITION,
                culturalContributionPlan: ECulturalContributionPlan.CULTURAL_EDUCATION,
                culturalGroupParticipation: ECulturalGroupParticipation.INFORMAL_PARTICIPATION,
                childhoodAndAdolescenceCulturalParticipation: [
                  EChildhoodAndAdolescenceCulturalParticipationV2.NO_ACTIVE_PARTICIPATION
                ],
                attendedInstitutionsNames: "Eaque tempora laboriosam."
              }
            }
          }
        }
      }
      return data
    },
    collective: function(corporateName: string) {
      const data : IProponentCreateRequest = {
        proponent: {
          personType: EPersonType.collective,
          identification: {
            corporateName: corporateName,
            website: "",
            corporationBirthDate: new Date('1999-04-20T03:00:00.000Z')
          },
          contactDetails: {
            responsibleName: "Marli Isabelly Heloise Assis",
            responsibleSocialName: "Heloise Assis Social Name",
            birthDate: "1999-04-20T03:00:00.000Z",
            email: "collective.playwright@bnp.com.br",
            cellphone: "94759364534",
            altPhoneNumber: "",
            phoneNumber: "",
            RG: "987349823",
            CPF: generateCpf(),
            occupation: "Human Tactics Executive",
            address: {
              zipCode: "09090901",
              place: "Avenida Dom Jorge Marcos de Oliveira",
              number: "208",
              complement: "Kutch - Dare",
              district: "Vila Guiomar",
              city: "SantoAndré-city",
              state: "SP",
              ibgeCode: "3547809",
              cityName: "Santo André"
            }
          },
          address: {
            zipCode: "01310200",
            place: "Avenida Paulista",
            number: "336",
            complement: "Stoltenberg, Emard and Jerde",
            district: "Bela Vista",
            city: "SãoPaulo-city",
            state: "SP",
            ibgeCode: "3550308",
            cityName: "São Paulo"
          },
          naturalPersonCulturalProfileV2: {
            type: EPersonType.naturalPerson,
            demographics: {
              sex: ESex.MALE,
              gender: EGenderV2.CIS_MAN,
              genderDescription: undefined,
              ethnicity: EEthnicity.WHITE,
              belongsToTraditionalCommunity: ETraditionalCommunity.NATIVE,
              belongsToTraditionalCommunityDescription: undefined,
              maritalStatus: EMaritalStatusV2.STABLE_UNION,
              maritalStatusDescription: undefined,
              hasDisability: EHasDisability.NO,
              disabilityType: undefined,
              disabilityTypeDescription: undefined,
              monthlyFamilyIncome: EMonthlyFamilyIncomeV2.FROM_1500_TO_3000,
              educationLevel: EEducationLevelV2.POSTGRADUATE_LATO_SENSU,
              educationKnowledgeArea: EEducationKnowledgeAreaV2.BIOLOGICAL_SCIENCES,
              academicSegment: "Maxime quis dolore assumenda nobis."
            },
            experienceAndCulturalParticipation: {
              yearsOfExperienceInCulturalArea: EYearsOfExperienceInCulturalArea.LESS_THAN_2,
              hasAccessedCulturalPublicFunding: EHasAccessedCulturalPublicFunding.NO,
              accessedCulturalPublicFunding: undefined,
              accessedCulturalPublicFundingDescription: undefined,
              numberOfProjectsApproved: undefined,
              culturalActivityModeLastYear: [
                ECulturalActivityModeLastYearV2.OTHER_SECTOR_EMPLOYEE,
                ECulturalActivityModeLastYearV2.INSTITUTION_EMPLOYEE
              ],
              mainAreaOfCulturalActivitySegment: EMainAreaOfCulturalActivitySegment.CRAFT_ACTIVITIES,
              mainAreaOfCulturalActivitySegmentDescription: undefined,
              mainAreaOfCulturalActivitySegmentOptions: [
                ECraftActivitiesSpecialty.HANDCRAFTED_PRODUCTION,
                ECraftActivitiesSpecialty.MANUAL_CRAFTS
              ],
              otherCulturalFields: [
                EOtherCulturalFields.PERFORMING_ARTS
              ],
              otherCulturalFieldsDescription: undefined,
              mainArtisticCulturalOccupation: "aderecista",
              mainArtisticCulturalOccupationDescription: undefined
            },
            financialAspects: {
              annualIncomeRelatedToCulturalActivity: EAnnualIncomeRelatedToCulturalActivityV2.UP_TO_18000,
              financialDependenceOnCulturalActivity: EFinancialDependenceOnCulturalActivityV2.ESSENTIAL_BUT_NOT_ONLY
            },
            objectivesAndMotivations: {
              mainObjectiveWhenParticipating: EMainObjectiveWhenParticipatingV2.COMMUNITY_CONTRIBUTION,
              culturalContributionPlan: ECulturalContributionPlan.DIVERSITY_INCLUSION,
              culturalGroupParticipation: ECulturalGroupParticipation.FORMAL_PARTICIPATION,
              childhoodAndAdolescenceCulturalParticipation: [
                EChildhoodAndAdolescenceCulturalParticipationV2.ART_COURSES,
                EChildhoodAndAdolescenceCulturalParticipationV2.SCHOOL_GROUPS
              ],
              attendedInstitutionsNames:
                "Id earum cumque saepe tempore possimus possimus deleniti dignissimos."
            }
          }
        }
      }
      return data
    }
}         
