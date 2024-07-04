import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default Dashboardlayout;
