interface Course {
  id: number;
  name: string;
  duration: number;
  description: string;
  date: Date;
  order?: number;

  editCourse(newDescription: string): void;
  delete(): void;
}
