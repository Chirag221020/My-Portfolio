import { useRef, useState } from "react";
import "./Contact.css";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

function Contact({Light}) {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const closeSuccess = ()=>{
              setSuccess(false),
              setError(false)
  }
  
  const isFormsubmitted = localStorage.getItem("isSubmitted")
  console.log(isFormsubmitted)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c57bo38", "template_swh2bu5", formRef.current, {
        publicKey: "OZYUjTwGeaPJJzD6A",
      })
      .then(
        (result) => {
          setSuccess(true);
          localStorage.setItem("isSubmitted", true)
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  };

  const isInview = useInView(ref, { margin: "100px" });
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className={!Light ? 'lightTextContainer' : 'TextContainer'}variants={variants}>
        <motion.h1 id={!Light ? 'lightWrite' : 'write'} variants={variants}>
          {" "}
          Lets Work Together
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span id="info">chiragchouhaan2220@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span id="info">Jaipur, Rajasthan</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span id="info">+91 9649705641</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phonesvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9584e6"
            stroke-width="0.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone-call"
          >
            <motion.path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              initial={{ pathLength: 0 }}
              animate={isInview && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
          </svg>
        </motion.div>

        <motion.form
          className="form"
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="name" className={!Light ? 'lightInput-text' : 'input-text'} required/>
          <input type="email" placeholder="Email" name="email" 
           className={!Light ? 'lightInput-text' : 'input-text'} required/>
          <textarea rows={8} placeholder="Message" name="message"
           className={!Light ? 'lightInput-text' : 'input-text'} required></textarea>
          <button className="submit" disabled = {isFormsubmitted} >Submit</button>

          {error && (
            <div class="error">
              <div class="error__icon">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
                    fill="#393a37"
                  ></path>
                </svg>
              </div>
              <div class="error__title">
                Something Went Wrong! Please try again later
              </div>
              <div class="error__close" onClick={closeSuccess}>
                <svg
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                    fill="#393a37"
                  ></path>
                </svg>
              </div>
            </div>
          )}



          {success && (
            <div class="success">
              <div class="success__icon">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                    fill="#393a37"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <div class="success__title">Message Send Successfully</div>

              <div class="success__close" onClick={closeSuccess}>
                <svg
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                    fill="#393a37"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
