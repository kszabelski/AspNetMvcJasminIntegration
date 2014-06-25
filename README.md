AspNetMvcJasminIntegration
==========================

Sample setup of Jasmin unit tests in ASP.NET MVC application


#Content#
- Simple Web Application ASP.NET MVC project.
- Class library prepared to contain unit tests for JavaScript written in Jasmin.

Tests can by run by opening *SpecRunner.html* in browser or by Resharper unit tests runner.

Jasmin 2.0 require Resharper 8.2. Version of Jasmin used must be explicitly set in R# settings. 
Default configuration run tests in default browser and open new tab in each run. To avoid this Phantom.js can be used.


Alternatively JS tests may be run by Karma outside of VS. See [javascript-tests-template-environment](https://github.com/szabl/javascript-tests-template-environment) for insights how to do it.

Another usefull links on this topic:

- [https://github.com/pivotal/jasmine/tree/master/dist]()
- [http://wingkaiwan.com/2012/09/08/setting-up-jasmine-aspnet-mvc-requirejs/]()
- [http://lostechies.com/josharnold/2012/02/25/running-jasmine-specs-in-dotnet-with-serenity/]()
