import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Course",
          path: `${role}/course`,
          icon: MenuBookIcon,
        },
        // {
        //   title: "Add Course",
        //   path: `${role}/add-course`,
        //   icon: MenuBookIcon,
        // },

        {
          title: "Instructor",
          path: `${role}/instructor`,
          icon: PersonIcon,
        },
        {
          title: "Student",
          path: `${role}/student`,
          icon: GroupsIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    case USER_ROLE.INSTRUCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Course",
          path: `${role}/course`,
          icon: LibraryBooksIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    case USER_ROLE.STUDENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "courses",
          path: `${role}/course`,
          icon: DashboardIcon,
        },
        {
          title: "class",
          path: `${role}/class`,
          icon: LibraryBooksIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: DashboardIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
