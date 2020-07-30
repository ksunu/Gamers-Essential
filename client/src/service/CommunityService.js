import axios from 'axios'

export default class CommunityService {
    constructor() {

        this.service = axios.create({

            baseURL: `${process.env.REACT_APP_API_URL}/community`,
            withCredentials: true

        })
    }

    getAllCommunity = () => this.service.get('/getAllCommunity')
    getOneCommunity = id => this.service.get(`/getOneCommunity/${id}`)
    createCommunity = community => this.service.post(`/newCommunity`, community)
    editCommunity = (id, updatedCommunity) => this.service.put(`/editCommunity/${id}`, updatedCommunity)
    deleteCommunity = id => this.service.delete(`/deleteCommunity/${id}`)

    createComment = (id, comment) => this.service.post(`/newComment/${id}`, comment)
    deleteComment = id => this.service.post(`/deleteComment/${id}`)

}

