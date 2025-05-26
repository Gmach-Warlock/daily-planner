

export default function ContactForm() {
    return (
        <div className="contact-form">
            <input type="text" name="new-contact-first-name-input" id="new-contact-name-input" /> <br />
            <label htmlFor="new-contact-name-input">First Name</label><br />
            <input type="text" name="new-contact-middle-name-input" id="new-contact-middle-name-input" /><br />
            <label htmlFor="new-contact-middle-name-input">Last Name</label><br />
            <input type="text" name="new-contact-last-name-input" id="new-contact-last-name-input" /><br />
            <label htmlFor="new-contact-last-name-input"></label><br />
            <input type="text" name="new-contact-last-name-input" id="new-contact-last-name-input" /><br />
            <label htmlFor="new-contact-last-name-input"></label><br />
            <input type="text" name="new-contact-address-input" id="new-contact-last-name-input" /><br />
            <label htmlFor="new-contact-address-input"></label><br />
            <input type="text" name="new-contact-phone-number-input" id="new-contact-last-name-input" /><br />
            <label htmlFor="new-contact-phone-number-input"></label><br />
        </div>
    );
};