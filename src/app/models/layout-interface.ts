export interface IPROFILE {
  USER_NAME?: string,
  LABEL?: string,
  TEXT?:string
}

export interface IPROFILE_USERDETAILS {
  icon?: string,
  title?: string,
  routerLink?:string
}

export interface IREFERRAL {
  referralPrice?:number,
  fromYear?:any,
  toYear?:any,
}

export interface ILATEST_JOB {
  image?: string,
  LOCATION?: string,
  HEADING?:string,
  DATE?:string,
  TEXT?:string,
  OPENING_NUMBER_TEXT?:string,
  OPENING_NUMBER?:string,
  EXPERIENCE?:string,
  EXPERIENCE_NUMBER?:string,
  BUTTON_VIEW?:string,
  BUTTON_REFER?:string,
}



