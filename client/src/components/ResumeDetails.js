import React from "react"

const Details = () => {
    return(
        <div className="Resume_Details">
            <div className="Education_details">
              <h1> ADGITM </h1>
              <p>BTECH (EEE)</p>
              <h1> Bharti Public School</h1>
              <p>CBSE</p>
              </div>
              <div className="ProgrammingSKills detail">
               <span>javascript</span>
               <span>ReactNative</span>
               <span>Node JS</span>
               <span>C++</span>
               <span>Datastuctures & algorithms</span>
               <span>Css</span>
               <span>Hml</span>
               <span>React JS</span>
               <span>Express JS</span>
               <span>Mongo Db</span>
               <span></span>
               </div>
               <div className="Projects_detail">
                <a href="/">Personal Portfolio Website</a>
                <h2>Technologies Used: React JS</h2>
                <p>A Personal Portfolio website to showcase all my details and projects at one place.</p>

                <a href="/">Wave Music Player</a>
                <h2>Technologies Used: React JS</h2>
                <p>A Music player.</p>

                <a href="/">Natours: Your Tour guide</a>
                <h2>Technologies Used: NODE JS, Mongo Db</h2>
                <p>A Personal Portfolio website to showcase all my details and projects at one place.</p>
               </div>

               <div className="interests_Detail">
                <h1>Chess</h1>
                <p>Apart from being a tech enthusiast and a code writer, i also like to play chess.</p>

                <h1>Working out</h1>
                <p>Apart from being a tech enthusiast and a code writer, i also like to play chess.</p>
               </div>
            
        </div>
    )
}