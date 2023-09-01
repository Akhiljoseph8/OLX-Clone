import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState()
  const {postDetails}= useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const history = useHistory()
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    const {userId}= postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })
  },[])

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
  }, [favorites])

  const remove=(id)=>{
   firebase.firestore().collection('products').doc(postDetails.id).delete()
    history.push('/')
    alert('Item deleted')
    favorites.map(favorite=>{
      return (postDetails.url==favorite.favorite.url)?firebase.firestore().collection('favorites').doc(favorite.id).delete():""
    })
    
  }
 
  return (
    
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails? postDetails.url:history.push('/')}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {userDetails.username}</p>
          <p>Phone no: {userDetails.phone}</p>
        </div>}
        <div className='deleteButtonDiv'>
        {user ? (userDetails?(user.displayName==userDetails.username)?<button className='deleteButton' onClick={()=>remove(postDetails.id)}>Delete Post</button>:"":""):""}
        </div>
      </div>
    </div>
    
  );
}
export default View;
