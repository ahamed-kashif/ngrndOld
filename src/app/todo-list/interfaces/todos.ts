export interface Todo {
    id: number,
    title : string,
    description : string,
    created_at : Date,
    updated_at : Date,
    completed_at : Date | null,
    priority : number
}