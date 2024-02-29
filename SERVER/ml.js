const natural = require("natural");
const tokenizer = new natural.WordTokenizer();

function analyzeSentiment(comment) {
  /*
    Analyze the sentiment of a given comment.

    Parameters:
    - comment (str): The text comment to analyze.

    Returns:
    - sentiment (str): The sentiment of the comment (positive, negative, or neutral).
    */
  // Tokenize the comment into words
  const tokens = tokenizer.tokenize(comment);

  // Perform sentiment analysis using natural library
  const analyzer = new natural.SentimentAnalyzer(
    "English",
    natural.PorterStemmer,
    "afinn"
  );
  const sentimentScore = analyzer.getSentiment(tokens);

  // Classify sentiment based on sentiment score
  if (sentimentScore > 0) {
    return "positive";
  } else if (sentimentScore < 0) {
    return "negative";
  } else {
    return "neutral";
  }
}

// Example comments
const comments = [
  "The service was excellent! Highly recommended.",
  "I had a terrible experience. The service was slow and the staff was rude.",
  "It was okay, nothing special.",
  "The quality of work was outstanding.",
];

// Analyze sentiment for each comment
comments.forEach((comment) => {
  const sentiment = analyzeSentiment(comment);
  console.log(`Comment: ${comment}\nSentiment: ${sentiment}\n`);
});

module.exports = { analyzeSentiment };
