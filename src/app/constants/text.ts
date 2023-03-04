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
  Insurance_LABEL: 'Insurance Verification Details',
  CALENDER_LABEL: 'Holiday Calendar 2023 ',
  POLICY_LABEL: 'Policy Documents',
  JOB_OPENING_LABEL: 'Job Openings',
  RECRUITMENT_LABEL: 'Recruitment',
  REFFER_LIST_LABEL: 'Referral List',
  FINANCE_SUBLABEL: 'Salary Slip',
  FINANCE_SUBLABEL_FORM: 'Form 16',
  FINANCE_SUBLABEL_INVESTMENT: 'Investment Declaration',
  REVIEWS_SUBLABEL: 'My Performance',
  RECRUITMENT_SUBLABEL: 'My Interview',
  freshers_training_sublabel: 'My Trainings',
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
    id: 1,
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    DEPARTMENT_VALUE: ' Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    JOB_CODE: '#AP0052',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 2,
    image: '/assets/react-native.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead -  REACT JS',
    DEPARTMENT_VALUE: ' REACT JS',
    TEXT: 'We are looking for JavaScript developers  proficient with React.js -  ( Preferred Early Joiners)',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '2',
    JOB_CODE: '#AP0014',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 3,
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    DEPARTMENT_VALUE: ' Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    JOB_CODE: '#AP0052',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 4,
    image: '/assets/nodejs.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead - Node.js',
    DEPARTMENT_VALUE: ' Node.js',
    JOB_CODE: '#AP0037',
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

export const APPRECIATION_DATA: IAPPRECIATIONDATA[] = [
  {
    HEADER_VALUE: 'Appreciation for UStandBy',
    TEXT: 'Hello All,',
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: 'Kudos to the team!',
    BUTTON: 'View More',
    TEAM_MEMBER:
      '@Shubham K @Aditya S @Arjun singh A @Abhishek S @Faisal K @Pankaj C @Sandeep G @Sakshi Bhatia, Rajat Maheshwari, Sanjay Parida and Pankaj Thapliyal',
    HEAD_NAME: 'Surya (Ustandby)',
    HEAD_GREET:
      'Your hard work and diligence is really admirable, keep growing and achieving!',
    APPRECIATION_NAME: 'Ustandby Team',
    IMAGES: '/assets/images/default_male.jpg',
  },
  {
    HEADER_VALUE: 'Appreciation| ABP NEWS',
    DEAR_VALUE: 'Dear',
    TEXT: ' Aashima Anand,',
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      'Thank you for all the hard work and commitment. Keep up the excellent work.',
    BUTTON: 'View More',
    HEAD_NAME: 'Dileep Gupta',
    APPRECIATION_NAME: 'Aashima Anand',
    IMAGES: '/assets/images/ASHIMA.jpeg',
  },
  {
    HEADER_VALUE: 'Appreciation for UStandBy',
    TEXT: 'Hello All,',
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: 'Kudos to the team!',
    BUTTON: 'View More',
    TEAM_MEMBER:
      '@Shubham K @Aditya S @Arjun singh A @Abhishek S @Faisal K @Pankaj C @Sandeep G @Sakshi Bhatia, Rajat Maheshwari, Sanjay Parida and Pankaj Thapliyal',
    HEAD_NAME: 'Surya (Ustandby)',
    HEAD_GREET:
      'Your hard work and diligence is really admirable, keep growing and achieving!',
    APPRECIATION_NAME: 'Ustandby Team',
    IMAGES: '/assets/images/default_male.jpg',
  },
  {
    HEADER_VALUE: 'Appreciation| ABP NEWS',
    DEAR_VALUE: 'Dear',
    TEXT: ' Aashima Anand,',
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      'Thank you for all the hard work and commitment. Keep up the excellent work.',
    BUTTON: 'View More',
    HEAD_NAME: 'Dileep Gupta',
    APPRECIATION_NAME: 'Aashima Anand',
    IMAGES: '/assets/images/ASHIMA.jpeg',
  },
];
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
export const GALLER_VALUE = {
  HEADER: 'Appinventiv Gallery',
};

