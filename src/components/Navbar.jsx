import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "./utils/constant";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
       // justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" height={45}></img>
      <SearchBar />
    </Link>
  </Stack>
);

export default Navbar;
