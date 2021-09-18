export interface Task{
   id: string;
   title:string;
   description:string;
   status
}

export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRSS = 'IN_PROGRESS',
    DONE = 'DONE'
}