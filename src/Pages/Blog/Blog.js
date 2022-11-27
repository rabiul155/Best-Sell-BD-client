import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' m-6'>
                <h2 className=' text-3xl font-bold text-center m-4'>What are the different ways to manage a state in a React application?</h2>
                <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.There are four main types of state you need to properly manage in your React apps:Local state Global state Server state URL state </p>
            </div>
            <div className=' m-6'>
                <h2 className=' text-3xl font-bold text-center m-4'>How does prototypical inheritance work?</h2>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object. </p>
            </div>
            <div className=' m-6'>
                <h2 className=' text-3xl font-bold text-center m-4'>What is a unit test? Why should we write unit tests?</h2>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
            </div>
            <div className=' m-6'>
                <h2 className=' text-3xl font-bold text-center m-4'>React vs. Angular vs. Vue?</h2>
                <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.Each framework is component-based and allows the rapid creation of UI features.However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
            </div>
        </div>
    );
};

export default Blog;