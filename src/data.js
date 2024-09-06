export const API_KEY = 'AIzaSyB4W0VPN1d6tdGt_UPfSx-v4_VbSiApFgE'

 export const value_converter =(value) => {
    if (value >= 1000000){
        return Math.floor(value/1000000)+'M';
    }
    else if( value>=1000){
        return Math.floor(value/1000)+'K';
    }else{
        return value;
    }
}