import { ListElement } from "@/components/DataList";
import Link from "@/components/Link";
import { Skill } from "@/components/SkillSet";
import { CodeSlash, House, PatchCheck } from "react-bootstrap-icons";

/** The data to be displayed in the about me section. */
export const ABOUT_DATA: ListElement[] = [
  [
    CodeSlash,
    "Website:",
    <Link key="web" href="https://philiphannemann.github.io">
      philiphannemann.github.io
    </Link>,
  ],
  [House, "City:", "Würzburg, Germany"],
  [() => "@", "Email:", "philip.hannemann@t-online.de"],
  [PatchCheck, "Degree:", "Master"],
] as const;

interface SkillSet {
  /** An array of skills to be displayed on the left side. */
  left: ReadonlyArray<Skill>;
  /** An array of skills to be displayed on the right side. */
  right: ReadonlyArray<Skill>;
  /** The name of the skill group. */
  name: string;
}

/** The skills to be displayed on the about page with progress bars. */
export const SKILLS = [
  {
    name: "Main Programming Languages",
    left: [
      ["JavaScript", 100],
      ["TypeScript", 100],
      ["php", 90],
      ["Python", 100],
    ],
    right: [
      ["Swift", 100],
      ["Kotlin", 95],
      ["Java", 95],
      ["C++", 95],
    ],
  },
  {
    name: "Frameworks",
    left: [
      ["React", 100],
      ["Next.js", 100],
      ["Pandas", 95],
      ["Flask", 100],
    ],
    right: [
      ["SwiftUI", 95],
      ["Spring Boot", 95],
      ["ROS", 80],
      ["Boost", 90],
    ],
  },
  {
    name: "Tools",
    left: [
      ["CI / CD (GitLab CI & GitHub Actions)", 95],
      ["Git", 100],
    ],
    right: [
      ["Docker", 100],
      ["Kafka", 100],
    ],
  },
] as const satisfies ReadonlyArray<SkillSet>;
