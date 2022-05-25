import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div style={ {width: '250px', height: '80px'} }>
     <b>SparkLineComponent</b>
    </div>
  )
}

export default SparkLine