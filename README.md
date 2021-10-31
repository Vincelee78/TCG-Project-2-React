## TCG-Project-2-React-MedRadiology
To create an open-edit educational radiology resource that has been primarily compiled by radiologists and radiology trainees from across the world.

## Summary/User objectives:
Provide medical resources for millions of individuals from around the world and make it available for free, particularly those from low and middle-income regions who do not have access to traditional pay-wall resources.

## My goal/motivation for creating this project:
By sharing our collective experience through interesting patient cases, we can make a real difference in how people are imaged and diagnosed. It will allow accessibility of radiology information to medical professionals in developing countries.

## Context: 
I realised many medical professsionals in low and middle-income regions who do not have access to traditional pay-wall resources have limited exposure to medical resources. By creating this open-edit educational radiology resource, it will allow accessibility of radiology information to medical professionals from all around the world, particularly to these regions.

## Demo: 
A live website server can be found on the [Netlify server](https://project2-medradiology-vincent.netlify.app/App.js)

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

The landing page of the website comprises of a navbar, a carousel component( A visual representation of the radiology branch in medicine) using vanilla bootstrap and a Navtab using React bootstrap (with custom tweaking). The website has a blue background as blue is typically associated with credibility, trust, knowledge, professionalism, cleanliness, calm and focus. Because all of these qualities are valued in the medical community, blue is the ideal choice for medical related designs. 

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
| User wants to add a new radiology case| When in the landing page, user should scroll down and the featured case will be below the Carousel feature. In the nav tab under the featured case, user can click on the 'Add Case' in the 3rd tab on top of the Navtab to add a new case. User has to fill in all fields before he/she can add a new case (form validation). |
| User wants to add a new report| On the the nav tab under the featured case, user can click on the 'Create New Report' in the 2nd tab of the nav tab. User has to fill in all fields before he/she can add a new report (form validation). |
| User (radiologist) wants to add his own details | On the the nav tab under the featured case, user (radiologist) can click on the 'Add Radiologist' in the 4th tab of the nav tab. User has to fill in all fields before he/she can add his own details (form validation). |
| User wants to search for cases based on keywords| On the the nav tab under the featured case, user can click on the 'Search Cases' in the 5th tab of the base nav. User can enter keywords and the database will search in the 'Signs and Symptoms' section or the 'Case Discussion' section or 'Modality' section in each case and display all the case results based on the keywords. |
| User wants to edit the featured case| User can scroll down to the bottom of the featured case and click on the 'edit case' green button. All the fields will already be filled up based on the original case fields. User can click in any of the fields to edit the case. The radiologist ID cannot be edited as the case belongs to the radiologist who uploaded it. The published date (revised) will be automatically set to the current date. |
| User wants to know about the aim and objectives of the website | User can click on the About section in the Navbar on the top right of the screen in the landing page. |
| User wants to see all reports that have been uploaded | User can click on the reports section in the Navbar on the top right of the screen in the landing page. |
| User wants to delete reports that have been uploaded | User can click on the red delete button on the bottom of each report in the report section. |
| User wants to see all cases that have been uploaded | User can click on the All Cases section in the Navbar on the top right of the screen in the landing page. |
| User wants to filter cases based on criteria | User can click on 'Patients younger than 21' radio button or any of the other 3 radio buttons in the top of the navtab in the all cases page to filter the cases accordingly to the criteria. |
| User wants to edit the cases that have been uploaded | User can click on the green edit button on the left of each case in the all cases section. |
| User wants to delete the cases that have been uploaded | User can click on the red delete button on the left of each case in the all cases section. |
| User wants to check the radiologist details of each case | User can click on the blue coloured highlighted font under the radiologist ID in each case in the all cases section. A modal box will appear displaying the radiologist details of the current case. |
| User wants to favourite a case or a report | User can click the red hearts and give cases a rating on the right of each report or featured case. For the all cases section, the hearts rating is on the bottom of the radiological image. |
| User wants see all the radiologists details | User can click on the Radiologist Information page in the Navbar on the top right of the screen. |

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
<br> This project uses date-fns toolset to change the datetime format in mongoDB to a more readable date format in React.
* [FontAwesome 5.15.4](https://fontawesome.com/v5/changelog/latest)
<br> This project uses FontAwesome to add custom icons such as the heart icons for the ratings feature of the website.
* [Axios 0.21.1](https://www.npmjs.com/package/axios/v/0.21.1) 
<br> This project uses the axios plugin for Promise based HTTP client for the browser and make requests to an API, return data from the API.
* [MongoDB](https://www.mongodb.com/)
<br> This project uses MongoDB to store documents in the collections which the user has uploaded in React. 
* [ExpressJS 4.17.1](https://expressjs.com/)
<br> This project uses ExpressJS to provide methods to specify what function is called for a particular HTTP verb ( GET , POST , PUT , DELETE) and URL pattern and to retrieve data from MongoDB and send them to React or vice versa.

### 5. Testing
| Test Case Number| Test Case Description| Results|
| ------ | ------ | ------ |
| 1 | On the landing page, you should see a Carousel feature with a featured case below it. Clicking on the accordion 'Information on Featured Case' will collapse it. Clicking on the other accordions will pan out an information box explaining information based on the title on the accordion  | Pass |
| 2 | On the landing page, clicking on the green edit case button under the featured case will open a box containing all the fields(which have been pre-filled) to be edited. Clicking on the 'confirm' button will update the featured case accordingly to the fields that were filled up | Pass |
| 3 | On the landing page, clicking on the radiologist ID field value (highlighted blue) in the featured case will bring up a modal box to show the radiologist details R03, Dr Rachael Ang and her details | Pass |
| 4 | On the landing page, clicking on 2nd tab of the NavTab 'Create New Report' will render a form to be filled up. Filling up all the form fields will enable the create report button to be active. Clicking on the create report button next will will show a successful message and add a new report to the report page.  The new report will be shown as the last report in the report page in the Navbar | Pass |
| 5 | On the landing page, clicking on 3rd tab of the NavTab 'Add Case' will render a form to be filled up. Filling up all the form fields will enable the Add button to be active. Clicking on the add button next will show a successful message and add a new case to the all cases page. The new case will be shown as the last case in the All Cases page in the Navbar | Pass |
| 6 | On the landing page, clicking on 4th tab of the NavTab 'Add Radiologist' will render a form to be filled up. Filling up all the form fields will enable the Add new radiologist button to be active. Clicking on the add new radiologist button next will show a successful message and add a radiologist to the radiologist information page.The new radiologist details will be shown as the last row in the table in the radiologist information page in the Navbar | Pass |
| 7 | On the landing page, clicking on 5th tab of the NavTab 'Search Cases' will show a text box will a search icon. Entering the keyword fracture will display 2 cases. The first case is a CT with 2 sternal body fractures and the 2nd case is an ultrasound case with left chest wall trauma and pneumothorax diagnosis | Pass |
| 8 | From the landing page, clicking on the 'About' bar in the NavBar to show a new page which displays background information and the aims and objectives of the website | Pass |
| 9 | From the About page, clicking on the 'Reports' bar in the NavBar will show a new page which displays 2 reports that were already in the database  | Pass |
| 10 | In the reports page, clicking on heart icons will allow the hearts to be highlighted for a rating | Pass |
| 11 | In the reports page, clicking on the red delete button on the bottom of each report will delete the report | Pass |
| 12 | From the reports page, clicking on the 'All Cases' bar in the NavBar to show a new page which displays 5 cases that were already in the database. Clicking on the accordion just above the Carousel will collapse the Carousel feature to allow better scrolling to the cases below | Pass |
| 13 | In the all cases page, clicking on the radio button at the top 'Patients younger than 21' will filter the cases by the criteria and show 1 case which diagnosis is a bullet in the rectum X-ray. Clicking on the other radio buttons will filter to the criteria accordingly | Pass |
| 14 | In the all cases page, clicking on the green edit button on the left of each case image will display a box with the fields(pre-filled) to be edited. Clicking on the confirm button next will update that case fields. Clicking on the red delete button above the edit button will delete that case | Pass  |
| 15 | In the all cases page, clicking on heart icons under the radiological image of each case will highlight the heart icons accordingly. Clicking on 4 hearts will favourite the case as 4 stars. | Pass  |
| 16 | In the all cases page, clicking on the radiologist ID field value (highlighted blue) in the first case(MRI. prostate cancer) will bring up a modal box show the radiologist R02, Dr John Wong and his details | Pass |
| 17 | From the all cases page, clicking on the 'Radiologist Information' bar in the NavBar will show a new page which displays 4 radiologist details that were already in the database  | Pass |
| 18 | After testing the add, edit and delete buttons for the reports, featured case, all cases, radiologist information and all the functions above, I checked the express server terminal in my express/mongoDB gitpod to see whether there are any errors. There were no errors in my express server terminal  | Pass |


#### (i) Mobile Responsiveness
- The test results can be found [here](https://search.google.com/test/mobile-friendly/result?id=84WEjVlEU9HRktwiAVtipg). 
- Test results were done on 3 mobile devices
1. [Iphone SE 2020](https://drive.google.com/file/d/1B06e0L3hfUrrEeajgfzpnTTRQsVkN9NI/view?usp=sharing)
2. [Iphone SE 2020](https://drive.google.com/file/d/1jlnrQgIrxTtGkpZ26uqcvULjYThx2won/view?usp=sharing)
3. [Iphone7](https://drive.google.com/file/d/17JSsa8ndR0jqm9YPSC4i6wlzV6iq9ueP/view?usp=sharing)
4. [Iphone7](https://drive.google.com/file/d/1i-CZn-8A3UUucZ7DTT-Ph3HM76dxyXoy/view?usp=sharing)
5. [Oppo R17 pro](https://drive.google.com/file/d/1lqkfbubAylYw5RjCdXd7EkBEhw-S28CS/view?usp=sharing)
6. [Oppo R17 pro](https://drive.google.com/file/d/1tOywxp3MgakxsQFZ-tI2SM-UOcrHR4CN/view?usp=sharing)
- The web application is mobile responsive.

### 6. Credits and Acknowledgement
- Credits to https://radiopaedia.org/encyclopaedia/cases/all for the radiological images and radiology data.
- Credits to 
1. [Elsevier](https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG)
2. https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg
3. https://thumbnail.imgbin.com/21/9/7/imgbin-chevron-corporation-computer-icons-paper-down-arrow-zsjsUFtqHLkphdGeCb1rYSBxa_t.jpg
4. https://filmdaily.co/wp-content/uploads/2021/06/rad-01.jpg
5. https://i0.wp.com/swdic.com/wp-content/uploads/2020/08/Brain-MRI-min.jpg?fit=1973%2C963&ssl=1
6. https://image.shutterstock.com/image-photo/brain-ct-scan-head-computed-260nw-1390517843.jpg
7. https://www.philips.com/c-dam/b2bhc/master/Specialties/radiology/ivp-page/media-asset-IVP-radiology-workflows-700.jpg
8. https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X
9. https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg
10. https://flyclipart.com/radiology-clipart-radiology-clipart-211360
for their images, icons and logos
