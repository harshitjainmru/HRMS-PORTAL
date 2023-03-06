import { POLICY_DOCUMENT, SUB_TOPIC, TRAINING_TOPIC } from "../models/table-interface";

export const SHIFT_HEADING=[
  {heading: 'Date of Joining', key:'dateofjoin',type:'text',sort:''},
  {heading: 'Office Shift', key:'shift',type:'text',sort:''},
]

export const SHIFT_TABLE_VALUES = [
  {dateofjoin:'Feb-07-2022', shift:'Morning Shift'},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
]

export const QUALIFICATION_HEADING=[
  {heading: 'Action', key:'action',type:'text',sort:true},
  {heading: 'School/University', key:'school',type:'text',sort:true},
  {heading: 'Time Period', key:'time',type:'text',sort:true},
  {heading:'Education Level', key:'education',type:'text',sort:true},
]

export const QUALIFICATION_TABLE_VALUES = [
  // {'date-of-join':SHIFT_VALUE.DATE_VALUE, 'shift':SHIFT_VALUE.SHIFT_VALUE},
]

export const POLICY_DOCUMENT_HEADING = [
  { heading: '#', key: 'sNo', type: 'text' },
  { heading: 'Name', key: 'name', type: 'text_with_icon' },
  { heading: 'Type', key: 'doctype', type: 'text' },
  { heading: 'File size  ', key: 'size', type: 'text' },
  { heading: 'Last Modified', key: 'date', type: 'text' },
  { heading: 'Action', key: 'download', type: 'downloadLink' },
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

export const INTERVIEW_LIST_HEADING = [
  { heading: 'S.No.', key: 'sNo', type: 'text' },
  { heading: 'Department', key: 'department', type: 'text' },
  { heading: 'Name', key: 'name', type: 'text' },
  { heading: 'Email', key: 'email', type: 'text' },
  { heading: 'Mobile No.', key: 'mobile', type: 'number' },
  { heading: 'Round Type', key: 'round', type: 'text' },
  { heading: 'Interview Date', key: 'interviewDate', type: 'text' },
  { heading: 'Interview Time', key: 'interviewTime', type: 'text' },
  { heading: 'Final Status', key: 'finalStatus', type: 'text' },
  { heading: 'Action', key: 'action', type: 'action' },
];

export const TRAINING_TOPIC_HEADING = [
  { heading: 'S.No.', key: 'sNo', type: 'text' },
  { heading: 'Topic.', key: 'topic', type: 'text' },
  { heading: 'Topic Trainer', key: 'topictrainer', type: 'text' },
  { heading: 'Trainer Email', key: 'email', type: 'text' },
  { heading: 'Start Date', key: 'startDate', type: 'text' },
  { heading: 'End Date', key: 'endDate', type: 'text' },
  { heading: 'Resource URL', key: 'url', type: 'text' }
  // { heading: 'Resource URL', key: 'url', type: 'link' }
]

export const TRAINING_TOPIC_DATA : TRAINING_TOPIC[]=[
  {
    sNo:1,
    topic:'Introduction',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Feb-28-2022',
    endDate:'Feb-28-2022',
    url:'-'
  },
  {
    sNo:2,
    topic:'Basic building block',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-01-2022',
    endDate:'Mar-01-2022',
    url:'-'
  },
  {
    sNo:3,
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-02-2022	',
    endDate:'Mar-04-2022',
    url:'-'
  },
  {
    sNo:4,
    topic:'	Ist - Assignment',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-05-2022',
    endDate:'Mar-05-2022',
    url:'-'
  },
  {
    sNo:5,
    topic:'Modules',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-07-2022',
    endDate:'Mar-07-2022',
    url:'-'
  },
  {
    sNo:6,
    topic:'Modules',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-08-2022',
    endDate:'Mar-08-2022',
    url:'-'
  },
  {
    sNo:7,
    topic:'Routing',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-09-2022',
    endDate:'Mar-11-2022',
    url:'-'
  },
  {
    sNo:8,
    topic:'IInd - Assignment',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-12-2022',
    endDate:'Mar-12-2022',
    url:'-'
  },
  {
    sNo:9,
    topic:'RxJs',
    topictrainer:'Mohit Sahore',
    email:'mohit.sahore@appinventiv.com',
    startDate:'Mar-21-2022',
    endDate:'Mar-21-2022',
    url:'-'
  },
  {
    sNo:10,
    topic:'HTTP',
    topictrainer:'Mohit Sahore',
    email:'mohit.sahore@appinventiv.com',
    startDate:'Mar-23-2022',
    endDate:'Mar-23-2022',
    url:'-'
  },

]
export const SUBTOPIC_HEADING = [
  { heading: 'S.No.', key: 'sNo', type: 'text' },
  { heading: 'Sub-Topic', key: 'subtopic', type: 'text' },
  { heading: 'Topic', key: 'topic', type: 'text' },
  { heading: 'Topic Trainer', key: 'topictrainer', type: 'text' },
  { heading: 'Trainer Email', key: 'email', type: 'text' },
  { heading: 'Start Date', key: 'startDate', type: 'text' },
  { heading: 'End Date', key: 'endDate', type: 'text' },
  { heading: 'Resource URL', key: 'url', type: 'text' }
  // { heading: 'Resource URL', key: 'url', type: 'link' }
]

export const SUB_TOPIC_DATA : SUB_TOPIC[]=[
  {
    sNo:1,
    subtopic:'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',
    topic:'Introduction',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Feb-28-2022',
    endDate:'Feb-28-2022',
    url:'-'
  },
  {
    sNo:2,
    subtopic:'Basic building blocks Basic diff between Angular & other SPA’s Basics of CLI usage',
    topic:'Basic building block',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-01-2022',
    endDate:'Mar-01-2022',
    url:'-'
  },
  {
    sNo:3,
    subtopic:'What is component. How to use component Defines template and style Data pass TS to View(HTML)',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-02-2022	',
    endDate:'Mar-04-2022',
    url:'-'
  },
  {
    sNo:4,
    subtopic:'What is the parent child relationship When should we use parent child components',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-03-2022	',
    endDate:'Mar-03-2022',
    url:'-'
  },
  {
    sNo:5,
    subtopic:'Component lifecycle hooks overview',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-04-2022	',
    endDate:'Mar-04-2022',
    url:'-'
  },
  {
    sNo:6,
    subtopic:'Ist - Assignment',
    topic:'	Ist - Assignment',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-05-2022',
    endDate:'Mar-05-2022',
    url:'-'
  },
  {
    sNo:7,
    subtopic:'	What are modules. How to create modules. How to break application in modules',
    topic:'Modules',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-07-2022',
    endDate:'Mar-07-2022',
    url:'-'
  },
  {
    sNo:8,
    subtopic:'What is routing How to generate routing What are router outlets',
    topic:'Routing',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-09-2022',
    endDate:'Mar-11-2022',
    url:'-'
  },
  {
    sNo:9,
    subtopic:'IInd - Assignment',
    topic:'IInd - Assignment',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-12-2022',
    endDate:'Mar-12-2022',
    url:'-'
  },
  {
    sNo:10,
    subtopic:'RxJs',
    topic:'RxJs',
    topictrainer:'Mohit Sahore',
    email:'mohit.sahore@appinventiv.com',
    startDate:'Mar-21-2022',
    endDate:'Mar-21-2022',
    url:'-'
  },
]

export const SUB_TOPIC_DATA1 : SUB_TOPIC[]=[
  {
    sNo:1,
    subtopic:'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',
    topic:'Introduction',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Feb-28-2022',
    endDate:'Feb-28-2022',
    url:'-'
  },
  {
    sNo:2,
    subtopic:'Basic building blocks Basic diff between Angular & other SPA’s Basics of CLI usage',
    topic:'Basic building block',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-01-2022',
    endDate:'Mar-01-2022',
    url:'-'
  },
  {
    sNo:3,
    subtopic:'What is component. How to use component Defines template and style Data pass TS to View(HTML)',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-02-2022	',
    endDate:'Mar-04-2022',
    url:'-'
  },
  {
    sNo:4,
    subtopic:'What is the parent child relationship When should we use parent child components',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-03-2022	',
    endDate:'Mar-03-2022',
    url:'-'
  },
  {
    sNo:5,
    subtopic:'Component lifecycle hooks overview',
    topic:'Components',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-04-2022	',
    endDate:'Mar-04-2022',
    url:'-'
  },
  {
    sNo:6,
    subtopic:'Ist - Assignment',
    topic:'	Ist - Assignment',
    topictrainer:'Sandeep Gupta',
    email:'Sandeep.Gupta@appinventiv.com',
    startDate:'Mar-05-2022',
    endDate:'Mar-05-2022',
    url:'-'
  },
  {
    sNo:7,
    subtopic:'	What are modules. How to create modules. How to break application in modules',
    topic:'Modules',
    topictrainer:'Parwinder Singh',
    email:'parwinder.singh@appinventiv.com',
    startDate:'Mar-07-2022',
    endDate:'Mar-07-2022',
    url:'-'
  },
]
export const ATTENDANCE_HEADING =[
  { heading: 'S.No.', key: 'sNo', type: 'text' },
  { heading: 'Topic', key: 'topic', type: 'text' },
  { heading: 'Date', key: 'date', type: 'text' },
  { heading: 'Attendance', key: 'attendance', type: 'text' },
]

export const ATTENDANCE_TABLEDATA = [
  {
    sNo:1,
    topic:'Introduction',
    date:'Feb-28-2022',
    attendance:'Present'
  },
  {
    sNo:2,
    topic:'Basic building block',
    date:'Mar-01-2022',
    attendance:'Present'
  },
  {
    sNo:3,
    topic:'Components',
    date:'Mar-02-2022	',
    attendance:'Present'
  },
  {
    sNo:4,
    topic:'	Ist - Assignment',
    date:'Mar-05-2022',
    attendance:'Present'

  },
  {
    sNo:5,
    topic:'Modules',
    date:'Mar-07-2022',
    attendance:'Present'

  },
  {
    sNo:6,
    topic:'Modules',
    date:'Mar-08-2022',
    attendance:'Present'

  },
  {
    sNo:7,
    topic:'Routing',
    date:'Mar-09-2022',
    attendance:'Present'

  },
  {
    sNo:8,
    topic:'IInd - Assignment',
    date:'Mar-12-2022',
    attendance:'Present'

  },
  {
    sNo:9,
    topic:'RxJs',
    date:'Mar-21-2022',
    attendance:'Present'

  },
  {
    sNo:10,
    topic:'HTTP',
    date:'Mar-23-2022',
    attendance:'Present'

  },
]
export const ATTENDANCE_TABLEDATA1 = [
  {
    sNo:1,
    topic:'Introduction',
    date:'Feb-28-2022',
    attendance:'Present'
  },
  {
    sNo:2,
    topic:'Basic building block',
    date:'Mar-01-2022',
    attendance:'Present'
  },
  {
    sNo:3,
    topic:'Components',
    date:'Mar-02-2022	',
    attendance:'Present'
  },
  {
    sNo:4,
    topic:'	Ist - Assignment',
    date:'Mar-05-2022',
    attendance:'Present'

  },
  {
    sNo:5,
    topic:'Modules',
    date:'Mar-07-2022',
    attendance:'Present'

  },
  {
    sNo:6,
    topic:'Modules',
    date:'Mar-08-2022',
    attendance:'Present'

  },
]



// export const TRAINING_DETAILS = [{
//   training_label:'Training Details',
//   title_label:'Title :',
//   title_data:'Angular Training Feb- 2022',
//   start_date_label:'Start dates :',
//   start_date_data:'Feb-28-2022',
//   end_date_label:'End dates :',
//   end_date_data:'Apr-02-2022',
//   mode_label:'Training mode :',
//   mode_data:'Online',
//   batch_label:'Batch :',
//   batch_data:'Feb-2022',
//   description_label:'Description',
//   description_data:'Angular Training Feb- 2022 - Uploaded from sheet',
//   topic_label:'Topics',
//   table_heading:TRAINING_TOPIC_HEADING,
//   table_data:TRAINING_TOPIC_DATA
//   }];
//   export const SUBTOPIC_DATA =[{
//     subtopic_label:'Sub Topics',
//     table_heading:SUBTOPIC_HEADING,
//     table_data:SUB_TOPIC_DATA
//   }]
//   export const ATTENDANCE_DATA =[{
//     attendance_label:'Attendance',
//     table_heading:ATTENDANCE_HEADING,
//     table_data:ATTENDANCE_TABLEDATA
//   }]
