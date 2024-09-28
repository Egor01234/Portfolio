import image1 from '/Project1.jpeg'
import image2 from '/Project2.jpg'
import image3 from '/Project3.jpg'

export default function Projects(){
    return <div>
        <h3>Web Design - HTML, CSS, JavaScript</h3>
        <br></br>
        <a href="https://github.com/Egor01234/Real-Estate-website.git"><img src={image1} className = "projectImage" /></a> <p>•	Created a listed web page for real estate website with multiple webpages, navigation bar, rating section and listed houses pictures<br></br>
•	Designed a user-oriented and responsive page that is aesthetically pleasing
</p><br></br>
<h3>Database Management - SQL </h3>
<br></br>
        <a href="https://www.google.ca/"><img src={image2} className = "projectImage" /></a> <p>•	Designed as a group member an SQL project that represents data structure of media stream service <br></br>
•	Database contained 10 tables and at least 5 to 10 attributes in each table. All information was strictly linked
</p><br></br>
<h3>Area calculator - C#</h3>
<br></br>
        <a href="https://www.google.ca/"><img src={image3} className = "projectImage" /></a> <p>•	Created and app that according on chosen figure type and its sizes data input can calculate its area<br></br>
•	Code uses class overriding for choosing the figure type and area calculating formula to it.
</p><br></br>
    </div>
}