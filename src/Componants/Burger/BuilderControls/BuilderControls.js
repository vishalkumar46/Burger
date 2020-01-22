import React from 'react';
import classes from './BuilderControls.css';
import BuildControl from '../../Burger/BuildControl/BuildControl';

const Controls =[
{label:'Salad', type:'salad'},
{label:'Cheese', type:'cheese'},
{label:'Meat', type:'meat'}
];

const buildercontrols = ()=>(
 <div className={classes.BuilderControls}>
        {Controls.map((ctrl)=>(
           <BuildControl label={ctrl.label} key={ctrl.label}/>


        ))}
      </div>
);

export default buildercontrols;