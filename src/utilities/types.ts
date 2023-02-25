
export interface Users {
    imageUrl: string,
    username: string
}


export interface Project {
    title: string,
    description: string,
    users: Users,
}

export interface TaskCreate {
    dueDate: Date,
    projectId: string,
    description: string
}

export interface Tasks {
    id: string,
    title: string,
    subTitle: string,
    users: Users,
    taskComplete: number,
    usersCount: number,
}

export interface Paginate {
    page: number,
    limit: number
}

export interface UserListType {
    name: string,
    profileImageUrl: string,
    id: string
}