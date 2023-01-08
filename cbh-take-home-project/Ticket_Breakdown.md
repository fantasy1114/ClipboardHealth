# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

*SP = story point

1 - Database patching 
Acceptance criteria: 
- New column added in Agent table 

Time estimate: 0.3 SP 

Implementation detail: 
Backend: Create SQL query to add column in Agent Table labeled 'customID' 


2 - Return custom id when fetching agent details
Acceptance criteria:
- Custom ID of agent is returned when fetching agent details if present. 
- Custom ID is returned null if not present
- Correctly display agent custom ID in the agent details page 

Time estimate: 1 SP

Implementation detail: 
Backend:
    - Add custom ID in fetch agent details API return model 
    - Edit query of fetch agent details to include custom ID
    - Map custom ID to the correct API return model parameter
    - set custom ID to null if not available 
Frontend: 
    - Add custom ID field in agent details page 
    - Map custom ID retrieved from API to the correct field 

3 - Facility able to set custom id for a single agent
Acceptance criteria: 
- Custom ID field is editable/ can be input in edit agent details page 
- Custom ID is correctly stored/edited according to the specified agent 
- Custom ID cannot be duplicated/ is validated

Time estimate: 2 SP  

Implementation detail: 
Backend: 
    - Add custom ID field in edit agent detail API request model 
    - Check for duplication/validation. Return error if found
    - Update database with new custom ID 
Frontend:
    - Add new input field in Edit Agent details page 
    - Output error message if receive duplication/validation error from API accordingly 
    - Pass the input to the API 
    - For edit custom ID flow, check for character limit and type 

4 - Add custom id in report generation
Acceptance criteria: 
- Agent's custom ID appears in report generated correctly 

Time estimate: 0.5 SP

Implementation detail: 
Backend: 
    - Fetch custom ID from database in generateReport function
    - Add customID field in the report
    - Map custom ID to the correct field in the report 


