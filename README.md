# Validation Form

### Project With HTML Pattern

#### Step 1: Set up and planning

1.  Set up your git repository (refer to past projects if you need a refresher).
2.  Set up your HTML and CSS files with some dummy content, just to make sure you have everything linked correctly.
3.  Download a full-resolution copy of  [the design file](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png), and get a general idea for how you’re going to need to lay things out in your HTML document.

#### Step 2: Gather assets

1.  The design has a large background-image, so go find and download an image you want to use for that section. The one in the design can be found on  [unsplash.com](https://unsplash.com/photos/25xggax4bSA), but feel free to select your own. Be sure to credit the creator of your image!
2.  Pick an external font for the ‘logo’ section. We’ve used  [Norse Bold](https://cdn.statically.io/gh/TheOdinProject/theodinproject/efdc2888072f409e687d31dc580595dbe4fe0ff4/app/assets/fonts/Norse-Bold.otf), but you can use any font you like.
3.  For the image-sidebar, we’ve used  [this Odin logo](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png). Again, feel free to replace it.

#### Step 3: Some tips!

1.  How you attack this project is mostly up to you, but it is wise to begin by scaffolding out the structure of the page, and then tackle the various sections one by one.
2.  The area behind the “ODIN” logo is a div that has a dark, but semi-transparent background color. This enhances the readability of the text against the busy background image.
3.  The color we’ve chosen for the ‘Create Account’ button is similar to tones found in the background image. Specifically, it is  `#596D48`.
4.  The inputs, by default have a very light border (`#E5E7EB`), but we’ve included 2 variations. For starters, the password inputs should be given an  `error`  class.
5.  The other variation is the selected input, which should have a blue border and subtle box-shadow. This can be done with the  `:focus`  pseudo-class you’ve learned about in an earlier lesson.
6.  Do not worry about making your project look nice on mobile, but DO resize your browser a little bit to make sure that it’s not completely broken at different desktop resolutions.
7.  Checking that the password fields match each other requires javascript. Try to implement this if you feel confident, otherwise just validate each field separately.

#### Solution
>  **Validation with HTML pattern**  [Link Preview ](https://asaks84.github.io/form-validation/usingHTMLPattern/)

<hr>

### Project with JS Constraints

Build a browser form that collects Email, Country, Zip Code, Password and Password Confirmation fields. It should use live inline validation to inform the user whether a field is properly filled in or not. That means highlighting a field in red and providing a helpful error message until it has been filled in properly.

The form doesn’t need to submit, but you should give an error message if the button is pushed with any active errors or unfilled required fields. For the sake of this lesson, make sure **all** of the validation occurs in the JavaScript file. If all is well and the form is “submitted”, give the user a high five.

1. Set up a blank HTML document

2. Think about how you would set up the different form elements and their accompanying validators. What objects and functions will you need? A few minutes of thought can save you from wasting an hour of coding. The best thing you can do is whiteboard the entire solution before even touching the computer.

3. Write the form elements.

4. Add the JavaScript code that checks validation as the user progresses through the form. When a user leaves a form field, it should automatically validate that field.

5. Test out all possible cases.

6. Don’t forget to style validations with CSS by using the `:valid` and `:invalid` pseudo-classes!


#### Solution
>  **Validation with JS**  [Link Preview ](https://asaks84.github.io/form-validation/usingConstraint/)
