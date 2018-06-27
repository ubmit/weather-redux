import React from 'react';
import { Sparklines,
         SparklinesLine,
         SparklinesReferenceLine
} from 'react-sparklines';

export default (props) => {
  const average = arr => {
      let arr_avg = arr.reduce((p, c) => p + c, 0) / arr.length;
      return Math.round(arr_avg);
  }

  return (
    <div>
      <Sparklines svgHeight={90}
                  width={120}
                  data={props.data}>
        <SparklinesLine color='purple' />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

