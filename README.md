# Gemini Clone

A modern, responsive web application that replicates the Google Gemini AI interface, built with React and powered by the Google Generative AI API. This project demonstrates advanced React concepts including context management, real-time API integration, and dynamic UI rendering.

## 🚀 Features

- **AI-Powered Conversations**: Seamless integration with Google's Gemini AI model
- **Real-time Response Streaming**: Animated text rendering with typing effect
- **Conversation History**: Persistent chat history with quick access to previous prompts
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface inspired by Google's design language
- **Loading Animations**: Smooth loading states and transitions
- **Context Management**: Efficient state management using React Context API

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.0
- **AI Integration**: Google Generative AI (@google/generative-ai)
- **Styling**: Pure CSS with modern design patterns
- **State Management**: React Context API
- **Development Tools**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google AI API key (from Google AI Studio)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gemini-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Update the API key in `src/config/gemini.js`:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
gemini-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── assets.js          # Asset imports and exports
│   │   └── *.png              # UI icons and images
│   ├── components/
│   │   ├── Main/
│   │   │   ├── Main.jsx       # Main chat interface
│   │   │   └── Main.css       # Main component styles
│   │   └── Sidebar/
│   │       ├── Sidebar.jsx    # Navigation sidebar
│   │       └── Sidebar.css    # Sidebar styles
│   ├── config/
│   │   └── gemini.js          # Google AI configuration
│   ├── context/
│   │   └── Context.jsx        # Global state management
│   ├── App.jsx                # Root component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Starting a Conversation
1. Type your question or prompt in the input field at the bottom
2. Click the send button or press Enter
3. Watch as the AI response streams in with a typing animation

### Managing Chat History
- Previous conversations are automatically saved in the sidebar
- Click on any recent prompt to reload that conversation
- Use "New Chat" to start a fresh conversation

### Navigation
- Toggle the sidebar using the menu icon
- Access help, activity, and settings from the bottom menu
- Responsive design adapts to different screen sizes

## ⚙️ Configuration

### API Configuration
The Google Generative AI is configured in `src/config/gemini.js`:

```javascript
const generationConfig = {
  temperature: 1,        // Creativity level (0-1)
  topP: 0.95,           // Nucleus sampling
  topK: 64,             // Top-k sampling
  maxOutputTokens: 8192, // Maximum response length
  responseMimeType: "text/plain",
};
```

### Customization Options
- **Model Selection**: Change the AI model in `gemini.js`
- **Styling**: Modify CSS files for custom themes
- **Response Formatting**: Adjust text processing in `Context.jsx`
- **Animation Speed**: Modify delay timing in the `delayPara` function

## 🔒 Security Considerations

- **API Key Protection**: Never commit API keys to version control
- **Environment Variables**: Consider using environment variables for sensitive data
- **Rate Limiting**: Implement proper rate limiting for production use
- **Input Validation**: Add input sanitization for enhanced security

## 📱 Responsive Design

The application is fully responsive with:
- **Desktop**: Full sidebar with expanded navigation
- **Tablet**: Collapsible sidebar with icon-only view
- **Mobile**: Hidden sidebar with optimized input controls

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Platforms
This project can be deployed on:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- API rate limiting may cause temporary delays
- Large responses might take time to render completely
- Mobile keyboard may affect input positioning

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Export conversation history
- [ ] Voice input integration
- [ ] Multi-language support
- [ ] Custom AI model selection
- [ ] Conversation search functionality

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) section
2. Create a new issue with detailed description
3. Include steps to reproduce the problem


---

**Note**: This project is for educational purposes and demonstrates integration with Google's Generative AI. Make sure to comply with Google's API usage policies and terms of service.
