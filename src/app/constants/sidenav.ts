import { RoutesRecognized } from '@angular/router';
import {
  ABS_LAYOUT_ASSETS_DECLARATION,
  ABS_LAYOUT_ASSETS_INVENTROY,
  ABS_LAYOUT_ASSETS_REQUESTS,
  ABS_LAYOUT_DIRECTORY,
  ABS_LAYOUT_ENTREPRENURSHIP,
  ABS_LAYOUT_EXPLORE,
  ABS_LAYOUT_HOLIDAY_CALENDER,
  ABS_LAYOUT_HOME,
  ABS_LAYOUT_INTERVIEW_LIST,
  ABS_LAYOUT_JOB_OPENING,
  ABS_LAYOUT_MYPROFILE,
  ABS_LAYOUT_MY_FRESHER_TRAININGS,
  ABS_LAYOUT_MY_PERFORMANCE,
  ABS_LAYOUT_MY_TRAINING,
  ABS_LAYOUT_ONGOING_TRAININGS,
  ABS_LAYOUT_POLICY_DOC,
  ABS_LAYOUT_REFER_LIST,
  ABS_LAYOUT_REQUESTED_TRAININGS,
  ABS_LAYOUT_UPCOMING_TRAININGS,
} from './absolute-routes';
import { LAYOUT, SIDENAV } from './text';

export interface IsideNav {
  title?: string;
  icon?: string;
  isActive?: any;
  options?: Array<any>;
  routerLink?: string;
  rightIcon?: string;
  active?: any;
}

