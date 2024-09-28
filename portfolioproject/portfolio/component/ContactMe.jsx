export default function ContactMe(){
    return <div>
        <p>Phone number: 000-000-0000<br></br>
        Email: egor.valesyuk2005@gmail.com</p>
        <h2>Message Form</h2>
        <form>
        <label>First name: &nbsp; </label><br/>
        <input type="text" id="fname" className="formInput" size={30} minLength={1}/><br/>
        <label>Last name: &nbsp; </label><br/>
        <input type="text" id="lname" className="formInput" size={30} minLength={1}/><br/>
        <label>Contact number: &nbsp; </label><br/>
        <input type="phone" id="phone" className="formInput"size={30} placeholder="123-456-7890" maxLength={12} minLength={12} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/><br/>
        <label>Email: &nbsp; </label><br/>
        <input type="email" id="email" className="formInput" size={30} minLength={1}/><br/>
        <label>Message: &nbsp; </label><br/>
        <textarea id="text" className="formInput" rows={8} cols={50} minLength={1}/><br/>
        <a href="/" className = "Button">Send</a>
        </form>
    </div>
}