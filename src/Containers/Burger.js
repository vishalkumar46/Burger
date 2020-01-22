import React, {Component} from 'react';
import Aux from '../../src/hoc/Auxiliary';
import Burger from '../Componants/Burger/Burger';
import BuilderControls from '../Componants/Burger/BuilderControls/BuilderControls';

const INGREDIENTS_COUNT = {
    salad:50,
    meat:100,
    cheese:120,
} 

class BurgerBuilder extends Component{
state={
    ingredients:{
    salad:0,
    meat:0,
    cheese:0,
},
totalprice:50,
}

addchangeHandler=(type)=>{

   const oldCount = this.state.ingredients[type]
   const updatedCount = oldCount + 1;
   const updatedIngredients = {...this.state.ingredients}
   updatedIngredients[type]=updatedCount;

   const oldPrice = this.state.totalprice;
   const basePrice = INGREDIENTS_COUNT[type];
   const updatedPrice= oldPrice + basePrice;

  this.setState({totalprice:updatedPrice, ingredients:updatedIngredients})
}

removechangeHandler=(type)=>{
    const oldCount = this.state.ingredients[type]
    if (oldCount<=0){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type]=updatedCount;
 
    const oldPrice = this.state.totalprice;
    const basePrices = INGREDIENTS_COUNT[type];
    const updatedPrice= oldPrice - basePrices;
    this.setState({totalprice:updatedPrice, ingredients:updatedIngredients})
}

render(){
const disabledinfo = {
    ...this.state.ingredients
}

for (let key in disabledinfo){
    disabledinfo[key]=disabledinfo[key] <=0;
}

return(
<Aux>
<Burger ingredients={this.state.ingredients}/>
<BuilderControls ingredientsadded={this.addchangeHandler}
                    ingredientdeducted={this.removechangeHandler}
                    disabled ={disabledinfo}
/>
</Aux>
    );
}
}



export default BurgerBuilder;

