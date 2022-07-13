# Angular Dependency Injection examples

These two examples will cover all the essential information you need to understand, to be comfortable using the Dependency Injection mechanism in Angular.

Imagine you need to create a widget. The widget should show some information which receives from a service. There are more than one widgets that could be posted on one page. You will easily find two buttons on the page. When you click on the button you will see three widgets. They will show you some information after some delay.

There are no differences between a good example and a bad example on the UI part. Let's dive into a code and look at why one example is significantly better than another.

## Bad example

There is a bad example module that imports the widget module and three services and declares one root component. The widget module has a widget component that has `@Input()`. An interface of `@Input()` is a pretty simple object `{text: string; count: number}`; So the bad thing is that every service is injected into the root component for passing data to the widgets. If you add ten widgets to the page you will inject ten services. In addition to that if you need to map the result before pass it to the widget you will have not only ten injectors but also the root component will contain lots of lines of code and this code does not relate to the root component.

## Good example

First and foremost I would like to pay your attention to a DI widget module. There are some differences between this one and the widget module. If you open `widget-data.provider.ts` you will find that I create a token `WIDGET_DATA` that can be used in a DI Provider. Read more about it you can [here](https://angular.io/api/core/InjectionToken) Additionally, I created `WIDGET_DATA_PROVIDER`. It means that when a component injects `WIDGET_DATA` it receives an object `{count: 999, text: 'Default widget data'}` as a default value. Let's navigate to the widget component and figure out how to use it. As you can see I get rid of `@Input()` and use `@Inject()` decorator. Also, I added a new property to `@Component()` decorator. The property is called `providers`. The `providers` property is Array and has one value `WIDGET_DATA_PROVIDER`. I bet you know that declaring a service we can use not only `providedIn: 'root',` property but also into a module or a component and I am doing it into the component because I need to rewrite the behavior in the future. So, that's all about `di-widget` module and I hope my explanation is clear enough (you could always create a PR).

There is only one question left how to use it. Let's open `good-example` module. Not only are there components folder but also directives. Let's open the directives folder. There are three directives and everyone is too small. There are two properties into `@Directive()` decorator and we are only interested in `providers` property. Here I specify a factory function that has one dependency FirstService and when a component injects `WIDGET_DATA` it should call this factory and return the value.
Last but not least let's open the `components` folder. There is only one root component. There are no dependencies in the constructor. Let's open `widget.template.html`. As you can see I use `<di-widget appFirstData></di-widget>` component and the `appFirstData` directive as an attribute. It is the directive that is responsible for overriding the value of `WIDGET_DATA`.

## Conclusion

Using the Dependency Injection mechanism in Angular we don't clutter up the component redundant logic on how to receive and map some data. In addition to that, every directive has only one responsibility which means that we have complied with the principles of (SOLID)[https://en.wikipedia.org/wiki/SOLID] it is also really easy to cover its unit tests.
