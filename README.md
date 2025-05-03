
# ♾️ Infinite Tic Tac Toe

Infinite Tic Tac Toe takes the classic Tic Tac Toe game to the next level by offering an infinite number of rounds, real-time score updates, and dynamic round transitions. With an intuitive user interface and seamless user experience, this game enhances the traditional gameplay with a focus on fun, challenge, and engaging interactions. The project is designed to provide an enjoyable and visually appealing experience for players.

---

## 🚀 How to Set Up and Run Infinite TicTacToe Locally

Follow these steps to download, install dependencies, and run the game on your local machine:

### 1. Install Python First (Important!)

If you don't have Python installed:
- Download Python from the official site: [https://www.python.org/downloads/](https://www.python.org/downloads/)

**Windows Users:**
- Download the "Windows installer (64-bit)".
- During installation, **make sure to tick the box** that says "**Add Python to PATH**" before clicking Install Now.

**Mac Users:**
- MacOS usually comes with Python pre-installed, but it's often outdated.
- It's recommended to install the latest version via [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)
- After installation, you may need to use `python3` and `pip3` instead of `python` and `pip`.

To verify Python installation:
Open the terminal of your computer and write the following command:
```bash
python --version
# or for Mac
python3 --version
```

### 2. Clone the Repository

```bash
git clone https://github.com/ishar06/TicTacToe.git
```
```bash
cd TicTacToe
```

### 3. Create a Virtual Environment (recommended)

```bash
python3 -m venv venv
```
- ### For macOS/Linux

```bash
source venv/bin/activate
```
- ### For Windows

```bash
venv\Scripts\activate     
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

> Note: If `requirements.txt` is empty or missing, the project might not need external dependencies.

### 5. Run the Game

```bash
python app.py
```

---

## 📁 Project Structure

```
Infinite_TicTacToe/
│
├── app.py                # Entry point of the game (Flask app)
├── templates/            # HTML files for the web interface
│   └── index.html        # Main page for the game
├── static/               # Static files for styling and scripts
│   ├── css/
│   │   └── styles.css    # Styling for the game
│   └── js/
│       └── scripts.js    # Game logic and interactivity in JS
├── requirements.txt      # Python dependencies
├── LICENSE               # MIT License
└── README.md             # Project documentation
```

---

## 🛠️ Tech Stack

- **Language:** Python 3.10+
- **Framework:** Flask (for the web server)
- **Frontend:**
  - **HTML:** Markup language for page structure
  - **CSS:** Styling and design for the game
  - **JavaScript:** Game logic and dynamic interactions
- **Other Tools:**
  - `venv` for creating virtual environments
  - Python Standard Library (no heavy external dependencies)

---

## 🎯 Features

- **Infinite Rounds** – Play endlessly and keep track of your score across rounds
- Live Score & Round Updates – Scores and round count update dynamically after each game
- Two-Player Mode – Local multiplayer for quick, fun duels
- Intuitive UI/UX – Clean layout with responsive design and visual feedback
- Clean Codebase – Modular structure with easy-to-follow, well-commented code
- Fast & Lightweight – No frameworks, pure HTML, CSS, and **JavaScript**

---

## 👨‍💻 About the Developer

I am **Ishardeep Singh**, a dedicated and passionate developer pursuing a specialization in **Computer Science and Artificial Intelligence**. I have a strong interest in building innovative, real-time interactive applications that combine **computer vision**, **AI**, and **user-centered design**.

I created this project to demonstrate my skills in web development, object-oriented architecture, and interactive game design using Python and Flask.

I specialize in **Python development**, with experience in frameworks such as **OpenCV**, **MediaPipe**, **Flask**, and **Django**, alongside a growing skillset in **web development technologies** like **HTML**, **CSS**, **JavaScript**, and the **MERN Stack**.  
Through projects like **PopShot**, I aim to solve real-world problems while keeping the user experience intuitive, engaging, and technically robust.

**Skills:**  
- Programming Languages: Python, C, C++, JavaScript  
- Technologies & Frameworks: OpenCV, MediaPipe, Flask, Django, React (beginner)  
- Areas of Interest: Computer Vision, AI/ML, Full-Stack Web Development, Game Development  
- Soft Skills: Public Speaking, Team Leadership, Project Management, Problem Solving


### 📫 Contact & Links

- 📧 Email: [singhishardeep06@gmail.com](mailto:singhishardeep06@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ishardeep-singh-743789311](https://www.linkedin.com/in/ishardeep-singh-743789311)
- 🌍 GitHub: [github.com/ishar06](https://github.com/ishar06)
- 🪪 Resume: [Click here](https://drive.google.com/file/d/1po4uWr4dNxJgwc0See9ZqO10V4kicWgy/view?usp=sharing)


> 🔍 I am actively seeking opportunities to contribute to exciting projects, internships, and roles that align with my passion for technology and innovation. Let's connect!


---

## 📌 Why This Project Stands Out

- ✅ Follows best practices in Python development and web development
- ✅ Demonstrates object-oriented programming principles in Python
- ✅ Uses Flask for backend and JavaScript for frontend interactions
- ✅ Easy to extend with new features (e.g., AI opponent)
- ✅ Great for showcasing problem-solving skills and design thinking

---

## 📝 License

This project is **licensed under the MIT License**.

Feel free to use, modify, and distribute the code. If you do use this in your project or share it publicly, **please give proper credit to the original author.**

> _“Games give us the opportunity to fail, learn, and try again in the most enjoyable way possible.” — Let's build better games and better code!_
