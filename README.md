![image](https://github.com/user-attachments/assets/14e4cb47-908b-4412-855c-87c0d124a055)

# [HAROKOPIO OPEN TECHNOLOGIES](https://hot.dit.hua.gr/) ![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

Harokopio Open Technologies (HOT), created in 2018, embodies a spirit of innovation and collaboration, drawing its vibrant energy from the community at Harokopio University of Athens. Our team is a dynamic blend of individuals who are deeply passionate about technology. We are dedicated to the development and promotion of open-source technologies. HOT is built on a foundation that encourages knowledge sharing and creativity, aiming to leverage the collective intelligence of our members to forge innovative solutions. Our ethos centers around openness, inclusivity, and the democratization of technology. Through these principles, we endeavor to make a significant impact in the technological field and contribute meaningfully to the worldwide community of open-source enthusiasts.
<br/><br/>

## Installation
1) Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2) Clone this repository to your local machine.
3) In the project directory, run: `npm install`.
4) In the project directory, run: `npm start`.
5) Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
<br/>

## Deployment
1) In the project directory, you can run: `npm run build`.
2) Deploy the build folder to the server.
<br/>

## Troubleshoot routing
Navigate to your server directory where `intex.html` is located. Create a file named `.htaccess` with the following code and save the changes.
   ```
   <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
   </IfModule>
   ```
<br/>

## Software Development Team
* Stylianos Zindros
* Christos Chronis
<br/>

## Special thanks
For the development of this website, we used [Material Kit 2 React](http://demos.creative-tim.com/material-kit-react/#/?ref=readme-mkr) from [Creative Tim](https://www.creative-tim.com/) and we want to thank them for this amazing theme.
