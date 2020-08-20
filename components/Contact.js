import "../styles/contact.scss";

export default function Contact(props) {
    return (
        <div className="contact-container contact-container--styles">
        <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c" />
            <input type="text" name="name" />
            <input type="text" name="subject" />
            <input type="text" name="email" /> 
            <input type="text" name="phone" /> 
            <textarea name="message"></textarea> 
            <input type="text" name="replyTo" value="myreplytoemail@example.com" />
            <input type="hidden" name="replyTo" value="@" />
            <input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}