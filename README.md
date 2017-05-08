# Front-end Developer Assessment

Thank you for taking the time to conduct the LeasePlan assessment for front-end developers. The purpose of which is to give us insight in your technical abilities, development approach and general technical working habits. 

The assessment consists of an assignment, to prepare beforehand and intended to take approximately 3-6 hours, and an in-person discussion of your solution. We view your performance on this assessment as indicative of the work you will deliver as a front-end developer at LeasePlan.

The assignment is the ‘Get a free year of driving promotion’, described below. Read the case carefully, and approach it as you would a regular project. Consider aspects such as robustness, maintainability, testing and user experience. The assignment should be implemented as a single-page application using React and Redux. Any API dependencies can be mocked away. When done, please create a Pull Request on this repository for a code review.

We ask you to treat this assessment as confidential so we can apply the scenarios to future candidates also. Your solution will not be kept after the assessment and will not be used by LeasePlan, but we would appreciate it if you would not place this into the public domain.

Good luck with the assignment!

## Assignment: ‘Get a free year of driving’ promotion

Background: To promote the new Private Leasing product, Leaseplan has decided to launch a campaign where users can win a free year of driving. Across the country, one thousand A2 posters will be spread around with promotional codes printed on them, one of which is the lucky one.

This assignment is split up into two user-stories.

#### LP-1: As LeasePlan I would like to have 1000 pregenerated promotion codes for use on printed posters.

The promotion code should be of the following format:

* Nine numerical characters
* When multiplying the first number by 9, the second by 8, the third by 7, and so on... the resulting number should be divisible by 11 and a single digit may not appear more the twice.

Examples:
* 613884922 is valid, because 6&times;9 + 1&times;8 + 3&times;7 + 8&times;6 + 8&times;5 + 4&times;4 + 9&times;3 + 2&times;2 + 2&times;1 = 220 / 11 = 20 (whole number, no digit is repeated 3+ times)
* 538820102 is invalid, because 5&times;9 + 3&times;8 + 8&times;7 + 8&times;6 + 2&times;5 + 0&times;4 + 1&times;3 + 0&times;2 + 2&times;1 = 188 / 11 = 17.09 (not a whole number)
* 131888331 is invalid (digits 1, 3 and 8 appear too often)

Note: you can store the 1000 codes in any format. Please also keep the source code by which you generated them.

#### LP-2: As a user I want to be able to enter my personal information and promotion code to see if I've won a prize.

You can use the design and assets found in this repository. Please don’t spend too much time in making it pixel perfect.

The form should consist of:
* Firstname + Surname fields
* Email address field
* Promotion code field
* Checkbox agreeing to the use of the e-mail address for marketing purposes

Validation rules:
* All fields are required, a warning should be shown if left empty on submit
* The firstname field should contain only alphabetic characters and be at least two characters in length
* The email field should be validated for a valid email address
* The promotion code should be valid (use the rules from LP-1)

When the user clicks submit:
* The form should be validated
* An api call should be made (sending all form data) to check if the entered promotion code is the winning one (note: the api itself can be mocked, but please do write the front-end code required to make the api call)
* Show either a “You won” or a “Better luck next time” screen. Since there is no actual api, make the user win randomly 1/10th of the time.