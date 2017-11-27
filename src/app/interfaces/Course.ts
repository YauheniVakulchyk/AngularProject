interface Course {
  id: number;
  name: string;
  duration: string;
  description: string;
  date: string;
  order?: number;

  editCourse(newDescription: string): void;
  delete(): void;
}
