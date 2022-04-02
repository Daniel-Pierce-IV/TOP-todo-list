import Task from './Task';
import Priority from './Priority';

describe('Tasks', () => {
    test('have a title', () => {
        const task = new Task('Some Title');
        expect(task.title).toBe('Some Title');
    });

    test('can have a description', () => {
        const task = new Task('Some Title', { description: 'A neat description' });
        expect(task.description).toBe('A neat description');
    });

    test('can have a deadline', () => {
        const task = new Task('Some Title', { deadline: '2022-04-01' });
        expect(task.deadline).toBe('2022-04-01');
    });

    test('can have a note', () => {
        const task = new Task('Some Title', { note: 'A note about something' });
        expect(task.note).toBe('A note about something');
    });

    test('can have a priority', () => {
        const task = new Task('Some Title', { priority: Priority.HIGH });
        expect(task.priority).toBe(Priority.HIGH);
    });

    test('can have subtasks', () => {
        const task = new Task('Some Title', { subtasks: [
            new Task('Subtask #1'),
            new Task('Subtask #2')
        ] });

        expect(task.subtasks.length).toBe(2);
        expect(task.subtasks[0].title).toBe('Subtask #1');
        expect(task.subtasks[1].title).toBe('Subtask #2');
    });

    test('subtasks can\'t be directly externally modified', () => {
        const oldSubtask = new Task('Subtask #1');
        const newSubtask = new Task('Subtask #2');
        const task = new Task('Some Title', { subtasks: [ oldSubtask ] });
        
        task.subtasks[0] = newSubtask;

        expect(task.subtasks[0]).toBe(oldSubtask);
    });
});