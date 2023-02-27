import { POLICY_DOCUMENT } from "../models/table-interface";
import { QUALIFICATION_VALUE, SHIFT_VALUE } from "./text";

export const SHIFT_HEADING=[
  {heading: SHIFT_VALUE.DATE_OF_JOIN_VALUE, key:'date-of-join',type:'text',sort:''},
  {heading: SHIFT_VALUE.OFFICE_SHIFT_VALUE, key:'shift',type:'text',sort:''},
]

export const SHIFT_TABLE_VALUES = [
  {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
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

export const POLICY_DOCUMENT_HEADING = [
  { heading: '#', key: 'sNo', type: 'text' },
  { heading: 'Name', key: 'name', type: 'text_with_icon' },
  { heading: 'Type', key: 'doctype', type: 'text' },
  { heading: 'File size  ', key: 'size', type: 'text' },
  { heading: 'Last Modified', key: 'date', type: 'text' },
  { heading: 'Action', key: 'download', type: 'link' },
];

export const POLICY_DOCUMENT_VALUES : POLICY_DOCUMENT[]  = [
  {
    sNo: 1,
    name: 'Appinventiv_policy_manual',
    text_with_icon: '1',
    doctype: 'pdf',
    size: '345kb',
    date: '25-07-2022',
    download: 'Download',
    link: 'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Appinventiv_Policy_Manual.pdf',
  },
  {
    sNo: 2,
    name: 'Appinventiv_Contact_List',
    text_with_icon: '1',
    doctype: 'pdf',
    size: '345kb',
    date: '25-07-2022',
    download: 'Download',
    link: 'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Contact_List_Updated_Appinventiv.pdf',
  },
  {
    sNo: 3,
    name: 'Leave Policy',
    doctype: 'pdf',
    text_with_icon: '1',
    size: '345kb',
    date: '25-07-2022',
    download: 'Download',
    link: 'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/LeavePolicy.pdf',
  },
  {
    sNo: 4,
    name: 'Holiday-Calendar-2023',
    doctype: 'jpg',
    text_with_icon: '2',
    size: '881.48 KB',
    date: 'Jan-02-2023',
    download: 'Download',
    link: '/assets/images/2023.jpg',
  },
];
export const MY_PITCH_HEADING = [
  { heading: '#', key: 'sNo', type: 'text' },
  { heading: 'Title', key: 'title', type: 'text_with_icon' },
  { heading: 'Industry', key: 'industry', type: 'text' },
  { heading: 'Technical / Non-Technical', key: 'typeIndustry', type: 'text' },
  { heading: 'Submitted On', key: 'date', type: 'text' },
  { heading: 'Action', key: 'download', type: 'link' },
];
