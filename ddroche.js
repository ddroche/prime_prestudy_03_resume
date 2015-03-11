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

function makeUnorderedList(array) {
	// Create list element
	var list = document.createElement('ul');

	for(var i = 0; i < array.length; i++) {
		// Create list item;
		var item = document.createElement('li');

		// Set item
		item.appendChild(document.createTextNode(array[i]));

		// Add to list
		list.appendChild(item);
	}

	// Return list
	return list;
};

// Add skills list
document.getElementById('skills').appendChild(makeUnorderedList(resumeItems.skills));

// Add Leadership list
document.getElementById('leadership').appendChild(makeUnorderedList(resumeItems.leadership));


// Work History
var jobs = [
	{	// jobs[0]
		"business"	: "Boise Inc.",
		"title"		: "Co-op Engineer",
		"dates"	: "January 2011 - January 2012",
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
		"dates"	: "May 2009 - December 2010",
		"duties"	: [
						"Completed the night audit and documentation",
						"Provided a welcoming customer-oriented environment for guests"
					  ]
	},
	{	// jobs[2]
		"business"	: "Shopko",
		"title"		: "Electronics Sales Floor Team Member",
		"dates"	: "September 2009 - September 2010",
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
		"dates"	: "June 2007 - August 2008",
		"duties"	: [
						"Ensured quality parts were ready to be inspected and shipped",
						"Prepared boxes for shipping",
						"Maintained and operated electric- and gas-powered equipment"
					  ]
	}
];

// function to display jobs from JSON object
function displayJobs(array) {
	var display = '<h1>Experience</h1>';
	// iterate over each key

	for(var i = 0; i < array.length; i++) {
			display += '<p class="business">' + array[i].business + '</p>' +
					   	   '<p class="title">' + array[i].title + '</p>' +
					       '<p class="dates">' + array[i].dates + '</p>';
			// iterate over each "duty" in duties array
			for(var n = 0; n < array[i].duties.length; n++){
			display += '<p class="duties">' + array[i].duties[n] + '</p>';
		};
	};
	document.getElementById('work').innerHTML = display;
};

displayJobs(jobs);

//document.getElementById('work').appendChild(displayJobs(jobs));

// function displayJobs(array) {
// 	// iterate over each key
// 	for(var i = 0; i < array.length; i++) {
// 			document.write('<p class="business">' + array[i].business + '</p>' +
// 					   	   '<p class="title">' + array[i].title + '</p>' +
// 					       '<p class="empDates">' + array[i].empDates + '</p>');
// 			// iterate over each "duty" in duties array
// 			for(var n = 0; n < array[i].duties.length; n++){
// 			document.write('<p class="duties">' + array[i].duties[n] + '</p>');
// 		};
// 	};
// };

var involvement = [
	{	// involved[0]
		"title" 	  : "New Member Educator",
		"dates" 	  : "September 2010 - December 2010",
		"duties" : "Conducted New Member Orientation while teaching the best traditions and values of the Delta Sigma Phi National Engineered Leadership Fraternity"
	},
	{   // involved[1]
		"title"		  : "Vice President - Recruitment",
		"dates"	  : "January 2009 - January 2010",
		"duties" : "Designed and oversaw a productive recruitment program"
	},
	{   // involved[2]
		"title"		  : "Assistant Interfraternity Council Recruitment Director",
		"dates"	  : "January 2009 - January 2010",
		"duties" : "Organized campus-wide recruitment efforts for the Greek Life community"
	},
	{   // involved[3]
		"title"		  : "Interfraternity Council Representative",
		"dates"	  : "September 2007 - January 2010",
		"duties" : "Represented the chapter within a council of 22 organizations"
	},
	{   // involved[4]
		"title"		  : "Philanthropy Chair",
		"dates"	  : "September 2008 - December 2009",
		"duties" : "Engaged the chapter members in service work for the betterment of the community"
	}

];

function displayInvolvement(array) {
	var display = '<h1>Involvement</h1>';
	display += '<p class="organization">Delta Sigma Phi - National Engineered Leadership Fraternity</p>';
	// iterate over each key

	for(var i = 0; i < array.length; i++) {
			display += '<p class="title">' + array[i].title + '</p>' +
					   	   '<p class="dates">' + array[i].dates + '</p>' +
					       '<p class="duties">' + array[i].duties + '</p>';
	};
	document.getElementById('involvement').innerHTML = display;
};

displayInvolvement(involvement);