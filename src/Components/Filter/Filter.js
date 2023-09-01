import React, {useContext, useEffect, useState } from 'react'
import './Filter.css'
import { useHistory } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';
import { AuthContext,FirebaseContext } from '../../store/FirebaseContext';
import Heart from '../../assets/Heart';
function Filter(props) {
  const{setPostDetails}=useContext(PostContext)
  const history=useHistory()
  const [favorite, setFavorite] = useState([])
  const [favorites, setFavorites] = useState([])
  const {firebase}= useContext(FirebaseContext)
  const {user}=useContext(AuthContext)

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
    
  return (
    <div>
     { props.filterdItem ?  <div className="cards"> {props.filterdItem.map(product=>{ 
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
            </div>}) }</div> : ''}

    </div>
  )
}

export default Filter