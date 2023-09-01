import React, {useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import {PostContext } from '../store/PostContext';
import { AuthContext,FirebaseContext } from '../store/FirebaseContext';
import ViewCat from '../Components/ViewCat/ViewCat'
import Heart from '../assets/Heart';


function ViewCategory() {
  const{setPostDetails}=useContext(PostContext)
  const history=useHistory()
  const [favorite, setFavorite] = useState([])
  const [favorites, setFavorites] = useState([])
  const {firebase}= useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const location = useLocation();
  const data = location.state;
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
  
  return (
    <div>
  
  {data ?  <div><h1>{data[0].category}</h1> <div className="cards"> {data.map(product=>{ 
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
             <p className="rate">{product.price}</p>
             <span className="kilometer">{product.category}</span>
             <p className="name">{product.name}</p>
           </div>
           <div className="date">
             <span>{product.createdAt}</span>
           </div>
           </div>}) }</div></div> : <div><h3> Currently No Items Found in this Category</h3> <br/> <a href='/'> Back to Home</a></div>}
 
       
      </div>
  );
}

export default ViewCategory;