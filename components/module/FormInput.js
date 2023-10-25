import Link from "next/link";

function FormInput({name , label , type , value , placeholder , onChange , checked , redTitile , blackTitle , QTitle , Ltitle ,  Rlink}) {
    
    switch(type){
        case "title" : 
            return(
                <h3 className="flex items-center flex-col w-full p-5 text-2xl mt-5 md:t-0 mb-5 text-gray-900">
                    <div>
                        <span className="text-red-500">{redTitile}</span> &nbsp;
                        {blackTitle}
                    </div>
                    <div className="w-9 hOpx bg-red-500 mt-2"></div>
                </h3>
            );
        case "redirecttLink" :
            return(
                <p className="text-center text-gray-900 mb-5">
                    {QTitle} &nbsp;
                    <Link href={Rlink} >{Ltitle}</Link>
                </p>
            );
        case "checkbox" : 
            return ( 
            <div className="flex justify-start rtl px-12 mb-5 text-slate-500 ">
                <input className="h-4 w-4 rounded border-gray-300 accent-red-500" onChange={onChange} type="checkbox" checked={checked}  id={name} />
                <label className="mr-2 text-sm select-none" htmlFor={name}>
                    {label}
                </label>                      
            </div>
          );
        case "submit" : 
            return (
                <div className="flex justify-center rtl px-12 mb-5">
                    <button 
                        type='submit' 
                        className="w-full py-3 px-2 Kalameh focus:outline-none rounded-sm text-sm bg-red-400 hover:bg-red-500 text-gray-50">
                            {label}
                    </button>
                </div>
            );
        default :
            return (
                <div className="flex justify-center rtl px-12 mb-5 overflow-hidden">
                    <input 
                        className="w-full py-3 px-2 text-gray-700  border border-gray-300 focus:outline-none rounded-sm placeholder-slate-400 text-sm" 
                        type={type} 
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )     
    }    
}

export default FormInput