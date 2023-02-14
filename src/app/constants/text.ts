import {
  IAPPRECIATIONDATA,
  IAWARDDATA,
  IBIRTHDAYDATA,
  IDIRECTORY_DATA,
  IGALLERYDATA,
  ILATEST_JOB,
  IPROFILE,
  IPROFILE_USERDETAILS,
  IREFERRAL,
  IWORKANNIVERSARY,
} from '../models/layout-interface';
import { ABS_BASIC_INFO } from './absolute-routes';
import {
  APPRAISAL,
  BASIC,
  CHANGE_PASSWORD,
  PROFILE_PIC,
  QUALIFICATION,
  SHIFT,
} from './routes';

export const ACCOUNT = {
  COPYRIGHT: '2023 © Appinventiv HR System',
  GOOGLE_BUTTON: 'Sign in with google',
  OFFICIAL_EMAILID: 'Please use your official Email Id',
  CREDENTIAL_BUTTON: 'LOGIN WITH CREDENTIALS',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'Enter your email',
  PASSWORD_LABEL: 'Password',
  PASSWORD_PLACEHOLDER: 'Enter Password',
  FORGOT_PASSWORD: 'Forgot Password?',
  LOGIN: 'Login',
  LOGIN_WITH_GOOGLE: 'LOGIN WITH GOOGLE',
  FORGOT_TITLE: 'Reset Your Password',
  FORGOT_INSTRUCTION: 'We will send you a link to reset password.',
  FORGOT_BUTTON: 'Recover Password',
  BACK_TO_LOGIN: 'back to login',
};

export const SIDENAV = {
  Home_LABEL: 'Home',
  My_Profile_LABEL: 'My Profile',
  Directory_LABEL: 'Directory',
  Enterpreneurship_Program_LABEL: 'Enterpreneurship Program',
  My_Links_LABEL: 'My Links',
  Finance_LABEL: 'Finance',
  Reviews_LABEL: 'Reviews',
  Refer_Friend_LABEL: 'Refer a Friend',
  Freshers_TrainingLABEL: 'Freshers Training',
  Training_LABEL: 'Training',
  Assests_LABEL: 'Assests Inventory',
  Attendance_LABEL: 'Attendance',
  Leave_LABEL: 'Leave',
  Tickets_LABEL: 'Tickets',
  DSR_LABEL: 'DSR',
  Projects_LABEL: 'Projects',
  Expense_LABEL: 'Expense',
  Announcements_LABEL: 'Announcements',
  Travels_LABEL: 'Travels',
  Logout_LABEL: 'Logout',
};

export const LAYOUT = {
  USER_NAME: 'harshit kumar jain',
  HEADER_MENU_LABEL1: 'My Profile',
  HEADER_MENU_LABEL2: 'Change Password',
  HEADER_MENU_LABEL3: 'Sign Out',
  HEADER_BUTTON: 'help',
  HEADER_LAST_LOGIN: 'last login',
  HEADER_LAST_LOGIN_TIME: ' Feb-01-2023 06:48 PM from 172.31.76.182',
  LAYOUT_FOOTER: '2023 © Appinventiv HR System v1.0.6',
  LAYOUT_FOOTER_BUTTON: 'Covid 19 - Desk',
};

export const LAYOUT_HOME = {
  GREETING: 'Hello!',
  USER_NAME: 'harshit kumar jain',
};

