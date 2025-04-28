const Message = require('../models/Message');

exports.sendMessage = async (req, res, next) => {
  try {
    const { sender, content } = req.body;

    const userMessage = await Message.create({ sender, content });

    // Simulate AI response
    const aiResponses = ["Hello!", "How can I help you?", "Interesting!", "Tell me more!"];
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

    const aiMessage = await Message.create({ sender: 'AI', content: randomResponse });

    res.status(201).json({ userMessage, aiMessage });
  } catch (error) {
    next(error);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
