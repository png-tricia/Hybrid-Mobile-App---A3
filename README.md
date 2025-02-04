## SYST35300 Hybrid Mobile App - Assignment 3
Program: **Computer Programming @ Sheridan College** <br>
Note: The following assignment was completed during Semester 4 (2024) <br>

## The Task: 
Create an Astronomy QnA with an Ionic frontend and a Node.js backend.  

## The Details: 

**JSON File Creation**: 
<ul>
  <li>Create a JSON file to store the list of questions and their corresponding answers. Each entry in this JSON file should have the following properties: 
    <ul>
      <li>id (string or number): A unique identifier for the question.</li>
      <li>question (string): The text of the question (e.g., "What is a black hole?").</li>
      <li>answer (string): The answer text associated with the question.</li>
    </ul>
  </li>
  <li>Note: The same JSON file should be used by both the frontend (Ionic) and the backend (Node.js/Express.js). Ensure that the path to this file is accessible from both environments. </li>
</ul>

**Frontend (Ionic)**: 
<ul>
  <li>Implement a Home Page with two main container elements displayed side-by-side. 
    <ul>
      <li>The left container dynamically displays a list of astronomy-related questions loaded from the JSON file created above.
        <ul>
          <li>Each item in the list shows only the question text (from the question property), while an associated ID (from the id property) for each question is stored as a hidden attribute.</li>
          <li>When a user selects a question, the service sends the question ID to the backend to request the corresponding answer.</li>
        </ul>
      </li>
      <li>The right container should initially display a loading indicator when a question is selected and then show the answer (from the answer property) once it's retrieved from the server.</li>
    </ul>
  </li>
  <li>Develop a service to handle HTTP requests and error handling. 
    <ul>
      <li>The service should send a request to the backend server with the selected question’s ID.</li>
      <li>If the server responds with an error, the service should gracefully handle it and display an error message in the right container. </li>
    </ul>
  </li>
  <li>Style the containers to be responsive and optimize for various screen sizes, using Ionic UI components. </li>
</ul>

**Backend (Node.js/Express.js)**: 
<ul>
  <li>Set up the backend server in a separate project folder, initializing the Node.js project with npm init. </li>
  <li>Configure the server to handle requests from the Ionic frontend. 
    <ul>
      <li>Implement an endpoint that receives a question ID, retrieves the corresponding answer from the same JSON file created above, and sends the answer back. </li>
      <li>Use a local module to handle data retrieval and parsing of the JSON file.</li>
    </ul>
  </li>
  <li>Implement server-side error handling to manage scenarios such as missing question IDs or issues with file access, sending appropriate error responses to the client.</li>
  <li>Ensure that all data handling and responses conform to JSON format and log each request for monitoring. </li>
</ul>

## The Final Product in Action: 
![screencapture-localhost-8100-home-2025-02-03-20_41_30](https://github.com/user-attachments/assets/23f4eef0-153a-4ee9-b790-1ff80c580001)
![screencapture-localhost-8100-home-2025-02-03-20_41_38](https://github.com/user-attachments/assets/81c67ec0-4533-407b-bc3e-de1dfe49a72e)
![screencapture-localhost-8100-home-2025-02-03-20_41_49](https://github.com/user-attachments/assets/96d4bfad-37ed-4bc4-873d-d157839590d6)
![screencapture-localhost-8100-home-2025-02-03-20_41_58](https://github.com/user-attachments/assets/68440e85-210c-4dc7-ad7b-3f746c44f74e)

## Thoughts/Comments: 
With the following assignment, I had difficulty mapping the answer(s) to show on the right box (component 2) when selecting a question.
