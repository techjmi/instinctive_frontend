import axios from 'axios'

// const url='http://localhost:8000/api'
const url='https://backend-36ys.onrender.com/api'
const token = localStorage.getItem('accessToken');

  // POST students
  export const post_students = async (data) => {
    try {
      const response = await axios.post(`${url}/students`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log('The error while posting student is', error.message);
      throw error;
    }
  };
  // GET all students
  export const get_students = async () => {
    try {
      const response = await axios.get(`${url}/students`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data;
    } catch (error) {
      console.log('The error while getting the students is:', error.message);
      throw error;
    }
  };
  
  // GET student by ID
  export const get_student = async (id) => {
    try {
      const response = await axios.get(`${url}/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data;
    } catch (error) {
      console.log('The error while getting student is', error.message);
      throw error;
    }
  };
  
  // PUT (Update) student by ID
  export const update_student = async (id, data) => {
    try {
      const response = await axios.put(`${url}/students/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`${url}/students/${id}`);
      return response;
    } catch (error) {
      console.log('The error while updating the student is', error.message);
      throw error;
    }
  };
  
  // DELETE student by ID
  export const delete_student = async (id) => {
    try {
      const response = await axios.delete(`${url}/students/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log('The error while deleting the student is', error.message);
      throw error;
    }
  };

// post signup 
export const post_signup= async(data)=>{
    console.log('func called')
    try {
        const response= await axios.post(`${url}/signup`, data)
        console.log('the response of signup is ', response.data)
        return response
    } catch (error) {
        console.log('the error while posting the user is', error.message)  
        throw error
    }
}
export const user_signin= async(data)=>{
    try {
        const response= await axios.post(`${url}/login`, data)
        console.log('the response of signup is ', response.data)
        return response
    } catch (error) {
        console.log('the error while posting the user is', error.message)  
        throw error
    }
}
export const profile_data= async(data)=>{
    try {
        const response= await axios.get(`${url}/profile`,{
            headers:{
                Authorization: `Bearer ${token}`, 
            }
        })
        console.log('the response of getting user data is ', response.data)
        return response
    } catch (error) {
        console.log('the error while posting the user is', error.message)  
        throw error
    }
}
export const handle_logout= async()=>{
    try {
        const response= await axios.post(`${url}/logout`,)
        return response
    } catch (error) {
        console.log('the error logging out is', error.message)  
        throw error
    }
}