export const sideNavList = [
  {
    title: SIDENAV.Home_LABEL,
    icon: 'fas fa-home',
    isActive: true,
    routerLink: ABS_LAYOUT_HOME.path,
  },
  {
    title: SIDENAV.My_Profile_LABEL,
    icon: 'fas fa-user',
    isActive: true,
    routerLink: ABS_LAYOUT_MYPROFILE.path,
    rightIcon: 'fas fa-certificate',
  },
  {
    title: SIDENAV.Directory_LABEL,
    icon: 'fas fa-book',
    isActive: true,
    routerLink: ABS_LAYOUT_DIRECTORY.path,
    rightIcon: 'fas fa-certificate',
  },
  {
    title: SIDENAV.Enterpreneurship_Program_LABEL,
    icon: 'fas fa-money-check',
    options: [
      {
        subTitle: 'Explore',
        subicon: 'horizontal_rule',
        routerLink: ABS_LAYOUT_ENTREPRENURSHIP.path,
        isActive: true,
      },
    ],
    isActive: true,
    // routerLink: ABS_LAYOUT_ENTREPRENURSHIP.path,
    rightIcon: 'fas fa-certificate',
  },
  {
    title: SIDENAV.My_Links_LABEL,
    icon: 'fa-solid fa-cube',
    options: [
      {
        subTitle: SIDENAV.Insurance_LABEL,
        subicon: 'checklist',
        routerLink: ABS_LAYOUT_HOME.path,
        isActive: true,
      },
      {
        subTitle: SIDENAV.CALENDER_LABEL,
        subicon: 'calendar_today',
        routerLink: ABS_LAYOUT_HOLIDAY_CALENDER.path,
        isActive: true,
      },
      {
        subTitle: SIDENAV.POLICY_LABEL,
        subicon: 'insert_drive_file',
        isActive: true,
        routerLink: ABS_LAYOUT_POLICY_DOC.path,
      },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Finance_LABEL,
    icon: 'fas fa-money-bill-wave',
    options: [
      {
        subTitle: SIDENAV.FINANCE_SUBLABEL,
        subicon: 'horizontal_rule',
        type: 'external',
        link: 'https://hrms.easysourceindia.com/Payroll/',
        isActive: true,
      },
      {
        subTitle: SIDENAV.FINANCE_SUBLABEL_FORM,
        subicon: 'horizontal_rule',
        type: 'external',
        link: 'https://hrms.easysourceindia.com/Payroll/',
        isActive: true,
      },
      {
        subTitle: SIDENAV.FINANCE_SUBLABEL_INVESTMENT,
        subicon: 'horizontal_rule',
        type: 'external',
        link: 'https://hrms.easysourceindia.com/Payroll/',
        isActive: true,
      },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Reviews_LABEL,
    icon: 'fa-solid fa-cube',
    options: [
      {
        subTitle: SIDENAV.REVIEWS_SUBLABEL,
        subicon: 'calendar_today',
        routerLink: ABS_LAYOUT_MY_PERFORMANCE.fullUrl,
        isActive: true,
      },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Refer_Friend_LABEL,
    icon: 'fas fa-users',
    options: [
      {
        subTitle: SIDENAV.JOB_OPENING_LABEL,
        subicon: '',
        routerLink: ABS_LAYOUT_JOB_OPENING.path,
        isActive: true,
      },
      {
        subTitle: SIDENAV.REFFER_LIST_LABEL,
        subicon: '',
        routerLink: ABS_LAYOUT_REFER_LIST.path,
        isActive: true,
      },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.RECRUITMENT_LABEL,
    icon: 'fas fa-newspaper',
    options: [
      {
        subTitle:SIDENAV.RECRUITMENT_SUBLABEL,
        subicon:'',
        routerLink:ABS_LAYOUT_INTERVIEW_LIST.path,
        isActive:true,
      }
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Freshers_TrainingLABEL,
    icon: 'fas fa-graduation-cap',
    options: [
      {
        subTitle:SIDENAV.freshers_training_sublabel,
        subicon:'',
        routerLink:ABS_LAYOUT_MY_FRESHER_TRAININGS.path,
        isActive:true,
      }
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Training_LABEL,
    icon: 'fas fa-graduation-cap',
    options: [
      {
        subTitle:SIDENAV.training_sublabel,
        subicon:'',
        routerLink:ABS_LAYOUT_UPCOMING_TRAININGS.path,
        isActive:true,
      },
      {
        subTitle:SIDENAV.ongoing_training_sublabel,
        subicon:'',
        routerLink:ABS_LAYOUT_ONGOING_TRAININGS.path,
        isActive:true,
      },
      {
        subTitle:SIDENAV.my_training_sublabel,
        subicon:'',
        routerLink:ABS_LAYOUT_MY_TRAINING.fullUrl,
        isActive:true,
      },
      {
        subTitle:SIDENAV.requested_training_sublabel,
        subicon:'',
        routerLink:ABS_LAYOUT_REQUESTED_TRAININGS.path,
        isActive:true,
      },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Assests_LABEL,
    icon: 'fa-solid fa-flask',
    options: [
      {
        subTitle:SIDENAV.assets_inventory_sublabel,
        subicon:'laptop_chromebook',
        routerLink:ABS_LAYOUT_ASSETS_INVENTROY.path,
        isActive:true
      },
      {
        subTitle:SIDENAV.request_asset_sublabel,
        subicon:'send',
        routerLink:ABS_LAYOUT_ASSETS_REQUESTS.path,
        isActive:true

      },
      {
        subTitle:SIDENAV.asset_declaration_sublabel,
        subicon:'error',
        routerLink:ABS_LAYOUT_ASSETS_DECLARATION.path,
        isActive:true

      },
    ],
    isActive: true,
  },
  // {
  //   title: SIDENAV.Attendance_LABEL,
  //   icon: 'fa-solid fa-clock',
  //   options: [],
  //   isActive: true,
  // },
  // {
  //   title: SIDENAV.Leave_LABEL,
  //   icon: 'fa-regular fa-calendar',
  //   options: [],
  //   isActive: true,
  // },
  // {
  //   title: SIDENAV.Tickets_LABEL,
  //   icon: 'fa-solid fa-ticket',
  //   options: [],
  //   isActive: true,
  // },
  // {
  //   title: SIDENAV.DSR_LABEL,
  //   icon: 'fa-solid fa-ticket',
  //   options: [],
  //   isActive: true,
  // },
  // {
  //   title: SIDENAV.Projects_LABEL,
  //   icon: 'fa-brands fa-buffer',
  //   isActive: true,
  // },
  {
    title: SIDENAV.Expense_LABEL,
    icon: 'fas fa-hand-holding-usd',
    isActive: false,
  },
  {
    title: SIDENAV.Announcements_LABEL,
    icon: 'fas fa-bullhorn',
    isActive: false,
  },
  { title: SIDENAV.Travels_LABEL, icon: 'fas fa-plane', isActive: false },
  {
    title: SIDENAV.Logout_LABEL,
    icon: 'fa-solid fa-right-from-bracket',
    isActive: true,
  },
];

export const profileMenuData = [
  { title: LAYOUT.HEADER_MENU_LABEL1, icon: 'person_filled' },
  { title: LAYOUT.HEADER_MENU_LABEL2, icon: 'key' },
  { title: LAYOUT.HEADER_MENU_LABEL3, icon: 'iconut' },
];
