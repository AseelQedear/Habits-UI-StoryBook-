import { Task } from './Task';

export default {
  title: 'Task',
  component: Task,
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

export const Default = () => (
  <Task
    task={{ id: '1', title: 'Test Task', state: 'TASK_INBOX' }}
    onPinTask={() => {}}
    onArchiveTask={() => {}}
  />
);

export const Pinned = () => (
  <Task
    task={{ id: '2', title: 'Pinned Task', state: 'TASK_PINNED' }}
    onPinTask={() => {}}
    onArchiveTask={() => {}}
  />
);

export const Archived = () => (
  <Task
    task={{ id: '3', title: 'Archived Task', state: 'TASK_ARCHIVED' }}
    onPinTask={() => {}}
    onArchiveTask={() => {}}
  />
);
