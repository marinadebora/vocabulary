import { useState } from 'react';
import list from '../utils';
import colors from '../utils/colors';
import SelectList from './SelectList';

const Home = () =>
{
  //creo un array de keys del objeto de color para obtener el nombre de cada tarjeta
  let listWords = Object.keys(colors);

  const [openList, setOpenList] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState("");

  const handleList = (value) =>
  {
    //cargo el estado de show para pasar como parametro en SelectList colors={colors[show]
    setShow(value)
    //cargo el estado de data para pasar como parametro en SelectList data={data}
    setData(list[value])
    setOpenList(true)
  }
  return (
    <div className='w-full h-[100vh] flex items-center justify-center '>
      <div className='w-[80%] h-[80%] flex flex-wrap gap-2'>
        {
          !openList ? listWords && listWords.map((e, i) => (
            /* accedo a cada elemento del objeto de colors asignando asi su color correspondiente  */
            <div onClick={() => handleList(e)} key={i} className={`${colors[e].bgTraslation} border w-[10rem] h-[12rem] flex items-center justify-center cursor-pointer `}>
              <div className={`${colors[e].bgWord} ${colors[e].colorWord} w-[8rem] h-[10rem] border border-black rounded-lg flex items-center justify-center `}>
                <p className='font-bold text-center p-2'>{(e).toUpperCase()}</p>
              </div>
            </div>
          ))
            :
            <div>
              <button className='cursor-pointer' onClick={() => setOpenList(false)}>volver</button>
              <SelectList data={data} colors={colors[show]} />
            </div>
        }
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;