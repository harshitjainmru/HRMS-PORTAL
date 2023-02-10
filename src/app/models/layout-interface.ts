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

export interface IDIRECTORY_DATA {
  IMAGE?:string,
  EMP_NAME?:string,
  EMP_DESIGNATION?:string,
  EMP_TECHNOLOGY?:string,
  EMAIL_ICON?:string,
  EMAIL?:string,
  BIRTH_ICON?:string,
  BIRTH_DATE?:string,
  BIRTH_MONTH?:string
}
export interface IAWARDDATA{
  IMAGE?:string
  EMP_NAME?:string,
  DESIGNATION?:string,
  DATE?:string,
}


