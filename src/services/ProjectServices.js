import Api from './Api'

const api = new Api('projects')

const getProjects = () => api.get(``)

export {
    getProjects
}