export const LAYOUT_MY_PROFILE: IPROFILE[] = [
  { USER_NAME: 'harshit kumar jain' },
  { LABEL: 'Email', TEXT: ' harshit.jain@appinventiv.com' },
  { LABEL: 'Employee ID', TEXT: 'AI1611' },
  { LABEL: 'Designation', TEXT: 'Software Engineer' },
  { LABEL: 'Last Login', TEXT: 'Feb-01-2023 06:48 PM from 172.31.76.182' },
];
export const LAYOUT_MY_PROFILE_USER_INFO: IPROFILE_USERDETAILS[] = [
  {
    icon: 'fa fa-user',
    title: 'Basic Information',
    routerLink: ABS_BASIC_INFO.path,
  },
  { icon: 'fa fa-camera', title: 'Profile Picture', routerLink: PROFILE_PIC },
  { icon: 'fa fa-book', title: 'Qualification', routerLink: QUALIFICATION },
  { icon: 'fas fa-user-clock', title: 'Shift', routerLink: SHIFT },
  { icon: 'fa fa-key', title: 'Change Password ', routerLink: CHANGE_PASSWORD },
  { icon: 'fa fa-thumbs-up', title: ' Appraisal ', routerLink: APPRAISAL },
];
export const JOB_OPENING = {
  HEADER: 'Latest Job Openings',
  HEADER_BUTTON: 'View All',
};
export const NEW_FAMILY = {
  HEADER: 'New Family Members',
  EMP_NAME: 'harshit kumar jain',
  DESIGNATION: 'software engineer - angular',
};
export const LATEST_JOB_OPENING: ILATEST_JOB[] = [
  {
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    image: '/assets/react-native.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead -  REACT JS',
    TEXT: 'We are looking for JavaScript developers  proficient with React.js -  ( Preferred Early Joiners)',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '2',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    image: '/assets/nodejs.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead - Node.js',
    TEXT: 'TL has to oversee the technical team and all projects, identify risks & develop work schedules.',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
];
export const LATEST_APPINVENTIV = {
  HEADER_VALUE: 'Latest at Appinventiv',
};
export const AWARDS_VALUE = {
  HEADER_VALUE: 'Awards',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE: 'Keep spreading your awesomeness. Congratulations!',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};
export const BIRTHDAY_VALUE = {
  HEADER_VALUE: 'Birthday celebration',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE:
    'On behalf of the entire company I wish you a very happy birthday and send you my best wishes for much happiness in your life.',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};
export const WORK_ANNIVERSARY_VALUE = {
  HEADER_VALUE: 'Work Anniversary',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE:
    'Wishing you many more years of success, good luck, and joy! On this blissful and charming day of your Corporate anniversary may you continue the journey of achievements with pride! ',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};

export const APPRECIATION_DATA: IAPPRECIATIONDATA[] =[
  { HEADER_VALUE: 'Appreciation for UStandBy',TEXT:'Hello All,',MESSAGE:`With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`, GREET:'Kudos to the team!',  BUTTON:'View More'},
  { HEADER_VALUE: 'Appreciation| ABP NEWS', DEAR_VALUE: 'Dear',TEXT:' Aashima Anand,',MESSAGE:`We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `, GREET:'Thank you for all the hard work and commitment. Keep up the excellent work.',  BUTTON:'View More'},
  { HEADER_VALUE: 'Appreciation for UStandBy',TEXT:'Hello All,',MESSAGE:`With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`, GREET:'Kudos to the team!',  BUTTON:'View More'},
  { HEADER_VALUE: 'Appreciation| ABP NEWS', DEAR_VALUE: 'Dear',TEXT:' Aashima Anand,',MESSAGE:`We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `, GREET:'Thank you for all the hard work and commitment. Keep up the excellent work.',  BUTTON:'View More'},


]
export const AWARDS_EMP_IMAGE_DATA: IAWARDDATA[] = [
  {
    IMAGE: '/assets/images/.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Shweta Saxena (AI1320)',
    DESIGNATION: 'Software Engineer, REACT JS',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const BIRTHDAY_EMP_IMAGE_DATA: IBIRTHDAYDATA[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const WORKANNIVERSARY_EMP_IMAGE_DATA: IWORKANNIVERSARY[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const REFERRAL = {
  HEADER: 'OUR REFERRAL BONUS PROGRAM',
  AMOUNT: 'K',
  TEXT: 'Referral Bonus',
  FOR_TEXT: 'For',
  TO_TEXT: 'to',
  YEAR_TEXT: 'Years of experience',
};
export const REFERRAL_DATA: IREFERRAL[] = [
  {
    referralPrice: 11,
    fromYear: 1,
    toYear: 3,
  },
  {
    referralPrice: 21,
    fromYear: 3,
    toYear: 5,
  },
  {
    referralPrice: 41,
    fromYear: 5,
    toYear: 9,
  },
  {
    referralPrice: 51,
    fromYear: 9,
    toYear: 'last',
  },
];
export const GALLER_VALUE ={
  HEADER:'Appinventiv Gallery',
}

export const Gallery_DATA :IGALLERYDATA[]=[
  {IMAGE:'/assets/gallery/award_1674822333816.jpg',HEADING:'Republic Day-2023',NUM:5,BUTTON:'View'},
  {IMAGE:'/assets/gallery/award_1672378171227.jpg',HEADING:'Best Place To Work Award',NUM:5,BUTTON:'View'},
  {IMAGE:'/assets/gallery/award_1672292016846.jpg',HEADING:'Christmas Celebration -2022',NUM:5,BUTTON:'View'},
  {IMAGE:'/assets/gallery/award_166719426194.jpeg',HEADING:'Diwali Party -2022',NUM:5,BUTTON:'View'},

]

export const BASIC_INFORMATION = {
  BUTTON: 'Save',
  HEADER: 'Basic Information',
  TOTAL_WORK_EXP: 'Total Working Experience',
  RELEVANT_EXP: 'Relevant Experience',
  QUALIFICATION_HEADER: 'Add New Qualification',
  LIST_ALL_QUALIFICATION: 'List All Qualification',
  CHANGE_PASSWORD_HEADER: 'Employee Force Change Password',
  APPRAISAL_HEADER: 'Appraisal Detail',
  SHIFT_HEADER: 'List All Shift',
};
export const PROFILE_PICTURE_VALUE = {
  PROFILE_PIC_HEADER: 'Profile Picture',
  BROWSE_VALUE: 'Browse',
  FORMAT: 'Upload files only: gif,png,jpg,jpeg',
  REMOVE_PIC_VALUE: 'Remove Profile Picture',
  BUTTON_VALUE: BASIC_INFORMATION.BUTTON,
};

export const FORM_LABEL = {
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  DATE_OF_BIRTH: 'Date of Birth',
  GENDER: 'Gender',
  MARITAL_STATUS: 'Marital Status',
  CONTACT: 'Contact Number',
  YEAR: 'Years',
  MONTH: 'Months',
  ADDRESS: 'Address',
  SCHOOL: 'School/University',
  EDUCATION: 'Education Level',
  TIME: 'Time Period',
  LANGUAGE: 'Language',
  PROFESSIONAL_COURSE: 'Professional Courses (if any)',
  DESCRIPTION: 'Description',
  OLD_PASSSW0RD: 'Old Password',
  NEW_PASSWORD: 'New Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  APPRAISAL_CYCLE: 'Appraisal Cycle',
  APPRAISAL_MONTH: 'Appraisal Month',
  PLACEHOLDER_TO: 'to',
};

export const GENDER_INPUT_DROPDOWN= [
  'Male','Female' ,
];

export const MARITAL_DROPDOWN = [
  'Single', 'Married', 'Widowed', 'Divorced or Separated',
];
export const EDUCATION_DROPDOWN= [
   'High School Diploma / GED' ,
    'B.Tech' ,
   'M.Tech',
   'BCA',
   'MCA',
   'BBA',
   'MBA',
   'B.Sc.',
   'M.Sc.',
   'BA',
   'MA',
   'Phd',
   'Diloma',
   'B.Sc Animation & Film Making',
];
export const LANGUAGE_DROPDOWN = [
  'English','Hindi',
];

export const SHIFT_VALUE = {
  DATE_OF_JOIN_VALUE: 'Date of Joining',
  OFFICE_SHIFT_VALUE: 'Office Shift',
  DATE_VALUE: 'Feb-07-2022',
  SHIFT_VALUE: 'Morning Shift',
};

export const QUALIFICATION_VALUE = {
  ACTION_VALUE: 'Action',
  SCHOOL_VALUE: FORM_LABEL.SCHOOL,
  TIME_VALUE: FORM_LABEL.TIME,
  EDUCATION_VALUE: FORM_LABEL.EDUCATION,
};

export const TABLE_DATA_UNAVAILABLE = {
  NO_DATA: 'No data available in table',
};

export const DIRECTORY_VALUE = {
  HEADER_VALUE: 'Employee Directory',
  NAME_LABEL: 'Name',
  NAME_PLACEHOLDER: 'Search by name',
  DEPARTMENT_LABEL: 'Department',
  BUTTON_RESET: 'Reset',
  BUTTON_SEARCH: 'Search',
};

export const DIRECTORY_EMPLOYEE_DATA: IDIRECTORY_DATA[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Aahan Verma',
    EMP_DESIGNATION: 'Sr. Software Engineer',
    EMP_TECHNOLOGY: 'Android',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aahan.verma@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '21st',
    BIRTH_MONTH: 'Aug',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Deepak Yadav',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' deepak.yadav@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: ' 08th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Harshit Kumar Jain',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'harshit.jain@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '07th',
    BIRTH_MONTH: 'Apr',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Manisha Rawat',
    EMP_DESIGNATION: ' Quality Analyst',
    EMP_TECHNOLOGY: ' Quality Analyst',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'manisha.rawat@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '16th',
    BIRTH_MONTH: 'Nov',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ankit Mehrotra',
    EMP_DESIGNATION: 'Sr. Software Engineer ',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' ankit.mehrotra@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '09th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Aakash Bisht',
    EMP_DESIGNATION: 'Finance Executive',
    EMP_TECHNOLOGY: 'FINANCE',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aakash.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '06th',
    BIRTH_MONTH: 'Dec',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Aarti Verma',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Node.Js',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' aarti.verma@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '17th',
    BIRTH_MONTH: 'Oct',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Abhishek Kumar Singh',
    EMP_DESIGNATION: 'Team Lead ',
    EMP_TECHNOLOGY: 'IOS',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' abhishek.singh@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '18th',
    BIRTH_MONTH: 'Jul',
  },
];
