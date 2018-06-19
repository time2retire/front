<img src="appicon.png" width="200" />


# Time2Retire

Time2Retire is a social security calculator app that is built through
using Ionic's framework.

The main purpose of this app, is to help to give a user the best age
to retire, which is based on the user's input. That input is then 
taken, calculated, and displayed to the user visually through a chart.

A user must first signup with a new account in order to access these 
features. That account is saved in our backend, and the date of birth
that was part of that account, would be used as the default date when
generating a uer's chart.

The app itself is designed to be both intuitive and simple, so that 
any user can access and utilize it with relative ease. 

## Table of Contents

1. [Getting Started](#getting-started)
2. [Profile Page](#profile-page)
3. [Sidemenu](#sidemenu)
4. [Create Chart](#create-chart)
5. [Viewing Chart](#viewing-chart)

## <a name="getting-started"></a>Getting Started

When first opening the app, the user is presented with a simple tutorial, 
which is displayed through a series of slides. Each of the slides contains
a snapshot of each page of the app which is followed by a simple description.
A user may skip it at any time by tapping "skip" on the top right hand
corner.

After exiting the tutorial section, the user is brought to our welcome page,
in which he or she can sign into our app if they already have an account 
by tapping the "sign in" button, or creating an entirely new account by 
tapping the "sign up" button.

If the user is signing up for a new account, they simplay have to fill out all
fields relating to their first and last name, their email address, their date
of birth, and their password. Once that is done, the user will be able to access
our app.

## <a name="profile-page"></a>Profile Page

Once a user has signed in, they are directed to our profile page. In the top
section of the profile page, the user is shown their basic account information, 
specifically their name, email, and date of birth. A user may change any of their 
profile details at any time by tapping the edit icon on the top right hand side of 
the profile box.

The bottom "saved charts" box displays a user's custom charts if there are any. If 
they don't have any charts saved, a user can simply tap the "generate chart" button 
at the very bottom. If they have some charts saved, the user may tap on any of their 
charts to view them.

## <a name="sidemenu"></a>Sidemenu

Every page of our app has a hamburger icon located at the top left hand side of the 
screen. Tapping it displays a sidemenu which allows the user to quickly navigate to
any part of our app.

The sidemenu is also the only place where the user can sign out of our app. Simply 
tapping the sign out area will allow the user to leave our app.

## <a name="create-chart"></a>Create Chart

Whenever a user wants to create a new chart, they must fill in all appropriate fields
in order to generate a new chart. 

Their account's date of birth will be used as the default value, but the user can 
adjust it whenever they want.

The other input areas, relates to their monthly income and the amount they have 
contributed to social security so far. Additional info buttons located on the 
right hand side of each of the two input fields, provides the user with helpful
information about what to enter in each of the input fields.

When all input fields are filled out, the user can tap the "generate chart"
button at the very bottom to display a completely new chart.

All of this inputed infomration is used to calculate their best age to retire.

## <a name="viewing-chart"></a>Viewing Chart

Once a user has inputed all of the required information in the "create a chart"
page and then tapped the "generate chart" button, the user is then directed to
a new page which displays their new chart.

At the top of the chart, is their calculated best age to retire and the age 
in which they will start to break even in the amount of monthly benefits
they receive.

The chart itself is a visual representation of a user's best retirement age, 
displaying their montlhly benefits in the blue bar, and the amount they 
contributed in the red bar.

A slider located at the bottom of the chart can adjust both the age a user 
retires, indicated in blue, and their life expectancy indicated in orange.
Adjusting these values in turn adjusts the above displayed chart accordingly.

If the user is satisfied with these changes, they can tap the "save chart" 
button below. If they are not satisfied with the chart, they can tap the 
"clear chart" button, which will redirect them back to the "create a chart"
page.

