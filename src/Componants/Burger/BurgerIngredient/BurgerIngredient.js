import React,{Component} from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';


class BurgerIngredient extends Component{

    render(){
        let ingredient =null;

        switch(this.props.type){
           
            
                case('bread-top'):
                ingredient= <div className={classes.top}>
                        <div className={classes.seed1}></div>
                        <div className={classes.seed2}></div>
                        <div className={classes.seed3}></div>
                        <div className={classes.seed4}></div>
                            </div>;
                break;


            case('bread-buttom'):
                ingredient=<div className={classes.bottom}></div>;
                break;
    
                case('meat'):
                ingredient=<div className={classes.meat}></div>;
                break;
    
    
                
                case('cheese'):
                ingredient=<div className={classes.cheese}></div>;
                break;
    
    
                case('salad'):
                ingredient=<div className={classes.salad}></div>;
                break;
    
                default:
                ingredient=null;
    
                

    }
    return ingredient;
}
}

BurgerIngredient.propTypes={
    type:PropTypes.string.isRequired,
}

export default BurgerIngredient;
