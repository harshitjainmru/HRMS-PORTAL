import { QUALIFICATION_VALUE, SHIFT_VALUE } from "./text";

export const SHIFT_HEADING=[
  {heading: SHIFT_VALUE.DATE_OF_JOIN_VALUE, key:'date-of-join',type:'text',sort:''},
  {heading: SHIFT_VALUE.OFFICE_SHIFT_VALUE, key:'shift',type:'text',sort:''},
]

export const SHIFT_TABLE_VALUES = [
  {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
]

export const QUALIFICATION_HEADING=[
  {heading: QUALIFICATION_VALUE.ACTION_VALUE, key:'action',type:'text',sort:true},
  {heading: QUALIFICATION_VALUE.SCHOOL_VALUE, key:'school',type:'text',sort:true},
  {heading: QUALIFICATION_VALUE.TIME_VALUE, key:'time',type:'text',sort:true},
  {heading: QUALIFICATION_VALUE.EDUCATION_VALUE, key:'education',type:'text',sort:true},
]

export const QUALIFICATION_TABLE_VALUES = [
  {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
]
