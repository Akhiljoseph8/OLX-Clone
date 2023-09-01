import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import './Post.css'
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import Post, { PostContext } from '../../store/PostContext';
import Posts from '../Posts/Posts';
import Filter from '../Filter/Filter';
function Header() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const {postDetails}= useContext(PostContext)
  const history =useHistory()
  const [products, setProducts] = useState([])
 const [filterProduct, setFilterProduct] = useState([])
 const [onClick, setOnClick] = useState({data:''})
 const change=()=>{
  filterProduct.length ? setOnClick({data:filterdItems}) : setOnClick({data:''})

 }

 useEffect(() => {
  firebase.firestore().collection('products').get().then((snapshot)=>{
   const allPost= snapshot.docs.map((product)=>{
     return{
       ...product.data(),
       id:product.id
     }
   })
 setProducts(allPost)
  })
}, [])

  const filterdItems = products.filter(
    product => product.name.toLocaleLowerCase().includes(filterProduct) || product.category.toLocaleLowerCase().includes(filterProduct)
  );
 
  
  return (
    <div className="headerParentDiv">
     
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        
        <div  className="placeSearch">
        
        <Search></Search>
          <input  value={"India"} type="text" />
         
          <Arrow></Arrow>
        </div>

        <div className="productSearch">
          <div className="input">
            <input onChange={e =>setFilterProduct(e.target.value.toLocaleLowerCase(), (e.target.value.length > 2) ? change(): setOnClick({data:''}))}
           
              type="search"
              placeholder="Find car,mobile phone and more..."
            />
           
            <button onClick={change} className='searchbutton'>
            
             <Search></Search>
             
            </button>
           
          </div>
          
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? user.displayName : <a href='/login'>Login</a> }</span>
          <hr />
        </div>
        {user && <span className='signout' onClick={()=>{
        firebase.auth().signOut();
        history.push('/login')
        }}>Signout</span>}

        <div user  onClick={()=>{user ? history.push('/create') : history.push('/login') }}className="sellMenu">
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      <div>
      {!filterdItems.length && (<div>nothing</div>)}
    
   
   <Filter filterdItem={onClick.data }></Filter>
   
    </div>

    </div>
  
  );
}

export default Header;
