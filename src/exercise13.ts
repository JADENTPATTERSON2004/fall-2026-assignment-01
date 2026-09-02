export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null> {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }

    const todo = (await response.json()) as TodoItem;

    return todo;
  } catch {
    return null;
  }
}
