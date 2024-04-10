import axios from 'axios';
import getAuthToken from './getAuthToken';

const getCurrentUser = async () => {

    const accessToken = await getAuthToken()

    try {
        const response = await axios.get('http://localhost:8000/api/v1/users/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        
        return 1
        
    } catch (error) {
        return 0
    }

}

export default getCurrentUser