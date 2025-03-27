import React from "react";
import Button from "./button";
import { Icon } from "@mui/material";

const sidenav = () => {
  return (
    <div className="sidenav">
      <Button className="Image" name="Image" />
      <Button className="overview" name="Overview" />
      <Button className="budget" name="Budget" />
      <Button className="Exp" name="Expenses" />
      <Button className="invest" name="Investments" />
      <Button className="report" name="Report" />
      <Button className="setting" name="Settings" />
      <Button className="logout" name="Logout" />
    </div>
  );
};

export default sidenav;
