import React from "react";
import Login from "../Login/login";
import { useNavigate } from "react-router";
// import { useNavigate } from "@reach/router";
import Signup from "../Signup/singup";
import { auth } from "../../firebase.config";
import { Container, Row, Col } from "reactstrap";
import UseAuth from "../../customhook/useAuth";
import "../../styles/profile.css";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = UseAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("log out successfully");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section className="profile_head d-block mx-auto  ">
     
      {currentUser ? 
     <Container>
     <Row>
       <Col lg="12" md="12">
         <div className="profile_bar">
           <label className="label ">Profile photo</label>
           <motion.button
             whileTap={{ scale: "0.9" }}
             className="logout_btn"
             onClick={logout}
           >
             logout
           </motion.button>
         </div>
       </Col>
     </Row>
     <Row>
       <Col lg="12" md="12">
         <Row className="profile_box">
           <Col lg="6">
          
             <div className="profile_img">
               <motion.img
              
               
               src={currentUser.photoURL}
               alt="profile"
               ></motion.img>
             </div>
             
           </Col>
           <Col lg="6">
             <div className="profile_details d-block my-auto">
               <p className="user_name ">
                 UserName: {currentUser.displayName}
               </p>
               <hr />

               <p className="user_name ">Email-ID : {currentUser.email} </p>
             </div>
           </Col>
         </Row>
       </Col>
     </Row>
   </Container>  :
   navigate('/signup')
    }
    </section>
  );
};

export default Profile;
