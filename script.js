document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const statusElement = document.getElementById('status');
  const resultElement = document.getElementById('result');
  const copyBtn = document.getElementById('copyBtn');
  const clearBtn = document.getElementById('clearBtn');

  let recognition = null;
  let isRecording = false;
  let finalTranscript = '';

  // Check browser support
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    statusElement.textContent = 'Speech recognition is not supported in your browser. Try using Chrome.';
    startBtn.disabled = true;
    return;
  }

  // Initialize speech recognition with simplified settings
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();

  // Basic configuration - simpler is often better
  recognition.continuous = false;  // Set to false to avoid repetition
  recognition.interimResults = false; // Only get final results
  recognition.maxAlternatives = 1;
  recognition.lang = 'en-US';

  // Start recording button
  startBtn.addEventListener('click', () => {
    finalTranscript = '';
    resultElement.innerText = '';
    statusElement.textContent = 'Listening...';

    try {
      recognition.start();
      isRecording = true;
      startBtn.disabled = true;
      stopBtn.disabled = false;
    } catch (error) {
      statusElement.textContent = 'Error starting recognition: ' + error.message;
    }
  });

  // Stop recording button
  stopBtn.addEventListener('click', () => {
    if (isRecording) {
      recognition.stop();
      isRecording = false;
      startBtn.disabled = false;
      stopBtn.disabled = true;
      statusElement.textContent = 'Recording stopped.';
    }
  });

  // Copy button
  copyBtn.addEventListener('click', () => {
    if (resultElement.textContent) {
      navigator.clipboard.writeText(resultElement.textContent)
        .then(() => {
          statusElement.textContent = 'Text copied to clipboard!';
          setTimeout(() => {
            statusElement.textContent = isRecording ? 'Listening...' : 'Ready';
          }, 2000);
        });
    }
  });

  // Clear button
  clearBtn.addEventListener('click', () => {
    finalTranscript = '';
    resultElement.textContent = '';
  });

  // Handle speech recognition results
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    finalTranscript += transcript + ' ';
    resultElement.textContent = finalTranscript.trim();
  };

  // Handle the end of a recognition session
  recognition.onend = () => {
    isRecording = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    statusElement.textContent = 'Ready for next recording.';
  };

  // Handle errors
  recognition.onerror = (event) => {
    console.error('Recognition error:', event.error);
    statusElement.textContent = `Error: ${event.error}`;
    isRecording = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };
});
