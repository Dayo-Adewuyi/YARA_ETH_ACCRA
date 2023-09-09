import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const DynamicIndex = dynamic(
  () => import("@/components/dashboard/pages/HomePage"),
  {
    loading: () => <p>Loading ...</p>,
  }
);
const index = () => {
  return (
    <DashboardLayout>
      <DynamicIndex />
    </DashboardLayout>
  );
};

export default index;
