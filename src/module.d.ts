/**
 * This file provides type definitions for external libraries or components which are written in JavaScript.
 */

/** ***************************************************** SCSS ****************************************************** */
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

/** **************************************************** FILES ****************************************************** */
declare module '*.png';
declare module "*.svg";
declare module "*.pdf";

/** ********************************************** EXTERNAL LIBRARIES *********************************************** */
declare module "griddle-react";
declare module "i18next-xhr-backend";
declare module "react-bootstrap";
declare module "react-i18next";
declare module "react-redux";
declare module "react-router";
declare module "react-router-bootstrap";
declare module "react-router-redux";
declare module "redux-connect";
declare module "redux-form";
declare module "superagent-mock";
declare module "react-scrollchor";
declare module "react-select";

/** *********************************************** GLOBAL VARIABLES ************************************************ */
declare let lang: string;
declare let bankCode: string;
declare let BASE_URL: string;
declare let KEYCLOAK_URL: string;
declare let KEYCLOAK_REALM: string;
declare let KEYCLOAK_CLIENT_ID: string;
declare let USE_OAUTH2: unknown;
declare let USE_STORAGE_ENCRYPTION: unknown;

declare let __DEVELOPMENT__: boolean;
declare let __CLIENT__: boolean;
declare let __DEVTOOLS__: boolean;

/** ********************************************* INTERNAL COMPONENTS *********************************************** */
declare module "components/Utils/MultiSociety";

/** ************************************************** UTIL TYPES **************************************************** */
declare type DeepReadonly<T> =
  T extends Primitive ? T : T extends Array<infer U> ? DeepReadonlyArray<U> : DeepReadonlyObject<T>;

type Primitive = string | number | boolean | undefined | null;

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

/** ************************************************ OBJECT TYPES *************************************************** */
declare type TAuthority = string;

declare interface IUser {
  intitule: string;
  fullName: string;
  codePays: string;
  username: string;
  id: string;
  email: string;
  qualite: string;
  gsm: string;
  typeClient: 'P_SegmentClientContrat' | 'E_SegmentClientContrat' | 'B_SegmentClientContrat';
  typeProfile: 'CL' | 'BO' | 'AD';
  timeOut: number;
  identifiantContrat: string;
  dataDerniereconnexion: string;
  codeBanque: string;
  codeLangue: string;
  authorities?: string[];
  roles?: string[];
  contratId?: number;
}

declare interface IMovement {
  codeOperation: string;
  dateValeur: string;
  devise: string;
  id: number;
  identifiantMouvement: string;
  intermediate_solde_: string;
  libelleComplementaire: string;
  sens: string;
  dateOperation: string;
  credit: string;
  debit: string;
  credit_: string;
  debit_: string;
  libelle: string;
}

declare interface IChartData {
  credits: number[];
  dates: string[];
  debits: string[];
  devise: string;
  soldes: string[];
}

type TWidgetIcon =
  | 'widgetAccountIcon'
  | 'widgetOperationsIcon'
  | 'widgetReleveIcon'
  | 'widgetCardIcon'
  | 'CheckIcon'
  | 'widgetChequeIcon'
  | 'widgetBenefIcon'
  | 'widgetTransferIcon'
  | 'widgetMultiTransferIcon'
  | 'widgetRemiseDordreIcon'
  | 'widgetPasswordIcon';

declare type TWidget = {
  id: number;
  icon: TWidgetIcon;
  name: string;
  path: string;
  roles: string[];
}

declare interface ILoan {
  capitalRestant_formatted: string;
  typeDePret: string;
  numeroDossier: number;
  devise: string;
}

declare interface IAccount {
  SOLDE_REEL_DEVISE_PIVOT: string;
  SOLDE_VALEUR_DEVISE_PIVOT: string;
  agence: string;
  agence_libelle: string;
  autorisation: number;
  autorisation_: string;
  cleControle: string;
  cleRIB: string;
  convertible: string;
  devise_code: string;
  devise_pivot: string;
  elligibiliteDemande: boolean;
  elligibleInternationalTransferts: boolean;
  id: number;
  identifiantInterne: string;
  identifiantInterne_NOT_FORMATTED: string;
  incluRemiseOrdre: string;
  incluVirement: string;
  intitule: string;
  natureCompte: string;
  overdraftFlag: string;
  rib: string;
  soldeComptable: string;
  soldeComptable_: number;
  soldeDisponible: string;
  soldeTempsReel: string;
  soldeValeur: string;
  solde_devise: number;
  solde_devise_format: string;
  solde_devise_reel: number;
  solde_devise_valeur: number;
  toString_: string;
  typeCompte: string;
  devise: string;
  mouvements?: IMovement[];
  soldeChart?: string;
  dataChartMinMAx?: string;
  dataChartMoyen?: string;
}

declare interface IDevise {
  id: number;
  libelle: string;
  codeIso: string;
}

declare interface ICustomAccount {
  intitule_identifiant_Contrat: string;
  children: IAccount[];
  idContrat: number;
  idContrat_: number;
}

declare interface ITitleAccount {
  typeContrat: string;
  numeroContrat: string;
  montantXpf: string;
  deviseMontantXpf: string;
}

declare interface ILifeInsuranceAccounts {
  nomValeurDetenue: string;
  quantite_formatted: string;
  valorisation_formatted: string;
  devise: string;
}

declare interface ITask {
  id: number | string;
  fullUri: string;
  identifiantDemande: string;
  dateCreated: string;
  libelle2: string;
  libelle: string;
  createTime: string;
}

declare interface IContract {
  id: number;
  intituleRC: string;
  identifiantContrat: string;
}

declare interface IAttachement {
  benificiaireVerification: string;
}

declare interface IMoneyTransferCeiling {
  consom_quotidien: number;
  QUOTIDIEN: number;
  consom_hebdo: number;
  HEBDO: number;
  consom_mensuel: number;
  MENSUEL: number;
  consom_annuel: number;
  ANNUEL: number;
}

declare interface IHabilitation {
  habilitationModifier: boolean;
  habilitationSigner: boolean;
  habilitationVisualiser: boolean;
  habilitationTelechargerFichier: boolean;
}

declare interface ILogActivity {
  eventName: string;
  dateCreated: string;
  dateCreatedFormatted?: string;
  plateforme: string;
  ipAdress: string;
  actor: string;
  username: string;
  propertyName: string;
  oldValue: string;
  newValue: string;
}


declare interface IInfoMsg {
  message: string;
}

declare interface ICustomer {
  telephoneUser: string;
  emailUser: string;
  radical: string;
  firstNameUser: string;
  lastNameUser: string;
}

interface IDecodedToken {
  exp: number;
  iat: number;
  userDetails: IUser;
  authorities: TAuthority[];
}

declare interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  session_state: string;
  scope: string;
}

declare interface IPortfeuilleTitre {
  typeValeur: string;
  nomValeurDetenue: string;
  typeOperation: string;
  quantite_formatted: string;
  cours_formatted: string;
  montantBrutOperation_formatted: string;
  montantNetOperation_formatted: string;
  dateOperation: string;
}

declare interface IParams {
  [param: string]: any
}

declare interface ICms {
  title?: string;
  body: string;
}

declare interface IFileObject {
  contentType: { subtype : string };
  filename: string;
  content: string;
}

declare interface ILogEvent {
  id: number;
  code: number;
  libelle: string;
}

interface ILCNEffect {
  typeEffet: string;
  dateRemise: Date;
  dateEcheance: Date;
  numeroBordereau: string;
  numeroEffet: string;
  tiers: string;
  montantParRemise: string;
  montantParRemiseFormated: string; 
  devise: string;
}

