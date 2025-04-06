import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export interface ContactFormData {
    name: string
    phone: string
    email?: string
    message: string
    service?: string
}

export const sendContactForm = async (formData: ContactFormData) => {
    try {
        const response = await api.post('/contact', formData)
        return response.data
    } catch (error) {
        console.log('Error sending contact form:', error) 
        throw error
    }
}

export default api