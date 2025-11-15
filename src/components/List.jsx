import PropTypes from 'prop-types';

const List = ({funTraslate,data,traslate,colorWord,colorTranlation,bgWord,bgTraslation}) => {
  return (
    <>
  {
             data && data.map((e, i) => (
              <div onClick={() => funTraslate(i)} 
              className={`border w-[10rem] h-[8rem] p-2 cursor-pointer perspective ${bgTraslation}` }
               key={e.verb + i}>
                <div
                  className={`relative w-full h-full duration-500 transform-style-preserve-3d cursor-pointer ${traslate === i ? "rotate-y-180" : ""
                    }`}
                >
                  {/* Front */}
                  <div className={`absolute inset-0 flex items-center justify-center border  rounded-lg shadow-md backface-hidden ${bgWord}`}>
                    <p className={`${colorWord} font-bold text-lg`}>{e.word}</p>
                  </div>
  
                  {/* Back */}
                  <div className={`absolute inset-0 flex items-center justify-center border rounded-lg shadow-md backface-hidden rotate-y-180 ${bgTraslation}`}>
                    <p className={`${colorTranlation} font-bold text-lg`}>
                      {e.translation}
                    </p>
                  </div>
                </div>
  
              </div>
            ))
          }
          </>
  );
};

List.propTypes = {
  funTraslate:PropTypes.func,
  data:PropTypes.array,
  traslate:PropTypes.number,
  colorWord:PropTypes.string,
  colorTranlation:PropTypes.string,
  bgWord:PropTypes.string,
  bgTraslation:PropTypes.string
};

export default List;