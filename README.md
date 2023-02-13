## Description

This application is a demonstration of event selection app where user can select events and see two views of selected and all Events.

### Running the code

Once you have unzipped or clone the repo and ready to start, you can run `npm install` to install dependencies. After that, you can run:

```bash
npm run start
```

This will start the application in development mode.

You can see the client application running in your browser by going to http://localhost:3000.

You can run the test cases by using

```bash
npm run test
```

Note: Please do not change the dependcy versions in `package.json` file as older version of react might not support some features and might create conflict with other dependecies.

### Feature Support

-   User will be able to select the events from all event list
-   Selected events will be shown in selected list and user can remove them from there.
-   Once removed it will come back to all event list
-   User won't be able to select events those have overlapping time ex: let's say user have selected event from 1:00PM to 2:00PM then user won't be able to select event from 1:30PM-2:30PM, Made some enhancements from initial requirement.
-   App is just responsive and separate mobile view is not there.

### Approach Taken 

-   Event Context: - This file is exporting EventProvider and EventContext, EventProvider is responsible of providing context to the components wrapped inside this provider. EventContext can be used to access the desired things related to events in desired component.

-   App:- App.tsx is the entry point of the application and rendering the EventList and Selected Event List.

-   EventList:- This component is responsible of handling list of all Events which will call EventCard internally

-   SelectedEventList:- This component is responsible to render the Selected Events.

-   molecules:- This folder contains the molecules which are build using atoms like EventCard[button + card]

-   Atoms:- This folder contains all the common component and modular component used

### Test Coverage

-   All UI components and common components have unit test cases written with all major usecases covered.

### Screenshot of different states

-   Web view of application
    ![Screenshot 2023-02-13 at 2 12 43 PM](https://user-images.githubusercontent.com/19689620/218421219-3e059571-75fb-49da-abc9-86ef5d7f0b7e.png)

-   When Max 3 are slected
    ![Screenshot 2023-02-13 at 2 15 44 PM](https://user-images.githubusercontent.com/19689620/218421376-da80c6f7-a332-4cad-bab3-0102002ba768.png)

-   Empty state
    ![Screenshot 2023-02-13 at 2 32 01 PM](https://user-images.githubusercontent.com/19689620/218421441-0ef54b20-9950-4cbb-8927-47222c77f0d9.png)

-   Mobile View
    ![Screenshot 2023-02-13 at 2 17 35 PM](https://user-images.githubusercontent.com/19689620/218421501-218f2cf4-1261-4d53-b4c6-c702a7322df5.png)
