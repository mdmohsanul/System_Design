# React Testing Library

JavaScript testing utility that provides virtual DOM for testing components.

- React Testing Library provides a virtual DOM which we can use to interact with and verify the behaviour of a react component.

- Testing library is infact a family of packages which helps tests UI components.

- The core library is called DOM Testing library and RTL is simply a wrapper around core librrayto test react application in an easier way

# RTL Philosophy

"The more your tests resemble the way your software is used, the more confidence they can give you."

Tests we are going to learn to write in this series strike a balance between unit tests in the sense they are at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a user would interact with the component

With React Testing Library, we are not concerned about the implementation details of a component

Instead we are testing how the component behaves when a user interacts with it

RTL will not care if you add 4+4 or 5+3 to display the number 8

Refactoring will not affect your test as long as the end result is the same