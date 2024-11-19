from flask import Flask, request, jsonify

app = Flask(__name__)

# Beispiel: Benutzer-Datenbank
users = {
    "testuser@i": "testpass",  # Benutzername: Passwort
    "admin": "adminpass"
}

@app.route('/login', methods=['POST'])
def login():
    if request.is_json:
        data = request.get_json()
    else:
        data = {
            "username": request.form.get("username"),
            "password": request.form.get("password")
        }

    username = data.get("username")
    password = data.get("password")

    # Überprüfung der Login-Daten
    if username in users and users[username] == password:
        return jsonify({"message": "Login erfolgreich"}), 200
    else:
        return jsonify({"message": "Ungültiger Benutzername oder Passwort"}), 401

if __name__ == '__main__':
    app.run(debug=True)