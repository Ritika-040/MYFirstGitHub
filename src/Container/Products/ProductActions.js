import { POST_DATA_API } from '../urls/index';
import { GET_DATA_API } from "../urls/index";
import { POST_API } from '../Products/post';
import { GET_API } from "../Products/get";

const { SELECTED_PRODUCT, CLEAR_CLICK_DATA, SELECTED_DATA, POST_DATA_FAILURE,POST_DATA_SUCCESS,
    POST_DATA_REQUEST, GET_COURSES_FAILURE,GET_COURSES_REQUEST,GET_COURSES_SUCCESS} = require('../Products/ProductTypes') 
 
    const postDataApi = (body) => {
        return {
            [POST_API]: {
                endpoint: POST_DATA_API,
                types: [POST_DATA_REQUEST,
                    POST_DATA_SUCCESS,
                    POST_DATA_FAILURE,
                ],
                body
            }
        }
    }
    const getDataApi = () => {
        return {
            [GET_API]: {
                endpoint: GET_DATA_API,
                types: [GET_COURSES_REQUEST,
                        GET_COURSES_SUCCESS,
                        GET_COURSES_FAILURE],
                
            }
        }
    }
    
  
    const  fetchCourses= (body)=>{
        return {
            [GET_API]: {
                endpoint: GET_DATA_API,
                types: [GET_COURSES_REQUEST,
                        GET_COURSES_SUCCESS,
                        GET_COURSES_FAILURE],
                body
            }
        }
    }
    
    const setSelectedcourses = (newState) => {
        return { type: SELECTED_PRODUCT, newState }
    }

    const clearClickData=(newState)=> {
        return { type: CLEAR_CLICK_DATA,newState}
    }
    const selectedDataCart = (newState)=> {
        return{type:SELECTED_DATA , newState}
    }
    

export {postDataApi, getDataApi, fetchCourses, setSelectedcourses, clearClickData, selectedDataCart}