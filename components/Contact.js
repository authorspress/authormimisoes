import "../styles/contact.scss";

export default function Contact(props) {
    return (
        <div className="contact-container contact-container--styles">
            <h1 className="contact-title contact-title--styles">
                Contact me
            </h1>
        <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c" />
            <input type="text" name="name" placeholder="name" />
                <input type="text" name="subject" placeholder="subject"  />
                <input type="text" name="email" placeholder="email" /> 
                <textarea name="message" placeholder="your message" ></textarea>
            <input type="hidden" name="replyTo" value="@" />
            <input type="hidden" name="redirectTo" value="https://example.com/contact/success" />
            <input className="contact-btn contact-btn--styles" type="submit" value="Submit" />
        </form>
        </div>
    )
}