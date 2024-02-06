import ProgressBar from "./ProgressBar";

/** Represents a skill with its name and score. */
export type Skill = [name: string, score: number];

interface SkillSetProps {
  /** An array of skills to be displayed on the left side. */
  leftSkills: ReadonlyArray<Skill>;

  /** An array of skills to be displayed on the right side. */
  rightSkills: ReadonlyArray<Skill>;
}

/**
 * A component that displays a set of skills with their scores using progress bars
 * in a 2 column layout on large screens.
 */
export default function SkillSet({ leftSkills, rightSkills }: SkillSetProps) {
  /**
   * Converts an array of skills into an array of progress bars.
   * @param skills - The array of skills to convert.
   * @returns Array of progress bars.
   */
  function skillsToView(skills: ReadonlyArray<Skill>) {
    return skills.map(([skill, score]) => (
      <ProgressBar key={skill} title={skill} percentage={score} />
    ));
  }

  const leftSkillsView = skillsToView(leftSkills);
  const rightSkillsView = skillsToView(rightSkills);

  return (
    <div className="row w-100">
      <div className="col-lg-6">{leftSkillsView}</div>

      <div className="col-lg-6">{rightSkillsView}</div>
    </div>
  );
}
