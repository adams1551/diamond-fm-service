import Axios from 'axios';
import url from './url'
import AuthService from './auth'

class Http {
    constructor(baseUrl = url.smsUrl){
        let  token = this.getActiveToken();
        this.http = Axios.create({
            baseUrl: baseUrl,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': "XMLHttpRequest",
                "Access-Control-Allow-Origin": '*',
                'x-access-token':`${token}`
            }
        });
        //before a request is made start the nprogress
    this.http.interceptors.request.use(request => this.requestHandler(request));
    
    this.http.interceptors.response.use(
        response => this.successHandler(response),
        error => this.errorHandler(error)
      )
    
    this.http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          localStorage.removeItem("token"); //token
          localStorage.removeItem("_us_d_si"); //user
        }else {AuthService.isAuthenticated == true}
        throw err;
      });
    });
  }

  getActiveToken(){
    if(localStorage.getItem("_au_si_")){
        let data = localStorage.getItem("_au_si_");
        return data;//data.slice(1,data.length - 1);
    }
    return '';
  }
   
  isHandlerEnabled(config={}) {
      //return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
      return config['handlerEnabled'] && !config.handlerEnabled ?
        false : true
    }
  
  
  //console.log(token);
  // create an new axios http instance
 
  
  requestHandler(request) {
    if (this.isHandlerEnabled(request)) {
      // Modify request here
      let tok = this.getActiveToken();
      request.headers['x-access-token'] = `${tok}`;
    }
    return request
  }
    
  errorHandler(error) {
    if (this.isHandlerEnabled(error.config)) {
      // Handle errors
    }
    return Promise.reject({ ...error })
  }
    
  successHandler(response) {
    if (this.isHandlerEnabled(response.config)) {
      // Handle responses
    }
    return response
  }
    
}

export default new Http().http