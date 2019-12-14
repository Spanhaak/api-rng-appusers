# Description
A small MOCK project to deliver an API with 3 endpoints.

## What does it do?
The API delivers three endpoints which produce a set of random fake user count numbers.
The generated numbers are used as proof in a observatory dashboard to show the information retrieved by the API Endpoints.

**Endpoints:**
* /usercount
* /floatingcount
* /fixedcount

[Location of the API](http://locahost:8080/ "http://localhost:8080/") and http://localhost:8080/
One can change the port in the index.js file

## Dashboards
The API Endpoint values are captured in a time-series DB and diplayed by a dashboarding solution.

<img src="https://github.com/Spanhaak/api-rng-appusers/blob/master/images/total.png" width="250"> <img src="https://github.com/Spanhaak/api-rng-appusers/blob/master/images/fixed.png" width="250"> <img src="https://github.com/Spanhaak/api-rng-appusers/blob/master/images/floating.png" width="250">
