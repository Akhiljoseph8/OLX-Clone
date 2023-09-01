import React, { useState,useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Category.css'
function Category({category}) {
    const [products, setProducts] = useState([])
  const [gotoCategory, setGotoCategory] = useState()
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
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
    <div className='_3wCqT'>
        <div className={ category ? "vLgFL _1Poir" :"_1Poir" } data-aut-id="categories">
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                  
                        <span className="catlink">OLX Autos (Cars)</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                  
                        <span className="catlink">Properties</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">For Sale: Houses &amp; Apartments</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">For Rent: Houses &amp; Apartments</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Lands &amp; Plots</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">For Rent: Shops &amp; Offices</span>
                    
                </div>
                <div className="catlinkDiv">
                    
                        <span className="catlink">For Sale: Shops &amp; Offices</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">PG &amp; Guest Houses</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Mobiles</span>       
                </div>
                <div  className="catlinkDiv">
                        <span onClick={()=>{setGotoCategory("mobile phone")}} className="catlink">Mobile Phones</span>
                </div>
                <div  className="catlinkDiv">
                        <span onClick={()=>{setGotoCategory("accessories")}} className="catlink">Accessories</span>
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Tablets</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Jobs</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Data entry &amp; Back office</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Sales &amp; Marketing</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">BPO &amp; Telecaller</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Driver</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Office Assistant</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Delivery &amp; Collection</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Teacher</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Cook</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Receptionist &amp; Front office</span>
                    
                </div>
                <div className="catlinkDiv">
                    <span className="catlink">Operator &amp; Technician</span>
                
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">IT Engineer &amp; Developer</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Hotel &amp; Travel Executive</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Accountant</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Designer</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Other Jobs</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Bikes</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Motorcycles</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Scooters</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Spare Parts</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Bicycles</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Electronics &amp; Appliances</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">TVs, Video - Audio</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Kitchen &amp; Other Appliances</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Computers &amp; Laptops</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Cameras &amp; Lenses</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Games &amp; Entertainment</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Fridges</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Computer Accessories</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Hard Disks, Printers &amp; Monitors</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">ACs</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Washing Machines</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Commercial Vehicles &amp; Spares</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Commercial &amp; Other Vehicles</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Spare Parts</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Furniture</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Sofa &amp; Dining</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Beds &amp; Wardrobes</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Home Decor &amp; Garden</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Kids Furniture</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Other Household Items</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Fashion</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Men</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Women</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Kids</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Books, Sports &amp; Hobbies</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Books</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Gym &amp; Fitness</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Musical Instruments</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Sports Equipment</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Other Hobbies</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Pets</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Fishes &amp; Aquarium</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Pet Food &amp; Accessories</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Dogs</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Other Pets</span>
                    
                </div>
            </div>
            <div className="_3XRAy">
                <div className="catlinkDiv yFQ0R">
                        <span className="catlink">Services</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Education &amp; classNamees</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Tours &amp; Travel</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Electronics Repair &amp; Services</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Health &amp; Beauty</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Home Renovation &amp; Repair</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Legal &amp; Documentation Services</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Packers &amp; Movers</span>
                    
                </div>
                <div className="catlinkDiv">
                        <span className="catlink">Other Services</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category