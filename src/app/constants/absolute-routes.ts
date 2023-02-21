/**
 * @ABS === ABSOLUTE
 */
import { IRoute } from '../models/routes-interface';
import * as routes from './routes';

// export const ABS_ACCOUNT_LOGIN = `/${routes.ACCOUNT}/${routes.LOGIN}`;
// export const ABS_ACCOUNT_FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.FORGOT_PASSWORD}`;
// export const ABS_LAYOUT = `/${routes.LAYOUT}`

export const ACCOUNT: IRoute = {
  path: routes.ACCOUNT,
  get fullUrl(): string {
    return `${this.path}`;
  },
};
export const ABS_ACCOUNT_LOGIN: IRoute = {
  path: routes.LOGIN,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_ACCOUNT_FORGOT_PASSWORD: IRoute = {
  path: routes.FORGOT_PASSWORD,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT: IRoute = {
  path: routes.LAYOUT,
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const ABS_LAYOUT_HOME: IRoute = {
  path: routes.HOME,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MYPROFILE: IRoute = {
  path: routes.MY_PROFILE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_DIRECTORY: IRoute = {
  path: routes.DIRECTORY,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_ENTREPRENURSHIP: IRoute = {
  path: routes.ENTREPRENURSHIP,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_BASIC_INFO: IRoute = {
  path: routes.BASIC,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_CHANGE_PASSWORD: IRoute = {
  path: routes.CHANGE_PASSWORD,
  get fullUrl(): string {
    return `/${ABS_LAYOUT_MYPROFILE.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_EXPLORE: IRoute = {
  path: routes.EXPLORE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_HOLIDAY_CALENDER: IRoute = {
  path: routes.HOLIDAY_CALENDER,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
// export const ABS_LAYOUT_REVIEW: IRoute = {
//   path: routes.REVIEW,
//   get fullUrl(): string {
//     return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
//   },
// };
export const ABS_LAYOUT_MY_PERFORMANCE: IRoute = {
  path: routes.PERFORMANCE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_JOB_OPENING: IRoute = {
  path: routes.JOB_OPENING,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_JOB_DETAIL: IRoute = {
  path: routes.JOB_DETAILS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_REFER_LIST: IRoute = {
  path: routes.JOB_LIST,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_POLICY_DOC: IRoute = {
  path: routes.POLICY_DOC,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
