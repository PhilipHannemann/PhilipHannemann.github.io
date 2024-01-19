"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/bootstrap.scss'

import { useEffect } from "react";

export default function LoadBootstrap() {
  
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
  
    return <></>
  }