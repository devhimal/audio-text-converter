# SpeechScript

A lightweight JavaScript speech-to-text converter that transforms voice to text in real-time. Built with the Web Speech API, this beginner-friendly project demonstrates browser-based voice recognition with a clean interface. Perfect for learning modern web APIs while creating a practical accessibility tool.

## 📋 Overview

SpeechScript allows users to capture audio from their microphone and convert speech to text using browser-native APIs. The application features a simple, intuitive interface for recording, viewing transcribed text, and copying results for use in other applications.

### Key Features

- Real-time speech-to-text conversion
- Start/stop recording controls
- Copy and clear text functionality
- Status indicators for user feedback
- Cross-browser compatibility (best in Chrome)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Google Chrome recommended for best results)
- A working microphone
- Web server (local or hosted) for testing

### Installation

1. Clone the repository:
   ```
   git clone git@github.com:devhimal/audio-text-converter.git
   ```

2. Navigate to the project directory:
   ```
   cd audio-text-converter
   ```

3. No additional dependencies required - this project uses only vanilla JavaScript!

### Running the Application

Simply open the `index.html` file in your web browser, or serve the files using a local web server:

- Using live server:
  ```
  Click on the live server or just open the index.html file in the browswer like chrome, firefox, or any browser that support latest features.
  ```
  Then visit `http://localhost:3000` in your browser.

## 💻 Usage

1. Click the "Start Recording" button
2. Allow microphone permissions when prompted
3. Speak clearly into your microphone
4. The transcribed text will appear in the result box
5. Click "Stop Recording" when finished
6. Use "Copy Text" to copy the transcription to clipboard
7. Use "Clear Text" to erase the current transcription

## 🧰 Project Structure

```
speechscript/
├── index.html          # Main HTML structure
├── style.css          # CSS styling
├── scripts.js           # JavaScript functionality
└── README.md           # This file
```

## ⚠️ Important Notes

- Speech recognition works best in Google Chrome
- A stable internet connection may improve recognition quality
- The Web Speech API is still considered experimental in some browsers
- Performance may vary based on microphone quality and ambient noise

## 🔧 Troubleshooting

- **No transcription appears**: Ensure microphone permissions are granted
- **Poor recognition quality**: Try speaking more clearly or in a quieter environment
- **Browser compatibility issues**: Switch to Google Chrome for best results
- **Errors in console**: Check for specific error messages related to the Speech Recognition API

## 📚 Learning Resources

- [MDN Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [W3C Speech API Specification](https://w3c.github.io/speech-api/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
