// CLOUDINARYCONFIG
import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true
        })
    }

    handleUploadCommunity = theFile => this.service.post('/uploadCommunity', theFile)
    handleUploadEvent = theFile => this.service.post('/uploadEvent', theFile)
    handleUploadAvatar = theFile => this.service.post('/uploadProfile', theFile)
}