import React from 'react';

import Layout from '../components/Layout';
import pic39 from '../assets/images/pic41.png'
import pic41 from '../assets/images/pic44.png'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>My Work</h2>
      </header>
      <section className="wrapper style1">
        <div className="inner">
        <h2>Artificial Intelligence Projects</h2>
        <h4>Deep Learning</h4>
              <p>I trained the model with all following aspects:</p>
              <ul>
                <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                <li>Baseline Model With Data Standarization</li>
                <li>Evaluate a Smaller Network (Small Dense Layers)</li>
                <li>Evaluate a very Smaller Network that Underfit</li>
                <li>Evaluate a larger Network (Large Dense Layers)</li>
                <li>Evaluate a very Larger Network that Overfit</li>
                <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                <li>Use Dropout and Weight Regularization for best results</li>
              </ul>
                    
                    <h3>1- Binary Classification Sonar Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>2- Multiclass Classification Iris Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>3- Regression Housing Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>4- Save & Load Keras Model</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h3>5- Face Detection with Keras MTCNN</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p>
        </div>
      </section>
      <section className="wrapper style5">
        <div className="inner">
        <h2>Python Flask Project</h2>
        <h4>Todo Restfull API with Unit Testing</h4>
                    <h3>1- GraphQl-Mongodb-API</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h3>2- PostgreSQL-Todo-APP-Unit-Testing</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h3>3- Todo-APP-Unit-Testing-Mongodb</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>
        </div>
      </section>
      <section className="wrapper style3">
        <div className="inner e">
          <h2>Gatsby Projects</h2>
        <h4>Web Design User Interface</h4>
              <p>I design these websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.
                    Some of the following websites are made by me.</p>
              <h3>1- Umair Zaki New</h3>
              <p className="b">to see my code <a href="https://umairzaki-new.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>2- Umair-Zaki</h3>
              <p className="b">to see my code <a href="https://umair-zaki.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>3- Umair Zaki Portfolio</h3>
              <p className="b">to see my code <a href="https://umairzakiportfolio.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>4- Umair Zaki CV</h3>
              <p className="b">to see my code <a href="https://umairzakicv.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>5- Umair Zaki Resume</h3>
              <p className="b">to see my code <a href="https://umairzakiresume.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>6- Umair Zaki</h3>
              <p className="b">to see my code <a href="https://umairzaki.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>7- Umair New</h3>
              <p className="b">to see my code <a href="https://umairnew.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>8- Umair Portfolio</h3>
              <p className="b">to see my code <a href="https://umairportfolio.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>9- Piaic New</h3>
              <p className="b">to see my code <a href="https://piaic-new.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>10- Piaic For Learning</h3>
              <p className="b">to see my code <a href="https://peaceful-goldwasser-23267b.netlify.com/"  target = "_blank"> Click Here</a></p>
        </div>
      </section>
      <section className="wrapper style4">
        <div className="inner">
        <h2>Upwork</h2>
         <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
         <span className="image">
                <img src={pic39}  height="100px" width="auto"  alt="" />
              </span>
        <h2>Fiverr</h2>
        <p>to see my Fiverr Profile <a href="https://www.fiverr.com/users/umairjamstackai/seller_dashboard" target = "_blank"> Click Here</a></p>
        <span className="image">
                <img src={pic41}  height="100px" width="auto"  alt="" />
              </span>
        </div>
        </section>
    </article>
  </Layout>
);

export default IndexPage;
