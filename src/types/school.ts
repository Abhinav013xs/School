export interface SchoolLocation {
  readonly street: string;
  readonly locality: string;
  readonly district: string;
  readonly state: string;
  readonly postalCode: string;
  readonly country: string;
  readonly fullAddress: string;
  readonly googleMapsEmbedUrl?: string;
  readonly googleMapsDirectionsUrl: string;
}

export interface SchoolSchedule {
  readonly monday: string;
  readonly tuesday: string;
  readonly wednesday: string;
  readonly thursday: string;
  readonly friday: string;
  readonly saturday: string;
  readonly sunday: string;
  readonly summary: string;
  readonly holidayNotice: string;
}

export interface SchoolContacts {
  readonly phone: string;
  readonly phoneRaw?: string;
  readonly email: string;
  readonly whatsapp?: string;
}

export interface SchoolConfig {
  readonly name: string;
  readonly type: string;
  readonly mottoProposal: string;
  readonly location: SchoolLocation;
  readonly schedule: SchoolSchedule;
  readonly contacts: SchoolContacts;
  readonly gradesOffered: readonly string[];
}
