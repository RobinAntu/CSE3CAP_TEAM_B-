const { onCall } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const admin = require("firebase-admin");

admin.initializeApp();

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.getAISuggestions = onCall(async (request) => {
  const { prompt } = request.data;

  if (!prompt) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with one argument 'prompt' containing the prompt for the AI."
    );
  }

  try {
    const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return { suggestions: text };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError(
      "internal",
      "An error occurred while fetching AI suggestions."
    );
  }
});
