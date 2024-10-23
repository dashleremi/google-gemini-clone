import {
    GoogleGenerativeAI,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyAjK0dXELQBsVzJaTzTwUdWEqDBSY_9PmU";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    try {
      // Start the chat session with the model
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      // Send a message to the AI model
      const result = await chatSession.sendMessage(prompt);
      const response = result.response;
      
      // Log the AI's response to the console
      console.log(result.response.text());
      return response.text();
    } catch (error) {
      // Log any errors encountered during the process
      console.error("An error occurred:", error);
    }
  }

export default run;
