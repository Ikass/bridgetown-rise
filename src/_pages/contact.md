---
layout: markdown
title: Contact
---

<form action="/contact/" method="POST">
  <fieldset class="">
  <p>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </p>

  <p>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </p>

  <p>
    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>
  </p>

  <button type="submit">Send</button>
  </fieldset>
</form>
