 # 🚀 SpaceX Mission Explorer (Angular)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.3.


## Overview

This Angular application displays SpaceX launch missions using the SpaceX REST API.
Users can view all missions, filter by launch year, and see detailed information for each mission.

---

## Features

* View all SpaceX launches
* Filter missions by launch year
* View detailed mission information
* Modern UI using Angular Material
* External links (Article, Wikipedia, Video)

---

##  Technologies Used

* Angular 21
* Angular Material
* TypeScript
* RxJS
* SpaceX REST API

---

##  Project Structure

```
src/app/
├── components/
│   ├── missionlist/
│   ├── missionfilter/
│   └── missiondetails/
├── services/
│   └── spacex-api.service.ts
├── models/
│   └── spacex-launch.model.ts
```

---

##  How to Run

1. Install dependencies:

```
npm install
```

2. Run the app:

```
npx ng serve
```

3. Open in browser:

```
http://localhost:4200
```

---

## 🔗 API Used

* SpaceX REST API
  https://api.spacexdata.com/v3/launches

---

##  Functionality

* Mission list is loaded from API
* Filter component searches by launch year
* Clicking "View Details" navigates to mission details page
* Route parameter is used to fetch specific mission

---

##  Author
-Najnin Sultana
Developed as part of COMP3133 Lab Test 2.
