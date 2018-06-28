<img src="appicon.png" width="200" />


# Time2Retire

Time2Retire is a Social Security calculator app built
using the Ionic framework.

The main purpose of this app is to give the user their best age at which
to retire based on their input. That input is then 
taken, calculated, and displayed to the user visually through a chart.

A user must first sign up with a new account in order to access these 
features. That account is saved on the backend, and the registered user's date of birth
would be used as the default date when
generating their chart.

The app itself is designed with simplicity in mind.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Profile Page](#profile-page)
3. [Sidemenu](#sidemenu)
4. [Create Chart](#create-chart)
5. [Viewing Chart](#viewing-chart)

## <a name="getting-started"></a>Getting Started

<img src="Time2Retire 01 Welcome 01.png" height="600" width="300"/>

When first opening the app, the user is presented with a simple tutorial displayed through a series of slides. 
Each of the slides contains a snapshot of each page of the app, followed by a simple description.
The user may skip it at any time by tapping "skip" on the top right hand
corner.

After exiting the tutorial section, the user is brought to our welcome page 
where he or she can sign into our app if they already have an account 
by tapping the "sign in" button, or creating an entirely new account by 
tapping the "sign up" button.

If the user is signing up for a new account, they simply have to fill out all
fields relating to their first and last name, email address, date
of birth, and password. 

## <a name="profile-page"></a>Profile Page

<img src="Time2Retire 02 Profile.png" height="400" width="220"/>

Once a user has signed in, they are directed to our profile page. In the top
section of the profile page, the user is shown their basic account information, 
specifically their name, email, and date of birth. The user may change any of their 
profile details at any time by tapping the edit icon on the top right-hand side of 
the profile box.

The bottom "saved charts" box displays a user's custom charts if they have saved any. If 
they don't have any charts saved, they can simply tap the "generate chart" button 
at the very bottom. If they have some charts saved, the charts will be displayed
with pertinent information, and the user may tap on any of their saved
charts to view them.

## <a name="sidemenu"></a>Sidemenu

<img src="Time2Retire 03 Hamburger-Sidemenu.png" height="400" width="220"/>

Every page of our app has a hamburger menu icon located at the top left hand side of the 
screen. Tapping it displays a sidemenu which allows the user to quickly navigate to
any part of our app.

The sidemenu is also the only place where the user can sign out of our app. Simply 
tapping the sign out area will allow the user to leave our app, leading them back to the landing page.

## <a name="create-chart"></a>Create Chart

<img src="Time2Retire 04 Create Chart.png" height="400" width="220"/>

Whenever a user wants to create a new chart, they must fill in all appropriate fields
in order to generate a new chart. 

Their account's date of birth will be used as the default value, but the user can 
adjust it when they generate a new chart.

The other input areas relate to what they expect to receive in benefits each month 
and the amount they have contributed to Social Security so far. Additional info 
buttons located on the right hand side of each of the two input fields provide the 
user with helpful information about what to enter in each of the input fields.

When all input fields are filled out, the user can tap the "see results"
button at the very bottom to display a completely new chart.

All of this infomration is used to calculate their best age to retire.

## <a name="viewing-chart"></a>Viewing Chart

<img src="Time2Retire 05 Show Chart 01.png" height="400" width="220"/>

Once a user has input all of the required information in the "create a chart"
page and then tapped the "generate chart" button, the user is then directed to
a new page which displays their new chart.

At the top of the chart is their calculated best age to retire and the age 
in which they will start to break even in the amount of monthly benefits
they receive.

The chart itself is a visual representation of a user's best retirement age, 
displaying their monthly benefits in the green bar to the left, and the total benefit amount they will
receive on the blue bar to the right. Floating values will indicate the precise amounts
respectively.

A slider located at the bottom of the chart can adjust both the age the user 
retires, indicated in blue, and their life expectancy indicated in orange.
Adjusting these values in turn alters the the chart accordingly.

If the user is satisfied with these changes, they can tap the "save chart" 
button below. If they are not satisfied with the chart, they can tap the 
"clear chart" button, which will redirect them back to the "create a chart"
page.

