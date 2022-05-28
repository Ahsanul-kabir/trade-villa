import React from 'react';

const Blogs = () => {
    return (
        <div className='container' style={{ marginTop: '100px' }}>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Question: How will you improve the performance of a React Application?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Answer</strong>
                            <p>
                                <span className='fs-5 '>Improve the performance of a React Application-</span>
                                <ol type='I'>
                                    <li>Keeping component state local where necessary.</li>
                                    <li>Memoizing React components to prevent unnecessary re-renders.</li>
                                    <li>Code-splitting in React using dynamic import()</li>
                                    <li>Windowing or list virtualization in React.</li>
                                    <li>Lazy loading images in React.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Question: What are the different ways to manage a state in a React application?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Answer</strong>
                            <p>
                                <span className='fs-5 '>Manage a state in a React application-</span>
                                There are four main types of state you need to properly manage in your React apps:
                                <ol type='I'>
                                    <li>Local State</li>
                                    <li>Global State</li>
                                    <li>Server State</li>
                                    <li>URL State</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Question: How does prototypical inheritance work?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Answer</strong>
                            <p>
                                {/* <span className='fs-5 '>Purpose of JWT</span> */}
                                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>Question: What is a unit test? Why should write unit tests?</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Answer</strong>
                            <p>
                                <span className='fs-5 '>Unit Test-</span>
                                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                            </p>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>Question: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</strong>
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Answer</strong>
                            <p>
                                products = [...] is just copy a array but not possible update the main array. On the other hand, onst [products, setProducts] = useState([]) is way get the array and update the main array.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;