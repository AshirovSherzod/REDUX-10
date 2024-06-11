import { create } from 'zustand'

const useStore = create((set) => ({
    users: [
        {
            id: 1,
            name: "Sherzod",
            proffession: "Developer",
            age: 19,
            gender: "male"
        },
        {
            id: 2,
            name: "Selena",
            proffession: "Singer",
            age: 30,
            gender: "female"
        },
        {
            id: 3,
            name: "Drake",
            proffession: "Singer",
            age: 35,
            gender: "male"
        },
        {
            id: 4,
            name: "Javlon",
            proffession: "Pupil",
            age: 17,
            gender: "male"
        },
        {
            id: 5,
            name: "Allayor",
            proffession: "Worker",
            age: 19,
            gender: "female"
        },
    ],

    isModal: false,
    addUsers: (payload) => set((state) => ({
        users: [...state.users, payload],
    })),
    removeUser: (payload) => set((state) => ({
        users: state.users.filter(user => user.id !== payload),

    })),
    updateUser: (payload, newUser) => set((state) => ({
        users: state.users.foreach(user => user.id === payload ? user = newUser : user),
    })),
    // isShowModal: () => set((state) => ({ state.isModal === false}))
}))

export default useStore