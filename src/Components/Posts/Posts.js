import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Heart from '../../assets/Heart';
import {AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import Filter from '../Filter/Filter';
import FillHeart from '../../assets/FillHeart';

function Posts(filterdItems) {
 const {firebase}= useContext(FirebaseContext)
 const [products, setProducts] = useState([])
const{setPostDetails}=useContext(PostContext)
const {postDetails}= useContext(PostContext)
const {user}=useContext(AuthContext)
const history=useHistory()
const [favorite, setFavorite] = useState([])
 const [favorites, setFavorites] = useState([])

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
useEffect(() => {
  
  user&& favorite.name && firebase.firestore().collection('favorites').add({favorite,userID:user.uid})
}, [favorite])

const like=(e,id)=>{
  e.stopPropagation()
favorites.map(item=>{
 return user&&(item.favorite.id==id ? (item.userID==user.uid ? (setFavorite('') ,alert('This Item is already in Your Favorite List')):''):'')
 
})

  (user?"":history.push('/signup'))
}

useEffect(() => {
  firebase.firestore().collection('favorites').get().then((snapshot)=>{
   const allFav= snapshot.docs.map((favorites)=>{
     return{
       ...favorites.data(),
       id:favorites.id
     }
   })
 setFavorites(allFav)
  })
}, [favorite,favorites])

const unlike=(e,id)=>{
  e.stopPropagation()
  firebase.firestore().collection('favorites').doc(id).delete()
  console.log(id)
}

  return (
   
    <div className="postParentDiv">
      
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        
        <div className="cards">
        
          {products.map(product=>{
           

         return <div
         
            className="card"
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            } }
          >
          
           <span onClick={(e)=>{ setFavorite(product) ;like(e,product.id)}}className="favorite">

              <Heart ></Heart>
            </span>
            
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
            
          </div> 
        })}
       
    </div>
       
      </div>
     
      <div className="recommendations">
        <div className="heading">
          <span>Favorites</span>
        </div>

        <div className="cards">
          {favorites.map(favorite=>{
           return user?(favorite.userID==user.uid)?<div className="card" onClick={()=>{setPostDetails(favorite.favorite) ;history.push('/view')}}> 
             
           <div onClick={(e)=>unlike(e,favorite.id)} className="favorite">
             <FillHeart></FillHeart>
           </div>
           <div className="image">
             <img src={favorite.favorite.url} alt="" />
           </div>
           <div className="content">
             <p className="rate">&#x20B9; {favorite.favorite.price}</p>
             <span className="kilometer">{favorite.favorite.category}</span>
             <p className="name">{favorite.favorite.name}</p>
           </div>
           <div className="date">
             <span>{favorite.favorite.createdAt}</span>
           </div>
         </div> :"":""

          })}
          
         
        
  
        </div>
      </div>
    </div>
  );
      }

export default Posts;
