import React from "react";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PeopleIcon from "@mui/icons-material/People";
import LoopIcon from "@mui/icons-material/Loop";
import LogoutIcon from "@mui/icons-material/Logout";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import GradingIcon from "@mui/icons-material/Grading";
import logo from "../images/logo.png";

export const WebsiteDetails = {
  icon: logo,
  title: "EtherVote",
};

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    link: "/admin/dashboard",
    id: "",
  },
  {
    title: "User",
    icon: <PeopleIcon />,
    link: "/admin/user",
    id: "",
  },
  {
    title: "Candidate",
    icon: <AiOutlineUser />,
    link: "/admin/candidate",
    id: "",
  },
  {
    title: "Election",
    icon: <HowToVoteIcon />,
    link: "/admin/election",
    id: "",
  },
  {
    title: "Phase",
    icon: <LoopIcon />,
    link: "/admin/phase",
    id: "",
  },
  {
    title: "Result",
    icon: <GradingIcon />,
    link: "/admin/result",
    id: "",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/admin/logout",
    id: "",
  },
];

export const hidingSysmbole = {
  icon: <BsFillArrowLeftCircleFill />,
};
