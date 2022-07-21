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

Overview:
Each facility has multiple shifts.
Agents can work in multiple shifts. 

- Ticket#1

1. Criteria
    We need to add a new table name `CustomAgents`
    create columns named customID and ID where ID will be same as that Agents Table and default value of customID will be null
2. Estimates
    DEV Efforts: 2 hrs
    Code Review: 1 hr
    QA: Not required

3. Implementation
    Write Create table query with mentioned column names, add appropriate column types
    make ID and customID as a combination of primary key
    Add unique constraint in the column of customID
    Add foreign key based on id 
    Add column type of no   
    

Ticket#2
1. Criteria
   Create new function `assignCustomAgentId` function 
    Develop UI and call the above function at submit
    UI contains table of all agents fetched with column containing text field to enter Custom ID

    
2. Estimates
    DEV Efforts: 8 hrs
    Code Review: 1 hr
    QA: 3 hrs

3. Implementation
    Write validation checks to make sure ID provided meet the criteria defined in the column type name
    Checks to make sure that the ID being provided to the function exists in DB 
    `assignCustomAgentId` takes an array of key value pairs where each element's key points to internal DB key and value points to a newly assigned key
    `assignCustomAgentId` updates the newly created table in task1 to update ids
    Handle null checks and prompt user to re-enter key in case of empty strings or key containing invalid characcters



Ticket#3
1. Criteria
   Update `getShiftsByFacility` function 
    
2. Estimates
    DEV Efforts: 2 hrs
    Code Review: 1 hr
    QA: Not required

3. Implementation
    Update the join condition on tables 
    Add `CustomAgents` in join such that if the id in newly added table is null then return the internal ID else return the id of `CustomAgents`


Ticket#4
1. Criteria
   Create `getCustomIDs` function to fetch all the agent ids set by the facility 
   Update '`generateReport` function to add additional join with newly created table `CustomAgents` and poulate info using those ids

    
2. Estimates
    DEV Efforts: 14 hrs
    Code Review: 2 hr
    QA: 3 hrs

3. Implementation
    Frontend:
    Load all the existing non-null ids from `CustomAgents` table
    Design component to let the facility select the id in form of dropdown to generate report
    Backend:
    Update the join condition on tables based on the selected id to fetch appropriate data from all tables
   
