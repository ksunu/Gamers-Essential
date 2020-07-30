// CLOUDINARYCONFIG
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/files`,
            withCredentials: true
        })
    }

    handleUploadCommunity = theFile => this.service.post('/uploadCommunity', theFile)
    handleUploadEvent = theFile => this.service.post('/uploadEvent', theFile)
    handleUploadAvatar = theFile => this.service.post('/uploadProfile', theFile)
}