import { RoutesRecognized } from '@angular/router';
import {
  ABS_LAYOUT_DIRECTORY,
  ABS_LAYOUT_ENTREPRENURSHIP,
  ABS_LAYOUT_HOME,
  ABS_LAYOUT_MYPROFILE,
} from './absolute-routes';
import { LAYOUT, SIDENAV } from './text';

export interface IsideNav {
  title?: string;
  icon?: string;
  isActive?:any;
  options?: Array<any>;
  routerLink?: string;
  rightIcon?:string
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
    rightIcon:'fas fa-certificate'
  },
  {
    title: SIDENAV.Directory_LABEL,
    icon: 'fas fa-book',
    isActive: true,
    routerLink: ABS_LAYOUT_DIRECTORY.path,
    rightIcon:'fas fa-certificate'

  },
  {
    title: SIDENAV.Enterpreneurship_Program_LABEL,
    icon: 'fas fa-money-check',
    options: [{ subTitle: 'Explore', subicon: 'horizontal_rule' }],
    isActive: true,
    routerLink:ABS_LAYOUT_ENTREPRENURSHIP.path,
    rightIcon:'fas fa-certificate'

  },
  {
    title: SIDENAV.My_Links_LABEL,
    icon: 'fa-solid fa-cube',
    options: [
      { subTitle: 'Insurance Verification Details', subicon: 'checklist' },
    ],
    isActive: true,
  },
  {
    title: SIDENAV.Finance_LABEL,
    icon: 'fas fa-money-bill-wave',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Reviews_LABEL,
    icon: 'fa-solid fa-cube',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Refer_Friend_LABEL,
    icon: 'fas fa-users',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Freshers_TrainingLABEL,
    icon: 'fas fa-graduation-cap',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Training_LABEL,
    icon: 'fas fa-graduation-cap',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Assests_LABEL,
    icon: 'fa-solid fa-flask',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Attendance_LABEL,
    icon: 'fa-solid fa-clock',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Leave_LABEL,
    icon: 'fa-regular fa-calendar',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.Tickets_LABEL,
    icon: 'fa-solid fa-ticket',
    options: [],
    isActive: true,
  },
  {
    title: SIDENAV.DSR_LABEL,
    icon: 'fa-solid fa-ticket',
    options: [],
    isActive: true,
  },
  { title: SIDENAV.Projects_LABEL, icon: 'fa-brands fa-buffer', isActive: true },
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
  { title: LAYOUT.HEADER_MENU_LABEL1, icon: 'person_filled'},
  { title: LAYOUT.HEADER_MENU_LABEL2, icon: 'key' },
  { title: LAYOUT.HEADER_MENU_LABEL3, icon: 'iconut' },
];

