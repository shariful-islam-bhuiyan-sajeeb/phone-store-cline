import React from 'react';
import UseTitle from '../../Hook/UseTitle/UseTitle';

const Blog = () => {
    UseTitle('blog')
    return (
        <section className="dark:bg-gray-800 mt-20 rounded-lg dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4 pb-10">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components.Redundant or duplicate state is a common source of bugs.In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
                    </details>
                    <details className="w-full border rounded-lg mb-10">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">React is one of the most popular JavaScript projects with 160k stars on GitHub.Its developed and maintained by Facebook, and its used internally in many of their projects. Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You..Angular is developed by Google, but surprisingly its not used in some of their flagship products such as Search or Youtube. Its often used in enterprise projects, and it powers over 97,000 websites based on BuiltWiths data</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;



    


    


    