export const Gallery_DATA: IGALLERYDATA[] = [
  {
    IMAGE: '/assets/gallery/award_1674822333816.jpg',
    HEADING: 'Republic Day-2023',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/republic-day/award_1674822333816.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822348103.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822356821.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822361280.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822366389.jpg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_1672378171227.jpg',
    HEADING: 'Best Place To Work Award',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/best-place/award_1672378171227.jpg' },
      { IMAGES: '/assets/best-place/award_1672378174176.jpeg' },
      { IMAGES: '/assets/best-place/award_1672378175316.jpg' },
      { IMAGES: '/assets/best-place/award_1672378183848.jpeg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_1672292016846.jpg',
    HEADING: 'Christmas Celebration -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/christmas/award_167229202066.jpg' },
      { IMAGES: '/assets/christmas/award_1672292028335.jpg' },
      { IMAGES: '/assets/christmas/award_1672292037579.jpg' },
      { IMAGES: '/assets/christmas/award_1672292037704.jpg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_166719426194.jpeg',
    HEADING: 'Diwali Party -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/diwali/award_1667194276825.jpeg' },
      { IMAGES: '/assets/diwali/award_1667194285355.jpeg' },
      { IMAGES: '/assets/diwali/award_1672292329158.jpg' },
      { IMAGES: '/assets/diwali/award_1672292333107.jpg' },
    ],
  },
];

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

export const GENDER_INPUT_DROPDOWN = ['Male', 'Female'];

