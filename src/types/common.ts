import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

// types.ts

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type Course = {
  _id: string;
  courseName: string;
  courseCode: string;
  courseDetails: string;
  startDate: string;
  courseDuration: string;
  coursePrice: string;
  professorName: string;
  maximumStudents: string;
  contactNumber: string;
  coursePhoto: string;
};

export type Book = {
  _id: string;
  title: string;
  details: string;
  image: string;
  writer: string;
  price: string;
};
