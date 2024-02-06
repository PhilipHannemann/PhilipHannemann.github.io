"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.scss";

import { useEffect } from "react";

/**
 * Loads the Bootstrap JavaScript bundle.
 * This component should be placed at the root of the application.
 */
export default function LoadBootstrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <></>;
}
