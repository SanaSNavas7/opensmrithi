import React from "react";
import { Outlet } from "react-router-dom";
import InstitutionDashboardLayout from "./InstitutionDashboardLayout";

const InstitutionDashboard = () => {
  return (
    <InstitutionDashboardLayout>
      <Outlet />
    </InstitutionDashboardLayout>
  );
};

export default InstitutionDashboard;
