import image from '/PersonalPhoto.jpg'

export default function AboutMe(){
    return <div><p>My name is Yehor Valeiuk. I am Current student of Software Engineering Technology, specializing in Artificial Intelligence. 
        I Completed multiple software development applied projects,  demonstrating proficiencies with web development, creating interfaces, managing databases, using Agile practices and testing/debugging. 
        I continue studying with passion new technologies and develop myself.
        </p>
        <br></br>
        <img src={image} id = "aboutImage" />
        <br></br>
        <br></br>
        <br></br> 
        <a href="Resume.docx" className = "Button" download>Resume</a></div>
        
}