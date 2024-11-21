export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  priority: 'baixa' | 'média' | 'alta';
  completed: boolean;
}
