import fs from "fs";

export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const data = fs.readFileSync(
    "data/gradebook.json",
    "utf-8",
  );

  const gradebook: Gradebook = JSON.parse(data);

  const grades = Object.values(gradebook)
  .filter((student) => subject in student)
  .map((student) => student[subject]);

  if (grades.length == 0) {
    return 0;
  }

  const total = grades.reduce((sum, grade) => sum + grade, 0);

  return total / grades.length;
}
