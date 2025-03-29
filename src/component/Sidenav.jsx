import React from "react";
import Button from "./button";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Logo from "../images/Logo.png";

const sidenav = () => {
  return (
    <div className="sidenav">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <Button
        className="overview"
        name="Overview"
        icon={<DashboardOutlinedIcon />}
      />

      <Button
        className="budget"
        name="Budget"
        icon={<AccountBalanceWalletOutlinedIcon />}
      />

      <Button className="Exp" name="Expenses" icon={<PaymentsOutlinedIcon />} />

      <Button
        className="invest"
        name="Investments"
        icon={<InsightsOutlinedIcon />}
      />

      <Button
        className="report"
        name="Report"
        icon={<AssessmentOutlinedIcon />}
      />

      <Button
        className="setting"
        name="Settings"
        icon={<SettingsOutlinedIcon />}
      />

      <Button className="logout" name="Logout" icon={<LogoutOutlinedIcon />} />
    </div>
  );
};

export default sidenav;
