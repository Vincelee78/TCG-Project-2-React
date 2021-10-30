## TCG-Project-2-React-MedRadiology
To create an open-edit educational radiology resource that has been primarily compiled by radiologists and radiology trainees from across the world.

## Summary/User objectives:
Provide medical resources for millions of individuals from around the world and make it available for free, particularly those from low and middle-income regions who do not have access to traditional pay-wall resources.

## My goal/motivation for creating this project:
By sharing our collective experience through interesting patient cases, we can make a real difference in how people are imaged and diagnosed. It will allow accessibility of radiology information to medical professionals in developing countries.

## Context: 
I realised many medical professsionals in low and middle-income regions who do not have access to traditional pay-wall resources have limited exposure to medical resources. By creating this open-edit educational radiology resource, it will allow accessibility of radiology information to medical professionals from all around the world, particularly to these regions.

## Demo: 
A live website server can be found on the [Netlify server](https://elastic-curran-38a9bb.netlify.app/App.js)

## Index:
1. UX/UI
2. Features/ Use cases
3. Future features to implement
4. Technologies used
5. Testing
6. Credits and Acknowledgement

### 1.UX/UI 
#### (i) Project Scope
The project skeleton and structure (wireframes) can be found [here](https://docs.google.com/presentation/d/1r3uRtZ84-57iqgLmMAJV3P0vj6UffkV1/edit?usp=sharing&ouid=100349503230330665538&rtpof=true&sd=true)
#### (ii) Design
The bootstrap plugin was used for the react component of the website (with custom tweaking) as it allows for better visual design of buttons and also an easy grid layout.

The landing page of the website comprises of a navbar and a carousel component( A visual representation of the radiology branch in medicine) using vanilla bootstrap. The website has a blue background as blue is typically associated with credibility, trust, knowledge, professionalism, cleanliness, calm and focus. Because all of these qualities are valued in the medical community, blue is the ideal choice for medical related designs. 

The tabs in the Navbar have large fonts and are highlighted in a darker colour when it is being hovered over for easy reading.

The colour palette consist of a blue add button as blue is universally associated with the medical field. The edit button is green as it is visually pleasing. The delete button is red in colour which indicates danger and caution in which deleting a case is permanent and it will removed permanently.

The font colours are bright if they are against a dark background and dark if they are against a light background for easier reading.

The radiologist ID links are highlighted blue as it directs attention to the user to notice it.

The layout of the webpage is not overly complex and easy to use. Custom markers such as the heart ratings were created to allow the user to favourite a case or report and to enhance the visual experience of users.

Font size is relatively large and easy to read. 

For a better user experience for mobile devices, I repositioned the tabs so it fills up the whole width of the mobile device so that the radiograph image will occupy the whole width of the screen for easier visualisation of the image.


### 2. Features/ Use Cases
Based on the user's needs and objectives, these are the guidelines for the features that were implemented.
| User Stories| Features|
| ------ | ------ |
| User wants to add a new radiology case| When in the landing page, user can see the featured case. On the nav tab under the featured case, user can click on the 'Add Case' in the 3rd tab of the base nav to add a new case. User has to fill in all fields before he/she can add a new case (form validation). |
| User wants to add a new report| On the the nav tab under the featured case, user can click on the 'Create New Report' in the 2nd tab of the base nav. User has to fill in all fields before he/she can add a new report (form validation). |
| User(radiologist) wants to add his own details | On the the nav tab under the featured case, user(radiologist) can click on the 'Add Radiologist' in the 4th tab of the base nav. User has to fill in all fields before he/she can add his own details (form validation). |
| User wants to search for cases based on keywords| On the the nav tab under the featured case, user can click on the 'Search Cases' in the 5th tab of the base nav. User can enter keywords and the database will search in the 'Signs and Symptoms' section or the 'Case Discussion' section or 'Modality' section in each case and display all the case results based on the keywords. |
| User wants to edit the featured case| User can scroll down to the bottom of the featured case and click on the 'edit case' green button. All the fields will already be filled up based on the original case fields. User can click in any of the fields to edit the case. The radiologist ID cannot be edited as the case belongs to the radiologist who uploaded it. The published date (revised) will be automatically set to the current date. |
| User wants to know about the aim and objectives of the website | User can click on the About section in the Navbar on the top right of the screen in the landing page. |
| User wants to see all reports that have been uploaded | User can click on the reports section in the Navbar on the top right of the screen in the landing page. |
| User wants to delete reports that have been uploaded | User can click on the red delete button on the bottom of each report in the report section. |
| User wants to see all cases that have been uploaded | User can click on the All Cases section in the Navbar on the top right of the screen in the landing page. |
| User wants to filter cases based on criteria | User can click on 'Patients younger than 21' radio button or any of the other 3 radio buttons in the top of the base nav tab in the all cases section to filter the cases accordingly to the criteria. |
| User wants to edit the cases that have been uploaded | User can click on the green edit button on the left of each case in the all cases section. |
| User wants to delete the cases that have been uploaded | User can click on the red delete button on the left of each case in the all cases section. |
| User wants to check the radiologist details of each case | User can click on the blue coloured font under the radiologist ID in each case in the all cases section. A modal box will appear displaying the radiologist details of the current case. |
| User wants to favourite a case or a report | User can click red hearts and give it a rating on the right of each report or the featured case. For the all cases section, the hearts rating is on the bottom of the radiological image. |
| User wants see all the radiologists details | User can click on the Radiologist Information section in the Nav top on the top right of the screen in the landing page. |

#### (i) Known Bugs
- When clicking on the radio button to filter the criteria in all cases, if there are more than 1 case result, the radio button will not be checked on the first click. The results will be filtered on the first click though.
- If this happens, clicking on the radio button again will check it.

### 3. Future Features To Implement
- A feature for users to attempt a quiz and submit their answers.

### 4. Technologies Used
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
<br> This project uses HTML5 to structure the content and to insert buttons and images.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
<br> This project uses CSS to add visual colors, adjust the size of the features and also positioning and animation of the features, and ensure it is mobile responsive.
* [React 17.0.2](https://reactjs.org/)
<br> This project uses React as a frontend application for building user interfaces.
* [Bootstrap 5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
<br> This project uses Bootstrap to structure the layout of the website such as my Navtab and added features such as Carousel. It is also used in positioning the text and features.
* [React Bootstrap](https://react-bootstrap.github.io/)
<br> This project uses React Bootstrap for added features such as the Nav tabs and allow the displaying of the data in each individual tab by tweaking the handleSelect code in the original code. I also used it for the Modal box, Accordion display,  Overlay display and the Tooltip display for the User favourite rating feature.
* [date-fns](https://date-fns.org/)
* <br> This project uses date-fns toolset to change the datetime format in mongoDB to a more readable date format in react.
* [Axios 0.21.1](https://www.npmjs.com/package/axios/v/0.21.1) 
<br> This project uses the axios plugin for Promise based HTTP client for the browser and make requests to an API, return data from the API.
* [MongoDB](https://www.mongodb.com/)
<br> This project uses MongoDB to store documents in the collections which the user has uploaded in React. 
* [ExpressJS 4.17.1]
<br> This project uses ExpressJS to provide methods to specify what function is called for a particular HTTP verb ( GET , POST , PUT , DELETE) and URL pattern ("Route"), and to retrieve data from MongoDB and send them to React or vice versa.

### 5. Testing
| Test Case Number| Test Case Description| Results|
| ------ | ------ | ------ |
| 1 | On the landing page, user should see a Carousel feature with a featured case. User can click on the collapsible accordion for info on the featured case. | Pass |
| 2 | On the landing page, user can click on the green edit button to edit the featured case | Pass |
| 3 | On the landing page, user can click on the radiologist ID field value (highlighted blue) in the featured case to bring up a modal box to show the radiologist details for the case | Pass |
| 4 | On the landing page, user can click on 2nd tab of the NavTab 'Create New Report' and fill in the fields to add a new report. The new report will be shown as the last report in the report page in the Navbar | Pass |
| 5 | On the landing page, user can click on 3rd tab of the NavTab 'Add Case' and fill in the fields to add a new case. The new case will be shown as the last case in the All Cases page in the Navbar | Pass |
| 6 | On the landing page, user can click on 4th tab of the NavTab 'Add Radiologist' and fill in the fields to add their radiologist details. The new radiologist details will be shown as the last row in the table radiologist information page in the Navbar | Pass |
| 7 | On the landing page, user can click on 5th tab of the NavTab 'Search Cases' and enter keywords to search for cases with those keywords. The results will be displayed in the same tab in the 'Search Cases' tab | Pass |
| 8 | On the landing page, user can click on the 'About' bar in the NavBar to show a new page which displays background information and the aims and objectives of the website | Pass |
| 9 | On the landing page, user can click on the 'Reports' bar in the NavBar to show a new page which displays all reports  | Pass |
| 10 | In the reports page, user can click on heart icons to give a rating for each report | Pass |
| 11 | In the reports page, user can click on the red delete button on the bottom of each report to delete the report | Pass |
| 12 | From the reports page, user can click on the 'All Cases' bar in the NavBar to show a new page which displays all cases. Clicking on the accordion just above the Carousel will collapse the Carousel to allow better navigation of all the cases  | Pass |
| 13 | In the all cases page, user can filter the cases by the criteria by clicking on the radio buttons on the top of the Nav Tab. The results will be filtered accordingly | Pass |
| 14 | In the all cases page, user can edit or delete the cases by clicking on the respective buttons. The case will be updated or deleted accordingly | Pass  |
| 15 | In the all cases page, user can click on heart icons under the radiological image of each case to give a rating for the case | Pass  |
| 16 | In the all cases page, user can click on the radiologist ID field value (highlighted blue) in each case to bring up a modal box to show the radiologist details for the case | Pass |
| 17 | In the all cases page, user can click on the 'Radiologist Information' bar in the NavBar to show a new page which displays all radiologists details in a table | Pass |

#### (i) Mobile Responsiveness
- The test results can be found [here](https://search.google.com/test/mobile-friendly/result?id=GmhCwFfV7jG6u6Ot9ygTTQ). 
- Test results were done on 3 mobile devices
1. [Iphone SE 2020](https://drive.google.com/file/d/1uvnKRK0U9Mm15a5ZPn83R8LfCtMNGMn2/view?usp=sharing)
2. [Iphone7](https://drive.google.com/file/d/1fj5Tdu3Pkv3ovIwFAJPnVWCnTdWg2ow1/view?usp=sharing)
3. [Oppo R17 pro](https://drive.google.com/file/d/1u6HLpeHFTTer1080yVeVCeD_cBut1yIH/view?usp=sharing)
- The web application is mobile responsive.

### 6. Credits and Acknowledgement
- Credits to https://data.gov.sg/ for the geojson files used to locate hawkers and hotels.
- Credits to  https://developer.foursquare.com/, https://nominatim.org/ for data on eateries, hotels and geocoding for taxi coordinates.
- Credits to 
1. [Singapore Tourism Board](https://www.visitsingapore.com/)
2. https://www.thepoortraveler.net/2019/05/singapore-itinerary-things-to-do/
3. https://www.kids-world-travel-guide.com/singapore-attractions.html
4. https://www.iconfinder.com/icons/3138775/attractions_gardens_gardens_by_the_bay_landmarks_park_singapore_travel_icon 
5. [Gardens by the Bay](https://www.gardensbythebay.com.sg/)
6. https://www.clipartmax.com/middle/m2i8H7K9N4b1d3b1_singapore-merlion-clip-art-singapore-merlion-clipart/
7. [Marina Bay Sands](https://www.marinabaysands.com/)
8. https://thenounproject.com/term/singapore/668086/
9. [Universal Studios Singapore](https://www.rwsentosa.com/en/attractions/universal-studios-singapore/explore)
10. https://seeklogo.com/vector-logo/258502/universal-studios-singapore
11. http://getdrawings.com/get-icon#map-pin-icon-png-67.png
for their images, icons and logos
