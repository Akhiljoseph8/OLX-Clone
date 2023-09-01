import React, { useState,useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Arrow from '../../assets/Arrow'
import Category from '../Category/Category';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import ViewCategory from '../../Pages/ViewCategory';
import ViewCat from '../ViewCat/ViewCat';
function Banner() {
  const [rotate, setRotate] = useState()
  const [category, setCategory] = useState()
  const [products, setProducts] = useState([])
  const [gotoCategory, setGotoCategory] = useState()
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const [onClick, setOnClick] = useState({data:categoryItems})
 
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
  var categoryItems="no"
  useEffect(() => {
   
     history.push(categoryItems[0] ? {pathname:'/viewcategory',state:categoryItems}:gotoCategory?{pathname:'/viewcategory'}:"")
  }, [gotoCategory])
  
    
     var categoryItems = products.filter(
    product => product.category.toLocaleLowerCase().includes(gotoCategory)
   );
   

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
     
        <div className="menuBar">
          <div onClick={()=>{setRotate(!rotate); setCategory(!category)}} className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <span>
            <Arrow rotate={rotate}></Arrow> 
            </span>
          </div>
          <div  className="otherQuickOptions">
          <div className='categoryLink'>
            <span onClick={()=>{setGotoCategory("car")}} >Cars</span>
            </div>
            <div className='categoryLink'>
            <span onClick={()=>{setGotoCategory("motorcycles")}}>Motorcycles</span>
            </div>
            <div className='categoryLink'>
            <span  onClick={()=>{setGotoCategory("mobile phone")}} >Mobile Phones</span>
           
            </div>
            <div className='categoryLink'>
            <span onClick={()=>{setGotoCategory("for sale : house")}}>For Sale:Houses & Apartments</span>
            </div>
            <div className='categoryLink'>
            <span onClick={()=>setGotoCategory("bike")} >Scooters </span>
            </div>
            <div className='categoryLink'>
            <span onClick={()=>setGotoCategory("commercial & other vehicles")}>Commercial & Other Vehicles</span>
            </div>
            <div className='categoryLink'>
            <span onClick={()=>{setGotoCategory("for rent:house")}}>For Rent: House & Apartments</span>
            </div>
           
          
          </div>
          
        </div>
        <div> 
        <div className="banner">
        
        <Category category= {category}></Category>
          <img className='bannerimage'
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Banner;
