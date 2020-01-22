import React, {Component} from 'react';
import Aux from '../../src/hoc/Auxiliary';
import Burger from '../Componants/Burger/Burger';
import BuilderControls from '../Componants/Burger/BuilderControls/BuilderControls';


class BurgerBuilder extends Component{
state={
    ingredients:{
salad:1,
meat:1,
cheese:1,
    }
}

render(){
return(
<Aux>
<Burger ingredients={this.state.ingredients}/>
<BuilderControls/>
</Aux>
    );
}
}

export default BurgerBuilder;

