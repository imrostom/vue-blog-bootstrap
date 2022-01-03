<template>
<section class="contact-section-area">
    <div class="container">
        <div class="contact-form">
            <div class="contact-image">
                <img src="../assets/images/contact.png" alt="rocket_contact" />
            </div>
            <form method="POST">
                <h3>Drop Us a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group mb-4">
                            <input type="text" name="name" class="form-control " placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group mb-4">
                            <input type="text" name="email" class="form-control " placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group mb-4">
                            <input type="text" name="subject" class="form-control " placeholder="Your Subject *" value="" />
                        </div>
                        <div class="form-group mb-4">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="message" class="form-control " rows="6" placeholder="Your Message *"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>   
</template>
<script>
export default {
  name: "Contact",
};
</script>