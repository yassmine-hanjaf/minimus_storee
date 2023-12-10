import React ,{useState ,createContext} from 'react';
//create context 
export const SlidebarContext  = createContext()

const SlidebarProvider = ({children}) => {
  //slidebar state 
  const [isOpen , setisOpen] = useState(false);

  const handleClose=()=>{
    setisOpen(false);

  }
  return <SlidebarContext.Provider value={{isOpen,setisOpen ,handleClose}}>{children}</SlidebarContext.Provider>;
};

export default SlidebarProvider;
