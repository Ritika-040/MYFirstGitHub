import { SET_COURSES, SELECTED_PRODUCT, CLEAR_CLICK_DATA, SELECTED_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE,
    POST_DATA_REQUEST,GET_COURSES_FAILURE,GET_COURSES_REQUEST,GET_COURSES_SUCCESS} from './ProductTypes'; 

    const initialState = {
        courses:{
            courses: []},
        view:'',
        selectedProduct: "",
        deletedata: '',
        is_loading: false,

        postApis: {
            postApiLoading: false,
            postApiStatus: null,
            postMessage: "",
            postApiSucess: "",
            postDataResponse: ""
        },
        getApi: {
            getApiLoading: false,
            getApiStatus: null,
            getMessage: "",
            getApiSucess: ""
        },   
    }    


    const ProductReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_COURSES:
                console.log(action, "sdfhsdhkf")
                return {
                    ...state,
                    ...{ courses: {courses: action.response } }
                }

                case POST_DATA_REQUEST:
                    return {
                        ...state,
                        ...{ postApis: { ...state.postApis, ...{ postApiLoading: true } } }
                    }
                case POST_DATA_SUCCESS:
                    console.log(action, "action...");
                    const { response } = action;
        
                    let postStateSuccess = {
                        postApiLoading: false,
                        postApiStatus: 200,
                        postMessage: response.data.message,
                        postDataResponse: !!response.data.profile ? response.data.profile : "",
                        postApiSuccess: response.data.success
                    }
                    return {
                        ...state,
                        ...{
                            postApis: { ...state.postApis, ...postStateSuccess }
                        }
                    }
                case POST_DATA_FAILURE:
                    console.log(action, "action..ghchcg.");
                    let postStateFailure = {
                        postApiLoading: false,
                        postApiStatus: action.status,
                        postMessage: action.response.message,
                        postDataResponse: "",
                        postApiSucess: false
                    }
                    return {
                        ...state,
                        ...{
                            postApis: { ...state.postApis, ...postStateFailure }
                        }
                    }
                case GET_COURSES_REQUEST:
                    return {
                        ...state,
                        ...{ getApi: { ...state.getApi, ...{ getApiLoading: true } } }
                    }
                case GET_COURSES_SUCCESS:
                    console.log(action, "action..zzz.");
                    const getDataResp = action.response;
                    const deletedata= action.response;
                    let getStateSuccess = {
                        getApiLoading: false,
                        getApiStatus: 200,
                        getMessage: !!getDataResp.data.data ? "" : "unable to fetch data...",
                        getApiSuccess: !!getDataResp.data.data ? true : false,
                      
                    }
                    let cousesDetail={
                        courses : action.response.data
                    }
                    return {
                        ...state,
                        ...{
                            getApi: { ...state.getApi, ...getStateSuccess },
                            courses: { ...state.courses, ...cousesDetail }
                        }
                    }
                case GET_COURSES_FAILURE:
                    console.log(action, "action..hhjh.");
                    let getStateFailure = {
                        getApiLoading: false,
                        getApiStatus: action.status,
                        getMessage: action.response.message,
                        getDataResponse: "",
                        getApiSucess: false
                    }
                    return {
                        ...state,
                        ...{
                            getApi: { ...state.getApi, ...getStateFailure }
                        }
                    }
            case SELECTED_PRODUCT:
                    return {
                        ...state,
                         ...action.newState
                    }
            case CLEAR_CLICK_DATA:
                        return{
                            ...state,
                            ...action.newState
                        }
            
            case SELECTED_DATA:
             
                return {
                    ...state,
                    ...action.newState
                }
         
           
                
            default:
                return state
        }
    }
       
export default ProductReducer