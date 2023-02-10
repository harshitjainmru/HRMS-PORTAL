export interface TableColumn {
  heading: string;
  key: string;
  sort?: boolean;
  type: string;
  link?:string
  align?: 'right' | 'left' | 'center';
}
export interface SHIFTTABLE {
DATE?:string;
shift?:string
}
export interface QUALIFICATIONTABLE {
EDUCATION?:string;
ACTION?:string;
SCHOOL?:string;
TIME?:string
}
