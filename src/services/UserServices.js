import Api from './Api'

const api = new Api('users')

const getUsers = () => api.get()

export {
    getUsers
}