export const MARITAL_DROPDOWN = [
  'Single',
  'Married',
  'Widowed',
  'Divorced or Separated',
];
export const EDUCATION_DROPDOWN = [
  'High School Diploma / GED',
  'B.Tech',
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
export const LANGUAGE_DROPDOWN = ['English', 'Hindi'];

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
export const DIRECTORY_DROPDOWN_VALUE = [
  'All',
  '.NET',
  'Android',
  'Angular',
  'IOS',
  'HTML',
  'Marketing',
  'Quality Analyst',
  'Node.Js',
  'FINANCE',
];

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
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Harshit Bisht',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'harshit.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '10th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Manisha Rawat',
    EMP_DESIGNATION: ' Quality Analyst',
    EMP_TECHNOLOGY: 'Quality Analyst',
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
    EMP_NAME: 'Harshit Bisht',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'FINANCE',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aakash.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '06th',
    BIRTH_MONTH: 'Dec',
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

export const ENTREPRENEURSHIP_VALUE = {
  HEADER_VALUE: 'Objective :',
  IDEA_MESSAGE:
    'Share your innovative startup ideas with us, get funding from us and grow on your own. We want to give the young and brilliant ideas some shape and nurture them to the fullest to become potential competitors in the market. Validate your idea, learn and grow from here.',
  ANGEL_INVESTOR_HEADLINE: 'Story about our Angel Investor (AI)',
  NAME: 'Saurabh Singh',
  BUTTON_VALUE: 'Share Your Idea',
  FOUNDED_MESSAGE: `Founded passion driven niche startups where he served many Top Fortune companies & leading brands in making their Mobile Strategy successful as a CEO & Founder of 250+ people company AppStudioz "India's leading mobile app development company" ​(★Acquired in 2014). He also Co-founded TechAhead in 2009 & was founding partner at C&B Electronics.`,
};

export const LIST_DATA1 = [
  'Followed by @NarendraModi Prime Minister of India | @BarackObama Ex-President US | @PiyushGoyal Railway Minister India on Twitter',
  `Listed on INDIA's Top 25 Most Inspiring Startup Stories of 2013 by YourStory`,
  'The Companies he has led have created over 4,000 jobs during his leadership tenure.',
  `In Past, He has built successful companies from startup (Bootstrapped) to multi-million dollar in revenue.`,
];
export const LIST_DATA2 = [
  '16+ years of professional experience of which 11+ years are as Founding Partner of lean startups across diverse domains with an entrepreneurial drive. Always looking to innovate by bringing smart people together.',
  'Passionate for building and scaling businesses',
  'Strong experience in working in ambiguity to solve complex problems. Skilled at designing and executing successful innovative strategies.',
  `Extensive experience in developing many successful products for the entire spectrum of users, from conceptualising the business ideas to preparing product feature road map, from consumer facing front-end to business facing back-end, designing & wire framing with unmatched track record of Success & Performance.`,
];

export const EXPOLRE_VALUE = {
  HEADER: 'Add Pitch',
  CANCEL_BUTTON: 'Cancel',
  SUBMIT_BUTTON: 'Submit',
  MY_DETAIL: 'My Details',
  PITCH_DETAIL: 'Pitch Details',
  NAME_LABEL: 'Name',
  ID_LABEL: 'Employee Id',
  DOB_LABEL: 'Date of birth',
  PITCH_LABEL: 'Pitch Title',
  INDUSTRY_LABEL: 'Industry',
  TYPE_LABEL: 'Type',
  IDEA_LABEL: 'Idea - (Share your idea in brief)',
  PRESENTATION_LABEL:
    'Presentation - (Share your detailed presentation on the idea) (ppt,pdf)',
};
export const MY_PITCH = {
  header_value: 'My Ideas',
};

export const INDUSTRY_DATA = [
  'Select Industry',
  'Industry Domain',
  'Advertising',
  'Agriculture',
  'Analytics',
  'Education',
  'Engineering',
  'Food',
  'Healthcare',
  'Hospitality',
];

export const TYPE_DATA = ['Technical', 'Non-Technical'];
export const REFER_A_CANDIDATE_DIALOG = {
  HEADER_VALUE: 'Refer a Candidate',
  JOB_DETAIL_VALUE: 'Job Details',
  LABEL_DEPARTMENT: 'Department Name',
  LABEL_JOBCODE: 'Job Code',
  LABEL_LOCATION: 'Location',
  LABEL_EXPERIENCE: 'Experience',
  CANDIDATE_VALUE: 'Candidate Details',
  LABEL_JOBLOC: 'Job Location',
  LABEL_CANDIDATE_NAME: 'Candidate Name',
  PLACEHOLDER_CANDIDATE_NAME: 'Candidate Name',
  LABEL_POSITION: 'Position Title',
  PLACEHOLDER_EXPERIENCE: 'Enter Years of experience',
  LABEL_EMAIL: 'Email ID',
  PLACEHOLDER_EMAIL: 'Enter Email ID',
  LABEL_PHONE: 'Phone Number',
  PLACEHOLDER_PHONE: 'Enter Phone Number',
  LABEL_UPLOAD: 'Upload CV (pdf,doc)',
  LABEL_SKILL: 'Skill Set',
  PLACEHOLDER_SKILL: 'Enter Skills',
  BUTTON_CANCEL: 'Cancel',
  BUTTON_SUBMIT: 'Submit',
};

export const REFER_LIST_VALUE = {
  HEADER_VALUE: 'No referrals yet! Checkout current job openings and refer.',
  BUTTON_VALUE: 'Job Openings',
};
export const HELP_DIALOG_VALUE = {
  HEADING_VALUE: 'Please Mail Us',
  QUERY_VALUE: 'For any query regarding HRMS, Please mail us to',
  EMAIL_VALUE: 'hrms-helpdesk@appinventiv.com',
  BUTTON_VALUE: 'OK',
};

export const CONFIRMATION_LOGOUT_VALUE = {
  QUESTION_VALUE: 'Are you sure want to logout ?',
  BUTTON1: 'No',
  BUTTON2: 'Yes',
};
export const MYPERFORMACE_VALUE = {
  BREADCRUMB_VALUE1: 'Home',
  BREADCRUMB_VALUE2: 'Reviews',
  BREADCRUMB_VALUE3: 'Performance',
  AWARDS_VALUE: 'AWARDS',
  HONOURS_VALUE: 'HONOURS',
  NULL_VALUE: 'N/A',
  TILL_NOW_VALUE: 'Till Now',
  JANUARY_LABEL: 'Jan',
  EMPLOYEE_NAME: 'Harshit Kumar Jain',
  EMPLOYEE_DESIGNATION: 'Software Engineer (Angular)',
  TECHNICAL_LABEL: 'Technical Skills',
  OWNERSHIP_LABEL: 'Ownership of Delivery',
  TEAMWORK_LABEL: 'Teamwork',
  PROCESS_LABEL: 'Process Adherence',
  YEAR_SHORTFORM: 'YRS',
  button: 'Monthly Rating',
  calendar: 'Monthly Performance Calendar',
  select_year: 'Select Year  : ',
  reviewData: [
    {
      year: 2022,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        {
          month: 'July',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 4,
          ownership_rating: 5,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'August', isRating: false },
        {
          month: 'September',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 5,
          ownership_rating: 4,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
    {
      year: 2023,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        { month: 'July', isRating: false },
        { month: 'August', isRating: false },
        { month: 'September', isRating: false },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
  ],
  project_name: 'PROJECT NAME: ',
  project_tech: 'Training Project React JS',
  reviewed_by: 'REVIEWED BY: ',
  pm_name: 'Rabban Ahmad (Project Manager)',
};

export const JOB_DETAILS = {
  breadcrumb_value1: 'Home',
  breadcrumb_value2: 'Job Openings',
  breadcrumb_value3: 'Details',
  job_deatils_value: 'Job Details',
  job_tilte: 'Job Title',
  job_type: 'Job Type',
  department: 'department',
  location: 'Location',
  noofopenings: 'No. of Openings ',
  expRequired: 'Exp. Required',
  technicalskills: 'Technical Skills',
  jobIntroduction: 'Job Introduction',
  jobDescription: 'Job Description',
  requirements: 'Requirements ',
  shouldhave: 'Should have',
  jobQualification: 'Job Qualification',
  educationExp: 'Education and Experience',
  menu: ['Edit Job Details', 'View Applicants'],
};

export const JOB_DETAILS_DATA = [
  {
    id: 4,
    title_name: 'Tech Lead',
    type_name: 'Permanent',
    department_name: 'Node.js',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['NodeJS', 'Javascript', 'Mongodb'],
    job_intro_value: 'Urgent Requirement For Backend Architect - Node.js.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 2,
    title_name: 'Tech Lead',
    type_name: 'Permanent',
    department_name: 'React.js',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['ReactJS', 'Javascript'],
    job_intro_value:
      'We are looking for JavaScript developers proficient with React.js - ( Preferred Early Joiners)',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 1,
    title_name: 'Graphic Designer',
    type_name: 'Permanent',
    department_name: 'Marketing',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['Graphic Designing'],
    job_intro_value:
      'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 3,
    title_name: 'Graphic Designer',
    type_name: 'Permanent',
    department_name: 'Marketing',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['Graphic Designing'],
    job_intro_value:
      'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
];

export const CONDITION_REWARD_DIALOG_VALUE = {
  headerValue: 'Additional condition for rewards',
  points: [
    'Bonus will be paid out once the referred candidate completes 3 months with the organization.',
    'There is no cap on the number of referrals an employee can make. Every single hiring will make you eligible and all bonus will be paid accordingly.',
    'If two or more employees refer the same candidate, only the first referrer will receive their bonus rewards.',
    'Referral policy is applicable only on 1+ year of experience candidate.',
    'Only permanent employees of Appinventiv will be eligible for referral amounts.',
  ],
};

export const INTERVIEW_LIST = {
  header_value: 'List All Candidates',
  department_label: 'Department',
  status_label: 'Status',
  status: ['Selected Status', 'Selected', 'Rejected', 'Missed', 'In Progress'],
  departemnt: [
    'Select Department',
    '.NET',
    'Android',
    'Angular',
    'IOS',
    'HTML',
    'Marketing',
    'Quality Analyst',
    'Node.Js',
    'FINANCE',
  ],
};

export const FRESHER_TRAINING_DATA = {
  headerValue: 'Trainings',
  label1: 'Start Date',
  label2: 'End Date',
  label3: 'Mode',
  buttonView: 'View Details',
  buttonFeedback: 'Feedback',
  cardData: [
    {
      title: 'Angular Training Feb- 2022',
      completeHeading: 'Completed',
      label1Data: 'Feb-28-2022',
      label2Data: 'Apr-02-2022',
      label3Data: 'Online',
      departmentData:'Angular'
    },
    {
      title: 'HTML/CSS/UI',
      completeHeading: 'Completed',
      label1Data: 'Feb-14-2022',
      label2Data: 'Feb-25-2022',
      label3Data: 'Offline',
      departmentData:'Angular'

    },
    // {
    //   title:'NodeJS',
    //   completeHeading:'Completed',
    //   label1Data:'Feb-14-2022',
    //   label2Data:'Feb-25-2022',
    //   label3Data:'Offline'
    // },
    // {
    //   title:'HTML/CSS/UI',
    //   completeHeading:'Completed',
    //   label1Data:'Feb-14-2022',
    //   label2Data:'Feb-25-2022',
    //   label3Data:'Offline'
    // },
    // {
    //   title:'NodeJS',
    //   completeHeading:'Completed',
    //   label1Data:'Feb-14-2022',
    //   label2Data:'Feb-25-2022',
    //   label3Data:'Offline'
    // },
    // {
    //   title:'HTML/CSS/UI',
    //   completeHeading:'Completed',
    //   label1Data:'Feb-14-2022',
    //   label2Data:'Feb-25-2022',
    //   label3Data:'Offline'
    // },
    // {
    //   title:'NodeJS',
    //   completeHeading:'Completed',
    //   label1Data:'Feb-14-2022',
    //   label2Data:'Feb-25-2022',
    //   label3Data:'Offline'
    // }
  ],
};
export const FEEDBACK_fORM_DATA = {
  headerValue: 'Training feedback form',
  titleLabel: 'Title :',
  departmentLabel: 'Department :',
  startDate: 'Start date :',
  endDate: 'End date :',
  question1:
    'Do you feel that the objective/goal of the training has been fulfilled? *',
  yesLabel:'Yes',
  noLabel:'No',
  missingQuestion:'What is missing? *',
  question2: 'How relevant and helpful do you think it was for your job? *',
  question3: 'How would you rate the overall training? *',
  question4: 'How satisfied were you with the session content? *',
  readMaterial: '(Both presented and pre-read material)',
  question5: 'Any overall feedback for the training? *',
  notvery:'Not very',
  veryMuch:'Very much',
  notGood:'Not Good',
  excellent:'Excellent',
  poor:'Poor',
  placeholderOverallFeedback:'Type your answer here',
  cancel_button: 'Cancel',
  submit_button: 'Submit',
};
export const COVID19_DATA = {
  title: 'Need Help!',
  lockdown_issue:
    'Let us know if you are facing any issue because of the lockdown, We will be giving our best to take care of your problems, Please fill the form below and provide the required details, Concerned person will get in touch with you on the earliest.',
  label1: 'Title',
  label2: 'Mobile No.',
  label3: 'Address',
  label4: 'Description',
  cancel_button: 'Cancel',
  submit_button: 'Submit',
  covid_precaution_advice: [
    {
      title: 'Wear a mask',
      description: `Face masks, gloves and other protective gear can help stop the spread of coronavirus.
  Wearing a mask doesn’t imply that you disregard social distancing. In addition to social distancing, keep proper hygiene, especially, when you touch your mask.`,
    },
    {
      title: 'Wash ‘Em, Wash ‘Em Good ',
      description: `Good hand washing is the first line of defense to stay safe from Covid-19. Respiratory viruses like Coronavirus spreads when the virus gets into your body through your eyes, throat, or nose. Most often, it happens through your hands.`,
    },
    {
      title: 'Telemedicine consultation ',
      description: `Consult doctors or certified medical practitioners remotely and reduce the risk of transmission. Telemedicine consultation is the best alternative for steady and quick medical services.`,
    },
    {
      title: 'Fight the virus ',
      description: `Take simple and constructive steps to help fight the spread of Coronavirus like stay at home, wash hands often, wear masks, maintain social distancing and practice respiratory hygiene.`,
    },
  ],
};
