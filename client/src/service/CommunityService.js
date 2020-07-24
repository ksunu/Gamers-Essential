import axios from 'axios'

export default class CommunityService {
    constructor() {

        this.service = axios.create({

            baseURL: 'http://localhost:5000/api/community',
            withCredentials: true

        })
    }

    getAllCommunity = () => this.service.get('/getAllCommunity')
    getOneCommunity = id => this.service.get(`/getOneCommunity/${id}`)
    createCommunity = community => this.service.post(`/newCommunity`, community)
    editCommunity = (id, updatedCommunity) => this.service.put(`/editCommunity/${id}`, updatedCommunity)
    createComment = (id, comment) => this.service.post(`/newComment/${id}`, comment)
    deleteComment = id => this.service.post(`/deleteComment/${id}`)

}

