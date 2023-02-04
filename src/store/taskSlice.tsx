import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface TaskItem {
    id: string;
    name: string;
    status: string;
    dateCreate: number | null;
    dateClose: number | null;
}

export interface TasksState {
    stack: TaskItem[];
}
export const initialState: TasksState = {
    stack: [
        {id: '1', name:  "Пройти интервью с HR",  status:  'done',  dateCreate:  1573222952025,  dateClose:  1573222972009},
        
        {id: '2', name:  'Выполнить тестовое задание',  status:  'progress',  dateCreate:  1573222983361,  dateClose:  null},
        
        {id: '3', name:  'Трудоустроиться в Сбербанк',  status:  'open',  dateCreate:  null,  dateClose:  null},
        
        {id: '4', name:  'Пройти испытательный срок',  status:  'open',  dateCreate:  null,  dateClose:  null},
        
        {id: '5', name:  'Успешно завершить прооект',  status:  'open',  dateCreate:  null,  dateClose:  null},
        
        {id: '6', name:  'Получить повышение',  status:  'open',  dateCreate:  null,  dateClose:  null},
    ],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTasks: (state, action: PayloadAction<TaskItem[]>) => {
        state.stack = action.payload;
    }
  },
  extraReducers: () => { },
});

export const { updateTasks } = taskSlice.actions;

export const deleteTask = createAsyncThunk(
    'delete-task',
    (index: string, { dispatch, getState }) => {
      const tasks = [...(getState() as RootState).tasks.stack].filter(
        (item) => item.id !== index,
      );
  
      dispatch(updateTasks(tasks));
},
);

export default taskSlice.reducer;
