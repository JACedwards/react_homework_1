import '../css/cartstyles.css'
import  { useContext } from 'react';
import { DataContext } from '../DataProvider';

let Cart = () => {

    const {cart, setCart} = useContext(DataContext);

    const incQuantity = player => { 
        let mutableCart = {...cart}

        mutableCart.size++;
        mutableCart.total += player.obj.number;
        mutableCart.items[player.obj.id].quantity++;
        setCart(mutableCart);

    }

    const decQuantity = player => { 

        
    }

    const removePlayer = player => { 

        
    }

    const clearCart = () => { 

        
    }
    
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h4>Steal a Player:</h4>
                    </div>

                        {/* Single player */}
                        { Object.values(cart.items).map((player) => {

                            return<div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                            <div className="mr-1"><img className="rounded" alt="pic" src={player.obj.image} width="70" /></div>
                            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{player.obj.first_name} {player.obj.last_name}</span>
                                <div className="d-flex flex-row product-desc">
                                    <div className="size mr-1"><span className="font-weight-bold">{player.obj.team}</span></div>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center qty">
                                <i className="fa fa-minus text-danger"> </i>
                                <h5 className="text-grey mt-1 mr-1 ml-1">{player.quantity}</h5>
                                <i className="fa fa-plus text-success" onClick={() => {incQuantity(player);}}></i>
                            </div>
                            <div>
                                <h5 className="text-grey">{player.obj.number} K each</h5>
                            </div>
                            <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
                        </div>
                        })
                        
                        }
                         {/* End single player? */}
                

                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total:</span>
                        </div>
                        <div>
                            <h4 className="text-grey">${cart.total},000,000</h4>
                        </div>
                        <div className="d-flex align-items-center"><button className="btn btn-sm btn-danger">Clear Cart</button>
            
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                        <button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
    }

    export default Cart;