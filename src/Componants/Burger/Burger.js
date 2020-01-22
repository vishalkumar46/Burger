import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger=(props)=>{
    let transformedIngregients=Object.keys(props.ingredients).map((igkey)=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient type={igkey} key={igkey+i}/>
        })
    }).reduce((arr,el)=>{return arr.concat(el)},[])
    console.log(transformedIngregients)

    if(transformedIngregients.length===0){
         transformedIngregients=<p>Please add your ingredients</p>
    }



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
           {transformedIngregients}
            <BurgerIngredient type='bread-buttom'/>
           </div>



    )
}

export default burger;