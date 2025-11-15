import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';

const SelectList = ({data,colors}) =>
{
  const [traslate, setTraslate] = useState(null);

  const beTranslate = (index) =>
  {
    setTraslate(traslate === index ? null : index)
  }
  return (
    <div className='w-full flex items-center justify-center py-4'>
      <div className='w-[80%] flex flex-wrap gap-1'>
        {
          data &&
          <List
            funTraslate={beTranslate}
            data={data}
            traslate={traslate}
            colorWord={colors.colorWord}
            colorTranlation={colors.colorTranlation}
            bgWord={colors.bgWord}
            bgTraslation={colors.bgTraslation}
          />
        }
      </div>
    </div>
  );
};

SelectList.propTypes = {
    data:PropTypes.array,
    colors:PropTypes.object,
};

export default SelectList;