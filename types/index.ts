export type Dict<T> = { [key: string]: T };

export interface Character {
  charId: number;
  stateId: string;
  firstName: string;
  lastName: string;
  x?: number;
  y?: number;
  z?: number;
  heading?: number;
  lastPlayed?: string;
  health?: number;
  armour?: number;
  isNew?: boolean;
  appearance: string;
  data?: string;
}

export interface NewCharacter {
  firstName: string;
  lastName: string;
  gender: string;
  date: number;
  appearance: string;
}

export interface PlayerMetadata {
  name: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  [key: string]: any;
}

export interface CharacterLicense {
  issued: number;
  suspended?: [number, number];
  [key: string]: any;
}

export type Vehicles = Dict<VehicleData>;
export type VehicleCategories = 'air' | 'land' | 'sea' | 'bicycle';
export type TopVehicleStats = Record<VehicleCategories, VehicleStats>;

export interface VehicleStats {
  acceleration: number;
  braking: number;
  handling: number;
  speed: number;
  traction: number;
}

export enum VehicleClasses {
  COMPACT,
  SEDAN,
  SUV,
  COUPE,
  MUSCLE,
  SPORTS_CLASSIC,
  SPORTS,
  SUPER,
  MOTORCYCLE,
  OFFROAD,
  INDUSTRIAL,
  UTILITY,
  VANS,
  CYCLES,
  BOATS,
  HELICOPTERS,
  PLANES,
  SERVICE,
  EMERGENCY,
  MILITARY,
  COMMERCIAL,
  TRAINS,
  OPEN_WHEEL,
}

export type VehicleTypes =
  | 'amphibious_automobile'
  | 'amphibious_quadbike'
  | 'automobile'
  | 'bicycle'
  | 'bike'
  | 'blimp'
  | 'boat'
  | 'heli'
  | 'plane'
  | 'quadbike'
  | 'submarine'
  | 'submarinecar'
  | 'trailer'
  | 'train';

export interface VehicleData extends VehicleStats {
  isUsedInServer: boolean;
  isPlayerAllowed: boolean;
  class: string;
  doors: number;
  make: string;
  name: string;
  price: number;
  seats: number;
  type: VehicleTypes;
  weapons?: true;
}

export interface OxStatus {
  name: string;
  default: number;
  onTick: number;
}

export interface OxAccount {
  id: number;
  balance: number;
  isDefault: boolean;
  label?: string;
  owner?: number;
  group?: string;
  type: 'personal' | 'shared' | 'group';
  role: 'contributor' | 'manager' | 'owner';
}

export interface DbGroups {
  name: string;
  label: string;
  grades: string[];
  colour?: number;
}

export interface OxGroup extends DbGroups {
  grades: string[];
  principal: string;
}

export interface OxGroupPermissions {
  [grade: string]: { [permission: string]: boolean };
}
