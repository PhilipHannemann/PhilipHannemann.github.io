import ProgressBar from "./ProgressBar";

export type Skill = [name: string, score: number];

interface SkillSetProps {
  leftSkills: ReadonlyArray<Skill>;
  rightSkills: ReadonlyArray<Skill>;
}

export default function SkillSet({ leftSkills, rightSkills }: SkillSetProps) {
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
