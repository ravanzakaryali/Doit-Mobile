export interface ConfirmResponse {
    token: string,
    user: User
}
export interface User {
    email: string,
    userName: string
}

export interface ProjectModel {
    id: string, 
    title: string,
    description: string,
    teamMembers: TeamMembers[]
}
export interface TeamMembers {
    _id: string,
    name: string | null,
    profileImage: string
}