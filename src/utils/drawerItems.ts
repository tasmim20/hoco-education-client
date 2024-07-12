import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import PaymentIcon from "@mui/icons-material/Payment";
import BookIcon from "@mui/icons-material/Book";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

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
          title: "Overview",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "courses",
          path: `${role}/course`,
          icon: BookIcon,
        },
        {
          title: "class",
          path: `${role}/class`,
          icon: LibraryBooksIcon,
        },
        {
          title: "Leaderboard",
          path: `${role}/leaderboard`,
          icon: LeaderboardIcon,
        },
        {
          title: "Add Review",
          path: `${role}/add-review`,
          icon: AddIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: PaymentIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
