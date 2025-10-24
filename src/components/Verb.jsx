import { useState } from 'react';
import verb from '../utils/verbs'
import List from './List';

const Verb = () =>
{
  const [openIreg, setOpenIreg] = useState(false)
  const [openReg, setOpenReg] = useState(false)
  const [traslate, setTraslate] = useState(null)

  const selectVerbsIrreg = ()=>{
    setOpenIreg(!openIreg)
    setOpenReg(false)
  }
   const selectVerbs = ()=>{
     setOpenReg(!openReg)
    setOpenIreg(false)
  }
  const verbTraslate = (index) =>
  {

    setTraslate(traslate === index ? null : index)
  }

  return (
    <>
   <div className="w-full h-full flex flex-col items-center py-8">
     <div className='w-[80%] h-full flex items-center justify-center '>
       <div className="w-full flex items-center">
        <button onClick={selectVerbsIrreg} className='cursor-pointer'>
        <h1 className="text-2xl font-bold text-red-600">
          Verbos Irregulares
        </h1>
        </button>
      </div>
      <div className="w-full flex items-center">
        <button onClick={selectVerbs} className='cursor-pointer'>
        <h1 className="text-2xl font-bold text-red-800">
          Verbos Regulares
        </h1>
        </button>
      </div>
     </div>

      <div className='w-full flex items-center justify-center py-4'>
        <div className='w-[80%] flex flex-wrap gap-1'>
{
           openIreg && 
           <List  
           funTraslate={verbTraslate} 
           data={verb.irregularVerbs} 
           traslate={traslate}
           colorWord="text-red-600"
           colorTranlation="text-blue-400"
           bgWord="bg-white"
           bgTraslation="bg-blue-100"
           />
        }
        {
           openReg && 
           <List  
           funTraslate={verbTraslate} 
           data={verb.regularVerbs} 
           traslate={traslate}
            colorWord="text-red-800"
           colorTranlation="text-blue-600"
           bgWord="bg-red-100"
           bgTraslation="bg-blue-100"
           />
        }

        </div>
      </div>
    </div>
    </>
  );
};


export default Verb;