import axios from 'axios';
import getAuthToken from './getAuthToken';

const getCurrentUser = async (accessToken: string) => {

    // const accessToken = await getAuthToken()

    console.log('dari get user', accessToken)

    // const response = await axios.get('http://localhost:8000/api/v1/users/me', {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     }
    // })
}