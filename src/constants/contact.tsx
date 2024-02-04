import { ListElement } from "@/components/DataList";
import Link from "@/components/Link";
import { Github, Linkedin, Phone } from "react-bootstrap-icons";

export const CONTACT_DATA: ListElement[] = [
  [() => "@", "Email:", "philip.hannemann@t-online.de"],
  [
    Linkedin,
    "LinkedIn:",
    <Link key="linkedin" href="www.linkedin.com/in/philiphannemann">
      linkedin.com/in/philiphannemann
    </Link>,
  ],
  [
    Github,
    "Git:",
    <Link key="git" href="https://github.com/PhilipHannemann">
      github.com/PhilipHannemann
    </Link>,
  ],
  [Phone, "Phone:", "+49 176 8505 1499"],
] as const;
