# AmIFit
Application tracks the health of an individual with various metrics being captured by different sources
Angular 14

Asp.net core 6x

REST API

Web Sockets

Data Formats: JSON/Protobuf

Testing
	Jasmine/Karma

	Unit/system

File System Storage on docker volumes


	
Groups

	Saturn : HealthyMe
		Amit
		Bebhav
		Madhav
		Mayank
			
	Venus : AmIFit
		Harsh
		Swati
		Akshay
		Madan

	Mars : ArogyaX
		Akanksha
		Asra
		Akash
		Anusha

	Earth : MakeMeFit
		Anju
		Madhulika
		Anisha
		Vaibhav

	Kepler : TrackMe
		Abhishek
		Manikanta
		Devendra
		Ramakant
	

Elements of the case study
	Concept/Problem

		User authentication/authorization
		Stock Market related
		Dashboards 	
		Body Temperature tracker
		Sensors
		

	Build an app that tracks the health of an individual with various metrics being captured 
	by different sources
		Provide a dashboard with various charts/graphs that display the metrics being collected
		Include user auth for helping switch from one user to another
		Simulate sensors for certain metrics to be collected	

	Tech Stack / Features
			NoSQL
			Angular 14
			Jasmine/Karma/Playwright
			Asp.net Core 6x
			Docker
			REST API/WebSockets
			Web Storage
			Responsive design

http://docs.learnandshine.in/health_tracker/case_study.txt

Each team has a github repo to share artifacts w/ different team members

Minimum 2 screens: login + dashboard
	Additional screens upto the respective teams

Minimum 3 widgets on the dashboard
	Additional widgets upto the teams

Overall flow of development activity:
	
	Static HTML5 based screens	

	Transition to Angular 14 components

	Invoke/Load ready APIs/URLs/static files for data
			(Define json data formats)

	Design and Develop asp.net core 6 rest api 
		Integrate backend w/ nosql implementation
		Implement websocket for 1 widget data

	Integrate Angular UI w/ Backend (via rest/ws)

	Introduce unit test cases on frontend and backend (jasmine/karma/nunit)

	Introduce system test cases for integrated testing (playwright)

	Package everything to run on a docker container


Samples:
	http://docs.learnandshine.in/health_tracker/samples/weather/

Common Widgets
	Body Temperature Monitor
		Display body temperature readings on a configurable interval
			Dataset to be pulled from a api endpoint that generates 
  				the data stream continuously for the next n readings
			
		json format:
				{ 
					"readings": 
						[
							{ 
								"ts": "2023-03-04 12:30:00 PM",
								"tempinf" : "98.6",
								"tempinc" : "37"
							},
							{ 
								"ts": "2023-03-04 12:31:00 PM",
								"tempinf" : "98.7",
								"tempinc" : "37.11"
							},

							...
						]
				}


Part 1 Exercise:

Create 2 static html files that represent the login page and the dashboard page

The login page can have a button that on click opens the dashboard page

The dashboard page can have the simple layout for the widgets that you have identified
