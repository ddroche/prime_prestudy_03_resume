'use strict'

var resumeItems = {
			  
		skills: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "Git", "Github", 
			    "MongoDB", "MySQL", "Web Development", "Java", "C++", "Ubuntu", "Windows",
			    "Matlab", "Mechanical Engineering", "Unigraphics", "Solidworks", 
			    "Engineering", "Manufacturing", "CAD", "EES", "Microsoft Office", 
			    "Technical Writing", "Process Improvement", "Troubleshooting", 
			    "Data Analysis", "Engineering Drawings"
			    ],

		leadership: ["LeaderShape - January 2010", "IMPACT - April 2009", "The Summit - January 2009"]

};

function makeSkillsList(array) {
	// Create list element
	var list = document.createElement('ul');
	list.className += "box";

	for(var i = 0; i < array.length; i++) {
		// Create list item;
		var item = document.createElement('li');
		item.className += "skill";

		// Set item
		item.appendChild(document.createTextNode(array[i]));

		// Add to list
		list.appendChild(item);
	}

	// Return list
	return list;
};

function makeLeadershipList(array) {
	// Create list element
	var list = document.createElement('ul');

	for(var i = 0; i < array.length; i++) {
		// Create list item;
		var item = document.createElement('li');
		item.className += "leader";

		// Set item
		item.appendChild(document.createTextNode(array[i]));

		// Add to list
		list.appendChild(item);
	}

	// Return list
	return list;
};


// Add skills list
document.getElementById('skills').appendChild(makeSkillsList(resumeItems.skills));

// Add Leadership list
document.getElementById('leadership').appendChild(makeLeadershipList(resumeItems.leadership));


// Work History
var jobs = [
	{	// jobs[0]
		"business"	: "Boise Inc.",
		"title"		: "Co-op Engineer",
		"dates"		: "January 2011 - January 2012",
		"duties"	: [
						"Utilized CAD modeling / simulation and mathematical modeling software",
						"Assisted with ISO 9001 re-certification",
						"Designed water abatement system for rail cars",
						"Performed testing and analysis on converting process to understand production of paper dust by-product",
						"Standardized method for writing and maintaining department Standard Operating Procedures",
						"Researched and trialed new dock shelter to replace inefficient equipment",
						"Active member of Dept. Safety, Dept. Quality, and Cost Reduction teams"
					  ]
	},
	{	// jobs[1]
		"business"	: "Best Western Copper Crown",
		"title"		: "Front Desk Clerk",
		"dates"		: "May 2009 - December 2010",
		"duties"	: [
						"Completed the night audit and documentation",
						"Provided a welcoming customer-oriented environment for guests"
					  ]
	},
	{	// jobs[2]
		"business"	: "Shopko",
		"title"		: "Electronics Sales Floor Team Member",
		"dates"		: "September 2009 - September 2010",
		"duties"	: [
						"Inform customers of electronics products",
						"Sell product warranties to customers",
						"Keep area clean and well maintained",
						"Prepare sales floor for customers daily"
					  ]
	},
	{	// jobs[3]
		"business"	: "Intermet Hibbing Foundry",
		"title"		: "Summer General Labor",
		"dates"		: "June 2007 - August 2008",
		"duties"	: [
						"Ensured quality parts were ready to be inspected and shipped",
						"Prepared boxes for shipping",
						"Maintained and operated electric- and gas-powered equipment"
					  ]
	}
];

// function to display jobs from JSON object
function displayJobs(array) {
	var display = '';
	var boxClass = ["Business", "Title", "Dates", "Duties"];
	// iterate over each key

	for(var i = 0; i < array.length; i++) {
			display += 	   '<article class="box-item no-stitch box' + boxClass[i] + ' "><article class="box exp-box">' + 
						   '<h2 class="business">' + array[i].business + '</h2>' +
					   	   '<h3 class="title">' + array[i].title + '</h3>' +
					       '<p class="dates">' + array[i].dates + '</p>' + '<hr width="80%">';
					     
			// iterate over each "duty" in duties array
			for(var n = 0; n < array[i].duties.length; n++){
			display += 	   '<p class="job-duties">'   + array[i].duties[n] + '</p>';
			};
			display +=	   '</article></article>'
	};
	document.getElementById('exp').innerHTML = display;
};

displayJobs(jobs);

var involvement = [
	{	// involved[0]
		"title" 	  : "New Member Educator",
		"dates" 	  : "September 2010 - December 2010",
		"duties"	  : "Conducted New Member Orientation while teaching the best traditions and values of the Delta Sigma Phi National Engineered Leadership Fraternity"
	},
	{   // involved[1]
		"title"		  : "Vice President - Recruitmednt",
		"dates"		   : "January 2009 - January 2010",
		"duties"	  : "Designed and oversaw a productive recruitment program"
	},
	{   // involved[2]
		"title"		  : "Assistant Interfraternity Council Recruitment Director",
		"dates"		   : "January 2009 - January 2010",
		"duties"	  : "Organized campus-wide recruitment efforts for the Greek Life community"
	},
	{   // involved[3]
		"title"		  : "Interfraternity Council Representative",
		"dates"	 	  : "September 2007 - January 2010",
		"duties"	  : "Represented the chapter within a council of 22 organizations"
	},
	{   // involved[4]
		"title"		  : "Philanthropy Chair",
		"dates"	 	  : "September 2008 - December 2009",
		"duties"	  : "Engaged the chapter members in service work for the betterment of the community"
	}

];

function displayInvolvement(array) {
	var displayOne = '<section class="box-item box">' + 
			 	     '<h2 class="business">Delta Sigma Phi</h2>' + 
			 	     '<h4>National Engineered Leadership Fraternity</h4>';
	
	document.getElementById('invSidebar').innerHTML = displayOne;

	var displayTwo = '';

	// iterate over each key

	for(var i = 0; i < array.length; i++) {
			displayTwo +=  '<article class="box exp-box no-stitch">' +
				  		   '<h3 class="title">' + array[i].title + '</h3>' +
					   	   '<p class="dates">' + array[i].dates + '</p>' + '<hr width="80%">' +
					       '<p class="duties">' + array[i].duties + '</p>';
			displayTwo +=  '</article>'
	};
	displayTwo += 	   	   '</section>';
	document.getElementById('inv').innerHTML = displayTwo;
};

displayInvolvement(involvement);