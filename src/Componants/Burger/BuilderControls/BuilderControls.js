import React from 'react';
import classes from './BuilderControls.css';
import BuildControl from '../../Burger/BuildControl/BuildControl';

const Controls =[
{label:'Salad', type:'salad'},
{label:'Cheese', type:'cheese'},
{label:'Meat', type:'meat'}
];

const buildercontrols = (props)=>(
 <div className={classes.BuilderControls}>
        {Controls.map((ctrl)=>(
           <BuildControl 
           label={ctrl.label} 
           key={ctrl.label}
           added={()=>{props.ingredientsadded(ctrl.type)}}
            reduce={()=>{props.ingredientdeducted(ctrl.type)}}
            disabled = {props.disabled[ctrl.type]}

           />


        ))}
      </div>
);

export default buildercontrols;