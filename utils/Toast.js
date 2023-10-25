// const { toast , Slide } = require("react-toastify");
import { toast , Slide} from 'react-toastify';

function Toast(type , text , closetime , mood , id){

    const settingMessage = {
        transition: Slide,
        position: "top-right",
        autoClose: closetime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mood,
    }

    const settingMessageLoding = {
        transition: Slide,
        position: "top-right",
        autoClose: closetime,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: mood,
    }
    const mainType = (type)=>{
        switch(type){
            case "--success-after-loading":
                return "success";
            case "--error-after-loading":
                return "error";
            default :
                return '';
        }
    }
    const settingMessageAfterLoding = {
        render: text , 
        type: mainType(type), 
        isLoading: false,
        autoClose: closetime,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }
    switch(type){
        case "error" :
            return toast.error(text, settingMessage);;
        case "success" : {
            return toast.success(text,settingMessage);
        }
        case "info" : {
            return toast.info(text, settingMessage);
        }
        case "warning" : {
            return toast.warn(text, settingMessage);
        }
        case "loading" :  {
            return toast.loading(text , settingMessageLoding)
        }
        case "--success-after-loading" : {
            return toast.update(id,settingMessageAfterLoding)
        }
        case "--error-after-loading" : {
            return toast.update(id,settingMessageAfterLoding)
        }
        default :
        return  toast(text, settingMessage); ;
    }

}

export default Toast;