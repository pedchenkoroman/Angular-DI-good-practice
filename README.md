# Angular Dependency Injection examples

These two examples will cover all the essential information you need to understand, to be comfortable using the Dependency Injection mechanism in Angular.

Imagine you need to create a widget. The widget should show some information which receives from a service. There are more than one widgets that could be posted on one page. You will easily find two buttons on the page. When you click on the button you will see three widgets. They will show you some information after some delay.

There are no differences between a good example and a bad example on the UI part. Let's dive into a code and look at why one example is significantly better than another.

## Bad example

There is a bad example module that imports the widget module and three services and declares one root component. The widget module has a widget component that has `@Input()`. An interface of `@Input()` is a pretty simple object `{text: string; count: number}`; So the bad thing is that every service is injected into the root component for passing data to the widgets. If you add ten widgets to the page you will inject ten services. In addition to that if you need to map the result before pass it to the widget you will have not only ten injectors but also the root component will contain lots of lines of code and this code does not relate to the root component.

## Good example

First and foremost I would like to pay your attention to a DI widget module. There are some differences between this one and the widget module. If you open `widget-data.provider.ts` you will find that I create a token `WIDGET_DATA` that can be used in a DI Provider. Read more about it you can [here](https://angular.io/api/core/InjectionToken)
